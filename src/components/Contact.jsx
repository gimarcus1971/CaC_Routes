
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { ContactAlert } from './ContactAlert'


export const Contact = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })

    const [guardarDatos, setGuardarDatos] = useState('');
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    };

    const {nombre, email, telefono, mensaje} = datos
    const handleSubmit = (e) => {
        e.preventDefault();
        const {nombre, email, telefono, mensaje} = datos

        if(nombre.trim() === '' || email.trim() === ''||telefono.trim() === '' || mensaje.trim() ==='' ){
            return;
        }
        setGuardarDatos({
            ...datos,
        })
        const alertMensaje = document.getElementById('alerta-mensaje');
        alertMensaje.classList.remove('d-none');
    }

return (


<div class="container">


<div class="about-section">
  <h1> Contactenos </h1>
</div>



        <ContactAlert guardarDatos={guardarDatos} />
        <Form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 p-4 mx-5 mb-10"
        >

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label> Nombre y Apellido </Form.Label>
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={handleChange}
                />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Ingrese su Email"
                    value={email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label> Teléfono de contacto </Form.Label>
                <Form.Control
                    type="number"
                    name="telefono"
                    placeholder="Ingrese su numero de telefono"
                    value={telefono}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label> Mensaje </Form.Label>
                <Form.Control
                    type="text"
                    name="mensaje"
                    placeholder="Ingrese aqui su mensaje"
                    value={mensaje}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button className="button-color" type="submit">
                Enviar
            </Button>
        </Form>

    </div>

    );
}
