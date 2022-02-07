import logo from '../assets/img/logo.png';
import './navbar.css';

const Navbar = () => {
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
                        <a className="nav-link active" id="news" href="/#">News</a>
                        <a className="nav-link" id="byfilter" href="/#">By Filter</a>
                        <a className="nav-link" id="about" href="/#">About</a>
                        <a className="nav-link" id="contact" href="/#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar