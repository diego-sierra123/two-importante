import React from 'react';
import { Table, Button, Container, Modal, ModalFooter, ModalHeader, ModalBody, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { id: 1, personaje: 'Naruto', anime: 'Naruto' },
  { id: 2, personaje: 'Goku', anime: 'Dragon Ball' },
  { id: 3, personaje: 'Kenshin Himura', anime: 'Roromi Kenshin' },
  { id: 4, personaje: 'Levi Ackerman', anime: 'SNK' },
  { id: 5, personaje: 'Tanjiro', anime: 'Demons Slayer' },
  { id: 6, personaje: 'Zenitsu', anime: 'Demons Slayer' },
];

class Base extends React.Component {
  state = {
    data: data,
    form: {
      id: '',
      personaje: '',
      anime: '',
      imagenUrl: '',
    },
    modalInsertar: false,
    modalEditar: false,
    imageFile: null,
  };

  //Eventos
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  handleImageChange = (event) => {
    const file = event.target.files[0];

    // Puedes usar FileReader para obtener una URL de la imagen
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imageFile: file,
        form: {
          ...this.state.form,
          imagenUrl: reader.result, // Aquí asignamos la URL al formulario
        },
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  //Funciones
  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  }

  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  }

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  }

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  }

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  }

  editar = () => {
    var contador = 0;
    var lista = [...this.state.data];
    lista.forEach(registro => {
      if (registro.id === this.state.form.id) {
        lista[contador] = { ...this.state.form };
      }
      contador++;
    });

    this.setState({ data: lista, modalEditar: false });
  }

  eliminar = (dato) => {
    var opcion = window.confirm("¿Desea eliminar el registro " + dato.id + "?");
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.id == dato.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <div>
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>Insertar nuevo personaje</Button>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr key={elemento.id}>
                  <td>{elemento.id}</td>
                  <td>{elemento.personaje}</td>
                  <td>{elemento.anime}</td>
                  <td>
                    {elemento.imagenUrl ? (
                      <img src={elemento.imagenUrl} alt="Imagen" style={{ width: '50px', textAlign: 'center' }} />
                    ) : (
                      <p>No files</p>
                    )}
                  </td>

                  <td><Button color='primary' onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button></td>
                  <td><Button color='danger' onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* Modal para insertar */}

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <Input classname="form-control block" readOnly required type="text" value={this.state.data.length + 1}></Input>
            </FormGroup>

            <FormGroup>
              <label>Personaje:</label>
              <Input classname="form-control" name="personaje" required type="text" onChange={this.handleChange}></Input>
            </FormGroup>

            <FormGroup>
              <label>Anime:</label>
              <Input classname="form-control" name="anime" required type="text" onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
              <label>Imagen:</label>

              <Input type="file" onChange={this.handleImageChange} />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => this.insertar()}>Insertar</Button>
            <Button color='danger' onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        {/* Modal para modificar */}

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Actualizar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <Input classname="form-control block" readOnly required type="text" value={this.state.form.id}></Input>
            </FormGroup>

            <FormGroup>
              <label>Personaje:</label>
              <Input classname="form-control" name="personaje" required type="text" onChange={this.handleChange} value={this.state.form.personaje}></Input>
            </FormGroup>

            <FormGroup>
              <label>Anime:</label>
              <Input classname="form-control" name="anime" required type="text" onChange={this.handleChange} value={this.state.form.anime}></Input>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => this.editar()}>Actualizar</Button>
            <Button color='danger' onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Base;
