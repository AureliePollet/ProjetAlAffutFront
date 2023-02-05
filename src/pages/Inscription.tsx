
import '../styles/style.css';
import '../styles/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';



function Inscription() {
    const [civilite, setCivilite] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [school, setSchool] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");


    function register() {

        console.log(civilite);
        axios.post('http://localhost:8080/etudiant/add', {
            civilite: civilite,
            nom: lastName,
            prenom: firstName,
            dateNaissance: birthdate,
            etablissementScolaire: school,
            email: mail,
            password: password
        }).then(response => console.log(response));

    }


    return (
        <main className="container inscription">

            <h1>Inscription </h1>
            <section className="container formContact">
                <form className="formContact" >
                <div className="mb-3">
                <label htmlFor="civilite" className="form-label">Civilité</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={civilite} onChange={(e) => setCivilite(e.target.value)} required>
                        <option selected>Civilité</option>
                        <option value="1">MADEMOISELLE</option>
                        <option value="2">MADAME</option>
                        <option value="3">MONSIEUR</option>
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom"
                            required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prénom"
                            required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">Date de naissance</label>
                        <input type="date" className="form-control" id="birthday"
                            required value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="school" className="form-label">Etablissement scolaire</label>
                        <input type="text" className="form-control" id="school" placeholder="Entrez votre établissement scolaire"
                            required value={school} onChange={(e) => setSchool(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                            placeholder="Entrez votre adresse mail" required value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Entrez votre mot de passe"
                            required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="inscription-evenement">
                        <button className="btn btn-color btn-form" type="submit" onClick={register}>S'inscrire</button>
                    </div>
                </form>
            </section>


        </main>
    )
}

export default Inscription;