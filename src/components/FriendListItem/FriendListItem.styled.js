import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  max-width: 200px;
  padding: 20px;
  margin: 10px;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Status = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  background-color: ${({ isOnlineStatus, theme }) =>
    isOnlineStatus ? theme.colors.green : theme.colors.red}};
`;

export const Name = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;
