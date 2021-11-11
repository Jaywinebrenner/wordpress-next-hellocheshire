

export default function Info({title, url, alt, body}) {

    return (
      <div className="info">

          <div className="info__image-col">
             <img src={url} alt={alt}/> 
          </div>

          <div className="info__text-col">
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
          
      </div>
    )
  }