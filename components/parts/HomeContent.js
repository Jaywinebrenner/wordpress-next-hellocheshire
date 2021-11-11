
export default function HomeContent({title, description, url, toggle}) {

    return (
            <div className="homeContent__container">
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={url}/> 
                {toggle}
            </div>
    )
  }