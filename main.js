var input=[];
function GetParagraph1()
{
    for(var a=1 ; a<=6 ; a++)
    {
        var o=document.getElementById("para1_textbox_"+a).value;
        input.push(o);
    }
input.join(". ");
document.getElementById("showParagraph1").innerHTML=input;
}
var input2=[];
function GetParagraph2()
{
    for(var x=1 ; x<=6 ; x++)
    {
        var y=document.getElementById("para2_textbox_"+x).value;
        input2.push(y);
    }
    input2.join(". ");
    document.getElementById("showParagraph2").innerHTML=input2;
}