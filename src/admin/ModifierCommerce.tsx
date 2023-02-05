import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';



function ModifierCommerce() {
    return (
        <main id="ModifierCommerce">
            <NavAdmin/>
        <section className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Id du commerce à modifier</label>
                    <input type="number" className="form-control" id="nom" placeholder="Entrez l'id du commerce" required/>
                </div>
               
                <button type="button" className="btn btn-outline-primary">Modifier le commerce</button>
              </form>      
        </section>
    </main>
    )
}
export default ModifierCommerce;