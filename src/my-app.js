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
		    background-color : #eeffee;
		    };
		}
      </style>

     <paper-dialog-impl id="myDialog">
	  <h2>Arskom Project</h2>
	  <h4>chat-app</h4>
	  <div class="my-content-wrapper">
	    <paper-dialog-scrollable bind-value="{{msg}}">
	      {{msg}}
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
      	value: ["hello"]
      },
      nb: {
      	type: Number,
      	value: 0
      }
    };
  }

  send(){
    console.log(this.value);
    this.push('msg',this.value);
    this.push('msg', this.dialogText(this.nb));
    this.nb = this.nb+1;
    this.value="";
  }

  dialogText(n){
  	var list = ['how are you ?', 'Great !', 'random msg'];
  	if (n>=list.length){
  		n=list.length-1;
  	}
  	return(list[n]);
  }


  // Function that will take care of sending the new messgae to the screen (then will be add a functionality which will set up the input to "" again)
  /*send(){
    console.log(this.chatentry.go());
  }*/

  constructor(){
    super();
  }
  
}

window.customElements.define('my-app', MyApp);
