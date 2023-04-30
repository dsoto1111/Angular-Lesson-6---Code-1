import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent {
  numberVariable: Number = 2;
  disableProperty: boolean = true;
  typeProperty: string = 'date';
  srcProperty: string = '';
  hiddenProperty: boolean = true;
  colSpanProperty: string = '1';

  sendNumber(): Number {
    return 2 + 2;
  }

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);

    setTimeout(() => {
      this.disableProperty = false;
      this.typeProperty = 'text';
      this.hiddenProperty = false;
      this.colSpanProperty = '2';
  }, 5000);
}

onButtonClick(event: Event) {
  console.log(event);
  (event.target as HTMLButtonElement).innerHTML = "Click Me Again!"
}

onClick(event: Event) {
  console.log(event.target);
  console.log(event.currentTarget);
}

onInput(event: Event) {
  console.log((<HTMLInputElement>event.target).value);
}

onMouseOver(event: Event) {
  console.log("The x position is: " + (event as MouseEvent).clientX);
  console.log("The y position is: " + (event as MouseEvent).clientY);
}
}

