import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  validate:number = 0;
  mag:number = 0;
  ang:number=0;

  solutions:Array<String> = [];

  constructor() { }

  ngOnInit() {    
  }

  /**
   * checkNumber
   */
  public checkNumber(a:number,b:number,r:number) {    
    if ( (a && b && r) > 0 ){
      this.validate=1;
      this.magnitude(a,b);
      this.angle(a,b);
      this.createSolution(r);
    }else{
      this.validate=0;
    }
    console.log(this.validate);
  }

  /**
   * magnitude
   */
  public magnitude(a:number,b:number) {
    
    this.mag= Math.pow(a*a + b*b,0.5);
    console.log(this.mag);
  }

  /**
   * angle
   */
  public angle(a:number,b:number) {
   this.ang= Math.atan(b/a)*(180/Math.PI);
   console.log(this.ang);
  }

  /**
   * createSolution
   */
  public createSolution(n:number) {

    for (let index = 0; index < n; index++) {
     this.solutions.push(index.toString());
    }
    console.log(this.solutions);
    this.solutions = [];
  }
}
