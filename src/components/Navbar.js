import logo from '../assets/img/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const Navbar = () => {

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     let sasaran = document.getElementById(`${e.target.id}-content`)

    //     if(e.target.id === "movielist") {
    //         window.scroll(0, sasaran.offsetTop - 90)
    //     } else if(e.target.id === "form") {
    //         window.scroll(0, sasaran.offsetTop - 90)
    //     } else {
    //         window.scroll(0, 0)
    //     }
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/#"><img src={logo} alt="logo-mtd" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobileMenu">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" activeClass="active" id="gamelist" to="game-list-container" offset={-100} href="/#">Game List</Link>
                            <Link className="nav-link" activeClass="active" id="movielist" to="movielist-content" offset={-90} smooth={true}>Movie List</Link>
                            <Link className="nav-link" activeClass="active" id="form" to="form-content" spy={true} smooth={true} offset={-90}>Form List</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar