import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exponente',
  templateUrl: './exponente.component.html',
  styleUrls: ['./exponente.component.css']
})
export class ExponenteComponent implements OnInit {


  validate: number = 0;
  mag: number = 0;
  magPrevios: number = 0;
  ang: number = 0;
  nR: number = 0;
  angStandar: number = 0;
  magStandar: number = 0;

  solutions: Array<String> = [];


  constructor() { }

  ngOnInit() {
  }

  /**
   * checkNumber
   */
  public checkNumber(a: number, b: number, n: number) {

    try {
      this.createSolution(a, b, n);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * magnitude
   */
  public magnitude(a: number, b: number, n: number) {

    this.magPrevios = Math.pow(a * a + b * b, 0.5);
    this.mag = Math.pow(this.magPrevios, n);
    console.log("Magnitud: " + this.mag);

  }

  /**
   * angle
   */
  public angle(a: number, b: number) {
    this.ang = (Math.atan(b / a) * (180 / Math.PI));
    console.log("Angulo: " + this.ang);
  }

  /**
   * createSolution
   */
  public createSolution(a: number, b: number, n: number) {
    this.magnitude(a, b, n);
    this.angle(a, b);

    this.solutions = [];
    this.angStandar = +(this.ang * n).toFixed(2);

    while (this.angStandar > 360) {
      this.angStandar = this.angStandar - 360;
    }
    //BINOMIAL
    if (this.mag * Math.sin(this.angStandar) > 0) {

      this.solutions.push((this.mag * Math.cos(this.angStandar * (Math.PI / 180))).toFixed(2) + "+j" + (this.mag * Math.sin(this.angStandar * (Math.PI / 180))).toFixed(2));
    } else {

      this.solutions.push((this.mag * Math.cos(this.angStandar)).toFixed(2) + "-j" + (this.mag * Math.sin(this.angStandar) * -1).toFixed(2));
    }
    //POLAR
    this.solutions.push(this.mag.toFixed(2) + "/_" + this.angStandar.toFixed(2));
    //TRIGONOMETRICA
    this.solutions.push(this.mag.toFixed(2) + "(cos(" + this.angStandar.toFixed(2) + ") + jsen(" + this.angStandar.toFixed(2) + "))");





    console.log("Binomica : ");
    console.log(this.solutions[0]);

    console.log("Polar : ");
    console.log(this.solutions[1]);

    console.log("Trigonometrica : ");
    console.log(this.solutions[2]);

  }

}
