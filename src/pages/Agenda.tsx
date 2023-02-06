import '../styles/style.css';
import '../styles/bootstrap.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import EvenementModal from '../components/EvenementModal';

function Agenda() {

    let subtitle: any;
    const [eventsResponse, setEventsResponse] = useState<any[]>([]);
    const [modalData, setModalData] = useState<any[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);


    async function getEvents() {
        const response = await axios.get('http://localhost:8080/event/all');
        setEventsResponse(response.data);
    }

    function openModal(event: any) {
        setIsOpen(true);
        setModalData([event.nom, event.date, event.nbPlaces, event.descriptif, event.id])

    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const Events = () => (
        <section className="row mt-2">
            
            {eventsResponse.filter(ev => ev.urlImage == null).map((event:any) =>(
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card">

                        <div className="card-header">
                            <div className="date-card">
                                <div className="day">{new Date(event.date).getDay()}</div>
                                <div>
                                    <div
                                        className="month">{new Date(event.date).toLocaleString('default', {month: 'long'}).toUpperCase()}</div>
                                    <div className="year">{new Date(event.date).getFullYear()}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>{event.nom}</h3>
                            <p className="card-text evenement">{event.descriptif}</p>

                            <p className="card-text adresse"><u>{event.adresse}</u></p>
                        </div>
                        <div className="card-footer">
                            <div className="inscription-evenement">
                                <EvenementModal
                                    dynData={modalData}
                                    IsModalOpened={modalIsOpen}
                                    onCloseModal={closeModal}
                                    onAfterOpen={afterOpenModal}>

                                </EvenementModal>
                                <button className="btn btn-color btn-evenement" type="submit"
                                        onClick={() => openModal(event)}>S'inscrire à
                                    l'événement
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            ))}</section>
    );

    useEffect(() => {
        getEvents();
    }, []);


    return (
        <main id="Agenda">
            <h1>Evenements made by A L'AFFUT</h1>
            <main>
                <section className="container">

                    <div>
                        <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                            officia
                            natus sit ratione officiis unde ab
                            assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                            consequuntur.</h3>
                    </div>


                    <div className="trier-filtrer">
                        <button className="btn btn-color" type="submit">Filtrer</button>
                        <button className="btn btn-color" type="submit">Trier par</button>
                    </div>

                    {
                        (eventsResponse.length > 0) ? <Events/> : <p>Y'A RIEN ICI</p>
                    }

                </section>
            </main>
        </main>

    )
}

export default Agenda;