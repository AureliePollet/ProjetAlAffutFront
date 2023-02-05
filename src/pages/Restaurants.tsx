import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Restaurants() {

    const [restoResponse, setRestoResponse] = useState<any[]>([]);

    async function getResto() {
        const response = await axios.get('http://localhost:8080/commerce/all');
        console.log(response);
        setRestoResponse(response.data);
    }


    const Restaurant = () => (
        <section className="row mt-2">
            {restoResponse.filter(re => re.categorie == 'RESTAURANT').map((resto:any) => (
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src={resto.urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{resto.nom}</h5>
                            <p className="card-text">{resto.descriptif}</p>
                        </div>
                    </div>
                </div>
            ))}</section>
    );

    useEffect(() => {
        getResto();
    }, []);





    return (

        <main id="Restaurants">
            <section className="p-3 p-md-5  imgBanniere"
             style={{ backgroundImage: "url(./images/imagescategorie/brooke-lark-HlNcigvUi4Q-unsplash.jpg)",
             backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
             
   }}>

                <h1 className="h1-banniere">Restaurants</h1>

            </section>


            <main className="container">

                <section className="row">


                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">

                        <h3 className="texte-descriptif">
                            <p>
                                Ici, tu trouveras forcément un resto qui te plairas : Spécialités italiennes ou méxicaines
                                ou asiatique etc.
                                <br />
                                Tu peux aussi trouver un resto en fonction de ton régime alimentaire : végan, halal,
                                végétarien etc.
                                <br />
                                Pour résumé FONCE ! Tu as tout à gagner !
                            </p>
                        </h3>

                    </div>
                </section>


                <section className="row m-2">

                    <Restaurant/>

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <a href="./restaurantsListe.html" className="a_grid" />
                            <div className=" row-cols-md-3  row row-cols-sm-2">
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/restauration.jpg" alt="Photo table petit-déjeuné" />
                                        <div className="card-body">
                                            <p className="card-text">Petit-déjeuner</p>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/spaghetti.jpg" alt="photo plat de pâtes" />
                                        <div className="card-body">
                                            <p className="card-text">Cuisine italienne</p>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/fastfood.jpg" alt="photo hambergur" />
                                        <div className="card-body">
                                            <p className="card-text">Fast Food</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/cuisineAsiatique.jpg" alt="photo sushi" />
                                        <div className="card-body">
                                            <p className="card-text">Cuisine asiatique</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/cuisineMexicain.jpg" alt="photo tacos" />
                                        <div className="card-body">
                                            <p className="card-text">Mexicain</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/kirill-tonkikh-gxpY2_vHjJg-unsplash.jpg"
                                            alt="photo légumes" />
                                        <div className="card-body">
                                            <p className="card-text">Cuisine végan</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/café.jpg" alt="photo de café" />
                                        <div className="card-body">
                                            <p className="card-text">Les cafés et thés</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/brochettelegume.jpg" alt="photo brochette de légumes" />
                                        <div className="card-body">
                                            <p className="card-text">Les healthys</p>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card shadow-sm">
                                        <img src="./images/imagescategorie/viandegrille.jpg" alt="photo beef steak et légumes" />
                                        <div className="card-body">
                                            <p className="card-text">Les grillades</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button"
                                className="btn btn-outline-secondary btn-rose btn-resto">Aller voir les restaurants</button>

                        </div>

                    </div>

                </section>


            </main>

        </main>
    )
}
export default Restaurants;