import React from "react";

const Navigation = () => {
  return (
    <div id="Navigation" className="primary-bg">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1 className="text-white">TWA</h1>
          </a>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item fw-bold fs-6">
                <a class="nav-link text-white" href="#About">
                  A propos
                </a>
              </li>
              <li class="nav-item fw-bold fs-6">
                <a class="nav-link text-white" href="#Services">
                  Nos Cours
                </a>
              </li>
              <li class="nav-item fw-bold fs-6">
                <a class="nav-link text-white" href="#testimonials">
                  Témoignages
                </a>
              </li>
              <li class="nav-item fw-bold fs-6">
                <a class="nav-link text-white" href="#Subscription">
                  Inscription
                </a>
              </li>
              <li class="nav-item fw-bold fs-6">
                <a class="nav-link text-white" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
