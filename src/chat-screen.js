import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ChatScreen extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <!-- List which will be filled with chat bublles -->
      <ul id="message"></ul>

    `;
  }
}

window.customElements.define('chat-screen', ChatScreen);
