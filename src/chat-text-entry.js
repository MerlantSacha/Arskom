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
      </style>

      <form action="">
       <iron-input  bind-value="{{value}}">
          <input type='text' autofocus>
        </iron-input>
        
        </form>

    `;
  }

static get properties() {
      return {
       value: {
        type: String,
        value : '',
        notify: true,
        reflectToAttribute: true
       }
    };
  }

  send(){
    var r = this.value;
    this.value='';
    return(r);
  }

  constructor(){
    super();
  }

}

window.customElements.define('chat-text-entry', ChatTextEntry);