import style from './CryptoHistory.module.css';
import formatDate from 'helpers/formatDate';
const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((el, i) => {
            return (
              <th key={i} className={style.th}>
                {el}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }) => {
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{id}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{formatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
