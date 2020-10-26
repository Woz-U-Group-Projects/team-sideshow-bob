import React from "react";
import './Footer.css';


const currentDate = new Date();
const year = currentDate.getFullYear();
class Footer extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <footer className="FooterItems">
  <div class="wrapper">
    <a href="http://www.github.com" target="_blank"><i class="fab fa-2x fa-github"></i></a>
    <a href="http://www.facebook.com" target="_blank"><i class="fab fa-2x fa-facebook-square"></i></a>
    <a href="http://www.twitter.com" target="_blank"><i class="fab fa-2x fa-twitter-square"></i></a>
    <a href="http://www.instagram.com" target="_blank"><i class="fab fa-2x fa-instagram"></i></a>
    <p className="copyRight">Copyright {year}</p>
  </div>
            </footer>
        )
    }
}

export default Footer