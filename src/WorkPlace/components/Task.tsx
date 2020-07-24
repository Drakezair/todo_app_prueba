import React, {useState} from 'react';


import { Card, Row, Col, Image } from 'react-bootstrap';

// ICONS
import DotsIcon from '../../Assets/icons/dot.png';
import EyeIcom from '../../Assets/icons/eye.png';
import TrashIcon from '../../Assets/icons/trash.png';
import WorkplaceRepository from '../repository/WorkplaceRepository';

interface TaskProps {
    active: boolean;
    dateEnd: string;
    avatar: string;
    name: string;
    title: string;
    desc: string;
    id?: string;
}

export const Task:React.FC<TaskProps> = ({title, desc, name, avatar, dateEnd, active, id=''}) => {

    const [menu,  setMenu] = useState(false);

    const handleMenu =() =>{
        setMenu(!menu)
    }

    const handleDelete = () =>{
        WorkplaceRepository.removeTask(id)
        handleMenu()
    }

    return(
        <Card className='m-3 boder-0' >
            <Card.Body className='border-0 p-3' >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                {
                                    active ?
                                        <p style={{color: '#2DC09D'}} className='text-16' ><strong>Activa</strong></p>
                                        :
                                        <p style={{color: '#DC3646'}} className='text-16' ><strong>Finalizada</strong></p>
                                }
                            </Col>
                            <Col></Col>
                        </Row>
                        <div style={{height: 2, background: '#F0F3FF'}} ></div>
                        <Row className='my-3'>
                            <Col>
                                <Image src={avatar} height={20} roundedCircle /> <p className='text-12 d-inline ml-2 mb-0' >{name}</p>
                            </Col>
                        </Row>
                        <Row  >
                            <Col >
                                <div style={{borderLeft: '2px solid #2DC09D'}} className='pl-3 pr-3' >
                                    <Row>
                                        <Col>
                                            <p className='mb-0' ><strong>{title}</strong></p>
                                        </Col>
                                        <Col className='text-right text-12' >
                                            <button style={{background: 'none', border: "none"}} onClick={handleMenu} >
                                                <img height={26} src={DotsIcon} alt=':' />
                                            </button>
                                                {
                                                    menu ?
                                                    <div style={{background: 'white', boxShadow: '1px 1px 17px #00000059', position: 'absolute', top: 26, right: 20, borderRadius:10}} className='p-3 d-flex flex-column align-items-start' >
                                                        <span className='d-block mb-2'>
                                                            <img height={20} src={EyeIcom} alt='eye' />
                                                            <p className='d-inline mb-0' style={{color: '#405096'}} ><strong>Ver tarea</strong></p>
                                                        </span>
                                                        <span className='d-block' style={{cursor: 'pointer'}} onClick={handleDelete} >
                                                            <img height={20} src={TrashIcon} alt='eye' />
                                                            <p className='d-inline mb-0' style={{color: '#babcc5'}} ><strong>borrar</strong></p>
                                                        </span>
                                                    </div> : null
                                                }
                                        </Col>
                                    </Row>
                                            <p className='text-12' >{desc}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}