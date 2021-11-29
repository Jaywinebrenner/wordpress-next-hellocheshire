
import React, {useEffect, useState} from 'react';


export default function WestedgeOffice({main_image_url, sub_image_url, title, content, video_url}) {

  const [isMobile, setMobile] = useState(false)

  const updateMobile = () => {
    window.innerWidth <= 700 ?
      setMobile(true) :
      setMobile(false);

    window.addEventListener("resize", () => {
      window.innerWidth <= 700 ?
        setMobile(true) :
        setMobile(false);
    })
  }
  
  useEffect(() => {
    updateMobile()
  }, [])

  return (
      <div className="westedgeOffice">
        <div className="westedgeOffice__page-title">

          <div className="westedgeOffice__page-title--background">
          {
            <video src={video_url} autoPlay loop muted playsInline />
          }
          </div>

          {/* <div className="westedgeOffice__page-title--wrapper"> */}
            <div className="westedgeOffice__page-title--img-wrapper">
              <img className="westedgeOffice__page-title--main-image" src={main_image_url}/> 
              <div className="westedgeOffice__page-title--subimage-wrapper">
                <img className="westedgeOffice__page-title--sub-image" src={sub_image_url}/> 
              </div>
            </div>

            <div className="westedgeOffice__page-title--content-wrapper">
              <h1>{title}</h1>
              <hr></hr>
              <p>{content}</p>
            </div>
          {/* </div> */}


        </div>
      </div>
    )
}