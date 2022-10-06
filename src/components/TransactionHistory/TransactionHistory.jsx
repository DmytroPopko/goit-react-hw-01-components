import PropTypes from 'prop-types';
import { Tr, Td } from './TransactionHistory.styled';

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <>
      <Tr>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </Tr>
    </>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
