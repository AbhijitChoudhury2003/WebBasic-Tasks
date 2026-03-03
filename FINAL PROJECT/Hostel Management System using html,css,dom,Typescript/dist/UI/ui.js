export class UI {
    // private editResidentId: string | null = null;
    constructor(service) {
        this.service = service;
        this.form = document.getElementById("residentForm");
        this.tableBody = document.getElementById("residentTableBody");
        this.statsDiv = document.getElementById("stats");
        this.roomSelect = document.getElementById("roomNumber");
        this.init();
    }
    init() {
        this.populateRoomDropdown();
        this.renderResidents();
        this.renderStats();
        this.handleFormSubmit();
        this.handleDelete();
        this.handleUpdate();
    }
    populateRoomDropdown() {
        this.roomSelect.innerHTML = "";
        const vacantRooms = this.service.getVacantRooms();
        if (vacantRooms.length === 0) {
            const option = document.createElement("option");
            option.textContent = "No Vacant Rooms";
            option.disabled = true;
            option.selected = true;
            this.roomSelect.appendChild(option);
            return;
        }
        vacantRooms.forEach((room) => {
            const option = document.createElement("option");
            option.value = room.roomNumber.toString();
            option.textContent = `Room ${room.roomNumber}`;
            this.roomSelect.appendChild(option);
        });
    }
    renderResidents() {
        this.tableBody.innerHTML = "";
        const residents = this.service.getResidents;
        residents.forEach((resident) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${resident.name}</td>
        <td>${resident.age}</td>
        <td>${resident.phone}</td>
        <td>${resident.roomNumber}</td>
        <td>${resident.checkIndate}</td>
        <td>
             <button data-id="${resident.id}" class="deleteBtn">Delete</button>
             <button data-id="${resident.id}" class="editBtn">Update</button>
        </td>
      `;
            this.tableBody.appendChild(row);
        });
    }
    renderStats() {
        const stats = this.service.getRoomStates();
        this.statsDiv.innerHTML = `
      <p>Total Rooms: ${stats.total}</p>
      <p>Occupied Rooms: ${stats.occupied}</p>
      <p>Vacant Rooms: ${stats.vacant}</p>
    `;
    }
    handleFormSubmit() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const age = Number(document.getElementById("age").value);
            const phone = document.getElementById("phone")
                .value;
            const roomNumber = Number(this.roomSelect.value);
            const checkInDate = document.getElementById("checkInDate").value;
            try {
                this.service.addResident(name, age, phone, roomNumber, checkInDate);
                this.renderResidents();
                this.renderStats();
                this.populateRoomDropdown();
                this.form.reset();
            }
            catch (error) {
                alert(error.message);
            }
        });
    }
    handleDelete() {
        this.tableBody.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("deleteBtn")) {
                const id = target.getAttribute("data-id");
                if (id) {
                    this.service.deleteResident(id);
                    this.renderResidents();
                    this.renderStats();
                    this.populateRoomDropdown();
                }
            }
        });
    }
    handleUpdate() {
        this.tableBody.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("editBtn")) {
                const id = target.getAttribute("data-id");
                if (id) {
                    const resident = this.service.getResidents.find(r => r.id === id);
                    if (resident) {
                        const name = document.getElementById("name").value || resident.name;
                        const age = Number(document.getElementById("age").value) || resident.age;
                        const phone = document.getElementById("phone").value || resident.phone;
                        if (name == resident.name && age == resident.age && phone == resident.phone) {
                            let heading = document.getElementById("formName");
                            heading.innerHTML = "Give the values here and click Update ";
                            heading.style.color = "red";
                        }
                        else {
                            this.service.updateResident(id, name, age, phone);
                            this.renderResidents();
                            this.renderStats();
                            this.form.reset();
                            alert("Updated Successfully");
                            let heading = document.getElementById("formName");
                            heading.innerHTML = "Add Resident";
                            heading.style.color = "black";
                        }
                    }
                }
            }
        });
    }
}
