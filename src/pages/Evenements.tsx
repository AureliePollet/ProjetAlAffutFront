import '../styles/style.css';
import '../styles/bootstrap.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Agenda from './Agenda';

function Evenements(){
    
    const [eventsResponse, setEventsResponse] = useState<any[]>([]);

    async function getEvents() {
        const response = await axios.get('http://localhost:8080/event/all');
        setEventsResponse(response.data);
    }


    const Events = () => (
        <section className="row mt-2">
            {eventsResponse.filter(ev => ev.urlImage != null).map((event:any) => (
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src={event.urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{event.descriptif}</p>
                        </div>
                    </div>
                </div>
            ))}</section>
    );

    const EventsMaison = () => (
        <div className="table-responsive">   
                <h3 className="h3_agenda">Nos prochains évènements</h3>       
                <table className="table">
                  <tbody>
            {eventsResponse.filter(ev => ev.urlImage == null).map((event:any) => (
                <tr>
                <td className="col1-tab">{event.nom}</td>
                <td>{event.date
                }</td>
              </tr>
            ))}</tbody>
            </table>
            </div>
    );

    useEffect(() => {
        getEvents();
    }, []);


    return(
<main id="Evenements">
    
    <main>
         <h1>Evenements</h1>
        <section className="container">
            <div>
                <div className="ratio ratio-16x9 video">
                    <video width="900" controls>
                        <source src="./images/photoSite/video-evenement.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
                        natus sit ratione officiis unde ab
                        assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                        consequuntur.</h3>
                </div>
            </div>
            {
                (eventsResponse.filter(ev => ev.urlImage != null).length > 0) ?  <Events/> : <p>Y'A RIEN ICI</p>
            }
            <div>
                <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
                    natus sit ratione officiis unde ab
                    assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                    consequuntur.</h3>
            </div>

            <div className="inscription-evenement">
            <a href='./agenda'><button className="btn btn-color" type="submit">S'inscrire à un événement</button></a>
            </div>

            {
                (eventsResponse.filter(ev => ev.urlImage == null).length > 0) ?  <EventsMaison/> : <p>Y'A RIEN ICI</p>
            }

            <div className="inscription-evenement">
            <a href='./agenda'><button className="btn btn-color" type="submit">Voir tous nos évènements</button></a>
            </div>

            
        </section>
    </main>
    </main>
    

    )
}

export default Evenements;