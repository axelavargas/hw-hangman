import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function PlaceholderWord({ letters, correctLetters }) {
  const WrapperPlaceholder = styled.ul`
    padding: 4em;
    display: flex;
    flex-wrap: wrap;
    li {
      flex-direction: row;
      list-style: none;
      margin: 10px;
      font-size: 2em;
      border-bottom: 5px solid #000;
      min-width: 50px;
      height: 50px;
    }
  `;

  return (
    <WrapperPlaceholder>
      {letters.map((letter, index) => {
        if (correctLetters.includes(letter)) {
          return <li key={index}> {letter} </li>;
        }
        return <li key={index} />;
      })}
    </WrapperPlaceholder>
  );
}

PlaceholderWord.defaultProps = {
  letters: [],
  correctLetters: [],
};

PlaceholderWord.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string),
  correctLetters: PropTypes.arrayOf(PropTypes.string),
};

export default PlaceholderWord;
