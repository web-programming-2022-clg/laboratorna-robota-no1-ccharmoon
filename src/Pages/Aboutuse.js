
import React, {Component} from "react";
import { Card, Container, Button, CardGroup  } from "react-bootstrap";
import CarouselBox1 from "../Components/CarouselBox1";

export default class Aboutuse extends Component {
    render() {
        return (
            <>
           <CarouselBox1 />
           <Container>
               <h2 className="text-center m-4">Behind the scenes of Etnodim</h2>
               <CardGroup>
               <Card className="text-center m-4" >
                       <Card.Img  
                       variant="top" 
                       src="https://etnodim.com.ua/about/images/about-7.jpg"
                       />
                       <Card.Body>
                           <Card.Title>All the people that work here are extremely different</Card.Title>
                           <Card.Text>
                                Different temperaments, different ways 
                                of working and even rhythms of life.
                           </Card.Text>
                           <Button variant="primary">Read more</Button>
                       </Card.Body>
               </Card>
               <Card className="text-center m-4">
                       
                       <Card.Body>
                           <Card.Title>Work is something more</Card.Title>
                           <Card.Text>
                                I was struck by the attitude 
                                of these people to their work.
                           </Card.Text>
                           <Button variant="primary">Read more</Button>
                       </Card.Body>
                       <Card.Img  
                       variant="bottom" 
                       src="https://etnodim.com.ua/about/images/about-11.jpg"
                       />
               </Card>
               <Card className="text-center m-4">
                       <Card.Img  
                       variant="top" 
                       src="https://etnodim.com.ua/about/images/about-13.jpg"
                       />
                       <Card.Body>
                           <Card.Title>Etnodim has its own traditions</Card.Title>
                           <Card.Text>
                                From small manifestations of attention 
                                and care for each other every day, to 
                                rest and celebration of important dates.
                           </Card.Text>
                           <Button variant="primary">Read more</Button>
                       </Card.Body>
               </Card>              
               </CardGroup>
           </Container>
           </>
        )
    }
}

