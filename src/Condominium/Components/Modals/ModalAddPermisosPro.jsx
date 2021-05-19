import { Modal, Delete, Select, Label, Button, Input } from 'rbx';
import React, { useState } from 'react';
import '../../../assets/styles/scss/Modals.scss';
import * as services from './../../services'
import GroupAddProduct from '../../../Products/Components/InputsGroup/GroupAddProduct';
import Avatar from '../../../assets/img/avatar-login.png';


function ModalAddPermisosPro(props) {  
    const [isModal, setIsModal] = useState(false);
    const [permisoSeleccionado, setPermisoSeleccionado] = useState(
        {
            idPermiso: "",
            apellidoMat: "",
            apellidoPat: "",
            fk_idBetar: "",
            fk_idEstado: "",
            numDocumento: "",
            fk_idPropiedad: "",
            fk_idParentezco: "",
            placa: "",
            priNombre: "",
            segNombre: "",
            fk_idTipoVehiculo: "",
        }
    );
    const handleChange=e=>{
        const {name, value} = e.target;
        setPermisoSeleccionado(prevState=>({
            ...prevState,
            [name]: value
        }));
        console.log(permisoSeleccionado)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (permisoSeleccionado.priNombre == '') {
            window.confirm('por favor agrega correctamente el priNombre')
        }
        else if (permisoSeleccionado.segNombre == '') {
            window.confirm('por favor agrega correctamente el segNombre')
        }
        else if (permisoSeleccionado.apellidoPat == '') {
            window.confirm('por favor agrega correctamente el apellido paterno')
        }
        else if (permisoSeleccionado.apellidoMat == '') {
            window.confirm('por favor agrega correctamente el apellido materno')
        }
        else if (permisoSeleccionado.numDocumento == '') {
            window.confirm('por favor agrega correctamente el numero de documento')
        }
        else if (permisoSeleccionado.fk_idPropiedad == '') {
            window.confirm('por favor agrega correctamente el num_propiedad')
        }
        else if (permisoSeleccionado.fk_idTipoVehiculo == '') {
            window.confirm('por favor agrega correctamente el vehiculo')
        }
        else if (permisoSeleccionado.placa == '') {
            window.confirm('por favor agrega correctamente el placa')
        }
        else if (permisoSeleccionado.fk_idBetar == '') {
            window.confirm('por favor agrega correctamente el betar usuario')
        }
        else if (permisoSeleccionado.fk_idEstado == '') {
            window.confirm('por favor agrega correctamente el estado')
        }
        else if (permisoSeleccionado.fk_idParentezco == '') {
            window.confirm('por favor agrega correctamente el parentezco')
        }
        else {
            const res = await services.addPermisoPropietario(permisoSeleccionado);
            window.confirm('Agregado correctamente!!')
            const ress = await services.getPermisosPropietario();
        }
    }
  return (
    
        <div className="modal-contenedor-all">
            <div className={`modal ${isModal}`}>
            <Modal.Background />
            <Modal.Card className="modal-add-permiso-propietario">
                 <Delete onClick={() => setIsModal("false")}/>
                <Modal.Card.Title className="modal-add-permiso-propietario-title has-text-centered" >
                    Agrega Un Nuevo Permiso
                </Modal.Card.Title>
                <Modal.Card.Body className="modal-add-permiso-propietario-box">
                    <h1>Formulario</h1>
                    <div className="modal-add-permiso-propietario-box-detalle columns is-vcentered">
                        <div className="modal-add-permiso-propietario-box-detalle__izquierda column is-6">
                            <div className="columns is-vcentered">
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__izquierda-one">
                                        <Label for="priNombre">priNombre</Label>
                                        <Input type="text" color="info" name="priNombre" placeholder="Nombre" onChange={handleChange}/>
                                        <Label for="segNombre">segNombre</Label>
                                        <Input type="text" color="info" name="segNombre" placeholder="Seg. Nombre" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__izquierda-two">
                                        <Label for="apellidoPat">apellidoPat</Label>
                                        <Input type="text" color="info" name="apellidoPat" placeholder="Apellido" onChange={handleChange}/>
                                        <Label for="apellidoMat">apellidoMat</Label>
                                        <Input type="text" color="info" name="apellidoMat" placeholder="Apellido Mat." onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-add-permiso-propietario-box-detalle__derecha column is-6">
                            <div className="columns is-vcentered">
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__derecha-one">
                                        <Label for="numDocumento">numDocumento</Label>
                                        <Input type="text" color="info" name="numDocumento" placeholder="C.C / T.I" onChange={handleChange}/>
                                        <Label for="num_propiedad">num_propiedad</Label>
                                        <Input type="text" color="info" name="fk_idPropiedad" placeholder="Propiedad" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__derecha-two">
                                        <Label for="vehiculo">vehiculo</Label>
                                        <Input type="text" color="info" name="fk_idTipoVehiculo" placeholder="Vehiculo" onChange={handleChange}/>
                                        <Label for="placa">placa</Label>
                                        <Input type="text" color="info" name="placa" placeholder="Placa" onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-add-permiso-propietario-box-detalle__select">
                        <div className="columns is-vcentered">
                            <div className="column is-4">
                                <div className="modal-add-permiso-propietario-box-detalle__select-onemodal-add-permiso-propietario-box-detalle__select-one">
                                    <Label>betar</Label>
                                    <Select.Container className="modal-add-permiso-propietario-box-detalle__select-one-container">
                                        <Select name="fk_idBetar" className="modal-add-permiso-propietario-box-detalle__select-one-container-select" onChange={handleChange}>
                                            <Select.Option  className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Si</Select.Option>
                                            <Select.Option value="2" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">No</Select.Option>
                                        </Select>
                                    </Select.Container>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="modal-add-permiso-propietario-box-detalle__select-two">
                                    <Label>estado</Label>
                                    <Select.Container className="modal-add-permiso-propietario-box-detalle__select-two-container">
                                        <Select name="fk_idEstado" className="modal-add-permiso-propietario-box-detalle__select-two-container-select" onChange={handleChange}>
                                            <Select.Option className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-two-container-select-option-res">Ausente</Select.Option>
                                            <Select.Option value="2" className="modal-add-permiso-propietario-box-detalle__select-two-container-select-option-res">Ingresado</Select.Option>
                                        </Select>
                                    </Select.Container>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="modal-add-permiso-propietario-box-detalle__select-thre">
                                    <Label>parentezco</Label>
                                    <Select.Container className="modal-add-permiso-propietario-box-detalle__select-thre-container">
                                        <Select name="fk_idParentezco"className="modal-add-permiso-propietario-box-detalle__select-thre-container-select" onChange={handleChange}>
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
                                            <Select.Option className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Amigo</Select.Option>                                            
                                            <Select.Option value="2" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Familiar</Select.Option>
                                            <Select.Option value="3" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Integrante</Select.Option>
                                            <Select.Option value="4" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Propietario</Select.Option>
                                        </Select>
                                    </Select.Container>
                                </div>
                            </div>
                        </div>
                        <Button onClick={handleSubmit} className="button is-small is-primary">
                                enviar
                        </Button>
                    </div>
                </Modal.Card.Body>
                <Button onClick={() => setIsModal("false")} className="button is-small is-danger">
                    Canselar
                </Button>
            </Modal.Card>
            </div>
            <Button onClick={() => setIsModal("is-active")} className="modal-contenedor-all-button-abrir-add" >
                Agregar Permiso
            </Button>
      </div>
    );
}

export default ModalAddPermisosPro;
