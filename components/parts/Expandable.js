

import React, {useEffect, useState, useRef} from 'react';
import Button from '../Button.js'


export default function Expandable({background_image_url, main_image_url, logos, title, content}) {

  const [isMobile, setMobile] = useState(false);

  // Toggleing textContent via Ref
  const contentRef = useRef(null);
  const handleButtonClick = () => {
    console.log("BUTTON CLICK", contentRef)
    contentRef.current.classList.toggle("expandable__textContent--active");
  }


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
    updateMobile();
  }, [])



  return (
      <section className="expandable">
        <div className="expandable__background">
        <img className="expandable__image" src={background_image_url}/>
        </div>
        <div className="expandable__content">
            <div className="expandable__content-wrapper">
              <div className="expandable__logos">
                {logos.map((logo, i) => {
                  return (
                    <img key={`expandable__logo-${i}`} className="expandable__logo" src={logo.logo.url}/>
                  )
                })}
              </div>
              <div className="expandable__title">
                <h2>{title}</h2>
              </div>
 
                {isMobile && <Button onClick={handleButtonClick} text={"Read More"} type="hr"  />}
     
         

                <div className="expandable__body">
                  <div className="expandable__textContent" ref={contentRef} dangerouslySetInnerHTML={{ __html: content}}/>
                </div>
          

            </div>
            <div className="expandable__image-wrapper">
              <img className="expandable__image" src="/images/expandable-image.jpg"/>
            </div>

        </div>
    

      </section>
    )
  }