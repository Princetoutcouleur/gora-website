import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="container-fluid py-5">
      <div className="container">
        <h1 className="primary-color mb4">Contactez-nous</h1>
        <p className="mb-4">
          Vous avez des questions ? Nous sommes là pour vous aider. <br /> N'hésitez
          pas à nous contacter via notre formulaire de contact, par téléphone ou
          par email.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <form action="" className="p-3 primary-bg rounded-4 text-white">
              <h3 className="mb-4">Formulaire de contact :</h3>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Nom Complet
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter votre nom complet"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter votre nom email"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput3" class="form-label">
                  Message
                </label>
                <textarea class="form-control" placeholder="Laisser nous un message" id="formGroupExampleInput3"></textarea>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <h3 className="mb-4 primary-color">Informations de contact :</h3>
            <ul className="list-unstyled">
              <li className="mb-4">
                <strong className="primary-color">Téléphone :</strong> +221 76 335 05 02
              </li>
              <li className="mb-4">
                <strong className="primary-color">Email :</strong>{" "}
                <a href="mailto:info@ecoledanglais.com">
                  info@ecoledanglais.com
                </a>
              </li>
              <li className="mb-4">
                <strong className="primary-color">Adresse :</strong> 123 Rue de l'École, Dakar, Sénégal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
