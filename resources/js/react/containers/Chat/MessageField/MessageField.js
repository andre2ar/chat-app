import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

import './MessageField.css';
import Button from "../../../components/Button/Button";

const MessageField = ({sendMessage, token}) => {
    const [message, setMessage] = useState('');
    const refTextarea = useRef(null);

    const sendMessageHandler = (e) => {
        e.preventDefault();
        sendMessage(message, token);

        setMessage('');
        refTextarea.current.focus();
    };

    return (
        <form onSubmit={sendMessageHandler}>
            <div className='MessageField'>
                <input required value={message} ref={refTextarea} placeholder='Type your message'
                          onChange={(event) => setMessage(event.target.value)}/>

                <Button>
                    Send
                </Button>
            </div>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        token: state.chat.token,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message, token) => dispatch(actions.sendMessage(message, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MessageField);
