import React from 'react';
import FacebookPost from '../FacebookPost/';
import image1 from '../Image/image1.jpg';
import image2 from '../Image/image2.jpg';
import image3 from '../Image/image3.jpg';
import image4 from '../Image/image4.jpg';
import image5 from '../Image/image5.jpg';
import image6 from '../Image/image6.jpg';
import image7 from '../Image/image7.jpg';
import image8 from '../Image/image8.jpg';


const FbDetail = () =>{
    return (
        <div>
             <FacebookPost 
      fbdetails = {{
      images : [
       image1,
       image2,
       image3,
       image4,
       image5,
       image6,
       image7,
       image8
      ],
      }}
     />
        </div>
    )
}

export default FbDetail