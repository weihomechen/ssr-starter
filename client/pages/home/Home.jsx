import React from 'react';

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
    } = this.props;

    return (
      <div className="home" >
        {pageName}
      </div >
    );
  }
}

export default Page;
