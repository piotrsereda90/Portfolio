import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles
    className='canvas'
      params={{
        particles:{
          number:{
            value: 30,
            density:{
              enabled:true,
              value_area: 900
            }
          },
          shape:{
            type:'circle',
            stroke:{
              width: 6,
              color:'#f9ab00'
            }
          }
        }
      }} />
      <NavBar/>
      <Header/>
    </>
  );
}

// <a href='https://pl.freepik.com/zdjecia/technologia'>Technologia zdjęcie utworzone przez rawpixel.com - pl.freepik.com</a> przypis do tła w hederze
export default App;
