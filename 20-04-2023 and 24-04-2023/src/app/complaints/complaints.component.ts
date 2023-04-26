import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {      
      "name": "lipstick",
      "flag": "http://localhost/lipstick.jpg"
    },
    {      
      "name": "washing machine",
      "flag": "http://localhost/washing machine.jpg"
    },
    {      
      "name": "AC",
      "flag": "http://localhost/AC.jpg"
    },
    {      
      "name": "fridge",
      "flag": "http://localhost/fridge.jpg"
    },
    {      
      "name": "perfume",
      "flag": "http://localhost/perfume.jpg"
    },
    {      
      "name": "watch",
      "flag": "http://localhost/watch.jpg"
    },
    {      
      "name": "sofa",
      "flag": "http://localhost/sofa.jpg"
    }
  ];
  fname:any;
  email:any;
  message:any;
  product:any;
  errors:string[] = [];
  constructor(private cs:ComplaintsService){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(prod => (prod ? this._filterStates(prod) : this.pproducts.slice())),
    );
    
  }
  

  ngOnInit(): void {
  }
  submit(){
    this.errors=[]
    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product:this.product
      }
      this.cs.postComplaint(obj).subscribe({
        next:()=>{
          console.log(obj)
          alert("You complaint is raised")
            this.fname="",
            this.email="",
            this.message="",
            this.product=""
          },
          error: ()=>alert("there is a problem raising your complaint")
        }
        )
      }
  }

  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
