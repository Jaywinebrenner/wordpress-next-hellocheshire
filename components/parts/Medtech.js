

export default function Medtech({navTextOne, navTextTwo, navTextThree, navTextFour, title, description, image, navIcon}) {

  return (
    <div className="medtech">
        <div className="medtech__navbar-container">

            <img className="navbar-container--icon" src={navIcon}/> 

            <div className="navbar-container--top-wrapper">
                <a>{navTextOne}</a>
                <a>{navTextTwo}</a>
            </div>
            <div className="navbar-container--bottom-wrapper">
                <a>{navTextThree}</a>
                <a>{navTextFour}</a>
            </div>

        </div>
        <div className="medtech__navbar-body">
            <div className="medtech__navbar-body--left-col">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="medtech__navbar-body--right-col">
                <img className="navbar-container--icon" src={image}/> 
            </div>

        </div>
      

    </div>
  )
}