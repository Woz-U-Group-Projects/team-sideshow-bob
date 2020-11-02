import React from "react";
import './Stylesheets/Footer.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <footer className="footerItems">
        <div>
          <Container>
            <Navbar expand="lg" sticky="bottom">
              <NavbarBrand className="wrapper">
                <a href="http://www.github.com" target="_blank"><i class="fab fa-lg fa-github"></i></a>
                <a href="http://www.facebook.com" target="_blank"><i class="fab fa-lg fa-facebook-square"></i></a>
                <a href="http://www.twitter.com" target="_blank"><i class="fab fa-lg fa-twitter-square"></i></a>
                <a href="http://www.instagram.com" target="_blank"><i class="fab fa-lg fa-instagram"></i></a>
              </NavbarBrand>
            </Navbar>
          </Container>
        </div>
      </footer>
    )
  }
}

ReactDOM.render(
  <div className="main">
    <div className="content">Content!</div> <Footer />
  </div>,
  document.getElementById('root')
);

export default Footer