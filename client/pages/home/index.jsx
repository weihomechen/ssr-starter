import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { View } from '../../layout';
import Home from './Home';
import './home.less';

export default class Index extends Component {
  static getPartial(props) {
    return { html: <Home {...props} /> };
  }

  render() {
    const { html } = this.props;

    return (
      <View {...this.props}>
        <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
      </View>
    );
  }
}

if (__CLIENT__) {
  const { props } = window;
  ReactDOM.hydrate(<Home {...props} />, document.getElementById('container'));
}
