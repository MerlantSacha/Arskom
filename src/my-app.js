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
          height: 100vh;
          display: flex;
         flex-direction: column;
        }
        iron-list {
          flex: 1 1 auto;
         }
      </style>

      <!-- The first part of our page, the screen which will show all messages (bubbles) -->
      <!-- <chat-screen>{{chatscreen}}</chat-screen> -->
      <iron-list items={{myList}}>
        <template>

        <div>...</div>

       </template>
      </iron-list>

        <iron-input  bind-value="{{value}}">
          <input type='text'><chat-button-send on-click="send"></chat-button-send> <!-- on a click event the button will trigger the 'send' function  -->
        </iron-input>

    `;
  }

static get properties() {
  var screen = document.createElement('chat-screen');
  var entry = document.createElement('chat-text-entry');
    return {
      myList: {
        type: Array
      },
      value: {
        type: String
      }
    };
  }

  send(){
    console.log(this.value);
    var newBubble = document.createElement('chat-bubble');
    newBubble.msg = this.value;
    this.value="";
    this.push('myList', newBubble);
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
