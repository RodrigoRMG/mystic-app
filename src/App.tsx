import React, {useState, useEffect} from 'react';
import logo from './image/logo.png';
import './App.css';

interface Turno {
  id?: number;
  name: string;
  number: number;
  project: string;
}

const getCitas=async(cb:any)=> {

  fetch('http://157.245.117.205:3000/api/turnos')
  .then(res=>res.json())
  .then(res=>{
    cb(res)
  });
}
function App() {
  const [citas, setCitas] = useState<Turno[]>([]);

  useEffect(()=>{
    getCitas(setCitas);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Gestión de turnos
      </header>
      <div>
        {
          citas[0] && <h1 className="turno-actual">TURNO ACTUAL {citas[0]?.number}</h1>
        }
  

        <div className="table-container">
          <table className = "gfg"> 
            <tbody>
              <tr className="header-tow ">
                <td>Turno</td>
                <td>Nombre</td>
                <td>Proyecto</td>
              </tr>
              {
                citas.map((cita:Turno)=>(
                  <tr key={cita.id}> 
                    <td className = "geeks">{cita.number}</td> 
                    <td>{cita.name}</td> 
                    <td>{cita.project}</td> 
                </tr> 
                ))
              }
            </tbody>
          </table> 
        </div>
      </div>
      <div className="disponible">
        {
        citas.length>0 && citas[citas.length-1] ? <p style={{paddingTop: 5, fontSize: "1.5rem"}}>Turno {citas[citas.length-1].number+1} dispobible</p> :  <p style={{paddingTop: 5, fontSize: "1.5rem"}}>Turno 1 dispobible</p>}
      </div>
      <div className="whatsapp">
        <a style={{textDecoration: "none", color: "#FFF"}} href="https://wa.me/50769605310"><p style={{paddingTop: 5, fontSize: "1.5rem"}}>Reservar por whatsapp </p></a>
      </div>
    </div>
  );
}

export default App;
