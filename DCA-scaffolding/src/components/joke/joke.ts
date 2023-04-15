export enum Attribute2 {

    "text" = "text"
    
    }

    export default class Button extends HTMLElement{

        text: string = '';
    
        static get observedAttributes(){
    
            const attrs: Record <Attribute2, null> = {
                text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: Attribute2,
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
    

}


    }

