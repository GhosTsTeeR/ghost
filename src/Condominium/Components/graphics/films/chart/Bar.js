import React from 'react';
import { Bar as Grafico } from 'react-chartjs-2';

function Bar(info ) { 
    var labels= info.labels;
    var title= info.title;
    var data =info.data
    var backgroundColor= info.backgroundColor
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
export default Bar;