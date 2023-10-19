/* eslint-disable no-unused-vars */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const [state, set] = useState({
    name: [ 
      'death parade',
      'Fullmetal Alchemist',
      'Shingeki no kyojin',
      'Yahari Ore no Seishun Love Come wa Machigatteiru',
      'SAO',
      'Darling in the Franxx',
      'Assassination Classroom',
      'Love Live!',
      'Fullmetal Alchemist',
      'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
      'Jujutsu Kaisen',
      'Monogatari',
      'ELite classroom',
      'Naruto',
      'Jujutsu Kaisen'
    ],
    images:[ 
      'src/assets/Decim.jpeg',
      'src/assets/EdwadElric.jpeg',
      'src/assets/ErenJeager.jpeg',
      'src/assets/HachimanHikigaya.jpeg',
      'src/assets/Eugeo.jpeg',
      'src/assets/Kokoro.jpeg',
      'src/assets/KoroSensei.jpeg',
      'src/assets/NozomiToujou.jpeg',
      'src/assets/RizaHawkeye.jpeg',
      'src/assets/SakutaAzusagawa.jpeg',
      'src/assets/SatoruGojo.jpeg',
      'src/assets/ShinobuOshino.jpeg',
      'src/assets/KiyotakaAyanokouji.jpeg',
      'src/assets/ItachiUchiha.jpeg',
      'src/assets/Mahito.jpeg',
    ],
    quote: 0,
  });
  const handleClick = () => {
    set(preState =>{
      return{...preState, quote: Math.floor(Math.random() * state.name.length)};
    })
  }
  return (<div id='container'>
    <div className='card'>
      <img src={state.images[state.quote]} className='card-img-top' alt='...' />
      <div className='card-body' >
        <h5 className='card-title'>
          {state.name[state.quote]}
        </h5>
        <a href='#' className='btn btn-primary' onClick={handleClick}>Buscar cita</a>
      </div>
    </div>
  </div>);
}
export default App