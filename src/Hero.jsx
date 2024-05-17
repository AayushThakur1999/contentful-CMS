import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
          Quinoa fixie cardigan reprehenderit viral culpa photo booth aute, lo-fi selfies. Sriracha meggings viral, ethical fugiat kinfolk gluten-free photo booth chia lumbersexual seitan shabby chic distillery shaman. Man braid af nostrud occaecat ex, gochujang microdosing proident aesthetic actually reprehenderit. Blackbird spyplane deep v est, minim selvage actually tacos artisan marxism. Anim green juice listicle eu, polaroid neutral milk hotel yr ipsum literally gentrify.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="guy and a girl" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero