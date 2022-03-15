import { Action } from "../actions/action";
import { Button } from "./button"

export class ToggleButton extends Button{

    private is_A_show = true;
    private iconA: string;
    private iconB: string;
    private titleA: string;
    private titleB: string;

    constructor(parent: HTMLElement, iconA: string, iconB: string, action: Action, titleA: string = "", titleB : string = ""){
        super(parent, iconA, action);

        this.iconA = iconA;
        this.iconB = iconB;
        this.titleA = titleA;
        this.titleB = titleB;
    }

    setButtonState(default_state: boolean){
        if( default_state ){
            this.button.title = this.titleA;
            this.icon.src = this.iconA;
        }
        else{
            this.button.title = this.titleB;
            this.icon.src = this.iconB;
        }
    }

    protected async onButtonClick(){
        if( ! this.is_enable ){ return; }
        if( ! await this.action.run() ){ return; }

        this.is_A_show = !this.is_A_show;
        
        this.setButtonState(this.is_A_show);
    }
}