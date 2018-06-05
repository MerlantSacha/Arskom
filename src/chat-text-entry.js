import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-input/iron-input.js';

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
        input {
          width : 500px;
        }
      </style>

        <!-- An input which will be filled with the message(here pictured by an attribute linked to properties). This message will be send thanks to the chatButton -->
        <form action="">
       <iron-input  bind-value="{{value}}">
          <input type='text'><chat-button-send on-click="send"></chat-button-send> <!-- on a click event the button will trigger the 'send' function  -->
        </iron-input>
        
        </form>
    `;
  }

static get properties() {
      return {
      value: {
        type: String,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  send(){
    var r = this.value;
    this.value="";
    console.log(r);
    return(r);
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-text-entry', ChatTextEntry);