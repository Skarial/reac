

import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ onPrevClick, onNextClick }) {
  return (
    <div>
      <button onClick={onPrevClick}>Précédent</button>
      <button onClick={onNextClick}>Suivant</button>
    </div>
  );
}
NavBar.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};


export default NavBar;








