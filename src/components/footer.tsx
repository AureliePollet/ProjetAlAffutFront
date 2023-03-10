
import '../styles/style.css';
import '../styles/bootstrap.css';
import Scroll from "./Scroll";
import { Nav } from "react-bootstrap";

function Footer() {
return(
    <footer className="py-5">
        <Scroll/>
        <div className="container">

            <div className="row">
                <div className="col-6 col-md-4 mb-4">
                    <h5>Menu</h5>
                    <ul className="nav flex-column">
                        <Nav.Link href="/" className="nav-link p-0 nav-item mb-2 navig">Accueil</Nav.Link>
                        <Nav.Link href="/restaurants" className="nav-link p-0 nav-item mb-2 navig">Restaurants</Nav.Link>
                        <Nav.Link href="/lifestyle" className="nav-link p-0 nav-item mb-2 navig">Life Style</Nav.Link>
                        <Nav.Link href="/culture-aides" className="nav-link p-0 nav-item mb-2 navig">Culture / Aides</Nav.Link>
                        <Nav.Link href="/evenements" className="nav-link p-0 nav-item mb-2 navig">Événements</Nav.Link>
            
                    </ul>
                </div>

                <div className="col-6 col-md-4 mb-4">
                    <h5>Nous !!!</h5>
                    <ul className="nav flex-column">
                    <Nav.Link href='/apropos' className="nav-link p-0 nav-item mb-2 navig" >À propos</Nav.Link>
                    <Nav.Link href="/contact" className="nav-link p-0 nav-item mb-2 navig">Contactez-nous</Nav.Link>
                    <Nav.Link href="/mentionslegales" className="nav-link p-0 nav-item mb-2 navig">Mentions
                                Légales</Nav.Link>
                       
                    </ul>
                </div>

                <div className="col-6 col-md-4 mb-4">

                    <h5><a href="/"><img src="./images/images/lobo_bleu.svg" alt="logo" height="36"
                                className="logo-nav"/></a></h5>

                    <ul className="footer list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#" target="_blank"><img className="bi logo-footer"
                                    src="./images/images/instagram.png" width="24" height="24" alt="logo instagram "/></a>
                        </li>
                        <li className="ms-3"><a className="link-dark" href="https://www.tiktok.com/@letudiant_"
                                target="_blank"><img className="bi logo-footer" src="./images/images/tik-tok.png" width="24"
                                    height="24" alt="logo tik-tok"/></a></li>
                        <li className="ms-3"><a className="link-dark" href="#" target="_blank"><img className="bi logo-footer"
                                    src="./images/images/twitter.png" width="24" height="24" alt="logo twitter"/></a></li>
                    </ul>
                </div>


            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-6 my-6 border-top">
                <p>&copy; 2022 À l'Affût.</p>

            </div>

        </div>
    </footer>
)

}

export default Footer;