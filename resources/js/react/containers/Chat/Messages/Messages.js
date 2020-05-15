import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { animateScroll } from "react-scroll";

import './Messages.css';
import MessageBubble from "../MessageBubble/MessageBubble";

const Messages = ({messages}) => {
    useEffect(() => {
        animateScroll.scrollToBottom({
          containerId: "messages"
        });
    }, [messages]);

    return (
        <div id="messages" className='Messages'>
            { messages.length > 0 ?
                messages.map((message, index) => {
                    return (
                        <MessageBubble key={index} type={message.from}>
                            {message.text}
                        </MessageBubble>
                    )
                }) :
                <div className='NoMessages'>
                    <h1>
                        No messages yet
                    </h1>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
    }
};

export default connect(mapStateToProps)(Messages);
