import React from 'react';

const Footer = () => {
  return (
    <footer className="primary-bg text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h5>Liens rapides :</h5>
            <ul className="list-unstyled">
              <li><a href="#Hero" className="text-white">Accueil</a></li>
              <li><a href="#About" className="text-white">À propos de nous</a></li>
              <li><a href="#Services" className="text-white">Nos cours</a></li>
              <li><a href="#testimonials" className="text-white">Témoignages</a></li>
              <li><a href="#Subscription" className="text-white">Inscription</a></li>
              <li><a href="#Contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <h5>Suivez-nous :</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>Copyright : © 2024 École d'Anglais. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
