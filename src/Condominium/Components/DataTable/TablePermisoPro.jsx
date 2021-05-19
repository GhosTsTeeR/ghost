import React, { useEffect, useState,forwardRef  } from 'react';
import { Modal, Delete, Select, Label, Button, Input } from 'rbx';

import '../../../assets/styles/scss/Modals.scss';
import * as services from '../../services';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ModalEditPermisosPro from '../Modals/ModalEditPermisosPro';
const columns = [
    {title: 'ID', field:'idPermiso'},
    {title: 'Nombre', field:'priNombre'},
    {title: 'Apellido', field:'apellidoPat'},
    {title: 'Documento', field:'numDocumento'},
    {title: 'Parentezco', field:'parentezco'},
    {title: 'Vehiculo', field:'vehiculo'},
    {title: 'Placa', field:'placa'},
    {title: 'Estado', field:'estado'},
    {title: 'Betar', field:'betar'},

]
function TablePermisoPro() {  
    const [isModalEditar, setIsModalEditar] = useState(false);
    const [isEliminar, setIsEliminar] = useState(false);
    const [permisosPropietario, setPermisosPropietario] = useState([]);
    const [permisoSeleccionado, setPermisoSeleccionado] = useState(
        {
            idPermiso: "",
            apellidoMat: "",
            apellidoPat: "",
            fk_idBetar: "",
            fk_idEstado: "",
            numDocumento: "",
            num_propiedad: "",
            fk_idParentezco: "",
            placa: "",
            priNombre: "",
            segNombre: "",
            fk_idTipoVehiculo: "",
        }
    );


    useEffect( () => {
      async function loadPermisosPropietario() {
        const datos = await services.getPermisosPropietario();
        console.log(datos);
        if (datos.status === 200) {
          setPermisosPropietario(datos.data);
        }
      }
      loadPermisosPropietario();
    }, []);
    const seleccionarPermiso=(numDocumento, caso)=>{
      setPermisoSeleccionado(numDocumento);
    (caso==="Editar")&&setIsModalEditar('is-active');
    (caso==="Eliminar")&&setIsEliminar('is-active');

    }
    const handleChange=e=>{
        const {name, value} = e.target;
        setPermisoSeleccionado(prevState=>({
            ...prevState,
            [name]: value
        }));
        console.log(permisoSeleccionado)
    }
    const handleSubmitEdit = async e => {
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
          const res = await services.modifyPermisoPropietario(permisoSeleccionado);
          window.confirm('Modificado correctamente!!')
          setIsModalEditar(false);
        }
    }
    const operacionEliminar = async e => {
        e.preventDefault();
        if (permisoSeleccionado.idPermiso == '') {
          window.confirm('Por favor agrega correctamente el la id')
        }

        else {
          const res = await services.eliminarPermisoPropietario(permisoSeleccionado.idPermiso);
          window.confirm('Elinimado correctamente!!')
          setIsEliminar(false);
        }
    }
    return (
    <>  
        <MaterialTable
            columns={columns}
            data={permisosPropietario}
            title="Permisos Para ingresar :d"
            actions={[
                {
                    icon: Edit ,
                    tooltip: 'Editar Permiso',
                    onClick: (event, rowData) => seleccionarPermiso(rowData, "Editar")
                },
                {
                icon: DeleteIcon,
                tooltip: 'Eliminar',
                onClick: (event, rowData) => seleccionarPermiso(rowData, "Eliminar")
                }
            ]}
            options={{
            actionsColumnIndex: -1
            }}
        />
        <div className="modal-contenedor-all">
            <div className={`modal ${isModalEditar}`}>
            <Modal.Background />
            <Modal.Card className="modal-add-permiso-propietario">
                 <Delete onClick={() => setIsModalEditar("false")}/>
                <Modal.Card.Title className="modal-add-permiso-propietario-title has-text-centered" >
                    Editar Permiso
                </Modal.Card.Title>
                <Modal.Card.Body className="modal-add-permiso-propietario-box">
                    <h1>Formulario</h1>
                    <div className="modal-add-permiso-propietario-box-detalle columns is-vcentered">
                        <div className="modal-add-permiso-propietario-box-detalle__izquierda column is-6">
                            <div className="columns is-vcentered">
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__izquierda-one">
                                        <Label for="priNombre">priNombre</Label>
                                        <Input type="text" color="info" name="priNombre" placeholder="Nombre" onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.priNombre}/>
                                        <Label for="segNombre">segNombre</Label>
                                        <Input type="text" color="info" name="segNombre" placeholder="Seg. Nombre" onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.segNombre}/>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__izquierda-two">
                                        <Label for="apellidoPat">apellidoPat</Label>
                                        <Input type="text" color="info" name="apellidoPat" placeholder="Apellido" onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.apellidoPat}/>
                                        <Label for="apellidoMat">apellidoMat</Label>
                                        <Input type="text" color="info" name="apellidoMat" placeholder="Apellido Mat." onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.apellidoMat}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-add-permiso-propietario-box-detalle__derecha column is-6">
                            <div className="columns is-vcentered">
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__derecha-one">
                                        <Label for="numDocumento">numDocumento</Label>
                                        <Input type="text" color="info" name="numDocumento" placeholder="C.C / T.I" onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.numDocumento}/>
                                        <Label for="num_propiedad">num_propiedad</Label>
                                        <Input type="text" name="fk_idPropiedad" value={permisoSeleccionado&&permisoSeleccionado.num_propiedad} readonly="readonly"/> 
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="modal-add-permiso-propietario-box-detalle__derecha-two">
                                        <Label>vehiculo</Label>
                                        <Select.Container className="modal-add-permiso-propietario-box-detalle__select-one-container">
                                            <Select name="fk_idTipoVehiculo" className="modal-add-permiso-propietario-box-detalle__select-one-container-select" onChange={handleChange}>
                                                <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
                                                <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Carro</Select.Option>
                                                <Select.Option value="2" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Moto</Select.Option>
                                            </Select>
                                        </Select.Container>
                                        <Label for="placa">placa</Label>
                                        <Input type="text" color="info" name="placa" placeholder="Placa" onChange={handleChange} value={permisoSeleccionado&&permisoSeleccionado.placa}/>
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
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
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
                                        <Select name="fk_idEstado" className="modal-add-permiso-propietario-box-detalle__select-two-container-select" onChange={handleChange} >
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
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
                                        <Select name="fk_idParentezco"className="modal-add-permiso-propietario-box-detalle__select-thre-container-select" onChange={handleChange} >
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-one-container-select-option-res">Seleccionar</Select.Option>
                                            <Select.Option value="1" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Amigo</Select.Option>
                                            <Select.Option value="2" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Familiar</Select.Option>
                                            <Select.Option value="3" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Integrante</Select.Option>
                                            <Select.Option value="4" className="modal-add-permiso-propietario-box-detalle__select-thre-container-select-option-res">Propietario</Select.Option>
                                        </Select>
                                    </Select.Container>
                                </div>
                            </div>
                        </div>
                        <Button onClick={handleSubmitEdit} className="button is-small is-primary">
                          enviar
                        </Button>
                    </div>
                </Modal.Card.Body>
                <Button onClick={() => setIsModalEditar("false")} className="button is-small is-danger">
                  Canselar
                </Button>
            </Modal.Card>
            </div>
      </div>
        <div className="modal-contenedor-all">
            <div className={`modal ${isEliminar}`}>
            <Modal.Background />
            <Modal.Card className="modal-Eliminar">
                 <Delete onClick={() => setIsEliminar("false")}/>
                <Modal.Card.Title className="modal-Eliminar-title has-text-centered" >
                    Eliminar Permiso
                </Modal.Card.Title>
                <Modal.Card.Body className="modal-Eliminar-box">
                    <p>Esta seguro que desea eliminar el permiso, con el usuario <b>{permisoSeleccionado&&permisoSeleccionado.priNombre} {permisoSeleccionado&&permisoSeleccionado.apellidoPat}</b> y cedula <b>{permisoSeleccionado&&permisoSeleccionado.numDocumento}</b></p>
                    <Button onClick={operacionEliminar} className="button is-small is-info">
                        Enviar
                    </Button>
                </Modal.Card.Body>
                <Button onClick={() => setIsEliminar("false")} className="button is-small is-danger">
                    Canselar
                </Button>
            </Modal.Card>
            </div>

        </div>
    </>
     );
}
export default TablePermisoPro;