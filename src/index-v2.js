import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const contenido = (
//   <div>
//     <h1>Título</h1>
//     <div>Hola desde react</div>
//   </div>
// );

// using destructuring:
function Componente({ title, content }) {
  return (
    <div className="contenedor">
      <h1>{title}</h1>
      <div>{content}</div> {/* este div es un children  */}
    </div>
  );
}

root.render(
  <Componente title="Gone with the wind." content="Hi from react " />
);
