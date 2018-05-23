import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
      </style>

      <!-- The first part of our page, the screen which will show all messages (bubbles) -->
      <chat-screen>{{chatscreen}}</chat-screen>

      <!-- Second part : willshow a paper-input and a paper-button which will allow us to type some text and send it to be caught and shown into the screen  -->
      <form action="">
        <chat-text-entry>{{chatentry}}</chat-text-entry>
        <chat-button-send on-click="send"></chat-button-send> <!-- on a click event the button will trigger the 'send' function  -->
      </form>

    `;
  }

static get properties() {
  var screen = document.createElement('chat-screen');
  var entry = document.createElement('chat-text-entry');
    return {
      chatscreen: {
        type: customElements,
        value : screen
      },
      chatentry: {
        type: customElements,
        value : entry
      }
    };
  }

  // Function that will take care of sending the new messgae to the screen (then will be add a functionality which will set up the input to "" again)
  send(){
    var newBubble = document.createElement('chat-bubble');
    newBubble.msg = this.chatentry.getInput();
    newBubble.owner = "ours";
    this.chatscreen.Add(newBubble);
  }

  constructor(){
    super();
  }
  
}

window.customElements.define('my-app', MyApp);
