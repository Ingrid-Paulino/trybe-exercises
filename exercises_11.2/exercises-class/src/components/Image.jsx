import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <>
      <h1>Cute cat staring</h1>
        <img className="imgCat" src={this.props.source} alt={this.props.alternativeText} />;
      </>
    ) 
  }
}

export default Image;