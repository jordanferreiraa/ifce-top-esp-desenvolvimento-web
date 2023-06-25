import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'bootstrap-4-react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'

export default function EditUser() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");

  const location = useLocation()
  const id = location?.state?.id

  async function findOneUser() {
    console.log(`ID: ${id}`)
    if(id !== '') {
      const userRef = doc(db, 'topicos', id)
      await getDoc(userRef)
      .then((user)=>{
        setNome(user.data().nome),
        setSobrenome(user.data().sobrenome),
        setIdade(user.data().idade)
      })
      .catch((error)=>{
        alert(`Erro ao buscar ${error}`)
      })
    }
  }

  useEffect(() => {
    findOneUser()
  }, [])

  async function handleEditSave(e) {
    e.preventDefault()
    try {
      
      const docRef = doc(db, "topicos", id)
      await updateDoc(docRef, {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
      })
      .then(()=>{
        alert('Dados Atualizados')
      })

    } catch (error) {
      console.log(error)
      alert('Erro ao editar dados!')
    }
  }
  
  return(
    <div className='container'>
      <Form onSubmit={handleEditSave}>
        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Nome</label>
              <Form.Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Sobrenome</label>
              <Form.Input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Idade</label>
              <Form.Input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>

        <Button primary type="submit">Atualizar</Button>
      </Form>
    </div>
  )
}