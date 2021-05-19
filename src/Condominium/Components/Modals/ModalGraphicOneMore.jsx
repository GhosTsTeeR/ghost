import { Modal, Delete, Content, Title, Button, Input } from 'rbx';
import '../../../assets/styles/scss/Modals.scss';
import React, { useState } from 'react';
import GroupAddProduct from '../../../Products/Components/InputsGroup/GroupAddProduct';
import Avatar from '../../../assets/img/avatar-login.png';
import Pie from '../graphics/films/chart/Pie';

function ModalLogin(info) {  
    const [isModal, setIsModal] = useState(false);
  return (
    
        <div className="modal-contenedor-all">
            <div className={`modal ${isModal}`}>
            <Modal.Background />
            <Modal.Card className="modal-graphic">
                 <Delete onClick={() => setIsModal("false")}/>
                <Modal.Card.Title className="modal-graphic-title has-text-centered" >
                    Una Grafica Más c:
                </Modal.Card.Title>
                <Modal.Card.Body className="modal-graphic-box">
                    <div className="modal-graphic-box-contenido">
                        <Pie data={info.peliculas.visualizacion} labels={info.peliculas.pelicula} backgroundColor={info.peliculas.colorA} title="el mas shido"/>
                    </div>
                </Modal.Card.Body>
                <Button onClick={() => setIsModal("false")} className="button is-small is-danger">
                    Canselar
                </Button>
            </Modal.Card>
            </div>
            <div className="modal-contenedor-all-button-abrir has-text-centered">
                <Button onClick={() => setIsModal("is-active")}  className="modal-contenedor-all-button-abrir-more">
                    More :d
                </Button>
            </div>

            
      </div>
    );
}

export default ModalLogin;
