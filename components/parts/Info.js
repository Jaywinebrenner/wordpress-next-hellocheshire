

export default function Info({title, url, alt, body}) {

    return (
      <div className="info">

          <div className="info__left-col">
             <img src={url} alt={alt}/> 
          </div>

          <div className="info__right-col">
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
          
      </div>
    )
  }