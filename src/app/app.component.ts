import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Important Event in Angular';
 
  getData(val:string) {
    console.warn(val)
  };

  title1='Get input box value';
  displayVal='';
  getValue(val:string){
  console.warn(val)
  this.displayVal=val
  };

  title2='Counter With Angular';
  count=0;
  counter(type:string)
  {
    type==='add'?this.count++:this.count--
   
  };
  title3='Basic Style in Angular';

  title4='Property Binding';
  name='Jolly';
  disable=false

  title5='if-else condition';
  show=false

  title6='Multiple Conditions or else-if';
  // color="green"

  title7='Switch condition';
  // color="purple"

  title8='For Loop';
  users=['anil','chetan','sam','peter','adam'];
  userDetails=[
    {name:'Anil', email:'anil @gmail.com',phone:1234},
    {name:'chetan', email:'chetan @gmail.com',phone:1234},
    {name:'sam', email:'sam @gmail.com',phone:1234},
    {name:'peter', email:'peter @gmail.com',phone:1234},
    {name:'Aadam', email:'adam @gmail.com',phone:1234},
    {name:'casy', email:'casy @gmail.com',phone:1234},
  ]

  title9='Nested Loop';
  user=[
       {name:'Anil',phone:'11111',socialAccounts:['facebook','instagram','whatsapp']},
       {name:'Sam',phone:'22222',socialAccounts:['youtube','instagram','facebook']},
       {name:'Adam',phone:'33333',socialAccounts:['linkedin','instagram','youtube']},
       {name:'Casy',phone:'55555',socialAccounts:['facebook','chrome','whatsapp']},
  ]

  title10='Style Binding'
  color='red'
  bgColor='pink'

  updateColor(){
    this.color="blue"
    this.bgColor='yellow'
  }

  title11='Header In Angular'
}



