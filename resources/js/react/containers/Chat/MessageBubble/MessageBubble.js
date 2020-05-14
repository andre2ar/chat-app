import React from 'react';

import './MessageBubble.css';

const MessageBubble = ({children, type}) => {
    let style = ['MessageBubble'];
    if(type === 'user') {
        style.push('UserMessage');
    } else {
        style.push('BotMessage')
    }

    return (
        <div className={style.join(' ')}>
            { children }
        </div>
    );
}

export default MessageBubble;
