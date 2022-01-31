import React from "react";

export default function Saludo(props) {
  //const titulo = props.titulo;
  //const bienvenida = props.bienvenida;
  const { titulo, bienvenida } = props;
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{bienvenida}</div>
    </div>
  );
}
