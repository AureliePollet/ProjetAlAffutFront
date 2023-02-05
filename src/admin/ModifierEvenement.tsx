import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';



function ModifierEvenement() {
    return (
        <main id="ModifierEvenement">
             <NavAdmin/>
        <section className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Id de l'évènement à modifier</label>
                    <input type="number" className="form-control" id="nom" placeholder="Entrez l'id de l'évènement" required/>
                </div>
               
                <button type="button" className="btn btn-outline-primary" >Modifier l'évènement</button>
              </form>      
        </section>
    </main>
        )
}
export default ModifierEvenement;