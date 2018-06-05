import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '/src/chat-bubble.js';
import '@polymer/iron-list/iron-list.js';


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
      <iron-list items={{myList}}>
      
      </iron-list>
    `;
  }

    static get properties() {
    return {
      myList: {
        type: Array
      }
    };
  }

  // Function that takes a ChatBubble as parameter and which add this bubble into the list
  Add(bubble){
    this.push('myList', bubble);
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-screen', ChatScreen);

