import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import AdminLogin from './admin/AdminLogin';
import Agenda from './pages/Agenda';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import Culture from './pages/Culture';
import Evenements from './pages/Evenements';
import LifeStyle from './pages/LifeStyle';
import ListeRest from './pages/ListeRest';
import Mentions from './pages/Mentions';
import Restaurants from './pages/Restaurants';
import './styles/App.css';
import AjoutCommerce from './admin/AjoutCommerce';
import AjoutEvenements from './admin/AjoutEvenemen';
import ModifierCommerce from './admin/ModifierCommerce';
import ModifierEvenement from './admin/ModifierEvenement';
import ListeCommerce from './admin/ListeCommerce';
import ListeEvenements from './admin/ListeEvenm';
import SupprimerCommerce from './admin/SupprimerCommerce';
import SupprimerEvenement from './admin/SupprimerEvenement';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';

function App() {
  return (
    <BrowserRouter> {/* en top level */}
    <Navigation/>
    <Routes> {/* Ici : injecte les composants en fonction de la route, du chemin dans l'url */}
        <Route path="/" element={<Accueil/>} />
        <Route path="/restaurants" element={<Restaurants/>} />
        <Route path="/lifestyle" element={<LifeStyle/>} />
        <Route path="/culture-aides" element={<Culture/>} />
        <Route path="/evenements" element={<Evenements/>} />
        <Route path="/apropos" element={<APropos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/listeresto" element={<ListeRest/>} />
        <Route path="/mentionslegales" element={<Mentions/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />


        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/ajoutercommerce" element={<AjoutCommerce/>} />
        <Route path="/listecommerce" element={<ListeCommerce/>} />
        <Route path="/modifiercommerce" element={<ModifierCommerce/>} />
        <Route path="/supcommerce" element={<SupprimerCommerce/>} />
        <Route path="/ajouterevenement" element={<AjoutEvenements/>} />
        <Route path="/listeevenements" element={<ListeEvenements/>} />
        <Route path="/modifierevenement" element={<ModifierEvenement/>} />
        <Route path="/supevenement" element={<SupprimerEvenement/>} />
        

    </Routes>

    <Footer/>
</BrowserRouter>
  );
}

export default App;
