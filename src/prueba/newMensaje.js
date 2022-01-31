import React from "react";

export default function NewMensaje({ cuerpo, mensaje }) {
  //console.log(props)
  return (
    <div>
      <h1>{cuerpo}</h1>
      <div>{mensaje}</div>
    </div>
  );
}
