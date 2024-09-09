import React from 'react'
import aboutImg from "../Assets/about-img.jpg"

const about = () => {
  return (
    <div id='About'>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className='primary-color mb-4 text-center'>Qui sommes-nous ?</h1>
            <p>Nous sommes une école de langues dédiée à l'enseignement de l'anglais pour tous les âges. Que vous soyez un adulte cherchant à améliorer vos compétences professionnelles, un parent souhaitant offrir à votre enfant un avantage académique, ou simplement quelqu'un passionné par les langues, nous avons le cours qu'il vous faut. Notre équipe de professeurs qualifiés et expérimentés est là pour vous guider à chaque étape de votre apprentissage.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={aboutImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
