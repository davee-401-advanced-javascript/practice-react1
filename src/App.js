import React from 'react';

import './styles.scss';

import Header from './header/header.js';

import Footer from './footer/footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        submit: false,
        headers: '',
        count: 0,
        results: []
      };
    }
  

  render() {
    return (
      <>
      <Header/>
      <Footer/>
      </>
    )
  }
}

export default App;