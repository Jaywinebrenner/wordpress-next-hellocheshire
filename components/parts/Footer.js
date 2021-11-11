import React, { useState, useEffect } from "react";



const Footer = () => {
  const [isMobile, setMobile] = useState(false)

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
    <div className={`footer`}>
      <div className="footer__inner container container--minor">
        <div className="footer__content">
          <div className="footer__title-wrapper">
            <p>For additional information on office and retail leasing, or {!isMobile && (<br />)} the residences, click below.</p>
            <div className="footer__button-list">
              {[
                {
                  title: 'retail leasing',
                  href: '/retail'
                },
                {
                  title: 'residence offerings',
                  href: '/residence'
                },
                {
                  title: 'office leasing',
                  href: '/office'
                }
              ].map((item, i) => {
                return <button key={`button-${i}`} text={item.title} href={item.href} />
              })}
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="footer__after container">
        {/* <img src="/images/logos/logo-small.svg" alt="westedge logo" /> */}
        <p>12101 W Olympic, Los Angeles</p>
      </div>
    </div>
  );
};

export default Footer;
