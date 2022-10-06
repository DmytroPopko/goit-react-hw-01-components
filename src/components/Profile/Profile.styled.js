import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 400px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Description = styled.div`
  padding: 50px;
`;

export const Avatar = styled.img`
  max-width: 200px;
  border-radius: 100%;
`;

export const UserName = styled.div`
  padding-top: 10px;
  color: ${props => props.theme.colors.primaryText};
  font-weight: bold;
`;

export const Tag = styled.div`
  padding-top: 10px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Location = styled.div`
  padding-top: 10px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Stats = styled.ul`
  list-style: none;
  columns: 3;
`;

export const StatItem = styled.li`
  padding: 20px;
  border: 1px solid;
  background-color: ${props => props.theme.colors.colorStats};
`;

export const Label = styled.span`
  display: table;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-weight: bold;
`;
