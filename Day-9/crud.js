
function demo() {                                               //Button click function

    var val1 = document.getElementById('Username').value;       //fetching username input value
    document.getElementById("name").innerHTML = val1;           // adding value in table cell

    var val2 = document.getElementById('Email').value;          //fetching Email input value
    document.getElementById("email").innerHTML = val2;          // adding value in table cell

    var val3 = document.getElementById('Number').value;         //fetching Number input value
    document.getElementById("number").innerHTML = val3;         // adding value in table cell

    var val5 = document.getElementById('Comment').value;        //fetching textarea input value
    document.getElementById("comment").innerHTML = val5;        // adding value in table cell


    {
        var radios = document.getElementsByName('Gender');   //fetching redio input value
        for (var radio of radios) {
            if (radio.checked) {
                document.getElementById("GENDER").innerHTML = (radio.value);  // adding value in table cell
            }
        }
    }

    {
        var checkboxes = document.getElementsByName('checkbox');   //fetching checkbox input value
        for (var checkbox of checkboxes) {
            if (checkbox.checked) {
                document.getElementById("Language").innerHTML = (checkbox.value);  // adding value in table cell
            }
        }
    }

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = val1;
    cell2.innerHTML = val2;
    cell3.innerHTML = val3;
    cell4.innerHTML = radio.value;
    cell5.innerHTML = val5;
    cell6.innerHTML = checkbox.value;


    document.getElementById("myForm").reset();      // for resetting form after click on submit
}
