function getImageFromUrl(url)
{
var img = new Image();
img.src = url;
return img;
}


function PobierzKarte()
{
var pochodzenie = document.getElementById("pochodzenie");
var przeszlosc = document.getElementById("przeszlosc");
var rola = document.getElementById("rola");
alert(pochodzenie.value + przeszlosc.value + rola.value);

var pdf = new jsPDF();
pdf.addImage(getImageFromUrl("images/" + pochodzenie.value + ".png"), "PNG", 101, 101, 100, 100, "karta", 100, 90);


pdf.save('karta_osiagniec.pdf');
}
