import React from 'react';
import Student from './Student';

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carnet: '', nombre: '', horario: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let student = new Student(this.state.carnet, this.state.nombre, this.state.horario);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nombre = target.nombre;

        this.setState({
            [nombre]: value
        });
    }

    renderInput(nombre,placeholder, type = "text") {
        return (
          
            <fieldset>
                <label htmlFor={nombre}>{nombre}</label>
                <input
                    type={type}
                    nombre={nombre} id={nombre}
                    value={this.state[nombre]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Reservar Laboratorio</h3>
                {this.renderInput("carnet","carnet")}
                {this.renderInput("nombre","nombre")}
                {this.renderInput("horario","horario")}
                <fieldset>
                    <button nombre="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default StudentForm;