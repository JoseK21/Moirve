import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  validate: number = 0;
  mag: number = 0;
  magPrevios: number = 0;
  ang: number = 0;

  angStandar: number = 0;
  magStandar: number = 0;

  solutionsBinomica: Array<String> = [];
  solutionsPolar: Array<String> = [];
  solutionsTrigonometrica: Array<String> = [];


  constructor() { }

  ngOnInit() {
  }

  /**
   * checkNumber
   */
  public checkNumber(a: number, b: number, n: number) {
    if ((a && b && n) > 0) {
      this.validate = 1;
      this.magnitude(a, b, n);
      this.angle(a, b);
      this.createSolution(n);
    } else {
      this.validate = 0;
    }
    console.log(this.validate);
  }

  /**
   * magnitude
   */
  public magnitude(a: number, b: number, n: number) {

    this.magPrevios = Math.pow(a * a + b * b, 0.5);
    this.mag = Math.pow(this.magPrevios, n);
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
  public createSolution(n: number) {
      this.angStandar = +(this.ang * n).toFixed(2);

      if (n > 0) {
        while(this.angStandar>360){
          this.angStandar = this.angStandar -360;
        }

        //BINOMIAL
        if (this.mag * Math.sin(this.angStandar) > 0) {
          this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar*(Math.PI/180))).toFixed(2) + "+j" + (this.mag * Math.sin(this.angStandar*(Math.PI/180))).toFixed(2));
        } else {
          this.solutionsBinomica.push((this.mag * Math.cos(this.angStandar)).toFixed(2) + "-j" + (this.mag * Math.sin(this.angStandar) * -1).toFixed(2));
        }
        //POLAR
        this.solutionsPolar.push(this.mag.toFixed(2) + "<_" + this.angStandar.toFixed(2));
        //TRIGONOMETRICA
        this.solutionsTrigonometrica.push(this.mag.toFixed(2) + "(cos(" + this.angStandar.toFixed(2) + ") + jsen(" + this.angStandar.toFixed(2) + ")");
      } else if (n < 0) {
        
    for (let index = 0; index < n; index++) {
    }

      } else {

      }
      /*
      this.angStandar = +((this.ang+360*index)*n).toFixed(2);

      this.solutionsBinomica.push((this.mag*Math.cos(this.angStandar)).toFixed(2) + " +" +(this.mag*Math.sin(this.angStandar)).toFixed(2) +"j");
            
      this.solutionsPolar.push(this.mag+ "<_" + this.angStandar);

      this.solutionsTrigonometrica.push(this.mag+ "(cos("+this.angStandar + ") + jsen("+this.angStandar+ ")");
*/

    console.log(this.solutionsBinomica);
    console.log(this.solutionsPolar);
    console.log(this.solutionsTrigonometrica);
    this.solutionsBinomica = [];
    this.solutionsPolar = [];
    this.solutionsTrigonometrica = [];
    
  }

}
