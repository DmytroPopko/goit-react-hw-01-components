import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 500px;
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
`;

export const Td = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background: ${props => props.theme.colors.white};
  }
  &:nth-child(even) {
    background: ${props => props.theme.colors.colorStats};
  }
`;
