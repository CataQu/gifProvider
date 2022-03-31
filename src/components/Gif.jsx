import React from 'react';
const Gifs = ({gif, randomReady, randomGif}) => {
  let contenido;
//   let numeroRandom =  Math.trunc(Math.random()*50)+1 ;
//   console.log("NUMERO RANDOM!!!", numeroRandom)
//   let nRrestado = (numeroRandom) => {if (numeroRandom >= 42){
//    return nRrestado = numeroRandom - 8
//   } else {
//    return nRrestado = numeroRandom + 8
//   }
// }
// console.log("NUMERO Restado!!!", nRrestado(numeroRandom))
// let segundoIndice = nRrestado(numeroRandom)
// console.log("Segundo indice", segundoIndice)

  if (gif == "") {
    contenido = <p>Cargando...</p>;
  } 
  else {
    contenido = gif.map((oneGif, i) => {
      
      return (
        // i<nRrestado(numeroRandom) && i>=numeroRandom && (
          i<8 && (
        <div key={i} className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={oneGif.images.downsized.url}
            />
            <div className="card-body">
              <h4 className="card-title">{oneGif.title}</h4>
            </div>
          </div>
        </div>
      )
       );
    });
  }
  return (
    <>
      {contenido}
    </>
  );
}
export default Gifs;