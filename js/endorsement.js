	//Store Endorsements in JSON Object into Local Storage Function
function onClick()
{
	//Validates input from user (Key="name" -> Value= "date")
	if((localStorage.getItem("name") != null) && (localStorage.getItem("date")!= null) && (localStorage.getItem("erik")!= null))
	{
		//Push local storage into JSON array (if "name" & "date" are valid inputs) and append new data
		var json=[];
		if(localStorage.myjson)
		{
			json=JSON.parse(localStorage.myjson);	
		}
		var name= document.getElementById("name").value;
		var date= document.getElementById("date").value;
		var erik= document.getElementById("erik").value;
		json.push({"name" : name, "date" : date, "erik" : erik});

		//Reset local storage
		localStorage.myjson=JSON.stringify(json);
		localStorage.removeItem("name");
		localStorage.removeItem("date");
		localStorage.removeItem("erik");
		document.getElementById("endorsements").reset();
	}
}

//Autopopulate Form on Endorsements Page
function autoPopulate()
{
	if(localStorage.name)
	{
		document.getElementById("name").value=localStorage.name;
	}
	if(localStorage.date)
	{
		document.getElementById("date").value=localStorage.date;
	}
	if(localStorage.erik)
	{
		document.getElementById("erik").value=localStorage.erik;
	}
}

//Update Local Storage OnKeyUp
function showLocal()
{
	localStorage.name=document.getElementById("name").value;
	localStorage.date=document.getElementById("date").value;
	localStorage.erik=document.getElementById("erik").value;
}

//Print Local Storage to Endorsements Page Function
function testJSON() {
    var out = "";
    var i;
    var json = []
    json=JSON.parse(localStorage.myjson);
    for(i = 0; i<json.length; i++) {
        out += '<tr> <td> <td>' + json[i].name + '</td> <td>' + json[i].date + '</td> <td>' + json[i].erik + '</td> </tr>';
    }
    document.getElementById("id01").innerHTML = out;
}

//Sort Endorsements by Key 
function sortByKey(array, key) 
{
    return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

//Sort Endorsements by Name Function
function sortName()
{

	if(localStorage.myjson)
		{
			json=JSON.parse(localStorage.myjson);

			json =sortByKey(json,"name");

			//Saves to local storage
			localStorage.myjson=JSON.stringify(json);
			//prints updated info
			testJSON();
		}
}

//Sort Endorsements by Date Function
function sortDate()
{

	if(localStorage.myjson)
	{
		json=JSON.parse(localStorage.myjson);
		json=sortByKey(json,"date");

		//Saves to local storage
		localStorage.myjson=JSON.stringify(json);
		//prints updated info
		testJSON();
	}

}

//Load JSON Function
function loadJSON()
{
	$.getJSON("js/test.json", function(data) 
	{ 
		var json=[];
		$.each(data, function(key,val)
		{
			var name = key;
			var date = val;
			var erik = el;
			json.push({"name" : name, "date" : date, "erik" : erik});
		})
		localStorage.myjson=JSON.stringify(json);
	})
}

//Query String Function - Projects
function gup(name)
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
console.log("HELLO_WORLD");
}
