import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpeg' alt="Rose's Profile" />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hey! I'm Rose, a developer based in India building fast and accessible web experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;