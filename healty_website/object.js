
    const person = {
        name: "",
        age: 0,
        gender: "male",
        weight: 0,
        height: 0,
        message: "",
        idealWeight: function() {
            if (person.age <= 5) {
                return 2 * (person.age + 5); // Kid
            } else if (person.age > 5 && person.age <= 15) {
                return 4 * person.age; // Teenager
            } else {
                if (person.gender == "female") {
                    return 22 * ((person.height - 10) / 100) * ((person.height - 10) / 100); // Female
                } else {
                    return 22 * (person.height / 100) * (person.height / 100); // Male
                }
            }
        },
        idealDrink: function() {
            if (person.age <= 5) {
                return 3; // Kid
            } else if (person.age > 5 && person.age <= 18) {
                return 5; // Teenager
            } else {
                return 8; // Adult
            }
        },
        recommendation: function() {
            if (person.age <= 10) {
                message = "- Children should move a lot."; // Kid
            } else if (person.age > 10 && person.age <= 18) {
                message = "- Teenagers should consume calcium regularly."; // Teenager
            } else {
                message = "- Adults should exercise regularly."; // Adult
            }
            return message;
        }
    };

    function analyze() {
        person.name = document.getElementById('name').value;
        person.gender = document.getElementById('gender').value;
        person.age = document.getElementById('age').value;
        person.weight = document.getElementById('weight').value;
        person.height = document.getElementById('height').value;
        if (person.name == '' || person.gender == '' || person.age == 0 || person.weight == 0 || person.height == 0) {
            alert("Input all details!");
        } else {
            document.getElementById('result_name').innerHTML = 'Hello, ' + person.name + ' !';
            document.getElementById('result_gender').innerHTML = '<img src="' + person.gender + '.png">';
            document.getElementById('result_idealWeight').innerHTML = 'Your ideal weight: ' + person.idealWeight() + 'kg';
            var glassNum = person.idealDrink();
            var glassImg = "";
            for (var i = 0; i < glassNum; i++) {
                glassImg += '<img src="image/glass.png" >';
            }
            document.getElementById('result_idealDrink').innerHTML = 'You should drink ' + glassImg + ' glass(es)';
            if (person.age <= 5) {
                document.getElementById('result_age').innerHTML = '<img src="kid.png">';
            } else if (person.age > 5 && person.age <= 18) {
                document.getElementById('result_age').innerHTML = '<img src="teenager.png">';
            } else {
                document.getElementById('result_age').innerHTML = '<img src="adult.png">';
            }
            document.getElementById('result_recommendation').innerHTML = 'Recommendation: ' + person.recommendation();
        }
    }