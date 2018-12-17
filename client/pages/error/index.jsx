import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { View } from '../../layout';
import Error from './Error';
import './error.less';

export default class Index extends Component {
  static getPartial(props) {
    return { html: <Error {...props} /> };
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
  ReactDOM.hydrate(<Error {...props} />, document.getElementById('container'));
}
