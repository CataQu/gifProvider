

const RandomGif = ({randomTrendingGif, randomGif}) => {
    return (
        <>
              {/* RANDOM GIF - Si el state randomReady es true, renders el randomGif */}
          <div className="col-lg-3 col-md-6 mb-4" style={{margin: "auto"}}>
          <div className="card h-100" style={{border: "red 3px solid"}}> 
          { /*Un borde rojo para diferenciarlo */}
            <img className="card-img-top"
              src={randomTrendingGif.url}/>
             { console.log("RANDOM TRENDNIG!!!!", randomTrendingGif)}
            <div className="card-body">
              <h4 className="card-title">
                {randomTrendingGif.title}</h4>
            </div>
          </div>
        </div>
          {/* RANDOM GIF - Si el state randomReady es true, renders el randomGif */}
          <div className="col-lg-3 col-md-6 mb-4" style={{margin: "auto"}}>
          <div className="card h-100" style={{border: "red 3px solid"}}> 
          { /*Un borde rojo para diferenciarlo */}
            <img className="card-img-top"
              src={randomGif.url}/>
             { console.log("RANDOM GIF!!!!", randomGif)}
            <div className="card-body">
              <h4 className="card-title">
                {randomGif.title}</h4>
            </div>
          </div>
        </div>
        </>
    );
};

RandomGif.propTypes = {
    
};

export default RandomGif;