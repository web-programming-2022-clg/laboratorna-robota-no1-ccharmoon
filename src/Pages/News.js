import React, {Component} from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";


export default class News extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2} >
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Summer Diary</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Care for embroidered</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Etnodim project</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://etnodim.com.ua/upload/iblock/ef4/schodennik_lita.jpg"/>
                                    <p>
                                      Remember, we were sent to the village 
                                      to the grandmother with a grandfather? 
                                      There we picked cherries, rode bicycles, 
                                      were afraid of the herb of geese, or green 
                                      apricots and apples, swam in the lake and were happy.
                                    </p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://etnodim.com.ua/upload/iblock/d6d/doglyad_za_vishivankami.jpg"/>
                                    <p>
                                      Tips from Etnodim on caring for our products, 
                                      because we are now together for a long time.
                                    </p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://etnodim.com.ua/upload/iblock/e9a/etnodim_povitrylia.jpg"/>
                                    <p>
                                      In addition to deep symbolism, descriptions of rituals
                                      and customs of the people, fairy tales give us characters,
                                      in which we can see ourselves. 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        )
    }
}