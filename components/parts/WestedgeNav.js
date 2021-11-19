




export default function WestedgeNav() {

    return (
        <div className="westedgeNav">
            <div className="westedgeNav__left">
                <img src="/images/logo-1.svg"/>
            </div>

            <div className="westedgeNav__right">
                <a className="desktop-anchor" href="/">VISION</a>
                <a className="desktop-anchor" href="/about">RETAIL</a>
                <a className="desktop-anchor" href="/user">RESIDENCE</a>
                <a className="desktop-anchor" href="/westedge/team">OFFICE</a>
                <a className="desktop-anchor" href="/westedge/team">TEAM</a>
                {/* <svg className="hamburger" viewBox="0 0 150 80" width="40" height="40">
                    <rect className="hamburger" width="80" height="10"></rect>
                    <rect className="hamburger" y="30" width="80" height="10"></rect>
                    <rect className="hamburger" y="60" width="80" height="10"></rect>
                </svg> */}
            </div>

        </div>
    )
  }