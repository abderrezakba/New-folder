document.getElementById(din);
document.getElementById(euro);

din.onkeyup=function()
{
euro.value=din.value/200
}

euro.onkeyup=function()
{
  din.value=euro.value*200
}
