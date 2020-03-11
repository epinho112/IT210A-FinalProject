function insertText(){
    
    document.getElementById('td1').innerHTML = name;
    
    
    
}

function sortByDate (){
    clearTable();
    var retrievedData = localStorage.getItem("endorsementArray");
    var endorsementsArr = JSON.parse(retrievedData);
  
    sortByKey(endorsementsArr, "date");

    
    localStorage.setItem("endorsementArray", JSON.stringify(endorsementsArr));
    
    GenerateTable();
    
}

function sortByName(){
    
    clearTable();
    var retrievedData = localStorage.getItem("endorsementArray");
    var endorsementsArr = JSON.parse(retrievedData);
  
    sortByKey(endorsementsArr, "name");

    
    localStorage.setItem("endorsementArray", JSON.stringify(endorsementsArr));
    
    GenerateTable();
}

function saveName(){
    
     var uname = document.getElementById("inputName").value;
        localStorage.setItem("name", JSON.stringify(uname));
    
    var udate = document.getElementById("inputDate");
        localStorage.setItem("date", JSON.stringify(udate));
    
    var uendorse= document.getElementById("inputEndorse").value;
        localStorage.setItem("endorsement", JSON.stringify(uendorse));
}

function loadName(){
    
    var name = document.getElementById("inputName");
    name.value = localStorage.getItem("name");
    
    var date = document.getElementById("inputDate");
    date.value = localStorage.getItem("date");
    
    
}
loadName();



function submitFunction (){
    
    clearTable();

    var uname = document.getElementById("inputName").value;
        localStorage.setItem("name", JSON.stringify(uname));

    var udate = document.getElementById("inputDate").value;
        localStorage.setItem("date", JSON.stringify(udate));
    
    var uendorse = document.getElementById("inputEndorse").value;
        localStorage.setItem("endorsement", JSON.stringify(uendorse));
    
    
    
    var list = {"name": uname, "date":udate, "endorsement":uendorse};
    
  
    var endorsements;

    
    if (localStorage.getItem("endorsementArray")!= null){

        
        var endorsementsObj = JSON.parse(localStorage.getItem("endorsementArray"));
        endorsementsObj.push(list);
        localStorage.setItem("endorsementArray", JSON.stringify(endorsementsObj));
        
        
    }
    else {
        
        var endorsements = [];
    
        
        endorsements.push(list);
        
 
        localStorage.setItem("endorsementArray", JSON.stringify(endorsements));
        
        
    }
    
    GenerateTable();
}
    
    
    
function clearTable(){
    
    $("#mytable tr > td").remove(); 
    $("#mytable td").remove();
    
}





function GenerateTable() {
    
 clearTable();
    

    
  var retrievedData = localStorage.getItem("endorsementArray");
    var endorsementsArr = JSON.parse(retrievedData);
  
    var tbl=$("<table/>").attr("id","mytable");
    
    
    $("#div1").append(tbl);
    
    
    for(var i=0;i<endorsementsArr.length;i++)
    {
        var tr="<tr>";
        var td1="<td>  "+endorsementsArr[i]["name"]+"  </td>";
        var td2="<td>  "+endorsementsArr[i]["date"]+"  </td>";
        var td3="<td>  "+endorsementsArr[i]["endorsement"]+"  </td></tr>";

       $("#mytable").append(tr + td1 + td2 + td3); 

    }  

}

function loadFile(){
    
      $.get("listOfEndorse.json", function(listOfEndorse){
        localStorage.setItem("endorsementArray", JSON.stringify(listOfEndorse));
        GenerateTable();
        
    });
}



function sortByKey(array, key){

    return array.sort(function(a,b){

        var x = a[key];

        var y = b[key];

        return ((x<y) ?-1:((x>y)?1:0));

    });

}


//Resets table every 5 seconds
setInterval(function(){

    loadFile(); // this will run after every 5 seconds
}, 5000);








