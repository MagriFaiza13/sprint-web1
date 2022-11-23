import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptServiceService } from "../../script-service.service";
const SCRIPT_PATH_LIST =[
  "../../../assets/front-office/lib/easing/easing.min.js",
  "../../../assets/front-office/lib/owlcarousel/owl.carousel.min.js",
  "../../../assets/front-office/mail/jqBootstrapValidation.min.js",
  "../../../assets/front-office/mail/contact.js",
  "../../../assets/front-office/js/main.js",

  ] 
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor( private renderer: Renderer2,
    private ScriptServiceService: ScriptServiceService) { }

  ngOnInit(): void {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
       console.log('loaded');
     
      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }

    })
  }

}
