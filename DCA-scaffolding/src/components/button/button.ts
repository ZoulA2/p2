export enum Attribute1 {

"text" = "text"

}

export default class Button extends HTMLElement{

    text: string = '';

    static get observedAttributes(){

        const attrs: Record <Attribute1, null> = {
            text: null,
    }
    return Object.keys(attrs);
}

attributeChangedCallback(
    propName: Attribute1,
    _:unknown,
    newValue: string
){
    switch (propName){
        default:
            this[propName] = newValue;
            break;
    }
}
constructor(){
    super();
    this.attachShadow({mode: "open"})
}
connectedCallback(){
    this.render();
}
render(){
    if(this.shadowRoot) this.shadowRoot.innerHTML= '';

    const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.text}`
        button.addEventListener('click',() =>{
            button.innerText = " ";
        })
}
}

customElements.define('chuck-button',Button);
