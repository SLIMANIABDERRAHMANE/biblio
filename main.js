var entry = document.getElementById("entry")

entry.addEventListener("click", biblio);

var row=1;


function biblio() {

    var titre = document.getElementById("titre").value;
    var auteur = document.getElementById("auteur").value;
    var prix = document.getElementById("prix").value;
    var date = document.getElementById("date").value;
    var langue = document.getElementById("langue").value;
    var type = document.querySelector('input[name="drone"]:checked').value;
    
    
    
    if (!titre || !auteur || !prix || !date || !langue || !type ) {
        alert("please fill all the boxes");
        return;
    }
    else if(prix >= 700){
        alert("please fill the boxe prix between 5 and 600");
        return; 
    }
    
    
    
    
    
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = titre;
    cell2.innerHTML = auteur;
    cell3.innerHTML = prix;
    cell4.innerHTML = date;
    cell5.innerHTML = langue;
    cell6.innerHTML = type;
    cell7.innerHTML = `<a onClick="onEdit(this)">Modifer</a>`;
    cell8.innerHTML = `<a onClick="onDelete(this)">Supprimer</a>`;

    


    
    

    row++;
    



}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[3].innerHTML;
    document.getElementById("input2").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
}
function updateRecord() {
    selectedRow.cells[0].innerHTML = titre;
    selectedRow.cells[1].innerHTML = auteur;
    selectedRow.cells[2].innerHTML = prix;
    selectedRow.cells[3].innerHTML = date;
    selectedRow.cells[4].innerHTML = langue;
    selectedRow.cells[5].innerHTML = type;
    
 
}





    


