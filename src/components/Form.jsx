import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form id="main-form">
        <label htmlFor="card-name">
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            id="card-name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="card-description">
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="textArea"
            id="card-description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="first-atribute">
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            id="first-atribute"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="second-atribute">
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            id="second-atribute"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="third-attribute">
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            id="third-attribute"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-url">
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            id="image-url"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="rarity"
            id="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="is-ST">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            name="is-ST"
            id="is-ST"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="salve-btn"
          id="save-btn"
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>

    );
  }
}

Form.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;