import React from "react";
import heroImg from "../Assets/banner-img.png";

const Hero = () => {
  return (
    <div id="Hero" className="">
      <div className="container-fluid h-100">
        <div className="row pt-5">
          <div className="d-flex justify-content-center align-items-center pt-5">
            <div className="text-center pt-5">
              <h1 className="mb-4">Apprenez l'anglais avec nous !</h1>
              <p className="mb-4">
                Des cours d'anglais pour tous les âges et tous les niveaux, en
                ligne, à domicile ou en présentiel.
              </p>
              <a href="#Subscription">
                <button className="btn btn-light px-3 rounded-pill primary-color border-none text-white fw-bold">
                  Inscrivez-vous maintenant !
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
