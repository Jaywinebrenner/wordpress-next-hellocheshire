

export default function UserContent({name, email, image, quote}) {

    return (
        <div className="userContent__container">
            <h1>{name}</h1>
            <h6>{email}</h6>
            <img src={image.url}/> 
            <div dangerouslySetInnerHTML={{ __html: quote}}/>
        </div>
    )
  }