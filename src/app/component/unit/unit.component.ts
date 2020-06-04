import {Component, Input} from '@angular/core';
import {UnitEnum} from './unit.enum';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  @Input() unit: UnitEnum | undefined = undefined;
  readonly myEnum = UnitEnum;
}
