import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UnitEnum} from './component/unit/unit.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testSelect';
  formGroup = new FormGroup({
    unitSelected: new FormControl(UnitEnum.M),
    otherUnitSelected: new FormControl(UnitEnum.CM)
  });
  units = [UnitEnum.MM, UnitEnum.CM, UnitEnum.M];
}
