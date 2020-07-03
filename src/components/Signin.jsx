import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardTitle, Alert } from 'reactstrap';
import { login } from "../utils/apicalls.jsx";
import PostList from './posts/PostList';
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginMessage: null
    }// las funciones tengo que ponerle ese bind
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSignin = this.onSignin.bind(this);
  }
  handleUsernameChange(e){// implementacion de la funciones de arriba
    this.setState({username:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  onSignin(e) {// implementacion de la funcion de aariba que llama a otra
    e.preventDefault();
    const {// esto pude ser tb this.state.username
      username,
      password
    } = this.state;
    //Check valid user in the database
    login(username, password).then((res) => this.checkLogin(res, username));
  }
  checkLogin(res, username) {
    //if user is valid..
    if (res.message === 'ok') {
      sessionStorage.setItem('role', res.role);
      sessionStorage.setItem('iduser', res.id);
      sessionStorage.setItem('username', username);
      this.props.history.push("/home");
    }
    //else, show error message...
    else {
      this.setState({
        loginMessage: (<Alert color="danger">{res.message}</Alert>)
      });
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs= "9">
            <PostList/>
          </Col>
          <Col xs="3">
            <Card body>
            <CardTitle tag="h4">Login</CardTitle>
              {this.state.loginMessage}
              <Form>
                <FormGroup>
                  <Label for="aUsername">Username</Label>
                  <Input type="text" name="username" id="aUsername" placeholder="Introduce tu username" onChange={this.handleUsernameChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="aPassword">Password</Label>
                  <Input type="password" name="password" id="aPassword" placeholder="Introduce tu password" onChange={this.handlePasswordChange} required/>
                </FormGroup>
                <Button onClick={this.onSignin}>Entrar</Button>
              </Form>
            </Card>
          <Row>
            <Col tag="center">
              <Link to="/signup"><strong className="text-muted">Registrarse</strong></Link>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    );
  }
}
export default Signin;
