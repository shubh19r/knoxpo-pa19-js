import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	restItems: any;
	arraytemp =[];
	arrayDay =['Day1','Day2','Day3','Day4','Day5',];
  	restItemsUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&APPID=ab3e3dc06717abdc1ee90e34bbcb6275';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.getRestItems();
  }

   // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          for (var i = 0; i <= 4; i++) {
          	this.arraytemp[i]=this.restItems.list[i].main.temp;
          }
          console.log(this.restItems.list[0].main.temp);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}
