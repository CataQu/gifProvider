import React from 'react';
const Gifs = ({gif, randomReady, randomGif}) => {
  let contenido;
  
  if (gif == "") {
    contenido = <p>Cargando...</p>;
  } 
  // else if (randomReady){
  //   contenido = <div className="col-lg-3 col-md-6 mb-4">
  //   <div className="card h-100">
  //     <img
  //       className="card-img-top"
  //       src={randomGif.images.original.url}
  //     />
  //     <div className="card-body">
  //       <h4 className="card-title">{randomGif.title}</h4>
  //     </div>
  //   </div>
  // </div>
  // } 
  else {
    contenido = gif.map((oneGif, i) => {
      return (
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
      ));
    });
  }
  return (
    <>
      {contenido}
    </>
  );
}
export default Gifs;