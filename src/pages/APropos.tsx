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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ad eius repellat explicabo dolore
                    architecto eveniet officiis voluptates non, quas distinctio accusantium voluptate saepe delectus
                    laboriosam autem corrupti consequatur beatae quos assumenda nisi repudiandae! Animi eos pariatur
                    ratione error magni sapiente, delectus suscipit dicta repellendus odit perferendis, dignissimos
                    architecto sit?
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