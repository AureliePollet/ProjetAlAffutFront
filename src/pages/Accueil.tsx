
import '../styles/style.css';
import '../styles/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Scroll from '../components/Scroll';


function Accueil(){
    return(
        <div id="Accueil">
        <main>
        <Carousel>
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="./images/images/eliott-reyna-jCEpN62oWL4-unsplash.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/images/concert.png"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/images/bonsPlans.png" 
          alt="Third slide"
          />

          <Carousel.Caption>
            
          <button className="btn btn-carousel btn-outline-success " type="submit"><a
             className="nav-link" href="./lifeStyle">Aller voir les offres!</a></button>
          </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
       
    </main>

    <main className="container">
        <div className="text-accueil">
         
            <h1>A l'affût</h1>

            <p> Dans notre site tu pourras trouver des réduction, des bons plans, des offres et beaucoup plus!
            </p>

        </div>


        <div className="container cat-accueil">
            <div className="row mt-5">
                <div className="col-md-12 col-12 rounded">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/resto.png" alt="hover-box-first" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Restaurants</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./restaurants"></a>
                            </figure>
                        </div>
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/evenement.png" alt="hover-box-second" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Événements</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./evenements"></a>
                            </figure>
                        </div>
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/commerce1.png" alt="hover-box-third" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Life Style</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./lifeStyle"></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="container">
            <div className="row video">
                <div className="ratio ratio-16x9">
                    <video width="900" controls>
                        <source src="./images/photoSite/video-output-0D280D20-9DAB-46FE-8C8E-949BA5B874F8.mp4" type="video/mp4"/>
                    </video>
                </div>

            </div>
        </section>

     
    </main>

    </div>

    )
    
}

export default Accueil;