import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import photo4 from '../assets/Slide4.jpg';
import photo5 from '../assets/Slide5.jpg';
import photo6 from '../assets/Slide6.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo4 }
                         alt="Вишиванка"
                     />
                     <Carousel.Caption>
                         <h3>ETNODIM</h3>
                         <p>Three impressions about the new team. Secrets of Etnodim. Story from an employee</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo5 }
                         alt="Вишиванка2"
                     />
                     <Carousel.Caption>
                         <h3>ETNODIM</h3>
                         <p>Three impressions about the new team. Secrets of Etnodim. Story from an employee</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo6 }
                         alt="Вишиванка3"
                     />
                     <Carousel.Caption>
                         <h3>ETNODIM</h3>
                         <p>Three impressions about the new team. Secrets of Etnodim. Story from an employee</p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}