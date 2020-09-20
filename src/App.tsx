import React, {useState, useEffect} from 'react';
import logo from './image/logo.png';
import './App.css';

interface Turno {
  id: number;
  name: string;
  number: number;
  project: string;
}

const getCitas=async(cb:any, loading:any)=> {

  fetch('https://mystic-api.herokuapp.com/api/turnos')
  .then(res=>res.json())
  .then(res=>{
    cb(res)
    loading(false)
  })
  .catch(error=>{
    alert('Ha ocurrido un error: ' + error)
    loading(false)
  });
}
function App() {
  const [citas, setCitas] = useState<Turno[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    getCitas(setCitas, setLoading);
  }, [])

  return (
    <>
    { loading &&  <div className="loading">Loading&#8230;</div>}
    <div className="App content">
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
          citas[0] && <h1 className="turno-actual">TURNO ACTUAL {citas[0]?.id}</h1>
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
                citas.slice(Math.max(citas.length - 10, 0)).map((cita:Turno)=>(
                  <tr key={cita.id}> 
                    <td className = "geeks">{cita.id}</td> 
                    <td>{cita.name}</td> 
                    <td style={{paddingRight:15}}>{cita.project}</td> 
                </tr> 
                ))
              }
            </tbody>
          </table> 
        </div>
      </div>
      <div style={{marginTop: 20}}>
        <div className="disponible">
          {
          citas.length>0 && citas[citas.length-1] ? <span style={{paddingTop: 5, fontSize: "1.2rem"}}>Turno {citas[citas.length-1].id+1} disponible</span> :  <span style={{paddingTop: 5, fontSize: "1.5rem"}}>Turno 1 dispobible</span>}
        </div>
      </div>
      <div style={{marginTop: 20, marginBottom: 80}}>
        <div className="whatsapp">
          <a style={{textDecoration: "none", color: "#FFF"}} href="https://wa.me/50769605310"><span style={{paddingTop: 5, fontSize: "1.2rem"}}>Reservar por whatsapp <i style={{color: '#FFF', marginLeft:5}} className="fab fa-whatsapp"></i> </span></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
