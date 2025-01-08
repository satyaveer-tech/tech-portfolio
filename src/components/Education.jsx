import React from 'react';
import EducationItem from './EducationItem';

const educationData = [
  {
    degree: 'Bachelor of Science',
    institution: 'University of Example',
    year: '2020 - 2024',
    description: 'Specialized in Software Engineering and AI.',
  },
  {
    degree: 'High School Diploma',
    institution: 'Example High School',
    year: '2016 - 2020',
    description: 'Graduated with honors in Mathematics and Physics.',
  },
  {
    degree: 'Master of Science',
    institution: 'Tech University',
    year: '2024 - 2026',
    description: 'Master\'s in Data Science with a focus on Machine Learning.',
  },
];

const Education = () => (
  <section className="education-section">
    <h2>Education</h2>
    {educationData.map((edu) => (
      <EducationItem
        key={edu.degree + edu.institution} // Unique key for each item
        degree={edu.degree}
        institution={edu.institution}
        year={edu.year}
        description={edu.description}
      />
    ))}
  </section>
);

export default Education;
