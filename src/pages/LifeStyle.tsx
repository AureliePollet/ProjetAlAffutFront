import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import Scroll from '../components/Scroll';


function LifeStyle() {



    const [lifeStyleResponse, setLifeStyleResponse] = useState<any[]>([]);
    const [typeCode, setTypeCode]=useState<any[]>([]);


    async function getLifeStyle() {
        const response = await axios.get('http://localhost:8080/commerce/all');
        console.log(response);
        setLifeStyleResponse(response.data);
        setTypeCode(response.data);
    }

    useEffect(() => {
        getLifeStyle();
    }, []);

    // async function getLifeStyleByType(){
    //     const response = await axios.get('http://localhost:8080/commerce/filtre/');
    //    setTypeCodeResponse(response.data);
    // }

    // const filterStyle = (filter: 'technologie' | 'mode' | 'hobbies' | 'lifestyle' |'beaute') => {
    //     if(filter === 'technologie') {
    //         setLifeStyleResponse(lifeStyleResponse.filter(mov => mov.type ));
    //     } else if(filter === 'NOT') {
    //         setShows(movies.filter(mov => !mov.is_watched));
    //     } else {
    //         setShows(movies)
    //     }
    // }

    const filterCommerce = (filter: 'TECHNOLOGIE' | 'MODE' | 'HOBBIES'| 'LIFESTYLE'| 'BEAUTE') => {
        setTypeCode(lifeStyleResponse.filter(lifestyle => lifestyle.typeCode === filter ));
}


    const LifeStyle = () => (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {typeCode.filter(re => re.categorie == 'LIFESTYLE').map((lifestyle: any) => (
                   <div className="col">
                       <div className="boite-card card shadow-sm">
                           <img src={lifestyle.urlImage} alt="" />
                           <div className="card-body">
                           <h5 className="card-title">{lifestyle.nom}</h5>
                           <h6 className="card-subtitle mb-2 text-muted">{lifestyle.nomCodePromo}</h6>
                               <p className="card-text scroll ">{lifestyle.descriptif}</p>
                               <div className="d-flex justify-content-between align-items-center">
                                   <div className="btn-group">
                                       <a href={lifestyle.url}> <button type="button" className="btn btn-sm btn-outline-secondary btn-vert">Voir
                                           le
                                           produit</button></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
            ))}</div>
    );

 

    

    // useEffect(() => {
    //     getLifeStyleByType();
    // }, []);

    return (

        <main id="LifeStyle">
         
            <h1>Life style</h1>
            <main className="container">
                <div className="trier-filtrer">


                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-color" variant="outline-secondary" id="dropdown-basic">
                            Filtrer par
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() =>filterCommerce("TECHNOLOGIE")}>Technologie</Dropdown.Item>
                            <Dropdown.Item onClick={() =>filterCommerce("MODE")}>Mode</Dropdown.Item>
                            <Dropdown.Item onClick={() =>filterCommerce("HOBBIES")}>Hobbies</Dropdown.Item>
                            <Dropdown.Item onClick={() =>filterCommerce("LIFESTYLE")}>Lifestyle</Dropdown.Item>
                            <Dropdown.Item onClick={() =>filterCommerce("BEAUTE")}>Beaute</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

              

                <div className="album py-5 bg-light">

                    <div className="container">

                         <LifeStyle />

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
export default LifeStyle;