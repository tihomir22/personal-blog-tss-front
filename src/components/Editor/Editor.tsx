import React, { useEffect, useState } from "react";
import Axios from "axios";
import { divide, cloneDeep } from "lodash";
import "./Editor.scss";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tools";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { PostsModel } from "../Blog/Blog";
import ConstantesNetwork from "../../networking/Constants";

function Editor() {
  let [state, setState] = useState({
    contrasenyaIntroducida: "",
    editor: null,
    tenemosAcceso: true,
    mostrandoSnackbar: false,
    severidadSnackbar: undefined,
    mensajeSnackbar: "",
    submitData: {
      autorId: 1,
      categorias: [],
      slug: "",
      comentarios: [],
      descripcion: "",
      fechaCreacion: "",
      keywords: [],
      name: "",
      wallpaperImage: "",
      fileName: "",
    },
  });

  useEffect(() => {
    setState(Object.assign(state, { editor: new EditorJS({ autofocus: true, holder: "editorJs", tools: EDITOR_JS_TOOLS }) }));
  }, []);

  function enviarContrasena() {
    Axios.post(`${ConstantesNetwork.BLOG_HOST + ":" + ConstantesNetwork.BLOG_HOST_PORT}/accessEditor`, {
      id: "editor",
      contrasenya: state.contrasenyaIntroducida,
    }).then((data) => {
      if (data.data.status == "success") {
        setState(cloneDeep(Object.assign(state, { tenemosAcceso: true })));
      }
    });
  }

  function asignarContrasenya(evento: any) {
    setState(cloneDeep(Object.assign(state, { contrasenyaIntroducida: evento.target.value })));
  }

  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  function subidaFichero(event: any) {
    let file = event.target.files[0];
    toBase64(file).then((data) => {
      Object.assign(state.submitData, { wallpaperImage: data, fileName: file.name });
      setState(cloneDeep(state));
    });
  }

  function setFormValueByKey(event: any, key: string, beforeSet?: Function) {
    let value = event.target.value;
    if (beforeSet) {
      value = beforeSet(value);
    }
    Object.assign(state.submitData, { [key]: value });
    setState(cloneDeep(state));
  }

  function slugulize(text: string) {
    return text.replaceAll(" ", "-").toLowerCase();
  }

  function guardar() {
    if (validateForm()) {
      (state.editor as any).save().then((data: any) => {
        let obj: PostsModel = {
          autorId: state.submitData.autorId,
          categorias: state.submitData.categorias,
          comentarios: state.submitData.comentarios,
          bloques: data,
          slug: state.submitData.slug,
          descripcion: state.submitData.descripcion,
          fechaCreacion: new Date().toString(),
          keywords: state.submitData.keywords,
          name: state.submitData.name,
          wallpaperImage: state.submitData.wallpaperImage,
        };
        Axios.post(`${ConstantesNetwork.BLOG_HOST + ":" + ConstantesNetwork.BLOG_HOST_PORT}/posts`, obj)
          .then((data) => {
            setState(
              cloneDeep(
                Object.assign(state, {
                  mostrandoSnackbar: true,
                  severidadSnackbar: "success",
                  mensajeSnackbar: "Se ha guardado con exito",
                })
              )
            );
          })
          .catch((err) => {
            setState(
              cloneDeep(
                Object.assign(state, {
                  mostrandoSnackbar: true,
                  severidadSnackbar: "error",
                  mensajeSnackbar: "Error! " + err,
                })
              )
            );
          });
      });
    }
  }

  function validateForm() {
    if (state.submitData.descripcion && state.submitData.name && state.submitData.wallpaperImage && state.submitData.slug) {
      return true;
    } else {
      setState(
        cloneDeep(
          Object.assign(state, {
            mostrandoSnackbar: true,
            severidadSnackbar: "error",
            mensajeSnackbar: "El formulario es incorrecto, reviselo",
          })
        )
      );
      return false;
    }
  }

  function alCerrarSnackbar() {
    setState(cloneDeep(Object.assign(state, { mostrandoSnackbar: false })));
  }

  return (
    <div>
      <Snackbar open={state.mostrandoSnackbar} autoHideDuration={6000} onClose={alCerrarSnackbar}>
        <MuiAlert severity={state.severidadSnackbar}>{state.mensajeSnackbar}</MuiAlert>
      </Snackbar>
      {state.tenemosAcceso ? (
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre del post"
                      value={state.submitData.name}
                      onChange={(event) => setFormValueByKey(event, "name")}
                    />
                  </div>
                  <div className="col">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="customFile" accept="image/*" onChange={subidaFichero} />
                      <label className="custom-file-label" htmlFor="customFile">
                        {state.submitData.fileName != "" ? state.submitData.fileName : "Choose file"}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Slug-identificativo-del-post"
                    value={state.submitData.slug}
                    onChange={(event) => setFormValueByKey(event, "slug", slugulize)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="descripcion">Descripción del post</label>
                    <textarea
                      className="form-control"
                      name="descripcion"
                      id="descripcion"
                      rows={3}
                      value={state.submitData.descripcion}
                      onChange={(event) => setFormValueByKey(event, "descripcion")}
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  guardar();
                }}
              >
                Enviar
              </button>
            </div>
            <div className="col">
              <p>Contenido</p>
              <div id="editorJs" className="shadow-sm"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="password"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Contraseña"
                  aria-describedby="helpId"
                  onChange={asignarContrasenya}
                />
                <small id="helpId" className="text-muted">
                  Introduzca contraseña para acceder al editor
                </small>
              </div>
              <button type="button" name="" id="" className="btn btn-primary" onClick={enviarContrasena}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Editor;
