import { Modal, Delete, Content, Title, Button, Input } from 'rbx';
import '../../../assets/styles/scss/Modals.scss';
import React, { useState } from 'react';
import GroupAddProduct from '../../../Products/Components/InputsGroup/GroupAddProduct';
import Avatar from '../../../assets/img/avatar-login.png';

function ModalLogin(props) {  
    const [isModal, setIsModal] = useState(false);
  return (
    
        <div className="modal-contenedor-all">
            <div className={`modal ${isModal}`}>
            <Modal.Background />
            <Modal.Card className="modal-login">
                 <Delete onClick={() => setIsModal("false")}/>
                <Modal.Card.Title className="modal-login-title has-text-centered" >
                    Inicia Sesión
                </Modal.Card.Title>
                <Modal.Card.Body className="modal-login-box">
                    <div className="modal-login-box__avatar"><img src={Avatar} alt=""/></div>
                    <h1>Login</h1>
                    <label for="username">Username</label>
                    <Input type="text" color="info" placeholder="Usuario"/>
                    <label for="password">Password</label>
                    <Input type="password" color="info" placeholder="Password"/>
                    <input type="submit" value="enviar"/>
                    <br/>
                    <a href="#">¿Olvido la contraseña?</a>

                
                </Modal.Card.Body>
                <Button onClick={() => setIsModal("false")} className="button is-small is-danger">
                    Canselar
                </Button>
            </Modal.Card>
            </div>

            <Button onClick={() => setIsModal("is-active")} className="modal-contenedor-all-button" >
                Inciciar sesion bb
            </Button>
      </div>
    );
}

export default ModalLogin;
