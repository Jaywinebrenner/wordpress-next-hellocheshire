
import React, {useEffect, useState} from 'react';


export default function WestedgeTeam({main_image_url, contact_row, content_row, sub_image_url}) {

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

  console.log("contact row . contact", contact_row[0].contact)

  return (
    <div className="westedge-team">

      <div className="westedge-team--top">

        <div className="westedge-team--top--left">
          <div className="header">
              <p>CONNECT</p>
              <h1>Team</h1>
            </div>
          <hr></hr>
          <div className="content">

            {content_row.map((con, i) => {
              return (
                <div className="content--row" key={`content-row-row-${i}`}>
                  <p>{con.row.title}</p>
                  <div className="content--row--image-wrapper">
                    {con.row.logos.map((img, i) => {
                      return (
                        <img className="logo" src={img.logo.url} key={`content--row--image-wrapper${i}`}/> 
                      )
                    })}
                  </div>
                </div>
              )
            })}

          </div>
        </div>

        <div className="westedge-team--top--images">
            <img className="main-image" src={main_image_url}/> 
            <div className="sub-image">
              <img src={sub_image_url}/> 
            </div>
        </div>

      </div>

      {
        isMobile && <hr></hr>
      }


      <div className="westedge-team--contact-wrapper">
          {contact_row.map((contact, i) => {
              console.log("contact",contact)
              return (
                <>
                  <div className="contact-col" key={`contact-col-${i}`}>
                    <h3 key={`team-title-${i}`}>{contact.contact.title}</h3>
                    {contact.contact.contacts.map((con, i) => {
                      return (
                        <div key={`contact-name-phone-${i}`}>
                          <p className="name">{con.name}: <span className="phone">{con.phone}</span></p>
                          <p></p>
                        </div>
                      )
                    })}
                  </div>
                </>
              )
          })}
      </div>

      </div>
    )
  }