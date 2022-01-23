import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService: CommonService,
    private http: HttpClient) { }
  items;
  response;
  index:number =0;
  ngOnInit(): void {
    this.commonService.fetchStoreApi()
      // clone the data object, using its known Config shape
      .subscribe((data) => {
        this.items = data;
        // for(let i=0; i< this.items.length; i++){
          console.log(this.items[0]);
          // this.response = this.items[i];
        // }
          // console.log(this.config[this.index]);
      });
  }

}
