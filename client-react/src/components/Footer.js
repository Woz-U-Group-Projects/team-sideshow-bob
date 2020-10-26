import React from "react";
import './Footer.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <footer className="FooterItems">
  <div class="wrapper">
    <a href="http://www.github.com" FontAweseomIcon icon= {faHome}> </a>
    <a href="http://www.facebook.com" target="_blank"><i class="fa-facebook-square"></i></a>
    <a href="http://www.twitter.com" target="_blank"><i class="fa-3x fa-twitter-square"></i></a>
    <a href="http://www.instagram.com" target="_blank"><i class="fa-3x fa-instagram"></i></a>
  </div>
            </footer>
        )
    }
}

export default Footer