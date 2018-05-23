import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// importing the paper-button element to use it to create the sending button
import '@polymer/paper-button/paper-button.js';

/**
 * @customElement
 * @polymer
 */
class ChatButtonSend extends PolymerElement {

  static get template() {
    
    return html`
      <style>
        :host {
          display: block;
        }
        .grey {background-color: #e4e4e4;}
      </style>

      <!-- Paper button that will be used to send the message typed in the chat text entry -->
      <paper-button toggles raised class="grey">[[text]]</paper-button>

    `;
  }

  // Data binding : We can choose any text in this button
  static get properties() {
    return {
      text: {
        type: String,
        value: 'Send' // default value
      }
    };
  }

  constructor(){
    super();
  }


}

window.customElements.define('chat-button-send', ChatButtonSend);