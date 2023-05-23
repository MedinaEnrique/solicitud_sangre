import React from 'react'
import Card from './Card.jsx'

const ListCard = () => {


    let value = {
      id: 81,
      created_at: "2023-04-17T19:59:19.000000Z",
      updated_at: "2023-04-17T19:59:19.000000Z",
      solicitud: "TOKENNNMNNNNNN",
      creado_por: 31,
      fecha_limite: "12/4/2023",
      id_estado: 1,
      volumenes_necesarios: 78,
      nombre_apellido_donatario: "fdagfgfsa",
      cedula_donatario: "4687",
      telefono_contacto: "0991459016",
      tipo_sangre: 3,
      establecimiento: "3",
    
   }

  
  return (
    
    <>
 

      <Card key={value.id} record={value} />
    </ >
  )
}

export default ListCard