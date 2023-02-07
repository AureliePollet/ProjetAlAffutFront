import '../styles/style.css';
import '../styles/bootstrap.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Agenda from './Agenda';
import Scroll from '../components/Scroll';

function Evenements(){
    
    const [eventsResponse, setEventsResponse] = useState<any[]>([]);

    async function getEvents() {
        const response = await axios.get('http://localhost:8080/event/all');
        setEventsResponse(response.data);
    }


    const Events = () => (
        <section className="row mt-2">
            {eventsResponse.filter(ev => ev.urlImage != null).map((event:any) => (
                <div className=" col-md-6 col-lg-4  ">
                    <div className="card" >
                        <img src={event.urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{event.nom}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{event.adresse}</h6>
                            <p className="card-text event-descriptif scroll">{event.descriptif}</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <a href={event.url}> <button className="btn btn-sm btn-outline-secondary btn-rose">Allez sur le site</button></a>
                           </div>
                        </div>
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
                <td>{event.adresse}</td>
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
                    <h3 className="texte-descriptif"> Tu retrouveras sur cette page tous les évènements recensés dans la région.
                    Que ce soit pour ton avenir ou tes loisirs, fais toi plaisir!</h3>
                </div>
            </div>
            {
                (eventsResponse.filter(ev => ev.urlImage != null).length > 0) ?  <Events/> : <p>Y'A RIEN ICI</p>
            }
            <div>
                <h3 className="texte-descriptif"> <i>A l'Affut</i> te propose également de participer à nos évènements.
                Rien de plus simple, inscris-toi et rejoins-nous pour participer à nos différents ateliers </h3>
            </div>

            <div className="inscription-evenement">
            <a href='./agenda'><button className="btn btn-outline-secondary btn-color btn-jaune" type="submit">S'inscrire à un événement</button></a>
            </div>

            {
                (eventsResponse.filter(ev => ev.urlImage == null).length > 0) ?  <EventsMaison/> : <p>Y'A RIEN ICI</p>
            }

            <div className="inscription-evenement">
            <a href='./agenda'><button className="btn btn-outline-secondary btn-color btn-orange" type="submit">Voir tous nos évènements</button></a>
            </div>

            
        </section>
    </main>
    </main>
    

    )
}

export default Evenements;