import PropTypes from 'prop-types'
import cs from './Statistics.module.css'




export default function Statistics ({ title, stats }) {
    return (
        <section className={cs.statistics}>
            {title && <h2 className={cs.title}>{title}</h2>}

            <ul className={cs.statList}>
                {stats.map(stat => (
                    <li className={cs.item} key={stat.id}>
                        <span className={cs.label}>{stat.label}</span>
                        <span className={cs.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes ={
    title: PropTypes.string,
    id:PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}