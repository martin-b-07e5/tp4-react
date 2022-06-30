import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const contenido = (
  <div>
    <h1>Título</h1>
    <div>Hola desde react</div>
  </div>
);

// un componente
function Componente (props) {
  console.log(props);

  // ------------------------------
  const titlex = props.title;
  const contentx = props.content;
  
  // 👇sgte linea es destructuring (se puede hacer esto en los parámetros tb)
  // 01-Aprende_React.js_desde_CERO___Creando_web_de_películas.mp4  23'20"
  const { title, content } = props;
  // ------------------------------

  return (
    <div>
      <h1>{"using props: " + props.title}</h1>
      <h1>{"using props: " + props.content}</h1>

      <div>{"using const: " + titlex}</div>
      <div>{"using const: " + contentx}</div>
      
      <h1>{"using destructuring: " + title}</h1>
      <div>{"using destructuring: "+content}</div>
    </div>
  );

}


root.render( <Componente title ="Gone with the wind." content = "Hi from react by a component and a props" />);
