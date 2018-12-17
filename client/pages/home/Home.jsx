import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    const {
      pageName,
      info,
    } = this.props;

    return (
      <div className="home" >
        <Header name="Header" />
        <div className="content">
          <div>{pageName}</div>
          <div>{JSON.stringify(info)}</div>
        </div>
        <Footer name="Footer" />
      </div>
    );
  }
}

export default Page;
