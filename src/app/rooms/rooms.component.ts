import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

rooms : Room ={
  totalRooms:10,
  availableRooms:5,
  bookedRooms:5
  

}

roomList : RoomList[] = [
  {
    roomtype : "Deluxe",
    id : 1,
    price : 2000,
    amenties : "TV, AC, WiFi",
    image : "https://pixels.com/featured/1-abstract-art-abstract-art.html",
    checkInTime : new Date(),
    checkOutTime : new Date()
  },
  {
    roomtype : "Deluxe",
    id : 2,
    amenties : "TV, AC, WiFi",
    image: "https://pixels.com/featured/1-abstract-art-abstract-art.html",
    checkInTime : new Date(),
    checkOutTime : new Date(),
    price : 2000
  
  }
];

  hotelName = "Oyo Hotel";
  no_of_rooms = 10;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // toggle() :void => {
  //    this.no_of_rooms = 20;
  // }
   toggle(){
    console.log("click happened");
    this.no_of_rooms=20;
   }

    toggle2 = ()=>{this.no_of_rooms=20;}

}
