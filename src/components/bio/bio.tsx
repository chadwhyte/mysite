import './bio.css';
import Tag from './tag';
import { Tags } from './tags';

function Bio() {
    return (
        <div className="bio-container">
            {Tags.map((tag) => {
                return <Tag {...tag} key={tag.title} />
            })}
        </div>
    );
}

export default Bio;