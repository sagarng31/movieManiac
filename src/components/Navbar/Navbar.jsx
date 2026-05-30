import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <DarkMode />
        <a href="">
          Popular <img src={Fire} className="navbar_emoji" />
        </a>
        <a href="">
          Top Rated <img src={Star} className="navbar_emoji" />
        </a>
        <a href="">
          Upcoming <img src={Party} className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
