import React from "react";
import CardService from "./CardService";
import adultImg from "../Assets/adult.jpg";
import childImg from "../Assets/child-1.jpg"

const Services = () => {
  const servicesData = [
    {
      title: "Cours pour Adultes",
      description: "Nos cours d'anglais pour adultes sont conçus pour s'adapter à vos besoins et à votre emploi du temps...",
      imgSrc: adultImg,
      whatsappLink: "https://wa.me/221763350502"
    },
    {
      title: "Cours pour Enfants",
      description: "Des cours interactifs et amusants pour aider vos enfants à apprendre l'anglais dès le plus jeune âge...",
      imgSrc: childImg, 
      whatsappLink: "https://wa.me/221763350502"
    },
  ];

  return (
    <div id="Services" className="py-5">
      <div className="container">
        <div className="row">
          <h1 className="primary-color mb-4 text-center">Nos Cours</h1>
          {servicesData.map((service, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
              <CardService
                title={service.title}
                description={service.description}
                imgSrc={service.imgSrc}
                whatsappLink={service.whatsappLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
