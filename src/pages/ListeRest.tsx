import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import Scroll from '../components/Scroll';


function ListeRest() {


    const [restoResponse, setRestoResponse] = useState<any[]>([]);
    const [typeCodeResto, setTypeCodeResto]=useState<any[]>([]);
   
    
    async function getResto() {
        const response = await axios.get('http://localhost:8080/commerce/all');
        console.log(response);
        setRestoResponse(response.data);
        setTypeCodeResto(response.data);

    }

    useEffect(() => {
        getResto();
    }, []);
 
  


    const Restaurant = () => (
        <section className="row mt-2">
            {typeCodeResto.filter(re => re.categorie == 'RESTAURANT').map((resto: any) => (
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src={resto.urlImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{resto.nom}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{resto.nomCodePromo}</h6>
                            <p className="card-text scroll">{resto.descriptif}</p>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href={resto.url}> <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Aller sur le site</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}</section>
    );



    const filterResto = (filter: 'FASTFOOD' | 'MEXICAIN' | 'ITALIEN'| 'ASIATIQUE'| 'COFFEE'| 'GRILLADES') => {
        setTypeCodeResto(restoResponse.filter(resto => resto.typeCode === filter ));
}


    return (

        <main id="ListeRest">
          
            <h1>A l'affût</h1>
            <main className="container">
                <div className="trier-filtrer">
                <Dropdown>
                        <Dropdown.Toggle className="btn btn-color" variant="outline-secondary" id="dropdown-basic">
                            Filtrer par
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          
                            <Dropdown.Item onClick={() =>filterResto("FASTFOOD")} >Fast-food</Dropdown.Item>
                            <Dropdown.Item onClick={() => filterResto("MEXICAIN")} >Mexicain</Dropdown.Item>
                            <Dropdown.Item onClick={() => filterResto("ASIATIQUE")} >Asiatique</Dropdown.Item>
                            <Dropdown.Item onClick={() => filterResto("COFFEE")} >Coffee</Dropdown.Item>
                            <Dropdown.Item onClick={() => filterResto("ITALIEN")}>Italien</Dropdown.Item>
                            <Dropdown.Item onClick={() => filterResto("GRILLADES")}>Grillades</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <Restaurant />
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