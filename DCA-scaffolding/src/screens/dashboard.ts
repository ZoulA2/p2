import { Datab } from "../services/Data";
import { Dataj } from "../services/Data";
import "../components/export"
import { Attribute1 } from "../components/button/button";
import {api} from '../types/api'

class Dashboard extends HTMLElement{

constructor(){

    super();

    this.attachShadow({mode: "open"})

}
async connectedCallback(){
    const databu = await Datab();
    this.render(databu)
}

render(databu:any){
    if(this.shadowRoot) this.shadowRoot.innerHTML = '';


    databu.forEach((a: any) => {
        const button = this.ownerDocument.createElement('chuck-button');
        button.setAttribute(Attribute1.text, a);
        this.shadowRoot?.appendChild(button);
    });
}


}
customElements.define('app-dashboard',Dashboard);
