import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Tarjeta = ({noticia}) => {
    return (
        noticia.map((noti, index) => (
        <section className='my-5'>
            
            <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={noti.urlToImage} />
                <Card.Body>
                    <Card.Title>{noti.title}</Card.Title>
                    <Card.Text>
                    {noti.description}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{window.open(noti.url, "_blank")}}>Ver Noticias Completas</Button>
                </Card.Body>
            </Card>
            
        </section>
        )
        ))
};

export default Tarjeta;