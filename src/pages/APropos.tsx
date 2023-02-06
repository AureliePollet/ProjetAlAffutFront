import '../styles/style.css';
import '../styles/bootstrap.css';


function APropos(){
    return(
        <div id="APropos">
        <h1>A propos</h1>
    <main>
        <section className="container a_propos">
            <div className="a_propos">
                <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
                    natus sit ratione officiis unde ab
                    assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                    consequuntur.</h3>
                </div>
                <div>
                    <img className="logo" src="./images/logos/Logo_orange.svg" alt="Logo HubSpot"/>
                </div>

            <div>
                <p className="paragraphe">
                "A l'Affut" est un accès gratuit et simple à toutes les meilleures réductions et bons plans pour les étudiants, et vous donne la possibilité de participer à des évènements made by <br /> "A l'affut".
                Il va permettre d'augmenter le pouvoir d’achat des étudiants. <br />
                Pour participer à un de nos évènements, il vous suffira de créer un compte.
            

                </p>
            </div>
            <div>
                <img className="logo a_propos" src="./images/photoSite/etudiant.jpg" alt="Logo HubSpot" />
            </div>
            
        </section>
    </main>
    </div>
    )
}

export default APropos;