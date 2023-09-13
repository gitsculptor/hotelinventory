export interface Room{
    totalRooms :number;
    availableRooms :number;
    bookedRooms:number;
}

export interface RoomList{
    roomtype :string;
    price :number;
    id:number;
    amenties:string;
    image:string;
    checkInTime: Date;
    checkOutTime: Date;
}