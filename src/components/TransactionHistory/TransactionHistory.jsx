import PropTypes from 'prop-types';
import cl from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className = {cl.transactions}>
      <table className = {cl.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key = {id}>
              <td className = {cl.indent}>{type}</td>
              <td className = {cl.centr}>{amount}</td>
              <td className = {cl.indent}>{currency}</td>
            </tr>   
          );    
        })}
        </tbody>
    </table>
  </div>
  );  
};

TransactionHistory.propTypes = {  
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}