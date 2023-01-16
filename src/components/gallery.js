import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import irust from './images/IMAGE.png';
import ijrust from './images/Image-8.png';
import iscrappic from './images/IMAGE-9.png';


const Gall = (props) => {
    return (
        <>
            <div className="glr-d ">
                <img src={props.imgsrc} className="gall-pic" />
            </div>

            <div>
<div className='container gall-slider' >
<div className="row">
<div className="col-sm-12">

</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={irust}
alt="First slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 slider-img"
src={ijrust}
alt="Second slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={iscrappic}
alt="Third slide"
/>

</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>


           
        </>
    )
}
export default Gall;