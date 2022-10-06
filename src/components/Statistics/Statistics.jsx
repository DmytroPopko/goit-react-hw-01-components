import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </li>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
