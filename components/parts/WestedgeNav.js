
import Hamburger from 'hamburger-react';
import React, {useState, useEffect} from 'react';



export default function WestedgeNav() {

    const [burgerOpen, setBurgerOpen] = useState(false);

    const [isMobile, setMobile] = useState(false);
    console.log("burgeropen", burgerOpen)
  
    const updateMobile = () => {
      window.innerWidth <= 700 ?
        setMobile(true) :
        setMobile(false);
  
      window.addEventListener("resize", () => {
        window.innerWidth <= 700 ?
          setMobile(true) :
          setMobile(false);
      })
    }
    useEffect(() => {
        updateMobile()
      }, [])
      

    return (
        <div className="westedgeNav">
            <div className="westedgeNav__left">
                <img src="/images/logo-1.svg"/>
            </div>

            {/* <div className="westedgeNav__right navlinks-open"> */}
            <div className={`westedgeNav__right ${burgerOpen ? 'nav__links--open' : ''}`}>
                {
                !isMobile && 
                <>
                <a className="desktop-anchor" href="/">VISION</a>
                <a className="desktop-anchor" href="/about">RETAIL</a>
                <a className="desktop-anchor" href="/user">RESIDENCE</a>
                <a className="desktop-anchor" href="/westedge/team">OFFICE</a>
                <a className="desktop-anchor" href="/westedge/team">TEAM</a>
                </>
                }
               {
                isMobile && burgerOpen &&
                <>
                <img src="/images/logo-1.svg"/>
                <div className="mobile-nav-button-wrapper">
                    <a className="desktop-anchor" href="/">VISION</a>
                    <a className="desktop-anchor" href="/about">RETAIL</a>
                    <a className="desktop-anchor" href="/user">RESIDENCE</a>
                    <a className="desktop-anchor" href="/westedge/team">OFFICE</a>
                    <a className="desktop-anchor" href="/westedge/team">TEAM</a>
                </div>
                </>
                }
                
                {/* <svg className="hamburger" viewBox="0 0 150 80" width="40" height="40">
                    <rect className="hamburger" width="80" height="10"></rect>
                    <rect className="hamburger" y="30" width="80" height="10"></rect>
                    <rect className="hamburger" y="60" width="80" height="10"></rect>
                </svg> */}
                {isMobile && <Hamburger            
                    toggled={burgerOpen}
                    toggle={setBurgerOpen}
                    rounded 
                />}
            </div>

        </div>
    )
  }