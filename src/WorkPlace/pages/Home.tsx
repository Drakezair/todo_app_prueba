import React, {useState, useEffect} from 'react';

// BOOTSTRAP COMPONENT
import { Col, Row, Image, Modal, Form, Button } from 'react-bootstrap';


// Component
import { Task } from '../components';
import DatePicker from 'react-datepicker';

import { getCurrentUser } from "../../Shared/utils/hooks";
import { User } from '../../Auth/interfaces/User';
import WorkplaceRepository from '../repository/WorkplaceRepository';

export const Home:React.FC = () => {

    const currentUser:any = getCurrentUser()
    const userData = JSON.parse(currentUser)

    const [formData, setFormData] = useState<any>({dateEnd: new Date()});
    const [modal, setModal] = useState<any>(false);
    const [taskList, setTaskList] = useState<any>();

    useEffect(()=>{
        WorkplaceRepository.getTask((snapshot:any)=>{
            console.log(snapshot)
            setTaskList(snapshot)
        })
    },[])

    const DateString = () =>{
        let d = new Date();
        let dayOfWeek;
        let month
        switch(d.getDay()){
            case 1:
                dayOfWeek = 'Lunes'
                break;
            case 2:
                dayOfWeek = 'Martes'
                break;
            case 3:
                dayOfWeek = 'Miercoles'
                break;
            case 4:
                dayOfWeek = 'Jueves'
                break;
            case 5:
                dayOfWeek = 'Viernes'
                break;
            case 6:
                dayOfWeek = 'Sabado'
                break;
            case 7:
                dayOfWeek = 'Domingo'
                break;
        }

        switch(d.getMonth()){
            case 0:
                month = 'Enero'
                break;
            case 1:
                month = 'Febrero'
                break;
            case 2:
                month = 'Marzo'
                break;
            case 3:
                month = 'Abril'
                break;
            case 4:
                month = 'Mayo'
                break;
            case 5:
                month = 'Junio'
                break;
            case 6:
                month = 'Julio'
                break;
            case 7:
                month = 'Agosto'
                break;
            case 8:
                month = 'Septiembre'
                break;
            case 9:
                month = 'Octubre'
                break;
            case 10:
                month = 'Noviembre'
                break;
            case 11:
                month = 'Diciembre'
        }
        return <p className='text-12' >{`${dayOfWeek}, ${d.getDate()} de ${month}`}</p>
    }


    const handleInput = (key:string, value:any) =>{
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = () =>{
        WorkplaceRepository.addTask(userData.email, userData.name, userData.avatar, formData.title, formData.desc, formData.dateEnd?.toUTCString())
        handleModal()
    }

    const handleModal = () =>{
        setModal(!modal)
    }

    return(
        <div>
        <Modal show={modal} centered >
            <Modal.Header>
                <h3>Agrega una tarea</h3>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={()=>handleSubmit()} >
                    <Form.Control onChange={(e)=>handleInput('title', e.target.value)} placeholder='title' className='my-2' />
                    <Form.Control onChange={(e)=>handleInput('desc', e.target.value)} as="textarea" className='my-2' rows={3} placeholder='description' />
                    <DatePicker
                        selected={formData.dateEnd}
                        onChange={date => handleInput("dateEnd",date)}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>handleSubmit()} block >add task</Button>
            </Modal.Footer>
        </Modal>
        <Row>
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    margin: 20,
                    height: 64,
                    width: 64,
                    background: '#425195',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 9999
                }}
                onClick={()=>handleModal()}
            >
                <p style={{fontSize:80, marginLeft: 8, color: 'white'}}>+</p>
            </div>
            <Col>
                <Row>
                    <Col>
                        <Row className='p-5 border-bottom bg-white' >
                            <Col className='col-8' >
                                <p className='text-24 mb-0 mt-3' ><strong>To do list</strong></p>
                                <DateString />
                            </Col>
                            <Col className='col-4 ' >
                                <Image src={userData.avatar} height={80} roundedCircle />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <p className='m-3' ><strong>Tareas</strong> <span className='text-14' >()asignadas</span></p>
                            </Col>
                        </Row>
                        {
                            taskList && taskList[0] ?
                                taskList.map((item:any, i:number)=>{
                                    return <Row key={i} >
                                        <Col>
                                            <Task {...item}  />
                                        </Col>
                                    </Row>
                                }).reverse()
                            : null
                        }
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
    )
}