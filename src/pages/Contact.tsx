import '../styles/style.css';
import '../styles/bootstrap.css';
import {useState} from 'react';
import axios from 'axios';


function Contact() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [motif, setMotif] = useState("");
    const [contenu, setContenu] = useState("");

    const [messageRetour, setMessageRetour] = useState("");

    function envoyer() {

        axios.post('http://localhost:8080/contact/request', {
            contactFirstName: nom,
            contactLastName: prenom,
            contactEmail: mail,
            contactSubject: motif,
            contactContent: contenu
        }).then(response => {
                console.log(response);
                setMessageRetour("Merci pour votre message, nous reviendrons vers vous dès que possible.");
            }
        );
    }

    return (

        <main id="Contact">
            <div>
                <img className="logo-contact" src="./images/logos/Logo_rose.svg " alt="Logo HubSpot"/>
            </div>
            <h1>Contactez-nous</h1>
            <h2 className="h2_contact">Pour nous aider ou simplement nous connaitre</h2>

            <div>
                <h3 className="texte-descriptif"> N’hésitez pas à nous contacter pour toutes tes questions et partager
                    tes bons
                    plans(promos, restaurants, évènements, brocantes,....), nous sommes à ta disposition !</h3>
            </div>

            <section className="container formContact">
                <div className={messageRetour.length==0 ? 'hidden' : 'messageRetour'}>{messageRetour}</div>
                <form action="" className={messageRetour.length>0 ? 'hidden' : 'formContact'}>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom" required
                               value={nom} onChange={(e) => setNom(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prénom"
                               required
                               value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                               placeholder="Entrez votre adresse mail" required
                               value={mail} onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Motif</label>
                        <select className="form-select" aria-label="Default select example" id="select" required
                                value={motif} onChange={(e) => setMotif(e.target.value)}>
                            <option selected>Motif de contact</option>
                            <option value="QUESTION">J'ai une question</option>
                            <option value="BONPLAN">Je souhaite partager un bon plan</option>
                            <option value="AUTRE">Autres</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Entrez votre texte</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                  placeholder="Rédigez votre message ici..." required
                                  value={contenu} onChange={(e) => setContenu(e.target.value)}></textarea>
                    </div>
                    <div className="inscription-evenement">
                        <button className="btn btn-color btn-jaune btn-form" type="button"
                                onClick={envoyer}>Envoyer ma demande
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Contact;