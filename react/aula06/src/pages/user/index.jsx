import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import {db} from "../../services/firebaseConnection"
import { addDoc, collection, getDocs } from 'firebase/firestore';

export default function MyUser() {

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [idade, setIdate] = useState()

  async function registerUser(e) {
    e.preventDefault()

    try {
      
      const docRef = await addDoc(collection(db, "topicos"), {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
      })

      setNome('')
      setSobrenome('')
      setIdate('')
      alert('Gravou')

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className='container'>
      <Form onSubmit={registerUser}>
        <Form.Group>
          <Row>
            <Col col="sm-6" >
              <label>Nome</label>
              <Form.Input type="text" value={nome} onChange={ (e)=>setNome(e.target.value) } />
              {/* <Form.Text text="muted">Nunca compartilharemos seu e-mail com mais ninguém.</Form.Text> */}
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6" >
            <label>Sobrenome</label>
            <Form.Input type="text" value={sobrenome} onChange={ (e)=>setSobrenome(e.target.value) } />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6" >
            <label>Idade</label>
            <Form.Input type="number" value={idade} onChange={ (e)=>setIdate(e.target.value) } />
            </Col>
          </Row>
        </Form.Group>

        {/* <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Lembrar senha</Form.CheckLabel>
          </Form.Check>
        </Form.Group> */}
        <Button primary type="submit">Submit</Button>
      </Form>
    </div>
  )
}