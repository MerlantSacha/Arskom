import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */
class ChatTextEntry extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <form action="">

        <!-- A paperinput to put the text in and a button that will be replacer by chat-button-send -->
        <paper-input id="m" autocomplete="off" ></paper-input><button>Send</button>

      </form>
    `;
  }
 
}

window.customElements.define('chat-text-entry', ChatTextEntry);
