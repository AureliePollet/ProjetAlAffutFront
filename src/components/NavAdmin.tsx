import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import '../styles/style.css';
import '../styles/bootstrap.css';
import React from 'react';

function NavAdmin() {

  return (
    <main id="NavAdmin">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Dropdown>

<Dropdown.Toggle className="dropdown navigAdmin" >
  Bonjour Admin
</Dropdown.Toggle>
<Dropdown.Menu>
  <Dropdown.Item href="./">
    Deconnexion
  </Dropdown.Item>
 
</Dropdown.Menu>

</Dropdown>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Dropdown>

                <Dropdown.Toggle className="dropdown navigAdmin" >
                  Commerce
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="./listecommerce">
                    Liste des commerces
                  </Dropdown.Item>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item href="./ajoutercommerce">
                    Ajouter un commerce
                  </Dropdown.Item>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item href="./modifiercommerce">
                    Modifier un commerce
                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
              <Dropdown>

                <Dropdown.Toggle className="dropdown navigAdmin" >
                Èvènements
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="./listeevenements">
                    Liste des évènements
                  </Dropdown.Item>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item href="./ajouterevenement">
                    Ajouter un évènements
                  </Dropdown.Item>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item href="./modifierevenement">
                    Modifier un évènements
                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>

            
            </ul>
          </div>
        </div>
      </nav>
    </main>
  )
}
export default NavAdmin;