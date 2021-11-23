

import React, {useEffect, useState} from 'react';


export default function Expandable({background_image_url, main_image_url, logos, title, content}) {

  const [isMobile, setMobile] = useState(false)

  console.log("Logos / Expand", logos)
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
      <section className="expandable">
        <div className="expandable__background">
        <img className="expandable__image" src={background_image_url}/>
        </div>
        <div className="expandable__content">
            <div className="expandable__content-wrapper">
              <div className="expandable__logos">
                {logos.map((logo, i) => {
                  console.log("Logo url", logo)
                  return (
                    <img key={`expandable__logo-${i}`} className="expandable__logo" src={logo.logo.url}/>
                  )
                })}
              </div>
              <div className="expandable__title">
                <h2>{title}</h2>
              </div>
              <div className="expandable__body">
                <div dangerouslySetInnerHTML={{ __html: content}}/>
              </div>

            </div>
            <div className="expandable__image-wrapper">
              <img className="expandable__image" src="/images/expandable-image.jpg"/>
            </div>

        </div>
    

      </section>
    )
  }