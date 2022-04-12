
//get selected table row to edit-modal 
var table = document.getElementById("db-table");
var dropdown;
var pid, eid;

for(let i = 1; i < table.rows.length; i++){
   table.rows[i].onclick = function(e){
      e.preventDefault();

      //Inventory Management
      if(document.getElementById("pName_edit")){
         dropdown = document.getElementById("pCategory_edit");
         document.getElementById("pName_edit").value = this.cells[0].innerHTML;
         document.getElementById("pID_edit").value = this.cells[1].innerHTML;
         document.getElementById("pStock_edit").value = this.cells[3].innerHTML;
         document.getElementById("pPrice_edit").value = this.cells[4].innerHTML;
         
         checkCategory(dropdown, this.cells[2].innerHTML);

         //for delete function
         pid = Number.parseInt(this.cells[1].innerHTML);
      } else {
         //Staff Management
         dropdown = document.getElementById("ePosition_edit");
         document.getElementById("fName_edit").value = this.cells[0].innerHTML;
         document.getElementById("lName_edit").value = this.cells[1].innerHTML;
         document.getElementById("eID_edit").value = this.cells[2].innerHTML;
         
         // console.log(this.cells[3].innerHTML);
         checkCategory(dropdown, this.cells[3].innerHTML);

         var edob = Date.parse(this.cells[4].innerHTML);
         // console.log(moment(edob).format('YYYY-MM-DD'));
         document.getElementById("eDOB_edit").defaultValue = moment(edob).format('YYYY-MM-DD');
     
         eid = Number.parseInt(this.cells[2].innerHTML);
      }
      
      //change selected row background color to dark gray
      for(let j = 1; j < table.rows.length; j++){
         //set all the row back to light gray
         table.rows[j].style.backgroundColor = "#e6e6e6";
      }
      this.style.backgroundColor = "#b0b0b0";
   }
}


document.getElementById("delete-btns").onclick = function(e) {
   e.preventDefault();

   console.log(pid);
   console.log(eid);
   if(pid){
      axios.post('delete-product', { pid })
      .then(function(res){
         console.log("delete-product front");
         window.location.href = "/Inventory";
      })
      .catch(function(err){
         console.log('There is an error deleting product');
      })
   } else {  
      axios.post('delete-staff', { eid })
      .then(function(res){
         window.location.href = "/Staffs";
      })
      .catch(function(err){
         console.log('There is an error deleting employee');
      })
   }
   
}



function checkCategory(select, text){
   Array.from(select.options).forEach(element => {
      if(element.text == text){
         // console.log(element.value);
         select.value = element.value;
      }
   });
}


//Show modal / close modal 
var queryBtn = document.querySelectorAll("button.db-btns");
var modals = document.querySelectorAll(".modal-container");
var closeBtn = document.querySelectorAll(".modal-close-btn");

for (var i = 0; i < queryBtn.length; i++) {
    queryBtn[i].onclick = function(e) {
       e.preventDefault();
       modal = document.querySelector(e.target.getAttribute("href"));
       modal.style.display = "block";
    }
}

for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
       for (var index in modals) {
         if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
       }
    }
}


function searchItem(){ 
   var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("db-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}