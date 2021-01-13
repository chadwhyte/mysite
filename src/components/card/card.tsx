import './card.css';
import { ICard } from './card.interface';

function Card(card : ICard) {
    return (
        <div className="card-container">
            <h1>
                {card.title}
            </h1>
            <span className="material-icons card-logo">
                {card.icon};
            </span>
            <a className="card-link" href={card.link} target="_blank">
                {card.text}
            </a>
        </div>
    );
}

export default Card;