import React from "react";

const CardService = ({ title, description, imgSrc, whatsappLink }) => {
  return (
    <div className="card rounded-4 shadow mb-4">
      <img src={imgSrc} className="card-img-top rounded-top-4" alt="..." />
      <div className="card-body">
        <h5 className="card-title primary-color">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-default px-3 rounded-pill wsp-bg border-none text-white fw-bold">
            En discuter sur WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardService;
