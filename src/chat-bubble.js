import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ChatBubble extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      
      <!-- data binding , lines that will be placed in the ul of chatscreen -->
      <li class =[[owner]]>
        [[msg]]
      </li>
    `;
  }
  
  static get properties() {
    return {
      msg: {
        type: String,
        value: 'default value, set here just to get something on my screen'
      },
      owner: {
        type: String,
        value: 'theirs'
      }
    };
  }

  // Constructor that will allow to create new chat bubbles with a message in it
  constructor(message,classe){
    super();
    this.msg=message;
    this.owner=classe;
  }

}

window.customElements.define('chat-bubble', ChatBubble);
