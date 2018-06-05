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
      .ours { background: #98fb98; }
      .theirs { background: #d3d3d3; }
      </style>
      
      <!-- data binding , lines that will be placed in the ul of chatscreen -->
      <div class =[[owner]]>
        [[msg]]
      </div>
    `;
  }
  
  // properties linked to bubbles' attributes
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

  
  constructor(){
    super();
  }

}

window.customElements.define('chat-bubble', ChatBubble);
