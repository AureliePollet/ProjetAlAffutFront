import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';
import FormAjoutEven from '../components/FormAjouterEven';



function AjoutEvenements() {
    return (
        <main id="AjoutEvenement"> 
        <NavAdmin/>
        <FormAjoutEven/>
        
    </main>
    )
}
export default AjoutEvenements;