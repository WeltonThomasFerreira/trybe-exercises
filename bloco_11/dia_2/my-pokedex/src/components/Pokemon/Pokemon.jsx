import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;

    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {`Average Weight:  
          ${value}
          ${measurementUnit}`}
        </p>
        <img src={image} alt="" />
      </div>
    );
  }
}

export default Pokemon;
