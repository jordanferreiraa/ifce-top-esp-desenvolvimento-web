import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import {db} from "../../services/firebaseConnection"
import { addDoc, collection, getDocs, doc } from 'firebase/firestore';

export default function MyUser() {

  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [idade, setIdate] = useState()
  const [users, setUsers] = useState([])

  async function findAllUsers() {
    const usersRef = collection(db, "topicos")
    await getDocs(usersRef)
    .then((snapshot)=>{
      let lista = []
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          sobrenome: doc.data().sobrenome,
          idade: doc.data().idade
        })
      })
      setUsers(lista)
    })
  }

  useEffect(() => {
    findAllUsers()
  }, [users])
 
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

  // async function handleDelete(id) {
  //   const docRef = doc(db, "topicos", id)
  //   await deleteDoc(docRef)
  //     .then(() => {
  //       alert('Usuário Deletado')
  //     })
  //     .catch(() => {
  //       alert('erro ao deletar')
  //     })
  // }
  async function handleDelete(id) {
    try {
      const docRef = doc(db, "topicos", id);
      await deleteDoc(docRef);
      alert('Usuário deletado');
      await findAllUsers();
    } catch (error) {
      console.log(error);
      alert('Erro ao deletar usuário');
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

      <div className='container-table'>
        <h3>Lista de usuários registrados</h3>
        <ol>
        {
          users.map((item)=>(
            <li className='lista' key={item.id}>
              <b>Nome:</b> {item.nome} <br/>
              <b>Sobrenome:</b> {item.sobrenome} <br/>
              <b>Idade:</b> {item.idade}

              <button onClick={() => handleDelete(item.id)} >
                Excluir
                <i class="bi bi-trash"></i>
              </button>
            </li>
          ))
        }
        </ol>
        
      </div>

    </div>
  )
}