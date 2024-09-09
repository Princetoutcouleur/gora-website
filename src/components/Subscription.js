import React from "react";
import Gora from "../Assets/gora.jpeg";

const Subscription = () => {
  return (
    <div id="Subscription" className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="primary-color mb-4">
              Rejoignez-nous dès aujourd'hui !
            </h1>
            <p className="mb-4">
              Prêt à commencer votre voyage d'apprentissage de l'anglais ?
              Contactez-nous dès maintenant pour en savoir plus sur nos cours et
              pour vous inscrire. Nous sommes impatients de vous accueillir dans
              notre communauté d'apprenants.
            </p>
            <a
              href="https://wa.me/221763350502"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-default px-3 rounded-pill wsp-bg border-none text-white fw-bold">
                Inscrivez-vous maintenant
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
            <img
              src={Gora}
              alt=""
              className="img-fluid"
              height="300px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
