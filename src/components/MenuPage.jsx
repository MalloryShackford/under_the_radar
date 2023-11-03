import { Link } from 'react-router-dom'
import menuImg from '../assets/images/menu.png'
import menu2Img from '../assets/images/menu2.png'

export default function MenuPage() {
  return (
    <div>
      {/* Nav */}
      <nav className="navbar" id="home">
        <div className="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div id="sample">
        <img src={menuImg} alt="menu" width="300px" height="500px" />
        <img src={menu2Img} alt="menu" width="300px" height="500px" />
      </div>

      {/* Footer */}
      <section className="footer">
        <header id="contact">
          <h3>Get in Touch</h3>
        </header>
        <form className="submit_form form" action="https://formsubmit.co/9eb8400d13809384a217392d8c97d16e" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="message" placeholder="Message" required />
          <button className="submit" type="submit">Send</button>
        </form>
      </section>
      <div className="copyright">
        <p>
          <a href="mailto:hello@cheftimmaslow.com">hello@cheftimmaslow.com</a>
        </p>
        <p>&copy; 2023 | Made with &hearts; by <a href="https://mallorybae.com">Mallory Shackford</a></p>
      </div>
    </div>
  );
}
