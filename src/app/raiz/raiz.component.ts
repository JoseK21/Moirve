import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './raiz.component.html',
  styleUrls: ['./raiz.component.css']
})
export class RaizComponent implements OnInit {

  validate: number = 0;
  mag: number = 0;
  magPrevios: number = 0;
  ang: number = 0;

  nR: number = 0;

  angStandar: number = 0;
  magStandar: number = 0;

  solutionsBinomica: Array<String> = [];
  solutionsPolar: Array<String> = [];
  solutionsTrigonometrica: Array<String> = [];

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

    this.solutionsBinomica = [];
    this.solutionsPolar = [];
    this.solutionsTrigonometrica = [];


    this.checkInput(a, b, n);

    if (this.validate) {

      if (n >= 1 || n < 0) {

        this.angStandar = +(this.ang * n).toFixed(2);

        while (this.angStandar > 360) {
          this.angStandar = this.angStandar - 360;
        }
        //BINOMIAL
        if (this.mag * Math.sin(this.angStandar) > 0) {

          this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar * (Math.PI / 180))).toFixed(2) + "+j" + (this.mag * Math.sin(this.angStandar * (Math.PI / 180))).toFixed(2));
        } else {

          this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar)).toFixed(2) + "-j" + (this.mag * Math.sin(this.angStandar) * -1).toFixed(2));
        }
        //POLAR
        this.solutionsPolar.push(this.mag.toFixed(2) + "<_" + this.angStandar.toFixed(2));
        //TRIGONOMETRICA
        this.solutionsTrigonometrica.push(this.mag.toFixed(2) + "(cos(" + this.angStandar.toFixed(2) + ") + jsen(" + this.angStandar.toFixed(2) + ")");


      } else if (n < 1 && n > 0) {
        console.log("n<0");

        for (let index = 0; index < n; index++) {

          this.angStandar = +((this.ang + 360 * index) * n).toFixed(2);

          console.log(this.angStandar);

          while (this.angStandar > 360) {
            this.angStandar = this.angStandar - 360;
          }
          //BINOMIAL
          if (this.mag * Math.sin(this.angStandar) > 0) {
            this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar * (Math.PI / 180))).toFixed(2) + "+j" + (this.mag * Math.sin(this.angStandar * (Math.PI / 180))).toFixed(2));
          } else {
            this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar)).toFixed(2) + "-j" + (this.mag * Math.sin(this.angStandar) * -1).toFixed(2));
          }
          //POLAR
          this.solutionsPolar.push(this.mag.toFixed(2) + "<_" + this.angStandar.toFixed(2));
          //TRIGONOMETRICA
          this.solutionsTrigonometrica.push(this.mag.toFixed(2) + "(cos(" + this.angStandar.toFixed(2) + ") + jsen(" + this.angStandar.toFixed(2) + ")");
        }

      } else {
        this.solutionsBinomica.push("1");
        this.solutionsPolar.push("1");
        this.solutionsTrigonometrica.push("1");
      }


    } else {
      console.log("ERROR de alguna entrada");
    }


    console.log("Binomica : ");
    console.log(this.solutionsBinomica);

    console.log("Polar : ");
    console.log(this.solutionsPolar);

    console.log("Trigonometrica : ");
    console.log(this.solutionsTrigonometrica);

  }

  /**
   * checkInput
   */
  public checkInput(a: number, b: number, n: number) {

    if ("" + (a || b || n) == "") {
      this.validate = 0;
    } else {
      this.validate = 1;
    }
  }

  public solutionsTotal = [
    { id: '', sB: '', sP: '', sT: '' },
  ];
}

