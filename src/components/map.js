// import React from "react";
// const FrameComponent = () => {
//     return (
//       <div className="map-parent">
//         <iframe
//           className="map-frame"
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1855647.0264792524!2d56.4435704!3d24.7162149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb4d346cfd24950a!2sScrap%20Buyer%20AE!5e0!3m2!1sen!2s!4v1673191000895!5m2!1sen!2s"
//         />
//       </div>
//     );
//   };
  
//   export default FrameComponent;

import React from "react";

const Mapimg=(props)=>{
    return(
        <><img src={props.imgsrc} className="map-img" alt="..." />
        </>
    )
}
export default Mapimg;