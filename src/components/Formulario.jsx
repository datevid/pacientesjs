import { React, useEffect, useState } from 'react'
import { getIdRandom, ifObjectNotEmpty } from '../utils/utils'
import ErrorFormulario from './ErrorFormulario'

function add(pacientes, setPacientes, pacienteForm) {
    //console.log(pacienteForm)
    pacienteForm.id = getIdRandom();
    setPacientes([...pacientes, pacienteForm])
}

function update(pacientes,setPacientes,paciente,pacienteForm) {
    //recorremos lista de pacientes y reemplazamos el que queremos actualizar por el que tenemos en el formulario
    const pacientesUpd = pacientes.map((pacienteIndex) => {
        if (pacienteIndex.id == paciente.id) {
            pacienteForm.id = paciente.id
            return pacienteForm;
        } else {
            return pacienteIndex;
        }
    })
    setPacientes(pacientesUpd)
}

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fechaAlta, setFechaAlta] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [errorFormulario, setErrorFormulario] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, nombrePropietario, email, fechaAlta, sintomas].includes('')) {
            console.log("Hay al menos un campo vacío")
            setErrorFormulario(true)
            return;
        } else {
            console.log("Enviando formulario")
            setErrorFormulario(false)
        }

        //creamos objPaciente con datos del formulario
        const pacienteForm = {
            nombre,
            nombrePropietario,
            email,
            fechaAlta,
            sintomas,
            //id: id

        }

        if (paciente.id) {
            //update pacienteForm from pacientes
            update(pacientes,setPacientes,paciente,pacienteForm)
        } else {
            //adicionamos paciente
            add(pacientes, setPacientes, pacienteForm);
        }

        //limpiar el formulario
        clearForm();


    }
    function clearForm() {
        setPaciente({})
        setNombre('')
        setNombrePropietario('')
        setEmail('')
        setFechaAlta('')
        setSintomas('')
    }
    function setPacienteForm(paciente) {
        setNombre(paciente.nombre)
        setNombrePropietario(paciente.nombrePropietario)
        setEmail(paciente.email)
        setFechaAlta(paciente.fechaAlta)
        setSintomas(paciente.sintomas)
    }
    const handleNombre = (e) => {
        setNombre(e.target.value)
        console.log("cambiando el nombre")
    }
    const handleNombrePropietario = (e) => {
        setNombrePropietario(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleFechaAlta = (e) => {
        setFechaAlta(e.target.value)
    }
    const handleSintomas = (e) => {
        setSintomas(e.target.value)
    }

    useEffect(() => {
        if (ifObjectNotEmpty(paciente)) {
            setPacienteForm(paciente)
        } else {
            console.log("no hay paciente a editar")
        }
    }, [paciente])

    return (
        <>
            <div className='w-1/2'>
                <h1>Añade pacientes</h1>
                <form
                    onSubmit={handleSubmit}
                    className='bg-gray-300 rounded p-10'>
                    {errorFormulario && <ErrorFormulario message="Faltan campos por comletar" />}
                    <div className='mb-5'>
                        <label htmlFor="nombreMascota">Nombre Mascota</label>
                        <input type="text" placeholder='Firulays' id='nombreMascota'
                            className='border-2 w-full p-2 mt-2'
                            value={nombre}
                            onChange={handleNombre}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="nombrePropietario">Nombre Propietario</label>
                        <input type="text" placeholder='Firulays' id='nombrePropietario'
                            className='border-2 w-full p-2 mt-2'
                            value={nombrePropietario}
                            onChange={handleNombrePropietario}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Firulays' id='email'
                            className='border-2 w-full p-2 mt-2'
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="alta">Alta</label>
                        <input type="date" placeholder='Firulays' id='alta'
                            className='border-2 w-full p-2 mt-2'
                            value={fechaAlta}
                            onChange={handleFechaAlta}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="sintomas">Síntomas</label>
                        <textarea id='sintomas' placeholder='Fiebre'
                            className='border-2 w-full p-2 mt-2'
                            value={sintomas}
                            onChange={handleSintomas}
                        />
                    </div>
                    <input type="submit" className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-800 cursor-pointer'
                        value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
                    />
                </form>
            </div>

        </>
    )
}
