import { Rooms } from "../model/rooms";
import { Resident } from "../model/residents";
import { roomsAvailability } from "../data/roomsData";


//a normal class ->created an object block in my memory
export class hostelService{
  private rooms: Rooms[] = []; ////since data we are storing here are private (implementing encapsulation)
  private resident: Resident[] = [];
  constructor() {
    
  }


  /////Browser will provide a loacl storage of 5 mb in form of json the data will be stored.it is aone of the web apis
  loadData(): void{
    const storedRooms = localStorage.getItem("rooms");
    const storedResidents = localStorage.getItem("residents");
    console.log(storedRooms);
    console.log(storedResidents);
  }

}