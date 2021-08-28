import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public notification:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  deleteFromDOM(notification: any){
      console.log(notification);
  }

}
