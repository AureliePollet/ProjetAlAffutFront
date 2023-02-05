import '../styles/style.css';
import '../styles/bootstrap.css';

function SupprimerEvenement() {
    return (
        <main id="SupprimerEvenement">
        <section className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Id du evenement à supprimer</label>
                    <input type="number" className="form-control" id="nom" placeholder="Entrez l'id de l'evenement'" required/>
                </div>
               
                <button type="button" className="btn btn-outline-primary">Supprimer le evenement</button>
              </form>      
        </section>
    </main>
    )
}
export default SupprimerEvenement;