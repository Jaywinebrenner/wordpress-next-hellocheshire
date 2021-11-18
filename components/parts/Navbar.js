
import React, {useState} from 'react';

export default function Navbar({title, link_one, link_two, link_three, link_four }) {

    const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerMenuVisible((prevExpanded) => !prevExpanded)
    }

    return (
        <div className="navbar__container">
            <div className="navbar__container--desktop">
                <h3>{title}</h3>
                <a className="desktop-anchor" href="/">{link_one}</a>
                <a className="desktop-anchor" href="/about">{link_two}</a>
                <a className="desktop-anchor" href="/user">{link_three}</a>
                <a className="desktop-anchor" href="/westedge/team">{link_four}</a>
                <svg onClick={() => toggleHamburger()} className="hamburger" viewBox="0 0 150 80" width="40" height="40">
                    <rect className="hamburger" width="80" height="10"></rect>
                    <rect className="hamburger" y="30" width="80" height="10"></rect>
                    <rect className="hamburger" y="60" width="80" height="10"></rect>
                </svg>
            </div>
            {isHamburgerMenuVisible && <div className="navbar__container--mobile">
                <a className="mobile-anchor" href="/">{link_one}</a>
                <a className="mobile-anchor" href="/about">{link_two}</a>
                <a className="mobile-anchor" href="/user">{link_three}</a>
                <a className="mobile-anchor" href="/westedge">{link_four}</a>
            </div>}
        </div>
    )
  }