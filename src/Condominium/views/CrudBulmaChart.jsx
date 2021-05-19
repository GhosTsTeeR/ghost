import React from 'react';
import { info} from '../Components/graphics/data/data';
import '../../assets/styles/scss/Main.scss';
import TablePermisoPro from '../Components/Tables/TablePermisoPro';
import DataTableTablePermisoPro from '../Components/DataTable/TablePermisoPro';
import ModalAddPermisosPro from '../Components/Modals/ModalAddPermisosPro'
import Scope from '../Components/graphics/films/Scope';
import ScopePrueba from '../Components/graphics/films/ScopePrueba';
import Header from '../Components/graphics/films/Header'
import Doughnut from '../Components/graphics/films/chart/Doughnut';
import Line from '../Components/graphics/films/chart/Line';
import ModalGraphicOneMore from '../Components/Modals/ModalGraphicOneMore';
import { Button } from 'rbx';
function CrudBulmaChart() {  

  var peliculassss = JSON.parse(JSON.stringify(info.peliculas));
  
  return (
    
    <div className="main">
      <div className="main-datatable">
        <ModalAddPermisosPro/>
        <br/>
        <DataTableTablePermisoPro/>
      </div>
      <div className="main-graphics">
        <div className="main-graphics-header">
          <Header/>
        </div>
        <div className="main-graphics-container">
        <div className="columns is-vcentered">
              <div className="column is-4">
                <ScopePrueba peliculas={peliculassss} />
              </div>
              <div className="column is-4">
              <Doughnut peliculas={peliculassss} title="Grafica en rosquita"/>
              </div>
              <div className="column is-4">
              <Line peliculas={peliculassss} title="Grafica Lineal" />
              </div>
          </div>
        </div>
        <div className="main-graphics-container-button-more">
          <ModalGraphicOneMore peliculas={peliculassss}/>
        </div>
      </div>

    </div>
     );
}
export default CrudBulmaChart;