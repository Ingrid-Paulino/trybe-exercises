import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

class Gallery extends Component {
  render() {
    const { dogs } = this.context;
    return (
      <>
        <header>
          <h1>Gallery</h1>
          <nav>
            <Link to="/register">Resgiter</Link>
          </nav>
        </header>
        <main>
          <div className="cards-container">
            {
              dogs.map(({ dog, friend, photo }, index) => (
                <div key={ index } className="card">
                  <img src={ photo } alt={ `${dog}` } className="image-card" />
                  <h2 className="dog-card">{dog}</h2>
                  <p className="friend-card">{`${friend}' friend`}</p>
                </div>
              ))
            }
          </div>
        </main>
      </>
    );
  }
}

Gallery.contextType = Context;

export default Gallery;