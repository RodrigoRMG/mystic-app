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

  fetch('https://mytic-api.herokuapp.com/api/turnos')
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
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{width: '100%', textAlign: "end", paddingRight: 10}}>
        Gestión de turnos
        </div>
       
        
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
                    <td style={{paddingRight:15}}>{cita.project}</td> 
                </tr> 
                ))
              }
            </tbody>
          </table> 
        </div>
      </div>
      <div className="disponible">
        {
        citas.length>0 && citas[citas.length-1] ? <p style={{paddingTop: 5, fontSize: "1.2rem"}}>Turno {citas[citas.length-1].number+1} disponible</p> :  <p style={{paddingTop: 5, fontSize: "1.5rem"}}>Turno 1 dispobible</p>}
      </div>
      <div className="whatsapp">
        <a style={{textDecoration: "none", color: "#FFF"}} href="https://wa.me/50769605310"><p style={{paddingTop: 5, fontSize: "1.2rem"}}>Reservar por whatsapp <i style={{color: '#FFF', marginLeft:5}} className="fab fa-whatsapp"></i> </p></a>
      </div>
    </div>
  );
}

export default App;
