import '../styles/style.css';
import '../styles/bootstrap.css';

function SupprimerCommerce() {
    return (
        <main id="SupprimerCommerce">
        <section className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Id du commerce à supprimer</label>
                    <input type="number" className="form-control" id="nom" placeholder="Entrez l'id du commerce" required/>
                </div>
               
                <button type="button" className="btn btn-outline-primary">Supprimer le commerce</button>
              </form>      
        </section>
    </main>
    )
}
export default SupprimerCommerce;