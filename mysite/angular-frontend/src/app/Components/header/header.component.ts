import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DARK } from '../../../environments/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  dark = DARK;

  userGivenName: String = '';
  userFamilyName: String = '';
  userIsStaff: String = '';

  ngOnInit(): void {
    this.userGivenName = (<any>window)["userGivenName"];
    this.userFamilyName = (<any>window)["userFamilyName"];
    this.userIsStaff = (<any>window)["userIsStaff"];
  }
}
