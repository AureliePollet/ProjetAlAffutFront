import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ListeRest() {


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

        <main id="ListeRest">
            <h1>A l'affût</h1>
            <main className="container">
                <div className="trier-filtrer">

                    <button className="btn btn-color" type="submit">Filtrer</button>
                    <button className="btn btn-color" type="submit">Trier par</button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Categories</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <Restaurant/>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-rose">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-jaune">Voir le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-orange">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-jaune">Voir le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-orange">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-rose">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href="">  <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-rose">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-orange">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-jaune">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href="">  <button type="button" className="btn btn-sm btn-outline-secondary btn-rose">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""> <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href="">  <button type="button" className="btn btn-sm btn-outline-secondary btn-jaune">Voir
                                                        le
                                                        produit</button></a>

                                                </div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href=""></a><button type="button" className="btn btn-sm btn-outline-secondary btn-orange">Voir
                                                        le
                                                        produit</button></div>

                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#"> <span className="fleche-left carousel-control-prev-icon"
                            aria-hidden="true"></span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link chiffres chiffre1" href="#">1</a></li>
                    <li className="page-item"><a className="page-link chiffres chiffre2" href="#">2</a></li>
                    <li className="page-item"><a className="page-link chiffres chiffre3" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#"><span className="fleche-right carousel-control-next-icon"
                            aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </nav>

        </main>
        
    )
}
export default ListeRest;