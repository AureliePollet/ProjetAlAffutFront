import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';


function LifeStyle() {



    const [lifeStyleResponse, setLifeStyleResponse] = useState<any[]>([]);
  //  const [typeCodeResponse,setTypeCodeResponse]= useState<any[]>([]);

    async function getLifeStyle() {
        const response = await axios.get('http://localhost:8080/commerce/all');
        console.log(response);
        setLifeStyleResponse(response.data);
    }

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

    const Filter= () => (
        <Dropdown>
        <Dropdown.Toggle className="btn btn-color" variant="outline-secondary" id="dropdown-basic">
            Filtrer par
        </Dropdown.Toggle>
            
        <Dropdown.Menu>
         <Dropdown.Item >Technologie</Dropdown.Item>
            <Dropdown.Item >Mode</Dropdown.Item>
            <Dropdown.Item >Hobbies</Dropdown.Item>
            <Dropdown.Item >Lifestyle</Dropdown.Item>
            <Dropdown.Item >Beaute</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )


    const LifeStyle = () => (
        <section className="row mt-2">
            {lifeStyleResponse.filter(re => re.categorie == 'LIFESTYLE').map((lifestyle: any) => (
                   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                   <div className="col">
                       <div className="boite-card card shadow-sm">
                           <img src={lifestyle.urlImage} alt="" />
                           <div className="card-body">
                           <h5 className="card-title">{lifestyle.nom}</h5>
                               <p className="card-text">{lifestyle.descriptif}</p>
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
              </div>
            ))}</section>
    );

 

    useEffect(() => {
        getLifeStyle();
    }, []);

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
                            <Dropdown.Item href="technologie">Technologie</Dropdown.Item>
                            <Dropdown.Item href="mode">Mode</Dropdown.Item>
                            <Dropdown.Item href="hobbies">Hobbies</Dropdown.Item>
                            <Dropdown.Item href="lifestyle">Lifestyle</Dropdown.Item>
                            <Dropdown.Item href="beaute">Beaute</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

                <div className="album py-5 bg-light">

                    <div className="container">

                        <LifeStyle />

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                            <div className="col">
                                <div className="boite-card card shadow-sm">
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
                                    <img src="./images/images/group-17.png" alt="" />
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
export default LifeStyle;