import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Tarjeta from './components/Tarjeta';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';

function App() {


  return (
    <>
      <Container className='text-center my-5'>
        <Titulo />
        <Formulario></Formulario>
        
      </Container>
    </>
  );
}

export default App;
