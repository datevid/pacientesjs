import React from 'react'

function Paciente({ paciente, setPaciente,eliminarPaciente }) {
    const { nombre, nombrePropietario, email, fechaAlta, sintomas, id } = paciente

    const handleEliminarPaciente=()=>{
        console.log("eliminando paciente id:",id)
        const siEliminar =confirm("Desea eliminar al paciente?")
        if(siEliminar){
            eliminarPaciente(id)
        }
    }
    return (

        <>
            <div className='bg-gray-300 rounded p-10 ml-2 mx-5 mb-3'>
                <p>
                    Nombre:
                    <span>{nombre}</span>
                </p>
                <p>
                    Propietario:
                    <span>{nombrePropietario}</span>
                </p>
                <p>
                    Email:
                    <span>{email}</span>
                </p>
                <p>
                    Alta:
                    <span>{fechaAlta}</span>
                </p>
                <p>
                    Síntomas:
                    <span>{sintomas}</span>
                </p>
                <div className='flex justify-between'>
                    <button
                        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white'
                        onClick={() => { setPaciente(paciente) }}
                    >

                        Editar</button>
                    <button
                        className='py-2 px-10 bg-red-500 hover:bg-red-700 text-white'
                        onClick={handleEliminarPaciente}
                        >
                        Eliminar
                    </button>

                </div>
            </div>
        </>
    )
}
export default Paciente;