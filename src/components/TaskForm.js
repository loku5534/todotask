import React, { useState } from 'react'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function TaskForm({handler}) {
    const [task, setTask] = useState('');
    const submit = (e) =>{
        e.preventDefault();
        if(task===''){
            alert('Please add the task!');
        } else{
            handler(task);
            setTask('');
        }
    }
    return (
            <Form onSubmit={submit}>
                <Row>
                    <Col md="12">
                        <h1>Todo Application</h1>
                    </Col>
                    <Col md='8'>
                        <Form.Control type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                    </Col>
                    <Col md='4'>
                        <Button type="submit" variant="primary">Add New Task</Button>
                    </Col>
                </Row>
                <h6>© 2023 By Baldino | All Rights Reserved | Fateeh Don</h6>
            </Form>
    )
}

export default TaskForm
