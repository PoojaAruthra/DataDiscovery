import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { siRouterFadeAnimation } from '@simpl/siemens-brand-ng/tools';

@Component({
  selector: '<app-root>',
  templateUrl: './app.component.html',
  animations: [siRouterFadeAnimation]
})
export class AppComponent {
  getRouteAnimation(outlet: RouterOutlet) {
    return (outlet.isActivated ? outlet.activatedRoute : null);
  }
}
