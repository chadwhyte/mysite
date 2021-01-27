import './card.css';
import { ICard } from './card.interface';

function Card(card : ICard) {
    return (
        <div className="card-container">
            <div className="card-title">
                <span className="material-icons card-logo">
                    {card.icon}
                </span>
                <h2>
                    {card.title}
                </h2>    
            </div>
            <div>
                <a className="card-link" href={card.link} target="_blank" rel="noreferrer">
                    {card.text}
                </a>
            </div>
        </div>
    );
}

export default Card;