import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bin-dec';
  decimal:number = 0;
  bits: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
  onDecimalChange(){
    if(this.decimal > 255){
      alert("Cislo sa neda zobrazit 8 bitmi")
    }else {
      let pom = this.decimal.toString(2);
      for (let i = 0; i < pom.length; i++) {
        if (pom[i] == '1') {
          this.bits[this.bits.length - 1 - (pom.length - 1 - i)] = true;
        } else {
          this.bits[this.bits.length - 1 - (pom.length - 1 - i)] = false;
        }
      }
      console.log(pom)
    }
  }
  onCheckBoxChange(){
    console.log(this.bits);
    let n = 0;
    for (let i = 0; i < this.bits.length; i++) {
      if (this.bits[i]) {
        n += Math.pow(2, this.bits.length - 1 - i);
      }
    }
    this.decimal =n;
  }
  trackByIndex(index: number, item: any): any {
    return index;
  }
}
