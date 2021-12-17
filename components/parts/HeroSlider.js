import Slider from "react-slick";
import React, {useState, useEffect} from "react";


export default function HeroSlider({people}) {

  const [isActive, setIsActive] = useState(false)

    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
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
                  <div className="hero-slider__text-container" dangerouslySetInnerHTML={{ __html: person.text}}/>
                  <div className="hero-slider__small-image-container">
                    <img className={`hero-slider__small-image ${person.is_active ? "active" : ""}`} src={person.image.url}/>
                    <p>{person.name}</p>
                  </div>
                </div>
              )
            })
            }
        </Slider>
      </div>
    );
  }
  