import React, { useEffect, useState } from 'react'
import MainScreen from '../../Components/MainScreen/MainScreen'
import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import './MyNotes.css'
import axios from 'axios'
const MyNotes = () => {
  const [notes, setNotes] = useState([])
  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes')
    setNotes(data)
  }
  useEffect(() => {
    fetchNotes()
  }, [])
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete this note ?')) {
    }
  }
  return (
    <>
      <MainScreen title='Welcome to the Notes App'>
        {notes.map((note) => {
          return (
            <Card className='card-container' key={note._id}>
              <Card.Header className='card-header'>
                <h3> {note.title}</h3>

                <div className='buttons'>
                  <Link to={`/note/${note._id}`}>
                    <Button variant='warning'>Edit</Button>
                  </Link>
                  <Button
                    variant='danger'
                    onClick={() => deleteHandler(note._id)}>
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Card.Body>
                <h4>
                  <Badge variant='danger'>Category - {note.category} </Badge>
                </h4>
                <blockquote className='blockquote mb-0'>
                  <p>{note.content}</p>

                  <footer className='blockquote-footer'>
                    Someone famous in{' '}
                    <cite title='Source Title'>Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          )
        })}
      </MainScreen>
    </>
  )
}

export default MyNotes
