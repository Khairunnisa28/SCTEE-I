class Person {
    constructor(name, month, date, year) {
        this.name = name;
        this.date = date;
        this.month = month;
        this.year = year;
    }
        getAge() {
            var date = new Date();
            return date.getFullYear() - this.year;
        }
        getBirthDay() {
            var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var date = new Date(this.year+"-"+this.month+"-"+this.date);
            return dayName[date.getDay()];
        }
        getShio() {
            var gapYear = this.year - 1959;
            var gapShio = gapYear%12;
            var shioName = ["Pig", "Mouse", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog"];
            return shioName[gapShio];
        }
    }
    function analyze(){
        var name = document.getElementById('name').value;
        var month = document.getElementById('month').value;
        var date = document.getElementById('date').value;
        var year = document.getElementById('year').value;
        var currentPerson = new Person(name, month, date, year);
        document.getElementById('result_name').innerHTML = 'Hello, ' + currentPerson.name + '!';
        document.getElementById('result_age').innerHTML = 'You are ' + currentPerson.getAge() + 'year(s) old';
        document.getElementById('result_birthday').innerHTML = 'You are born on ' + currentPerson.getBirthDay();
        document.getElementById('result_shio').innerHTML = 'Your shio is ' + currentPerson.getShio();
    }