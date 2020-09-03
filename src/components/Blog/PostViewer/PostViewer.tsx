import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Axios from "axios";
import ConstantesNetwork from "../../../networking/Constants";
import { cloneDeep } from "lodash";
import { EDITOR_JS_TOOLS } from "../../Editor/tools";
import "./PostViewer.scss";
import { CircularProgress } from "@material-ui/core";
import { PostsModel } from "../Blog";
import InfoAutor from "../../subcomponents/InfoAutor";

function PostViewer({ match }: any) {
  let [state, setState] = useState({ contenidoEditorJs: {} as any, post: {} as PostsModel, editorInstance: null, postCargado: false });
  useEffect(() => {
    obtenerPost();
  }, []);

  function obtenerPost() {
    Axios.get(ConstantesNetwork.recoverFullBaseURL() + "/postsSlug/" + match.params.slug).then((data) => {
      let respuestaServidor = data.data.data;
      if (respuestaServidor && respuestaServidor.bloques.blocks && respuestaServidor.bloques.blocks.length > 0) {
        setState(
          cloneDeep(Object.assign(state, { post: respuestaServidor, contenidoEditorJs: respuestaServidor.bloques, postCargado: true }))
        );
      } else {
        setState(
          cloneDeep(
            Object.assign(state, {
              contenidoEditorJs: {
                time: new Date(),
                version: "2.18.0",
                blocks: [{ type: "paragraph", data: { text: "No data found for this post" } }],
              },
              postCargado: true,
            })
          )
        );
      }
      setTimeout(() => {
        setState(
          cloneDeep(
            Object.assign(state, {
              editorInstance: new EditorJS({
                holder: "editorJs",
                tools: EDITOR_JS_TOOLS,
                data: state.contenidoEditorJs,
                hideToolbar: true,
                onReady: () => {
                  setTimeout(() => {
                    let elements = document.querySelectorAll("[contenteditable]");
                    elements.forEach((element: any) => {
                      element.setAttribute("contenteditable", false);
                    });
                    (document.getElementsByClassName("ce-toolbar") as any)[0].style.display = "none";
                    (document.querySelector(".codex-editor__redactor") as any).style = "";

                    for (const elementoHTML of document.querySelectorAll(".ce-rawtool__textarea") as any) {
                      elementoHTML.parentElement.innerHTML = elementoHTML.textContent;
                    }
                  }, 100);
                },
              }),
            })
          )
        );
      }, 0);
    });
  }

  return (
    <div>
      {state.postCargado ? (
        <div className="contenedorBlog">
          <h2>{state.post.name}</h2>
          <div id="editorJs"></div>
          <hr/>
          <InfoAutor
            autorName={state.post.autorObj ? state.post.autorObj.nombre : "Desconocido"}
            autorImage={
              state.post.autorObj
                ? state.post.autorObj.image
                : "https://secure.gravatar.com/avatar/2878f1fb6a3a965ea3a6e58be26ed106?s=65&d=mm&r=g"
            }
            postDate={state.post.fechaCreacion}
            enfocable={false}
          />
        </div>
      ) : (
        <div className="spinnerCentrado">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default PostViewer;
