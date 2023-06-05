import React from 'react';
import Tarjeta from './Tarjeta';

const ListaNoticia = ({noticia}) => {
    return (
        <div className="list">
                <Tarjeta noticia={noticia} />
        </div>
    );
};

export default ListaNoticia;