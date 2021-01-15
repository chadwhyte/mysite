import './card.css';
import { ICard } from './card.interface';

function Card(card : ICard) {
    return (
        <div className="card-container">
            <h2>
                {card.title}
            </h2>
            <div className="card-details">
                <span className="material-icons card-logo">
                    {card.icon}
                </span>
                <a className="card-link" href={card.link} target="_blank">
                    {card.text}
                </a>
            </div>
        </div>
    );
}

export default Card;