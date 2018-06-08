import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// By security I import everything (but not necessary because it's done in index.html and it won't load again : it's well build)
import '@polymer/iron-input/iron-input.js';
import '/src/chat-screen.js';
import '/src/chat-text-entry.js';

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
        chat-screen {
          height: 500px;
        }
      </style>


    `;
  }

  open(){
    var shr = this.attachShadow({mode: 'open'});
    var screen = document.createElement('chat-screen');
    var entry = document.createElement('chat-text-entry');
    var button = document.createElement('chat-button-send');
    this.shadowRoot.appendChild(screen);
    this.shadowRoot.appendChild(entry);
    this.shadowRoot.appendChild(button);
    button.addEventListener("click", function () {
      var greeting1 = new RegExp(".*(hello)|(hi).*");
      var askState = new RegExp(".*(how are you)|(hry)|(how r u)|(howdy).*?.*");
      var state = new RegExp(".*(fine)|(great)|(good).*");
      if( greeting1.test(entry.value.toLowerCase()) ){
        screen.add('ours',entry.send());
        screen.add('theirs','Hello Burak !');
      }else if( askState.test(entry.value.toLowerCase()) ){
        screen.add('ours',entry.send());
        screen.add('theirs','I\'m fine and you ?');
      }else if( state.test(entry.value.toLowerCase()) ){
        screen.add('ours',entry.send());
        screen.add('theirs','Happy to hear so !');
      }else{
        screen.add('ours',entry.send());
        screen.add('theirs','I do not understand this message. My test function should be improved, sorry');
      }
      
    });
  }


  constructor(){
    super();
    this.open();
  }
  
}

window.customElements.define('my-app', MyApp);
