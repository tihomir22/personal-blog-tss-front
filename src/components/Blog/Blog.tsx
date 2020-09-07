import React, { useEffect, useState } from "react";
import "./Blog.scss";
import ClipLoader from "react-spinners/ClipLoader";
import Axios from "axios";
import { cloneDeep } from "lodash";
import { ConstantesNetwork } from "../../networking/Constants";
import { Link } from "react-router-dom";
import InfoAutor from "../subcomponents/InfoAutor";

export interface PostsModel {
  _id?: any;
  autorId: number;
  autorObj?: AutorModel;
  slug: string;
  categorias: Array<string>;
  comentarios: Array<PostCommentsModel>;
  bloques: any;
  descripcion: string;
  fechaCreacion: string;
  keywords: Array<string>;
  name: string;
  wallpaperImage: string;
}

export interface AutorModel {
  id: number;
  image: string;
  nombre: string;
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
    Axios.get(`${ConstantesNetwork.BLOG_HOST + ":" + ConstantesNetwork.BLOG_HOST_PORT}/posts`, { timeout: 10000 })
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
          <Link to={"blog/" + entry.slug} key={index}>
            <div className="shadow rounded post card">
              <div key={index} className="contenidoVistaPreviaPost p-0">
                <img src={entry.wallpaperImage} alt="" className="img-fluid amplitud" />
                <div className="infoPosts">
                  <h4 className="cambiarColorTexto tituloPost">{entry.name}</h4>
                  <div className="m-2 text-white">{limitarTextosLargos(entry.descripcion, 150)}</div>
                </div>
              </div>
            </div>
          </Link>
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
