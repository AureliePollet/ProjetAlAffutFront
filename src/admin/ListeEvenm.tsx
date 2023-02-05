import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';
import { Button } from 'react-bootstrap';



function ListeEvenements() {
    return (
        <main id="ListeEvenements"> 
        <NavAdmin/>
        <main>

     
        <div className="table-responsive">          
            <table className="table">
              <tbody>
                <tr>
                    <th>Id </th>
                    <th>Nom </th>
                    <th> Adresse </th>
                    <th> Code Postal </th>
                    <th> Ville </th>
                    <th> Url</th>
                    <th>Image</th>
                    <th>Decriptif</th>
                    <th>Nom code promo</th>
                    <th>Type code</th>
                </tr>
                <tr>
                    <td>id</td>
                  <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                </tr>
                <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                  <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                  </tr>
              </tbody>
            </table>
            </div>

     
            <div className="boutons-admin">
            <Button type="button" className="btn btn-outline-primary" href='./ajouterevenement'>Ajouter un évènement</Button>
            <Button type="button" className="btn btn-outline-primary" href='./modifierévènement'>Modifier un évènement</Button>
            <Button type="button" className="btn btn-outline-primary" href='./supévènement'>Supprimer un évènement</Button>
            </div>
        </main>
        </main>
    )
}
export default ListeEvenements;