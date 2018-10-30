import React, { Component, Fragment } from 'react';

export default class RickandMorty extends Component {

  _renderWhen = () => {
    if (this.props.rmData) {
      return (
        <>
          <p>This is where the data should be</p>
            <ul>
              {this.props.rmData.map(character => {
                return (
                  <li key={character.id}>
                    <h2>{character.name}</h2>
                    <img src={character.image}
                         alt={character.name} />
                  </li>
                )
              })}
            </ul>
        </>
      )
    } else {
      return (
        <div>
          <p>...data is not done fetching...</p>
        </div>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this._renderWhen()}
      </Fragment>
    );
  }
}
