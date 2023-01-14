
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/navbar';
import Back from './components/back';
import Card from './components/services';
import Gall from './components/gallery';
import Abt from './components/about';
import Foot from './components/footer';
import Cont from './components/contact';
import FrameComponent from './components/map';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Vid from './components/videos';
import Test from './components/testimonials';
import Mapimg from './components/map';
import mymap from './components/images/image-25.png';
import comp from './components/images/IMAGE-1.png';
import escrap from './components/images/IMAGE-2.png';
import mscrap from './components/images/IMAGE-6.png';
import cews from './components/images/IMAGE-4.png';
import oms from './components/images/IMAGE-5.png';
import bs from './components/images/IMAGE-7.png';
import cs from './components/images/IMAGE-3.png';
import irust from './components/images/IMAGE.png';
import ijrust from './components/images/Image-8.png';
import iscrappic from './components/images/IMAGE-9.png';
import tractest from './components/images/tractor.png';



function App() {
  return (
    <>
     <Navbar/>
     <Back/>
     
     
      <h2  id="#services" className='service-heading'>Services</h2>

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center flex-wrap'>
          <div className='col-xxl-3'>
            <Card imgsrc={mscrap}
              title="Metal Scrap"
              descrip="We provide buying services for metal scrap and help you fetch the best value for your material." />
          </div>
          <div className='col-xxl-3'>
            <Card imgsrc={cews}
              title="Cable-Electric Wire Scrap"
              descrip="We provide buying services for cable-electric wire scrap that are usually discarded by electricians." />
          </div>
          <div className='col-xxl-3'>
            <Card imgsrc={escrap}
              title="E-Scrap"
              descrip="We are engaged in buying E-Scrap for our esteemed clients at best market prices." />
          </div>
          <div className='container-fluid'>
            <div className='row d-flex justify-content-center flex-wrap'>
              <div className='col-md-3'>
                <Card imgsrc={oms}
                  title="Old-Machinery Scrap"
                  descrip="When you need to sell old machinery, we help you get the best value currently floating in the market." />
              </div>
              <div className='col-md-3'>
                <Card imgsrc={bs}
                  title="Battery Scrap"
                  descrip="We provide buying services for battery scrap that are usually discarded by electricians." />
              </div>
              <div className='col-md-3'>
                <Card imgsrc={cs}
                  title="Construction Scrap"
                  descrip="We take care of all construction scrap and help you fetch the best value for all of your materials." />
              </div>
            </div>
          </div>
        </div>
      </div>



      
            <Abt imgsrc={comp} />
          



      <h2 id="gallery" className='gallery-heading'>Gallery</h2>

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center flex-wrap'>
          <div className='col-md-3 mb-5'>
            <Gall className='img-responsive' imgsrc={irust} />
          </div>
          <div className='col-md-3 mb-5'>
            <Gall className='img-responsive' imgsrc={ijrust} />
          </div>
          <div className='col-md-3 mb-5'>
            <Gall className='img-responsive' imgsrc={iscrappic} />
          </div>
        </div>
      </div>

      
     

      <Vid />
      <Test imgsrc={tractest} />
     
      <Cont />
      <div className='container-fluid d-flex justify-content-center align-content-center'>
        
        <Mapimg imgsrc={mymap}/>
        
      </div>
      <Foot/>










    </>
  );
}

export default App;
