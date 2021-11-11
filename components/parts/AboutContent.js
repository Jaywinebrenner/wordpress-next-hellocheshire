

export default function AboutContent({title, url, description}) {

    return (

        <div className="aboutContent__container">
            <h5>{title}</h5>
            <img style={{
                width: "150px"
            }} src={url}/> 
            <div dangerouslySetInnerHTML={{ __html: description}}/>
        </div>
    )
  }