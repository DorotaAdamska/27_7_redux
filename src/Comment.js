import React from 'react';
import { thumbDownComment, thumbUpComment, removeComment } from './actions';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
    <li className="comment">
        {text} <span className="votes"> votes: {votes}</span>
        <div className="comment-buttons">
            <button className="thumbUp" onClick={() => thumbUpComment(id)}>Thumb up</button>
            <button className="thumbDown" onClick={() => thumbDownComment(id)}>Thumb down</button>
            <button className="delete" onClick={() => removeComment(id)}>Remove comment</button>
        </div>
    </li>;

export default Comment;