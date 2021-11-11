import Link from 'next/link'

export default function Footer({header, buttonOneText, buttonTwoText, buttonThreeText, address, bgImageOne, bgImageTwo, footerIcon}) {

  return (
    <div className="footer">

      <div className="footer__container">

        <div className="footer__container--inner">
            <h4>{header}</h4>
            <div className="footer__container--button-wrapper">
              <button>{buttonOneText}</button>
              <button>{buttonTwoText}</button>
              <button>{buttonThreeText}</button>
            </div>
              <hr></hr>
            <div className="footer__container--link-wrapper">
                <Link href="www.bing.com">
                    <a>LEARN MORE</a>
                </Link>
                <img className="icon" src="/images/box.png"/> 
            </div>
          </div>
      </div>

      <div className="footer--logo-wrapper">
        <img src={footerIcon}/> 
        <p>{address}</p>
      </div>

    </div>
  )
}