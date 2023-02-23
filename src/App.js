import logo from './logo.svg';
import './App.css';
import { Container, Row , Col} from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  }
  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((task, i) => {
      if(index === i){
        return false;
      }
      return true;
    });
    setTasks(filteredTasks);
  }
  return (
    <Container>
      <Row>
        <Col md="8" className='mx-auto py-5'>
          <TaskForm handler={addNewTask}/>
          <TasksList tasks={tasks} deleteHandler={deleteTask}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
