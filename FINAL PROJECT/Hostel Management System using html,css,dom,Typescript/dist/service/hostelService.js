import { roomsAvailability } from "../data/roomsData.js";
//a normal class ->created an object block in my memory
export class hostelService {
    constructor() {
        this.rooms = []; ////since data we are storing here are private (implementing encapsulation)
        this.resident = [];
        this.loadData(); ////////using the constructor to load all data itno the memorey whenever the object is called
    }
    /////Browser will provide a loacl storage of 5 mb in form of json the data will be stored.it is aone of the web apis
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        // console.log(storedRooms);
        // console.log(storedResidents);////would givr error 
        if (storedRooms) {
            this.rooms = JSON.parse(storedRooms); ///if i get the data then we will parse and store
        }
        else {
            this.rooms = roomsAvailability; ///if we dont have data then we will
        }
        if (storedResidents) {
            this.resident = JSON.parse(storedResidents);
        }
        else {
            this.resident = [];
        }
        // console.log(this.rooms);
        // console.log(this.resident);
    }
    ///// getters to get the data
    get getRooms() {
        return this.rooms;
    }
    get getResidents() {
        return this.resident;
    }
    /////////////so have another method for STORING the Data
    saveData() {
        localStorage.setItem("rooms", JSON.stringify(this.rooms));
        localStorage.setItem("residents", JSON.stringify(this.resident));
    }
    //////////////////Add Resident it was for loading the data
    addResident(name, age, phone, roomNumber, checkInDate) {
        ////make a habit to use const to ARRAYS
        const room = this.rooms.find((r) => r.roomNumber === roomNumber); ////r represents each element
        if (!room) {
            throw new Error("Room doesnt exit");
        }
        else if (room.isOccupied) {
            throw new Error("Number is already occupied");
        }
        const newResident = {
            id: Date.now().toString(),
            name: name,
            age: age,
            phone: phone,
            roomNumber: roomNumber,
            checkIndate: checkInDate
        };
        this.resident.push(newResident);
        room.isOccupied = true;
        this.saveData(); /////to save data
        console.log(this.rooms);
        console.log(this.resident);
        /////to check our this service or function is working correctly or not so Testing
    }
    ///////////Deleting resident based on ID 
    deleteResident(id) {
        const delResident = this.resident.find((r) => r.id === id);
        if (!delResident) {
            throw new Error("Resident not found, Room is not occupied");
        }
        const room = this.rooms.find((r) => r.roomNumber === delResident.roomNumber);
        if (!room) {
            throw new Error("Room not found");
        }
        this.resident = this.resident.filter(delRes => delRes !== delResident);
        room.isOccupied = false;
        this.saveData();
        console.log(this.resident);
        console.log(this.rooms);
    }
    updateResident(id, name, age, phone) {
        const updateRes = this.resident.find((r) => r.id === id);
        if (!updateRes) {
            throw new Error("Resident ID not found");
        }
        updateRes.name = name;
        updateRes.age = age;
        updateRes.phone = phone;
        this.saveData();
        console.log(this.resident);
        console.log(this.rooms);
    }
    getOccupiedRooms() {
        return this.rooms.filter((r) => r.isOccupied);
    }
    getVacantRooms() {
        return this.rooms.filter((r) => !r.isOccupied);
    }
    getRoomStates() {
        const total = this.rooms.length;
        const occupied = this.getOccupiedRooms().length;
        const vacant = total - occupied;
        return { total, occupied, vacant };
    }
}
