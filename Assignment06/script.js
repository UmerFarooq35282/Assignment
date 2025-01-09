// let donor = {
//     "A+" : ["A+", "A-", "O+", "O-"],
//     "A-" : ["A-", "O-"],
//     "B+" : ["B+", "B-", "O+", "O-"],
//     "B-" : ["B-", "O-"],
//     "O+" : ["O+", "O-"],
//     "O-" : ["O-"],
//     "AB+" : ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
//     "AB-" : ["A-", "B-", "O-", "AB-"]
// }

function checkBloodGroup(){
    let value = document.getElementById("blood_group").value;
    let result = "";
    let ouptputResult = document.getElementById("blood_group_result");
    if(value == "A+"){
        result =  "A+ , A- , O+ , O-"
    }
    else if(value == "A-"){
        result =  "A- , O-"
    }
    else if(value == "B+"){
        result =  "B+ , B- , O+ , O-"
    }
    else if(value == "B-"){
        result =  "B- , O-"
    }
    else if(value == "O+"){
        result =  "O+ , O-"
    }
    else if(value == "O-"){
        result =  "O-"
    }
    else if(value == "AB+"){
        result =  "A+ , A- , B+ , B- , O+ , O- , AB+ , AB-"
    }
    else if(value == "AB-"){
        result = "A- , B- , O- , AB-"
    }
    else{
        result = "Invalid Blood Group"
    }
    ouptputResult.innerText = result;
}


let html = `<div class="container">
        <div class="form-group">
          <label for="">Select Blood Group</label>
          <select class="form-control" name="blood_group" id="blood_group">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option  value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <button class="btn btn-primary" onclick="checkBloodGroup()">Check Blood Group</button>
        <div class="result">
            <h1>Blood Group: <span id="blood_group_result"></span></h1>
        </div>
    </div>

    <script src="script.js"></script>`
