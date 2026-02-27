//a normal class ->created an object block in my memory
export class hostelService {
    constructor() {
        this.rooms = []; ////since data we are storing here are private (implementing encapsulation)
        this.resident = [];
    }
    /////Browser will provide a loacl storage of 5 mb in form of json the data will be stored.it is aone of the web apis
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        console.log(storedRooms);
        console.log(storedResidents);
    }
}
