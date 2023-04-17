import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent {
  @Input() title:string="OUR PRODUCT"
  @Input() description:string=""
  @Input() servicelist:string[]=[]

}
