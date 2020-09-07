import React, {useState, useEffect} from 'react';
import logo from './image/logo.png';
import './App.css';

const getCitas=async(cb:any)=> {

  fetch('http://localhost:3000/api/turnos')
  .then(res=>res.json())
  .then(res=>{
    cb(res)
  });
}
function App() {
  const [citas, setCitas] = useState([]);

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
        <h1 className="turno-actual">TURNO ACTUAL 005</h1>

        <div className="table-container">
          <table className = "gfg"> 
            <tbody>
              <tr className="header-tow ">
                <td>Turno</td>
                <td>Nombre</td>
                <td>Proyecto</td>
              </tr>
              {
                citas.map((cita:any)=>(
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
        <p style={{paddingTop: 5, fontSize: "1.5rem"}}>Turno 5 dispobible</p>
      </div>
      <div className="whatsapp">
        <a style={{textDecoration: "none", color: "#FFF"}} href="https://wa.me/523321214680"><p style={{paddingTop: 5, fontSize: "1.5rem"}}>Reservar por whatsapp </p></a>
      </div>
    </div>
  );
}

export default App;
