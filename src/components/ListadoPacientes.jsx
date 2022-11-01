import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    if (pacientes.length == 0) {
        return (
            <>
                <h2>No hay pacientes</h2>
            </>
        )
    } else {
        return (
            <>
                <div className="w-1/2">
                    <h1>Listado de pacientes</h1>
                    {
                        pacientes.map((paciente) => {
                            return <Paciente key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />

                        })
                    }

                </div>
            </>
        )
    }

}
export default ListadoPacientes;