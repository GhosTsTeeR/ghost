import React, { useEffect, useState } from 'react'
import { Table } from 'rbx';
function TablePermisoPro(permiso) {  

  return (
    
    <>  
        <Table>
            <Table.Head>
                <Table.Row>
                <Table.Heading>Nombre(s)</Table.Heading>
                <Table.Heading>Apellido(s)</Table.Heading>
                <Table.Heading>Documento</Table.Heading>
                <Table.Heading>Parentezco</Table.Heading>
                <Table.Heading>Vehiculo</Table.Heading>
                <Table.Heading>Placa</Table.Heading>
                <Table.Heading>Estado</Table.Heading>
                <Table.Heading>Betar</Table.Heading>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {[
                [
                    `${permiso.priNombre} ${permiso.segNombre}`,
                    `${permiso.apellidoPat} ${permiso.apellidoMat}`,
                    `${permiso.documento}`,
                    `${permiso.parentezco}`,
                    `${permiso.vehiculo}`,
                    `${permiso.placa}`,
                    `${permiso.estado}`,
                    `${permiso.betar}`,],
                ].map(([v1, v2, v3, v4, v5, v6, v7, v8, v9], i) => (
                <Table.Row key={permiso.id}>
                    <Table.Cell>{v1}</Table.Cell>
                    <Table.Cell>{v2}</Table.Cell>
                    <Table.Cell>{v3}</Table.Cell>
                    <Table.Cell>{v4}</Table.Cell>
                    <Table.Cell>{v5}</Table.Cell>
                    <Table.Cell>{v6}</Table.Cell>
                    <Table.Cell>{v7}</Table.Cell>
                    <Table.Cell>{v8}</Table.Cell>
                    <Table.Cell>{v9}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </>
     );
}
export default TablePermisoPro;