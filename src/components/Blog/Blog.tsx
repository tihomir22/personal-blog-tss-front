import React, { useEffect, useState } from "react";
import "./Blog.scss";
import ClipLoader from "react-spinners/ClipLoader";
import Axios from "axios";
import { cloneDeep } from "lodash";

export interface PostsModel {
  autorId: number;
  categorias: Array<string>;
  comentarios: Array<PostCommentsModel>;
  bloques: any;
  descripcion: string;
  fechaCreacion: Date;
  keywords: Array<string>;
  name: string;
  wallpaperImage: string;
}
export interface PostCommentsModel {
  id: number;
  contenido: string;
}
function Blog() {
  let [newState, setState] = useState({
    posts: [] as Array<PostsModel>,
    postsCargados: false,
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/posts", { timeout: 10000 })
      .then((data) => {
        setState(cloneDeep(Object.assign(newState, { posts: data.data.data, postsCargados: true })));
      })
      .catch((error) => {
        setState(cloneDeep(Object.assign(newState, { posts: [], postsCargados: true })));
      });
  }, []);

  function limitarTextosLargos(texto: string, limite: number) {
    if (texto.length > limite) {
      return texto.substr(0, limite) + "...";
    }
    return texto;
  }

  function devolversPostsDespuesDeCarga() {
    return newState.posts && newState.posts.length > 0 ? (
      newState.posts.map((entry, index) => {
        return (
          <div className="shadow rounded post card">
            <div key={index} className="contenidoVistaPreviaPost p-0">
              <img src={entry.wallpaperImage} alt="" className="img-fluid amplitud" />
              <div className="infoPosts">
                <h4 className="cambiarColorTexto tituloPost">{entry.name}</h4>
                <div className="d-flex">
                  <div className="d-flex informacionAutor">
                    <div>
                      <img src={entry.wallpaperImage} alt="" className="avatar " />
                    </div>

                    <div className="textosAutor enfocarColorBlanco px-3">
                      <span>
                        <strong>Tihomir Stoychev Stoychev</strong>
                      </span>
                      <p className="enfocarColorBlanco">
                        <i className="fa fa-calendar" aria-hidden="true"></i> 29/08/2020
                      </p>
                    </div>
                  </div>

                  <div className="vl enfocarColorBlanco"></div>
                  <div className="m-2 enfocarColorBlanco">{limitarTextosLargos(entry.descripcion, 100)}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No hay posts todavia</div>
    );
  }

  function devolverSpinnerCarga() {
    return <ClipLoader size={150} color={"#123abc"} loading={!newState.postsCargados} />;
  }

  return (
    <div className="container-fluid p-4">
      <div className="contenedorPosts">
        {newState.postsCargados ? <div className="card-columns">{devolversPostsDespuesDeCarga()}</div> : devolverSpinnerCarga()}
      </div>
    </div>
  );
}

export default Blog;
