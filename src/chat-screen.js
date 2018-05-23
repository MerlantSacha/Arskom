import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '/src/chat-bubble.js';

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
      #message { list-style-type: none; margin: 0; padding: 0; }
      #message { padding: 5px 10px; }
      </style>

      <!-- List which will be filled with chat bublles -->
      <ul id="message">
      
      </ul>
    `;
  }

  // Function that takes a ChatBubble as parameter and which add this bubble into the list
  Add(bubble){
    
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-screen', ChatScreen);

