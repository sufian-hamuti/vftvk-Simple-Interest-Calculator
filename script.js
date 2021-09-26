function compute()
{
    var p = document.getElementById("principal").value;
    var range = document.getElementById("textInput").value;
    var select = document.getElementById('years');
    var nyears = select.options[select.selectedIndex].value;
    var result = ((p*range)/100)*nyears;
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById('result').innerHTML="if you deposit " + p + ", </br>" +"at an interest rate of "+range+"%.</br>"+
                                                 "You will receive an amount of "+result+',</br>'+"in the year of "+ (n+5);
}

function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
