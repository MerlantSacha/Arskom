import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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

      <!-- Simple button that will be used to send the message typed in the chat texte entry -->
      <paper-button toggles raised class="grey">[[text]]</paper-button>

    `;
  }
  static get properties() {
    return {
      text: {
        type: String,
        value: 'Send'
      }
    };
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-button-send', ChatButtonSend);