import React, { useState } from 'react';
import '../styles/style.css';
import '../styles/bootstrap.css';

function FormAjouterCommerce() {
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
        <input type="password" className="form-control" id="nom" placeholder="Entrez le nom du commerce" required />
      </div>
      <div className="mb-3">
        <label htmlFor="adresse" className="form-label">Adresse </label>
        <br /><input type="text" className="form-control" id="adresse" placeholder="Entrez la rue du commerce" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="codepostal" className="form-label">Code Postal </label>
        <br /> <input type="text" className="form-control" id="codepostal" placeholder="Entrez le code postal" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="ville" className="form-label">Ville </label>
        <br /> <input type="text" className="form-control" id="ville" placeholder="Entrez la ville" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">Url du site </label>
        <br /> <input type="text" className="form-control" id="ville" placeholder="Entrez l'url du site" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <br /><input type="file" className="form-control" id="image" aria-describedby="emailHelp" />
      </div>
      <div className="htmlForm-group">
        <label htmlFor="descriptif">Descriptif</label>
        <br /><textarea className="form-control" id="descriptif" placeholder="Rédigez le descriptif du commerce" required></textarea>
        <br />
      </div>


      <button type="submit" className="btn btn-outline-primary" >Ajouter le commerce</button>
    </form>
    </section>
  );
}

export default FormAjouterCommerce;