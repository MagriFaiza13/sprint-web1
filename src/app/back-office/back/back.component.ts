import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptServiceService } from '../../script-service.service';
const SCRIPT_PATH_LIST =[
  "../../../assets/back-office/plugins/jQuery/jQuery-2.1.3.min.js",
  "../../../assets/back-office/bootstrap/js/bootstrap.min.js",
  "../../../assets/back-office/plugins/morris/morris.min.js",
  "../../../assets/back-office/plugins/sparkline/jquery.sparkline.min.js",
  "../../../assets/back-office/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js",
  "../../../assets/back-office/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
  "../../../assets/back-office/plugins/knob/jquery.knob.js",
  "../../../assets/back-office/plugins/daterangepicker/daterangepicker.js",
  "../../../assets/back-office/plugins/datepicker/bootstrap-datepicker.js",
  "../../../assets/back-office/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js",
  "../../../assets/back-office/plugins/iCheck/icheck.min.js",
  "../../../assets/back-office/plugins/slimScroll/jquery.slimscroll.min.js",
  "../../../assets/back-office/plugins/fastclick/fastclick.min.js",
  "../../../assets/back-office/dist/js/app.min.js",
  "../../../assets/back-office/dist/js/pages/dashboard.js",
  "../../../assets/back-office/dist/js/demo.js"

  ] 
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(  private renderer: Renderer2,
    private ScriptService: ScriptServiceService) { }

  ngOnInit(): void {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
       console.log('loaded');
     
      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }

    })
  }

}
