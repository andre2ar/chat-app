import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import './MessageField.css';
import Button from "../../../components/Button/Button";

const MessageField = ({sendMessage}) => {
    const [message, setMessage] = useState('');
    const refTextarea = useRef(null);

    const sendMessageHandler = (e) => {
        e.preventDefault();

        sendMessage(message);

        setMessage('');
        refTextarea.current.focus();
    };

    return (
        <form onSubmit={sendMessageHandler}>
            <div className='MessageField'>
                <textarea required value={message} ref={refTextarea} placeholder='Type your message'
                          onChange={(event) => setMessage(event.target.value)}></textarea>

                <Button>
                    Send
                </Button>
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => dispatch(actions.sendMessage(message))
    }
};

export default connect(null, mapDispatchToProps) (MessageField);
