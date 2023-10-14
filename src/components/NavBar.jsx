

import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ onPrevClick, onNextClick }) {
  return (
    <nav>
      <button onClick={onPrevClick}>Précédent</button>
      <button onClick={onNextClick}>Suivant</button>
    </nav>
  );
}
NavBar.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};


export default NavBar;








