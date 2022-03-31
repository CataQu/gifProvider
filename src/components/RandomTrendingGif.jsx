
const RandomTrendingGif = ({randomTrendingGif}) => {
    return (
<>

<div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100" style={{border: "red 3px solid"}}> 
          <h2>Random Trending Gif</h2>
         <img className="card-img-top"
            src={randomTrendingGif.url}/>
        <div className="card-body">
            <h4 className="card-title">
            {randomTrendingGif.title}</h4>
        </div>
        </div>
        </div>
         </>
    );
};


export default RandomTrendingGif;