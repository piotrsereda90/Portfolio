import './App.css';
import Particles from 'react-particles-js';
import NavBar from './NavBar';
import Header from './Header';
import AboutMe from './AboutMe';

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
      <AboutMe/>
    </>
  );
}
export default App;
