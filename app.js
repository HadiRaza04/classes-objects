class Assignment{
    submit(date, month, year, week){
        this.date = date;
        this.month = month;
        this.year = year;
        this.week = week;
        console.log(`Your assignment is submitted at ${this.date}-${this.month}-${this.year}, ${this.week}`)
    }
    cancel(date, month, year, week){
        this.date = date;
        this.month = month;
        this.year = year;
        this.week = week;
        console.log(`Your assignment is canceled at ${this.date}-${this.month}-${this.year}, ${this.week}`)
    }
}

let mathAssignment = new Assignment();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
mathAssignment.submit(new Date().getDate(), months[new Date().getMonth()], new Date().getFullYear(), week[new Date().getDay()]);


class Classes{
    room(number){
        this.roomNumber = number;
        console.log(`Your room no is: ${this.roomNumber}`);
    }
    floor(){
        // this.floorNumber = number;
        console.log(`Your floor no is: ${this.roomNumber}`);
    }
}

const b6 = new Classes();
b6.room(7);
b6.floor();





class StudentDetails{
    name(name){
        this.name = name;
        console.log(this.name);
    }
    rollNo(rollNo){
        this.rollNo = rollNo;
        console.log(this.rollNo);
    }
    class(classNo){
        this.class = classNo;
        console.log(this.class);
    }
    section(section){
        this.section = section;
        console.log(this.section);
    }
}

let Hadi = new StudentDetails;
let Muslim = new StudentDetails;
let Aun = new StudentDetails;
let Qaiem = new StudentDetails;
let Raza = new StudentDetails;
let Kumail = new StudentDetails;

Hadi.name("Hadi");
Hadi.rollNo(31);
Hadi.class(2);
Hadi.section("A");

Muslim.name("Muslim");
Muslim.rollNo(41);
Muslim.class(7);
Muslim.section("D");

Aun.name("Aun");
Aun.rollNo(41);
Aun.class(7);
Aun.section("D");

Qaiem.name("Qaiem");
Qaiem.rollNo(41);
Qaiem.class(7);
Qaiem.section("D");

Raza.name("Raza");
Raza.rollNo(41);
Raza.class(7);
Raza.section("D");

Kumail.name("Kumail");
Kumail.rollNo(41);
Kumail.class(7);
Kumail.section("D");



