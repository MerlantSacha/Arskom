import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';

/**
 * @customElement
 * @polymer
 */
class MyApp extends PolymerElement {

  static get template() {

    return html`
      <style>
        :host {
          display: block;
        }
        div {
        	background-color: #f8f8f8;
        }
        paper-button.custom {
		    background-color : #efefff;
		    };
		}
      </style>

     <paper-dialog-impl id="myDialog">
	  <h2>Arskom Project</h2>
	  <h4>chat-app</h4>
	  <div class="my-content-wrapper">
	    <paper-dialog-scrollable bind-value="{{msg}}">
	      [[msg]]
	    </paper-dialog-scrollable>
	  </div>
	</paper-dialog-impl>

	<iron-input id="input" bind-value="{{value}}">
	<input type='text'><paper-button raised class="custom indigo" on-tap="send">Send</paper-button>
	</iron-input>

    `;
  }

static get properties() {
    return {
      value: {
      	type: String,
      	value: ""
      },
      msg: {
      	type: Array,
      	value: ["hello"],
      	notify: true,
      	reflectToAttribute: true
      }
    };
  }

  send(){
    console.log(this.value);
    this.pop('msg');
    this.push('msg',this.value);
    this.value="";
  }

  constructor(){
    super();
  }
  
}

window.customElements.define('my-app', MyApp);
