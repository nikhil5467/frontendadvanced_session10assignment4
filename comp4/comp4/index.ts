import {Component} from 'angular2/core';
 
declare var jQuery:any;
 
@Component({
    selector: 'my-app',
    template: `<button onclick="console.log('It Worked!!')">
                    jQuery Integration Test
               </button>
              `
})
 
export class AppComponent { 
 
    ngAfterViewInit() {
        jQuery('button').click();
    }
}
