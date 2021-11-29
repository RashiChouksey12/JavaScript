function savedata(){           // button click function
        
    var txtCity = document.getElementById("txtCity");
     data = {

        "txtName": document.getElementById('txtName').value,
        "txtMobile": document.getElementById('txtMobile').value,
        "txtEmail": document.getElementById('txtEmail').value,
        "txtCity": txtCity.options[txtCity.selectedIndex].text,
        "gender": getRadioValue('gender'),
        "Hobbies": Hob,
        "comment": document.getElementById('cmnt').value,
        
    };
    if(selectedRow==null){
        createtablerow(data);

    }else{
        update(data);
    }
   
    console.log(data);      
    resetForm();
}
            
function VerifyUser()        //validation username
            {
                var txtName = document.getElementById("txtName").value;
                var msg =document.getElementById("msg");
                if(txtName.charCodeAt(0)>=65 && txtName.charCodeAt(0)<=90)
                {
                   msg.innerHTML="";
                   document.getElementById("txtPwd").disabled=false;
                }else
                {
                  document.getElementById("txtPwd").disabled=true;
                  msg.innerHTML="Name must Start with Capital";
                }
            }


function VerifyPassword()    //validation VerifyPassword
            {
                // var regExp =  /(?=.[A-Z])(?=.[0-9])(?=.*[\W])\w{4,12}/;
                var regExp = /[A-z]/;
               
                var txtPwd = document.getElementById("txtPwd").value;
                var msg1 = document.getElementById("msg1");
                if(txtPwd.match(regExp))
                {
                    document.getElementById("btn1").disabled=false;
                    msg1.innerHTML="";
                }else
                {
                    document.getElementById("btn1").disabled=true;
                    msg1.innerHTML="Password must have atlest 1 spcl char & 1 no"
                }
            }

function VerifyMobile()
{       //validation VerifyMobile
                var txtMobile = document.getElementById("txtMobile").value;
                var msg3 = document.getElementById("msg3");
                var MobileFormat= /[0-9]{10,13}/
                if(txtMobile.match(MobileFormat)){
                    msg3.innerHTML="";
                } else {
                    msg3.innerHTML=`Invalid Mobile no`;
                }
}
 
function VerifyEmail(){    //validation VerifyEmail
    var txtEmail = document.getElementById("txtEmail").value;
    var msg4 = document.getElementById("msg4");
    var MailFormat= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(txtEmail.match(MailFormat)){
        msg4.innerHTML="";
    } else {
        msg4.innerHTML=`Invalid Email`;
    }
}
 

    var checkedValue = [];
    var row;
    var data;
    var Hob=" ";

function getRadioValue(theRadioGroup) {  //form redio value
        event.preventDefault();
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
}

function change(){   //form check box value
             var txtMovies =document.getElementById("txtMovies");
             var txtMusic =document.getElementById("txtMusic");
           
            if(txtMovies.checked==true &&  txtMusic.checked==true){
                Hob = txtMovies.value +"<br>"+ txtMusic.value +"<br>";
               
            }else if(txtMusic.checked==true){
                Hob = txtMusic.value ;
               
            }
            else if(txtMovies.checked==true){
                Hob = txtMovies.value ;
            }
            else{
                Hob="";
            }
    }

function onFormSubmit()
{
        resetForm();
}

   
function resetForm(){   //resatting form
        
        document.getElementById("form").reset();

       /* document.getElementById("txtPwd").value= "";
        document.getElementById("txtMobile").value= "";
        document.getElementById("txtEmail").value="";
        txtCity.options[txtCity.selectedIndex].text="";
        getRadioValue('gender')="";
        document.getElementById("Hob").value="";
        document.getElementById("cmnt").text="";*/
}

function createtablerow(data) {  //creating row in tbl

        table = document.getElementById('form_result');    
        var columnCount = table.rows[0].cells.length;

         //Add the data rows.
            row = table.insertRow(-1);

            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            var cell8 = row.insertCell(-1);
            var cell9 = row.insertCell(-1);

            cell1.innerHTML = data.txtName;
            cell2.innerHTML = data.txtMobile;
            cell3.innerHTML = data.txtEmail;
            cell4.innerHTML = data.txtCity;
            cell5.innerHTML = data.gender;
            cell6.innerHTML = data.Hobbies;
            cell7.innerHTML = data.comment;
            cell8.innerHTML =`<button onclick="editClick(this)" class="btn btn-success" >edit</button>`;
            cell9.innerHTML =`<button onclick="deleteClick(this)" class="btn btn-danger" >delete</button>`;

             //here i am adding the row
            table.appendChild(row);

}

function deleteClick(td){      // deleting table row
    row =  td.parentElement.parentElement;
    document.getElementById("form_result").deleteRow(row.rowIndex);

}

    var selectedRow=null   //globle variale

function editClick(td){  // edit table row

    selectedRow=td.parentElement.parentElement;
    document.getElementById("txtName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("txtMobile").value= selectedRow.cells[1].innerHTML;
    document.getElementById("txtEmail").value= selectedRow.cells[2].innerHTML;
    txtCity.options[txtCity.selectedIndex].text=selectedRow.cells[3].innerHTML;
    getRadioValue('gender')= selectedRow.cells[4].innerHTML;
    Hob= selectedRow.cells[5].innerHTML;
    document.getElementById('cmnt').value=selectedRow.cells[6].innerHTML;
}
 
function update(data){  //after edit detail updating data
    selectedRow.cells[0].innerHTML=data.txtCity;
    selectedRow.cells[1].innerHTML=data.txtMobile;
    selectedRow.cells[2].innerHTML=data.txtEmail;
    selectedRow.cells[3].innerHTML=data.txtCity;
    selectedRow.cells[4].innerHTML=data.gender;
    selectedRow.cells[5].innerHTML=data.Hobbies;
    selectedRow.cells[6].innerHTML=data.comment;
}

window.addEventListener('load', function() {  // image uploading 
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});



      
