import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ChatBubble extends PolymerElement {
  
  static get template() {
    return html`

      <!-- styling the bubbles according to their class -->
      <style>
        :host {
          display: block;
        }
        #ours{
         background: #aaeeaa; 
         text-align: right;
        }
        #theirs{
         background: #aaaaff; 
         text-align: left;
        }
      </style>
      
        <div bind-value="{{msg}}" id="{{owner}}">{{msg}}</div> <!-- Binding the value so when it will be created the properties will reflect to this attribute -->
    `;
  }
  
  // properties linked to bubbles' attributes
  static get properties() {
    return {
      msg: {
        type: String,
        value: "random"
      },
      owner: {
        type: String,
        value: "theirs"
      }
    };
  }

  
  constructor(){
    super();
  }

}

window.customElements.define('chat-bubble', ChatBubble);
