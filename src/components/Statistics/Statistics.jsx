import PropTypes from 'prop-types';
// import { Stats } from '../Stats/Stats';
import cl from './Statistics.module.css';

export const Statistics = ({ title, stat }) => {
  return (
    <section className = {cl.statistics}>
      {title ? (<h2 className = {cl.title}>{title}</h2>) : (<></>)}
      <ul className = {cl.stat_list}>
      {stat.map(({ id, label, percentage }) => {
        return (
          <li style = {{backgroundColor: getRandomHexColor()}} className = {cl.item} key={id}>
            <span className = {cl.label}>{label}</span><br/>
            <span className = {cl.percentage}>{percentage}%</span>
          </li>    
        );    
      })}
      </ul>
    </section>
  );  
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}