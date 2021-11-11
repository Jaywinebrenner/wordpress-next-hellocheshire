

export default function Hero({title, url, toggleHero}) {

  return (
    <div className="hero__container">
        <h3 onClick={() => toggleHero()}>x</h3>
        <h1>{title}</h1>
        <img src={url}/> 
    </div>
  )
}
