import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import photo1 from '../assets/Slide1.jpg';
import photo2 from '../assets/Slide2.jpg';
import photo3 from '../assets/Slide3.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo1 }
                         alt="Вишиванка"
                     />
                     <Carousel.Caption>
                         <h3>NEW IN 2022</h3>
                         <p>Things created by people who care about others will last for many years</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo2 }
                         alt="Вишиванка2"
                     />
                     <Carousel.Caption>
                         <h3>NEW IN 2022</h3>
                         <p>Things created by people who care about others will last for many years</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={ photo3 }
                         alt="Вишиванка3"
                     />
                     <Carousel.Caption>
                         <h3>NEW IN 2022</h3>
                         <p>Things created by people who care about others will last for many years</p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}