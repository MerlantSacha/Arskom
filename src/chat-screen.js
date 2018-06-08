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
      </style>

    `;
  }

// This function is here to create the first message (welcome message) and to open the shadowRoot
  start(text){
    var line = document.createElement('p');
    var bub = document.createElement('chat-bubble');
    bub.msg=text;
    bub.owner='theirs';
    line.appendChild(bub);
    this.attachShadow({mode: 'open'}).appendChild(line);
  }

// Function that will add differents messages into the screen
  add(own, text){
    var line = document.createElement('p');
    var newBub = document.createElement('chat-bubble');
    newBub.msg=text;
    newBub.owner=own;
    this.shadowRoot.appendChild(newBub);
  }

  constructor(){
    super();
    this.start('Welcome');

  }

}

window.customElements.define('chat-screen', ChatScreen);

