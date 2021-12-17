import React, {useState, useEffect} from 'react'



export default function AboutTeam({background}) {
    // console.log("background", background)
    const [currentBackground, setCurrentBackground] = useState(background)
    console.log("currentBackground", currentBackground)

    const setInitialBackground = () => {
        console.log("BG in set initial", background)
        setCurrentBackground(background)
        console.log("CBG in set initial", currentBackground)
    }
    useEffect(() => {
        setInitialBackground()
      }, [])

    const handleChange = (event) => {
        console.log(event.target.value)
        setCurrentBackground(event.target.value);
        console.log("background in handlechage,", currentBackground)
      }

    return (

        <div className="aboutTeam">
            <h1>About Our Team</h1>
            <h4>Pick our Team Background if you please</h4>
            <div className="aboutTeam__background">
                {(currentBackground === "One") && <img src="/images/psychedelic1.svg"/>}
                {(currentBackground === "Two") && <img src="/images/psychedelic2.svg"/>}
                {(currentBackground === "Three") && <img src="/images/psychedelic3.svg"/>}
            </div>

            <div className="aboutTeam__container">
                <div className="aboutTeam__pick-div">
                    <form onClick={event => setCurrentBackground(event.target.value)}>
                        <label>
                            <input 
                            type="radio" 
                            value="One"
                            name="Background Option"
                            onChange={handleChange}
                            checked={currentBackground === "One"}
                            /> 
                        Background #1
                        </label>
                        <label>
                            <input 
                            type="radio" 
                            value="Two"
                            name="Background Option" 
                            onChange={handleChange}
                            checked={currentBackground === "Two"}
                            /> 
                            Background #2
                        </label>
                        <label>
                            <input 
                            type="radio" 
                            value="Three"
                            name="Background Option" 
                            onChange={handleChange}
                            checked={currentBackground === "Three"}
                            /> 
                        Background #3
                        </label>
                    </form>

                </div>
                <div className="aboutTeam__circle-container">
                    <img className="circle-image" src="/images/p-circle1.svg"/>
                </div>
                <div className="aboutTeam__circle-container">
                    <img className="circle-image" src="/images/p-circle2.svg"/>
                </div>
                <div className="aboutTeam__circle-container">
                    <img className="circle-image" src="/images/p-circle3.svg"/>
                </div>

            </div>

        </div>
    )
  }