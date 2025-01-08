import React from 'react';
import PropTypes from 'prop-types';

const EducationItem = ({
    degree,
    institution,
    year,
    description,
  }) => (
    <div className="education-item">
      <h3>{degree}</h3>
      <p><strong>{institution}</strong></p>
      <p><i>{year}</i></p>
      <p>{description}</p>
    </div>
  );
EducationItem.propTypes = {
  degree: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationItem;
