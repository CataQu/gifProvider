import React from 'react';
const Gifs = ({gif, arrayDe8}) => {
  let contenido;

  if (gif == "") {
    contenido = <p>Cargando...</p>;
  } else if (arrayDe8 !== "") {
    contenido = arrayDe8.map((oneGif, i) => {
      return (
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
    })
  }
  else {
    contenido = gif.map((oneGif, i) => {
      console.log("array de 8 en GIF", arrayDe8)
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