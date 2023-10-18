import './Portfolio.css'
import bg from '../Assets/images/1618233112290.jpg';

import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/Contactform');
  };
  return (
      
    <>
  
  <body>
  
    <div className="cursor-1"></div>
    <div className="cursor-2"></div>

    <div id="menu-bars" className="fas fa-bars"></div>

   
    {/* <header>
      <a href="#" className="logo"> <span>Port</span> folio. </a>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Project</a>
        <a href="#experience">Experience</a>
        <a onClick={handleContactClick}>contact</a>
        
       
      </nav>

      <div className="follow">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
    </header> */}

    <h1 className='homeHeader'>Home</h1>

    <section className="home" id="home">
      <div className="content">
        
        <span className="hi"> hi there... </span>
        <h3>i am <span> K Sagar Chaitanya </span></h3>
        <p className="info">i am a MERN stack developer</p>
        <a href="#about" className="btn">about me</a>
      </div>

      {/* <div className="image">
        <img src={bg} alt="" />
      </div> */}
    </section>

    

    <section className="about" id="About">
      <h1 className="heading">About <span> me </span></h1>

      <div className="row-1">
        <div className="image">
          <img src={bg} alt="" />
        </div>

        <div className="content">
          <h3>my name is Koppadi Sagar Chaitanya & i am a MERN Stackdeveloper</h3>
          <p>I am Engineering student ambitious and driven. I thrive on challenges and constantly set goals for myself.
          </p>
          <div className="box-container">
            <div className="box">
              <p><span> age : </span> 27</p>
              <p><span> gender : </span> male</p>
              <p><span> language : </span> Telugu, english</p>
              <p><span> work : </span> mern-stack developer</p>
            </div>
            <div className="box">
              <p><span> freelance : </span> available</p>
              <p><span> phone : </span> +91 7794939378</p>
              <p><span> email : </span> sagarchaitanya99@gmail.com</p>
              <p><span> country : </span> india</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="heading"><span> my </span> skills</h1>

      <div className="row-2">
        <div className="skills">
          <div className="progress">
            <h3>Html <span> 50% </span></h3>
            <div className="bar"><span></span></div>
          </div>
          <div className="progress">
            <h3>CSS <span> 50% </span></h3>
            <div className="bar"><span></span></div>
          </div>
          <div className="progress">
            <h3>Javascript <span> 20% </span></h3>
            <div className="bar"><span></span></div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="service" id="service">
      <h1 className="heading"><span> my </span> Projects</h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-code"></i>
          <h3>Design Game using python</h3>
          <p>
            In this i have created game using python
          </p>
        </div>

        <div className="box">
          <i className="fas fa-paint-brush"></i>
          <h3>Stock price prediction</h3>
          <p>
            Prediction how the stock will work which is the most difficult
          </p>
        </div>
      </div>
    </section>

   
    <section className="experience" id="experience">
      <h1 className="heading">
        <span> my </span> experience
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="content">
            <span> 2011 - 2014 </span>
            <h3>Diploma</h3>
            <p>
              smt. b seetha Polythenic
            </p>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <span> 2014 - 2017 </span>
            <h3>B.E Electrical & Electronics </h3>
            <p>
              D.N.R College of Engineering and technology
            </p>
          </div>
        </div>
      </div>
    </section>

   
    <section className="contact" id="contact">
      <h1 className="heading">Contact <span> me </span></h1>

      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>my email</h3>
          <p>sagarchaitanya99@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>my number</h3>
          <p>+91 7794939378</p>
          <p>+91 7997923557</p>
        </div>

        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>my address</h3>
          <p>19-5-24, bhimavaram -534201 </p>
        </div>
      </div>

      <div className="row">
        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />

          <textarea
            name=""
            placeholder="message"
            id=""
            cols={0}
            rows={10}
          ></textarea>

          <input type="submit" className="btn" value="send message" />
        </form>


       <h1 className='loc'>Location</h1>
       <iframe
      className="map"
      allowFullScreen
      loading="lazy"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61194.52923540864!2d81.47494101841467!3d16.54335078704155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1697001213113!5m2!1sen!2sin"
      width={600}
      height={450}
      style={{ border: '0' }}
      // allowFullScreen
      // loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
      </div>
    </section>

   
    <footer className="footer">
      created by <span> mr. Mern stack developer </span> | all rights reserved!
    </footer>


    <script src="js/script.js"></script>
  </body>
    </>
      

  )
}

export default Portfolio





