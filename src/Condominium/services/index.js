import axios from 'axios';

const baseUrl_productos = process.env.REACT_APP_BASE_URL

//usuarios
export async function getInfoUser() {

        try {
            const response = await axios({
                url: `${baseUrl_productos}usuario/api/listar-info-user`,
                method: 'GET',

            });
            return response
            
        } catch (e) {
            console.log(e);
        };
}

// Crud de bulma y chart trayendo permisos
export async function getPermisosPropietario() {

    try {
        const response = await axios({
            url: `${baseUrl_productos}usuario/api/listar-permisos-propietario`,
            method: 'GET',

        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}
export async function addPermisoPropietario(permiso) {
    console.log(permiso)

    try {
        const response = await axios({
            url: `${baseUrl_productos}usuario/api/agregar-permiso-propietario`,
            method: 'POST',
            data: permiso

        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}
export async function modifyPermisoPropietario(permiso) {
    console.log(permiso.idP)

    try {
        const response = await axios({
            url: `${baseUrl_productos}usuario/api/modificar-permiso-propietario/${permiso.idPermiso}`,
            method: 'PUT',
            data: permiso

        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}

export async function eliminarPermisoPropietario(id) {
    console.log(id)

    try {
        const response = await axios({
            url: `${baseUrl_productos}usuario/api/eliminar-permiso-propietario/${id}`,
            method: 'DELETE',
        });
        return response
        
    } catch (e) {
        console.log(e);
    };
}



