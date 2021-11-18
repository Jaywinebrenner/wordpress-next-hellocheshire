



export default function WestedgeTeam({main_image_url, contact_row, content_row, sub_image_url}) {

  console.log("contact row . contact", contact_row[0].contact)
  const contactRows = contact_row

  return (
    <div className="westedge-team">

      <div className="westedge-team--top">

        <div className="westedge-team--top--left">
          <div className="header">Connect Team</div>
          <hr></hr>
        </div>
        
        <div className="westedge-team--top--images">
            <img style={{width: "450px"}} src={main_image_url}/> 
            <img style={{width: "150px"}} src={sub_image_url}/> 
        </div>

      </div>


      <div className="westedge-team--contact-wrapper">
          {contact_row.map((contact) => {
              console.log("contact",contact)
              return (
                <>
                  <div className="contact-col">
                    <p>{contact.contact.title}</p>
                    <p>{contact.contact.contacts.map((con) => {
                      return (
                        <div>
                          <p className="name">{con.name}: <span className="phone">{con.phone}</span></p>
                          <p></p>
                        </div>
                      )
                    })}</p>
                  </div>
                </>
              )
          })}
      </div>

      </div>
    )
  }