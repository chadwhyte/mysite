import { useState } from "react";
import { ITag } from './tag.interface';
import './tag.css';

function Tag(tag: ITag) {
    const [on, toggle] = useState(false);
    
    return (
        <div onClick={() => toggle(!on)} 
            className={`tag ${on ? 'tag-on' : 'tag-off'}`}>
            {`#${tag.title}`}
        </div>
    )
}

export default Tag;