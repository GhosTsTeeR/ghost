import React, { Component } from 'react';
import Bar from './chart/Bar';

class Scope extends Component {
    state= {

    }
  render() {
        const  {peliculas:{visualizacion, pelicula, colorA}}= this.props;
        console.log(visualizacion, pelicula, colorA)
        return (<h1>hola</h1>);
      }
}

export default Scope;