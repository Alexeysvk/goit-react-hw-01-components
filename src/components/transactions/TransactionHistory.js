import PropTypes from 'prop-types'
import cs from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={cs.transactionHistory}>
            <thead className={cs.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={cs.tbody}>
                {items.map(item => (
                    <tr className={cs.tr} key={item.id}>
                        <td className={cs.td}>{item.type}</td>
                        <td className={cs.td}>{item.amount}</td>
                        <td className={cs.td}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }).isRequired,
    ),
};