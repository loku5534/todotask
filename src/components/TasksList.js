import { React,useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import updateModal from '../Modals/todoUpdate'

function TasksList({tasks, deleteHandler}) {
    const deleteTask = (index) => {
        deleteHandler(index);
    }
    const [modalShow, setModalShow] = useState(false);
   
    return (
        <div className='tasks'>
            <ul style={{
                listStyle: 'none',
                padding: '0px',
            }}>
                {
                    tasks.map((task, i) => {
                        return (
                            <li key={i} className='my-2'>
                                <Card>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className='m-0 p-0'>{task}</p>
                                            <div className='d-flex'>
                                                <Button variant='success' className='me-2' onClick={() => setModalShow(true)}>Edit</Button>
                                                <Button variant='danger' onClick={() => deleteTask(i)}>Delete</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TasksList
