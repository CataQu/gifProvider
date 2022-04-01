import React, { Component } from "react";
import Gif from "./components/Gif";
import NavBar from "./components/NavBar";
import RandomGif from "./components/RandomGif";
import RandomTrendingGif from "./components/RandomTrendingGif";

import "./css/app.css";
class App extends Component {
  constructor(){
    super();
    this.state = {
      gif: "", //recibe un array de objetos gifs
      randomGif: { //recibe un random gif de todos los de giphy
        url: "",
        title: ""
      }, 
      randomReady: false, //Se usa para verificar cuando mostrar el gif random. Es set en mostrarRandomGif
      randomTrendingGif: { //recibe un gif del array de trendings en formato objeto
        url: "",
        title: ""
      },
      randomTrendingReady: false,
      arrayDe8: "" //array que llega del metodo random8
    }
  }
  //Funcion para llamar a la API, recibe la url y un callback que setea el state
  apiCall(url, handle){
    fetch(url)
      .then(response => response.json())
      .then(data => handle(data))
      .catch(e => {console.log(e)})
  }
  //Llama a la funcion apiCall y le da los parametros
  traerGifNuevo(){
    this.apiCall("https://api.giphy.com/v1/gifs/trending?api_key=EQhHUSi12J1vIQQ7qyIE72l5K5wkvf9V", this.mostrarGif)
  }
  //Es el handler, el callback que genera el setState
  mostrarGif = (data) => {
    this.setState( {gif: data.data} )
  }
  //Montaje del componente, llama al método que ejecuta la apiCall
  componentDidMount(){
    this.traerGifNuevo()
  }
  componentDidUpdate(){  
  }
  //Funcion que se ejecuta al presionar el boton de RandomGif
  mostrarRandomTrendingGif = () => {
    let traerGifs = this.state.gif //trae el array de gifs
    let n = Math.floor(Math.random() * (traerGifs.length)) //genera un numero random de 0 al array.length
    this.setState({randomTrendingGif:{
       url: traerGifs[n].images.original.url,
       title: traerGifs[n].title
      }}) //setea un objeto
    this.setState({randomTrendingReady: true}) //setea el state en true
  }

  mostrarRandomGif = () => {
    this.apiCall(
      "https://api.giphy.com/v1/gifs/random?api_key=F33mpVK2IB05XXqzCIQUxVLlrKiX8MB9&tag=&rating=g",
      (data) => {
        this.setState({
          randomGif: {
            url: data.data.images.downsized.url,
            title: data.data.title
          },
          randomReady: true
        })
      })}

  random8 = () => {
      // let variableSlice;
      let n0to50 = Math.floor(Math.random()*51);
      let secondNumber = (n) => {
        if (n >= 42) {
          return secondNumber = n - 8
        } else {
            return secondNumber = n + 8
          }
      }
      console.log("NUMERO RANDOM!!!", n0to50)
      console.log("SEGUNDO INDICE!!!", secondNumber(n0to50))

      if (n0to50 > secondNumber) {
        this.setState({
          arrayDe8: this.state.gif.slice(secondNumber, n0to50)
        })
      
      } else{
          // variableSlice = ;
         this.setState({
          arrayDe8: this.state.gif.slice(n0to50, secondNumber)
        })
      }
      console.log("Array de 8", this.state.arrayDe8 )
    }

  render() {
    return (
      <>
      {/* NAVBAR - Si existe el array de gifs, renders el navbar. 
      Se pasa el método mostrarRandomGif para ejecutar en onClick del component*/}
       {this.state.gif.length && 
       <NavBar 
       mostrarRandomTrendingGif={()=>this.mostrarRandomTrendingGif()} 
       mostrarRandomGif={()=>this.mostrarRandomGif()} 
       random8={()=>this.random8()} 

       />}
        <div className="container">
          <div id="contenedor de random gif"style={{display: "flex"}}>
          { /*Un borde rojo para diferenciarlo */}
        {this.state.randomReady &&  this.state.randomGif &&
        <RandomGif 
          randomGif={this.state.randomGif} 
          randomReady={this.state.randomReady} />
          }
             {this.state.randomTrendingReady && 
          <RandomTrendingGif 
          randomTrendingGif={this.state.randomTrendingGif} 
          randomReady={this.state.randomReady} /> }
        </div>
            <div className="row text-center">
        {/* Renders del componente GIF */}
            <Gif gif= {this.state.gif} arrayDe8= {this.state.arrayDe8} />
          </div>
        </div>
      </>
    );
  }
}

export default App;