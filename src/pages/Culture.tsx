import '../styles/style.css';
import '../styles/bootstrap.css';


function Culture() {
    return (
<main id="Culture">
<h1>Culture / Aides</h1>
    <main className="container container_culture">
        <div className="card card-culture">
            <div className="row g-0 art-cult">
                <div className="col-md-4">
                    <img src="./images/images/pass-culture.png" className="img-fluid rounded-start" alt="pass culture"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body-culture">
                        <h5 className="card-title">Pass Culture</h5>
                        <p className="card-text">
                        <p>Le <a href="https://pass.culture.fr/" className="lien" target="_blank"><strong>pass Culture</strong></a> te
                            permet d’avoir directement accès à un crédit individuel à partir de tes 15
                            ans, que tu sois à l’école ou non.</p>
                        <p>Tu bénéficieras de ce crédit cumulable chaque année et qui expirera la veille de tes 18 ans :
                            20 euros l’année de tes 15 ans, 30 euros l’année de tes 16 et 17 ans.</p>
                        <p>Tu as accès à toutes les offres postées sur le pass Culture, dans la limite du crédit à ta
                            disposition : sorties culturelles dans ta région, biens culturels et offres numériques
                            payantes (ebooks et presse uniquement).</p>

                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div className="card card-culture">
            <div className="row g-0 art-cult">
                <div className="col-md-4 img-right">
                    <img src="./images/images/sncf.png" className="img-fluid rounded-start " alt="sncf"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body-culture">
                        <h5 className="card-title">SNCF</h5>
                        <p className="card-text">
                        <p>La SNCF propose des tarifs réduits aux étudiants et aux apprentis. Sur les TER, elle propose
                            notamment un abonnement préférentiel pour voyager entre le domicile et le lieu d’études.</p>
                        <p>Sa <a className="lien" target="_blank" 
                                href="https://www.sncf-connect.com/app/catalogue/description/carte-avantage-adulte?wiz_medium=SEA&amp;wiz_source=google&amp;wiz_campaign=fr_fr_g_mk_conv_tr-multiproduit_nb_generic_dsa&amp;wiz_content=DSA+-+Generic&amp;wiz_term=p68998511208&amp;&amp;prex=SEA&amp;gclid=Cj0KCQiAjJOQBhCkARIsAEKMtO23IuJVjJDXLKFP09KZjBEIDPMyfTSQnWN3I8wzw6bYC2oNTpL4U6UaAvN9EALw_wcB&amp;gclsrc=aw.ds"><strong>carte
                                    Avantage</strong></a>
                            (50 euros) permet aux 12-27 ans de bénéficier, sous conditions, de réductions sur les trains
                            (TGV, TER, Intercités), mais aussi de réductions sur des destinations européennes.</p>
                        </p>


                    </div>

                </div>
                
            </div>
        </div>
        <div className="card card-culture">
            <div className="row g-0 art-cult">
                <div className="col-md-4">
                    <img src="./images/images/vacances.png" className="img-fluid rounded-start" alt="vacances"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body-culture ">
                        <h5 className="card-title">Départ 18:25</h5>
                        <p className="card-text">
                        <p>Le <a href="https://depart1825.com/" className="lien" target="_blank"><strong>"Départ 18:25"</strong></a>
                            vous propose toute l’année un large choix de séjours adaptés à votre budget : vacances en
                            France ou dans les pays de l’Union européenne, semaine à la mer ou à la montagne, week-end
                            en ville …</p>
                        <p>Vous avez entre
                            18 et 25 ans 🙆‍♀️, résidez en France.</p>
                        <p>Avec Départ 18:25, bénéficiez d’une aide à hauteur de 250€* pour financer vos vacances.

                            * dans la limite de 80% du prix du séjour et avec un reste à charge de 50€ minimum </p>

                        </p>

                    </div>
                </div>
            </div>
        </div>
    </main>
</main>

    )}

    export default Culture;