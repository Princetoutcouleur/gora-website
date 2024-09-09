import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Client 1",
      feedback:
        "J'ai vraiment apprécié les cours d'anglais. L'équipe est professionnelle et très patiente !",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Client 2",
      feedback:
        "Les cours en ligne étaient flexibles et efficaces. Je recommande vivement !",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Client 3",
      feedback:
        "Des cours adaptés à mon emploi du temps chargé. Très satisfaisant !",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="container py-5">
      <div className="container">
        <h2 className="primary-color text-center mb-4">Témoignages</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="" >
              <div className="card text-center p-4 shadow-sm mx-3 rounded-4 shadow temoignage" style={{ height: "340px" }}>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={testimonial.avatar}
                    className="rounded-circle mb-3"
                    alt={testimonial.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <h5 className="mb-2 primary-color">{testimonial.name}</h5>
                <p className="text-muted">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
