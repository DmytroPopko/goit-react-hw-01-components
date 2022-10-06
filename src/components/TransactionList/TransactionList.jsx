import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import PropTypes from 'prop-types';
import { Th } from './TransactionList.styled';

function TransactionList({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionHistory
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionList.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionList;
