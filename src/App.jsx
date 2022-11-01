import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})
  const eliminarPaciente = (id)=>{
    console.log("Eliminando paciente con id",id);
    const pacienteUpd=pacientes.filter((pacienteIndex)=>{
      return pacienteIndex.id!=id
    })
    console.log(pacienteUpd)
    setPacientes(pacienteUpd)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App;