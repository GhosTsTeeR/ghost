import React from 'react';
import  { Header } from 'rbx';
import Bar from './chart/Bar';


function ScopePrueba( info) {  
  return (
    <div>
      <Bar data={info.peliculas.visualizacion} labels={info.peliculas.pelicula} backgroundColor={info.peliculas.colorA} title='Visualizaciones por pelicula'/> 
    </div>
    
     );
}
export default ScopePrueba;