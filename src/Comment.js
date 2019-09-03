import React from 'react';
import { thumbDownComment, thumbUpComment } from './actions';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <li className="comment">
        {text} <span className="votes"> votes: {votes}</span>
        <button className="thumbUp" onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button className="thumbDown" onClick={() => thumbDownComment(id)}>Thumb down</button>
    </li>;

export default Comment;