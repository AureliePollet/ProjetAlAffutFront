import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/bootstrap.css';

function FormAjoutEven() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <section className="container">
            <form onSubmit={handleSubmit} className="formContact">
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <br />
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du commerce" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date de l'évènement</label>
                    <br /> <input type="date" className="form-control" id="date" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="form-label">Adresse </label>
                    <br /><input type="text" className="form-control" id="adresse" placeholder="Entrez la rue du commerce" aria-describedby="emailHelp" />
                </div>
               
                <div className="form-group">
                    <label htmlFor="descriptif">Descriptif</label>
                    <br /><textarea className="form-control" id="descriptif" placeholder="Rédigez le descriptif du commerce" required></textarea>
                    <br />
                </div>
                <div className="mb-3">
                    <label htmlFor="nbplace" className="form-label">Nombre de places</label>
                    <input type="number" className="form-control" id="nbplace" placeholder="entrez le nombre de places pour l'évènement"  required/>
                </div>

                <button type="submit" className="btn btn-outline-primary" >Ajouter</button>
            </form>
        </section>
    );
}

export default FormAjoutEven;