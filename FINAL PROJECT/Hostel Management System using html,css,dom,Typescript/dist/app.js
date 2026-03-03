import { hostelService } from "./service/hostelService.js"; /////we cannot give an ts file for now since it will ask for a configuration which is tough
import { UI } from "./UI/ui.js";
const data = new hostelService();
new UI(data);
// let service=new hostelService();
// // service.loadData();
// // service.addResidents("Billu Badmash",22,"900000000",105,"01/01/26");
// service.deleteResident("bill17722");
// // service.updateResident("bill17722", "Alice",22,"5445454");
// let service = new hostelService();
// // console.log(service.loadData());
// service.addResident("harsh", 23, "3333333333333", 109, "June");
