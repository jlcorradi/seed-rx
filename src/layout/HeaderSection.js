import React from 'react';
import PropTypes from 'prop-types';

const HeaderSection = (props) => {
  return (
    <div class="d-flex">
      <div className="flex-fill">
        <span class="h5">{props.title}</span>
        <p class="text-muted">{props.subtitle}</p>
      </div>
      <div className="ml-auto">{props.children}</div>
    </div>
  );
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default HeaderSection;
