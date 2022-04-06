//get selected table row to edit-modal 
var table = document.getElementById("db-table");
var pid;

for(let i = 0; i < table.rows.length; i++){
   table.rows[i].onclick = function(e){
      e.preventDefault();

      document.getElementById("pName_edit").value = this.cells[0].innerHTML;
      document.getElementById("pID_edit").value = this.cells[1].innerHTML;
      document.getElementById("pStock_edit").value = this.cells[3].innerHTML;
      document.getElementById("pPrice_edit").value = this.cells[4].innerHTML;
      // checkCategory(this.cells[2].innerHTML);
      console.log(this.cells[1].innerHTML);
      pid = Number.parseInt(this.cells[1].innerHTML);

      //TODO: CHECK HOW TO HAVE ONLY ONE ROW DARKER WHEN CLICKED 
      // for(let j = 0; j < table.rows.length; j++){
      //    if (table.rows[j].style.backgroundColor == "rgb(176, 176, 176)"){
      //       table.rows[j].style.backgroundColor == "rgb(230,230,230)";
      //       console.log("same");
      //    }
      // }

      this.style.backgroundColor = "#b0b0b0";
      
   }
}


document.getElementById("delete-btns").onclick = function(e) {
   e.preventDefault();

   console.log(pid);
   axios.post('delete-product', { pid })
   .then(function(res){
      console.log(res);
      window.location = "/Inventory";
   })
}



function checkCategory(text){
   var select = document.getElementById("pCategory_edit");
   Array.from(select.options).forEach(element => {
      if(element.text == text){
         console.log(element.value);
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