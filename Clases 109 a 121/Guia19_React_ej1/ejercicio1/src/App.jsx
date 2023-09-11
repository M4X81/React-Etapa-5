import './App.css';
import Footer from './components/Footer';
//import Ejemplo from './components/Ejemplo';(esto es del ej1)
//import Footer from './components/Footer';(esto es del ej2)
//import Navbar from './components/Navbar';(esto es del ej2)
import Main from './components/Main';
import Main2 from './components/Main2';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/Principal';



export default function App() {
  // const titulo = "Hello Dog";(esto es del ej1)
  // const subtitulo = "Sub título";(esto es del ej1)


  return (
    <>
      {/* <Navbar/>(esto es del ej2)
      <Main/>(esto es del ej2)
      <Ejemplo titulo={titulo} subtitulo={subtitulo} />(esto es del ej1)
  <Footer/>(esto es del ej2)*/}
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/Principal" element={<Principal />} />
          <Route path="/Main1" element={<Main />} />
          <Route path="/Main2" element={<Main2 />} />

        </Routes>


        <Footer />

      </BrowserRouter>

    </>
  );
}


