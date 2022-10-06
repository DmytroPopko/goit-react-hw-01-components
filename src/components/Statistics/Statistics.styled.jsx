import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  max-width: 300px;
  text-align: center;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
`;

export const StatList = styled.ul`
  list-style: none;
  columns: 5;
  background-color: ${props => props.theme.colors.bgStats};
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Label = styled.span`
  display: table;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
`;
