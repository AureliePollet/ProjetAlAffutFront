import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



function AdminLogin() {

    const navigate = useNavigate();

    const [mail , setMail] = useState("");
    const [password, setPassword] = useState("");
    let errorMessage;
    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") === "true") {
            navigate("/");
        }
    }, []);


    function login() {

        axios.post('http://localhost:8080/administrateurs/login', {
            email: mail,
            password: password
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                //console.log("It works");
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("userDetails", JSON.stringify(response.data));
                //console.log("It works");
                navigate("/");
            } else if (response.status === 404) {
                errorMessage = "Admin non trouvé";
            }
        });


    }
    return (
        <main id="AdminLogin">
        <NavAdmin/>
         <h1>Bienvenue sur la page administrateur</h1> 
         <section className="container formContact">
                    <form className="formContact">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Adresse email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                   placeholder="Entrez votre adresse mail" required value={mail}
                                   onChange={(e) => setMail(e.target.value)}/>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Entrez votre mot de passe" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="inscription-evenement">
                            <button type="button" className="btn btn-color btn-orange btn-form" onClick={login}>Se connecter</button>
                        </div>

                        <div>
                            <h3>{errorMessage}</h3>
                        </div>

                    </form>
                </section>
    </main>
    )
}

export default AdminLogin;