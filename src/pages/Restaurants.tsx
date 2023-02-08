import '../styles/style.css';
import '../styles/bootstrap.css';
import { Button, ButtonGroup } from 'react-bootstrap';



function Restaurants() {



    return (

        <main id="Restaurants">

            <section className="p-3 p-md-5  imgBanniere"
                style={{
                    backgroundImage: "url(./images/imagescategorie/brooke-lark-HlNcigvUi4Q-unsplash.jpg)",
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',

                }}>
                <h1 className="h1-banniere">Restaurants</h1>
            </section>


            <main className="container">

                <div className="row position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                    <h3 className="texte-descriptif">
                        Ici, tu trouveras forcément un resto qui te plaira : Spécialités italiennes ou mexicaines
                        ou asiatique etc.
                        <br />
                        <br />
                        Pour résumé FONCE ! Tu as tout à gagner !
                    </h3>
                </div>



                <section className="row m-2">

                    <div className="album py-2 bg-light">
                        <div className="container row-cols-md-3  row row-cols-sm-2">
                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/spaghetti.jpg" alt="photo plat de pâtes" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Cuisine italienne</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/fastfood.jpg" alt="photo hambergur" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Fast Food</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/cuisineAsiatique.jpg" alt="photo sushi" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Cuisine asiatique</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/cuisineMexicain.jpg" alt="photo tacos" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Mexicain</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/café.jpg" alt="photo de café" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Les cafés et thés</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card shadow-sm">
                                    <img src="./images/imagescategorie/viandegrille.jpg" alt="photo beef steak et légumes" />
                                    <div className="card-body">
                                        <p className="card-text-resto">Les grillades</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                            <Button
                                className="btn-rose" href='./listeresto'>Aller voir les restaurants
                            </Button>
                        </ButtonGroup>

                    </div>

                </section>


            </main>

        </main>
    )
}
export default Restaurants;