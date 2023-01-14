import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const Vid = () => {
    return (
        <>
            <Container>
                <h1 id="videos" className="vid-heading text-center">Videos</h1>
                <div className="row d-flex justify-content-center mb-2">
                    <div className="col-md-6 p-3">
                    <div className="ratio ratio-16x9">
                    <iframe className="myvid" src="https://www.youtube.com/embed?v=exct_s9UO7I" title="YouTube video" allowFullScreen></iframe>
                   </div>
                   <h3 className="nickel text-center mt-3">Nickle scrap</h3>
                    </div>
                    <div className="col-md-6 p-3">
                    <div className="ratio ratio-16x9">
                    <iframe className="myvid" src="https://www.youtube.com/embed?v=exct_s9UO7I" title="YouTube video" allowFullScreen></iframe>
                   </div>
                   <h3 className="nickel text-center mt-3">Scrap Processing</h3>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 p-3">
                    <div className="ratio ratio-16x9">
                    <iframe className="myvid" src="https://www.youtube.com/embed?v=exct_s9UO7I" title="YouTube video" allowFullScreen></iframe>
                   </div>
                   <h3 className="nickel text-center mt-3">Scrapping Stainless Steel</h3>
                    </div>
                    <div className="col-md-6 p-3">
                    <div className="ratio ratio-16x9">
                    <iframe className="myvid" src="https://www.youtube.com/embed?v=exct_s9UO7I" title="YouTube video" allowFullScreen></iframe>
                   </div>
                   <h3 className="nickel text-center mt-3">Things to consider when scrapping steel/cast iron</h3>
                    </div>
                </div>
                

            </Container>
        </>


    )
}
export default Vid;