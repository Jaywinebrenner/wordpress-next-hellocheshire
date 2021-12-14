import Slider from "react-slick";


export default function HeroSlider({people}) {
    console.log("people", people)

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "inner-slider",
    }
    return (
      <div className="hero-slider">
        <h1>Meet our Team</h1>
        <Slider {...sliderSettings}>
            {
            people && 
            people.map((person) => {
              return (
                <div className="hero-slider__background">
                  <img className="hero-slider__image" src={person.image.url}/>
                  <p>{person.name}</p>
                </div>
              )
            })
            }
        </Slider>
      </div>
    );
  }
  