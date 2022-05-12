// You shouldn't need to change anything in here - check out the Modal.js file instead!

import React from 'react';
import { Modal } from './Modal';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open : false };
    }
    
    showModal() {
        if (this.state.open) {
            return (
                <Modal 
                    open={this.state.open}
                    onDismiss={() => this.setState({ open: false })}
                    title="Modal Title"
                    content="Modal Body"
                    actions={<div className="ui button">Button</div>}
                />
            );
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ open: !this.state.open })}>
                    Open Modal
                </button>
                {this.showModal()}
                
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
                />
                <div id="modal" />
            </div>
        )
    
    }
}

document.body.append(document.createElement('section'));