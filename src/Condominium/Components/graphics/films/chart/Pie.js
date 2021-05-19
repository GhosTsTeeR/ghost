import React from 'react';
import { Pie as Grafico } from 'react-chartjs-2';

function Pie(info ) {  
    var labels= info.labels;
    var title= info.title;
    var data =info.data
    var backgroundColor= info.backgroundColor
    console.log('labelsssssssssss'+labels)
  return (
    <div className="modal-graphic-box-contenido-graphic">
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
export default Pie;