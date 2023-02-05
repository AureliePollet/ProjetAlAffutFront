import '../styles/style.css';
import '../styles/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import React from 'react';
import { log } from 'console';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '70%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  
  function EvenementModal(props:any) {

    let userDetails = JSON.parse(localStorage.getItem("userDetails") || '{}');

    function afterOpenModal(e:any) {
      props.onAfterOpen(e, 'After Modal Opened');
    }
  
    function onModalClose(event:any) {
      let data = { name: 'example', type: 'closed from child' };
      props.onCloseModal(event, data);
    }

    const [inscriptionOk, setInscriptionOk] = useState("");


    function register() {
       console.log(userDetails)
        axios.post('http://localhost:8080/event/addetudiant/'+userDetails.id,{eventId: props.dynData[4]})
        .then(response => setInscriptionOk("Inscription OK"));

    }

    let logged = localStorage.getItem("isAuthenticated");

    const renderButtons = () => {
        if (logged) {
            return <button disabled={inscriptionOk.length>0} onClick={register}>S'inscrire</button>
        } else {
            return <a href="/connexion"><button>Se connecter</button></a>
        }
    }
  
    return (
      <div>
        <Modal
          isOpen={props.IsModalOpened}
          onAfterOpen={e => afterOpenModal(e)}
          style={customStyles}
          ariaHideApp={false}
        >
          <h2>{props.dynData[0]}</h2>
          <p>Date: {props.dynData[1]}</p>
          <p>Descriptif: {props.dynData[3]}</p>
          <p>Nombre de places disponibles: {props.dynData[2]}</p>
          {
            renderButtons()
        }
          <button onClick={e => onModalClose(e)}>Fermer</button>
          {inscriptionOk}
        </Modal>
      </div>
    );
  }
  
  export default EvenementModal;