import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import {PaperInputBehaviorImpl, PaperInputHelper} from '@polymer/paper-input/paper-input-behavior.js';

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
        input::placeholder { text-align :center; }
      </style>

        <!-- An input which will be filled with the message(here pictured by an attribute linked to properties). This message will be send thanks to the chatButton -->
        <paper-input id="m" autocomplete="off" autofocus  placeholder="type your message">{{text}}</paper-input>
    `;
  }

static get properties() {
  var txt = document.createElement('paper-input');
    return {
      text: {
        type: customElements,
        value : txt,
        notify: true,
        reflectToAttribute: true // Update the attribute up there when this property changes
      }
    };
  }

  // Function that will return the text typed into the paper-input
  getInput () {
    var txt = this.text.inputElement();
    return(txt);
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-text-entry', ChatTextEntry);