import { useEffect, useState } from 'react' 
import './style.css'
function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(()=>{

    function loadAPi() {
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((r)=> r.json())
        .then((json)=>{
          setNutri(json);
        });
    }
    loadAPi();
  },[])

  return (
    <div className='container'>
        <header>
            <strong>React Nutri</strong>
        </header>
        {nutri.map((item)=>{
          return(
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className="titulo">
                {item.subtitulo}
              </p>

              <a className="botao">Acessar</a>
            </article>
          );
        })}
    </div>
  );
}

export default App;
