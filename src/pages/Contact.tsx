import '../styles/style.css';
import '../styles/bootstrap.css';


function Contact(){
    return(

        <main id="Contact">
        <div>
            <img className="logo-contact" src="./images/logos/Logo_rose.svg " alt="Logo HubSpot" />
        </div>
        <h1>Contactez-nous</h1>
        <h2 className="h2_contact">Pour nous aider ou simplement nous connaitre</h2>

        <div>
            <h3 className="texte-descriptif"> N’hésitez pas à nous contacter pour toutes tes questions et partager tes bons
                plans(promos, restaurants, évènements, brocantes,....), nous sommes à ta disposition !</h3>
        </div>

        <section className="container formContact">
            <form className="formContact" action="">
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="password" className="form-control" id="nom" placeholder="Entrez votre nom" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input type="password" className="form-control" id="prenom" placeholder="Entrez votre prénom" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                        placeholder="Entrez votre adresse mail" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="select" className="form-label">Motif</label>
                    <select className="form-select" aria-label="Default select example" id="select" required>
                        <option selected>Motif de contact</option>
                        <option value="1">J'ai une question</option>
                        <option value="2">Je souhaite partager un bon plan</option>
                        <option value="3">Autres</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Entrez votre texte</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                        placeholder="Rédigez votre message ici..." required></textarea>
                </div>
                <div className="inscription-evenement">
                    <button className="btn btn-color btn-form" type="submit">Envoyer ma demande</button>
                </div>
            </form>
        </section>
    </main>
    )
}
export default Contact;