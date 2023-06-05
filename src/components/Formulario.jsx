import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Tarjeta from './Tarjeta';
import ListaNoticia from './ListaNoticia';

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  useEffect(() => {
    const categoriaLocalStorage = localStorage.getItem('catego');
    const paisLocalStorage = localStorage.getItem('pais');
    if (categoriaLocalStorage) {
      setCategoria(categoriaLocalStorage);
    }
    if (paisLocalStorage) {
      setPais(paisLocalStorage);
    }
  }, []);

  const consultarAPI = async (categoria) => {
    try {
      const respuesta = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/in.json`);
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato.articles);
      setNoticia([...dato.articles]);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    setCategoria(data.pais);
    consultarAPI(data.pais);
    reset();
  };

  return (
    <>
    <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Select {...register("pais", {
        required: "El dato es obligatorio",
      })}>
        <option>Buscar por categorías</option>
        <option value="business">business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </Form.Select>
      <Form.Text>{errors.pais?.message}</Form.Text>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    
    <section className='row justify-content-evenly mt-5'>
     <ListaNoticia noticia={noticia}></ListaNoticia>
    </section>
  </>
  );
};

export default Formulario;