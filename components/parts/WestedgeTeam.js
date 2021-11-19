



export default function WestedgeTeam({main_image_url, contact_row, content_row, sub_image_url}) {

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

            <div className="content--row">
              <p>Ownership</p>
              <div className="content--row--image-wrapper">
                <img className="logo" src="/images/Hines.svg"/> 
                <img className="logo" src="/images/USAA.svg"/> 
                <img className="logo" src="/images/Philena.svg"/> 
              </div>
            </div>

            <div className="content--row">
              <p>Architecture</p>
              <div className="content--row--image-wrapper">
                <img className="logo" src="/images/Gensler.svg"/> 
                <img className="logo" src="/images/ACMartin.svg"/> 
                <img className="logo" src="/images/Group-1.svg"/> 
              </div>
            </div>

          </div>
        </div>

        <div className="westedge-team--top--images">
            <img className="main-image" src={main_image_url}/> 
            <div className="sub-image">
              <img src={sub_image_url}/> 
            </div>
        </div>

      </div>


      <div className="westedge-team--contact-wrapper">
          {contact_row.map((contact) => {
              console.log("contact",contact)
              return (
                <>
                  <div className="contact-col">
                    <h3>{contact.contact.title}</h3>
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