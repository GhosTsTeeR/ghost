import React, { useState, useEffect } from "react";
import * as services from './../../services'

/* import CardProducto from '../Cards/CardProducto' */

export default  function ListInfoUser() {
  const [infoUser, setInfoUser] = useState([]);

  useEffect( () => {
    async function loadInfoUser() {
      const datos = await services.getInfoUser();
      console.log(datos);
      if (datos.status === 200) {
        setInfoUser(datos.data.listInfoUser);
      }
    }
    loadInfoUser();
  }, []);



  return (
     <div className="list">
      {infoUser.map((item) => (
        <h1>{item.username}</h1>
      ))
      
      }
    </div> 
  );
}



