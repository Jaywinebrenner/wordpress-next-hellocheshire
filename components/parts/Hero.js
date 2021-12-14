

export default function Hero({title, url, toggleHero}) {

  return (
    <div 
    // style={{ 
    //   backgroundImage: `url(${url})`, backgroundRepeat: "no-repeat, repeat", backgroundSize: "100% 100%"
    // }} 
    className="hero">
        <h3 className="hero__x" onClick={() => toggleHero()}>x</h3>
        <h1>{title}</h1>
        <div className="hero__background"> 
          <img src={url}/> 
        </div>
    </div>
  )
}
