import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Quote} from '@yozora/react-blockquote'
import '@yozora/react-blockquote/lib/esm/index.css'

import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'


const Test = (props) => {
    return (

        <>
            <Container>
                <div id="testimonials"></div>
                <div className="row d-flex justify-content-center testimg mt-5 mb-5">
                    <div className="col-lg-4 col-md-12">
                        <img src={props.imgsrc} className="testimonial-img" alt="..." />
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <Carousel>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="p-5">
                                            <div className="row">

                                                <div className="col-md-6 align-center px-5">
                                                    <h3 className="client-name">jamal shah</h3>
                                                    <blockquote>
                                                        <p className="client-testimonial">
                                                            Expert services! The are my only solution, when it come to manage my office scrap.
                                                        </p>
                                                    </blockquote>
                                                </div>
                                                <div className="col-md-6 align-center px-5">
                                                    <h3 className="client-name">Pankaj Sharma</h3>
                                                    <blockquote>
                                                        <p className="client-testimonial">
                                                            Scrap materials are hard to collect and keep. They have done an amazing job doing both.
                                                        </p>
                                                    </blockquote>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only"></span>
                                </a> */}
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only"></span>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </Container>

        </>
    )
}
export default Test;