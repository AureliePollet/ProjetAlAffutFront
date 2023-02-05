import '../styles/style.css';
import '../styles/bootstrap.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Connexion() {

    const navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    let errorMessage;
    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") === "true") {navigate("/")};
    }, []);


    

    function login() {

        axios.post('http://localhost:8080/etudiant/login', {

            email: mail,
            password: password
        }).then(response => {
            console.log(response);
           if (response.status === 200)
           {
            localStorage.setItem ("isAuthenticated","true");
            localStorage.setItem("userDetails",JSON.stringify(response.data));
        } else if(response.status === 404) {
          errorMessage="Etudiant non trouvé" ;
        
        }


        });

       

    }

    return (
        <main id="Connexion">
            <main>
                <h1>Rebonjour !</h1>
                <section className="container formContact">
                    <form className="formContact" >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Adresse email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Entrez votre adresse mail" required value={mail} onChange={(e) => setMail(e.target.value)} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="inscription-evenement">
                            <button className="btn btn-color btn-form" onClick={login}>Se connecter</button>
                        </div>

                        <div>
                            <h3>{errorMessage}</h3>
                        </div>

                    </form>
                </section>

            </main>
        </main>
    )
}
export default Connexion;