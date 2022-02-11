import logo from '../assets/img/logo.png';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {

    const position = id => { return document.getElementById(`${id}`).offsetTop - 130 }
    const getId = id => { return document.getElementById(`${id}`) }

    const activeSwap = () => {
        const deleteActive = document.querySelectorAll(".active")
        
        if(window.scrollY > position("form-content")) {
            deleteActive[0].classList.remove('active')
            getId('form').classList.add('active')
        } else if(window.scrollY > position("movielist-content")) {
            deleteActive[0].classList.remove('active')
            getId('movielist').classList.add('active')
        } else {
            deleteActive[0].classList.remove('active')
            getId('gamelist').classList.add('active')
        }
    }

    window.addEventListener('scroll', activeSwap)

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
                            <Link className="nav-link active" id="gamelist" to="gamelist-content" offset={-150}>Game List</Link>
                            <Link className="nav-link" id="movielist" to="movielist-content" offset={-90}>Movie List</Link>
                            <Link className="nav-link" id="form" to="form-content" offset={-90}>Form List</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar