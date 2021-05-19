import React from 'react';
import { Doughnut as Grafico } from 'react-chartjs-2';

function Doughnut(info ) {  
    var labels= info.peliculas.pelicula;
    var title= info.title;
    var data =info.peliculas.visualizacion
    var backgroundColor= info.peliculas.colorA
  return (
    <div>
        <Grafico 
            data={{
                labels,
                datasets:[
                    {
                        label: title,
                        data,
                        backgroundColor
                    }
                ]
            }}
        />
    </div>
    
     );
}
export default Doughnut;