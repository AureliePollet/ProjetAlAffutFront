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
                        <h6 className="card-subtitle mb-2 text-muted">{resto.nomCodePromo}</h6>
                            <p className="card-text scroll">{resto.descriptif}</p>
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