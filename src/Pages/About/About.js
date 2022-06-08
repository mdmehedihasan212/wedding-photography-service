import React from 'react';
import image from '../../Assets/My image/Photo Of Mehedi Hasan.jpg';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const About = () => {
    return (
        <Card className='w-full mx-auto my-5' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image} className="w-50 mx-auto my-3" />
            <Card.Body className='px-4'>
                <Card.Title>Name: Md Mehedi Hasan</Card.Title>
                <Card.Text>
                    I want to learn web development and get a job as a web developer in a reputed company in the world.
                </Card.Text>
                <Card.Text>
                    I want to reach my dream goal by working hard in the coming days to fulfill this dream of mine.
                </Card.Text>
                <Card.Text>
                    Pray to Allah for me.
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default About;