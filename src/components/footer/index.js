import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  renderFooterItem(item) {
    return (
      <div className="footer-item" key={item.id}>
        <img src={item.icon || ''} alt={item.alt || ''} /> 
        <p>{item.text}</p>
      </div>
    );
  }

  render() {
    return (
      <footer className="container">
        <div className="footer-items">
          {this.props.items.map(this.renderFooterItem)}
        </div>
        <div className="copyright">
          {`© ${new Date().getFullYear()} `}
          {this.props.copyright}
        </div>
      </footer>
    );
  }
}

export default Footer;
