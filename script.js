function compute()
{
    var p = document.getElementById("principal").value;
    var range = document.getElementById("textInput").value;
    var select = document.getElementById('years');
    var nyears = select.options[select.selectedIndex].value;
    var result = ((p*range)/100)*nyears;
    var d = new Date();
    var n = d.getFullYear();

    if (p==0 || p<0) {
    	alert("Please enter a positive number");
    }

    else{
    	document.getElementById('result').innerHTML="if you deposit " +"<mark>"+p+"</mark>"  + ", </br>" +"at an interest rate of "+"<mark>" +range+"%</mark>.</br>"+
                                                 "You will receive an amount of "+"<mark>"+result+"</mark>,</br>"+"in the year of "+"<mark>" + (n+5) +"</mark>";
    }
    
}

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
