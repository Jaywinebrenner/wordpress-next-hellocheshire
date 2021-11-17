


export default function Navbar({title, link_one, link_two, link_three }) {

    console.log("title", title)

    return (
        <div className="navbar__container">
            <h3>{title}</h3>
           <a href="/home">{link_one}</a>
           <a href="/about">{link_two}</a>
           <a href="/user">{link_three}</a>
        </div>
    )
  }