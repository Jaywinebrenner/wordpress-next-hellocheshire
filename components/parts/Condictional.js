
import Link from 'next/link'


export default function Condictional({title, body, buttonText, buttonLink, showButton, imageOne, imageTwo, showImage, backgroundImage, radioOption, radioOptionOne, radioOptionTwo, radioOptionThree}) {

    return (
        <div className="condictional">
            <div className="condictional__background">
                <img src={backgroundImage}/>
            </div>
            <div className="condictional__top">
                <div className="condictional__top--text-wrapper">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: body}}/>
                </div>
                <div className="condictional__top--image-wrapper">
                    <img src={imageOne}/>
                </div>
            </div>
            <div className="condictional__bottom">
                <div className="condictional__bottom--button-wrapper">
                {
                    showButton && buttonText && buttonLink &&
                    <Link href="/">
                      <a className="btn">{buttonText}</a>
                    </Link>
                }
                </div>
                <div className="condictional__bottom--condictional-image-wrapper">
                    <p>Condictional Image</p>
                    {showImage && <img src={imageTwo}/>}
                </div>
                <div className="condictional__bottom--radio-wrapper">
                    <p>Backend Radio Button Display</p>
                    {radioOption === "one" && <img src={radioOptionOne}/>}
                    {radioOption === "two" && <img src={radioOptionTwo}/>}
                    {radioOption === "three" && <img src={radioOptionThree}/>}

                </div>

            </div>
        </div>
    )
  }