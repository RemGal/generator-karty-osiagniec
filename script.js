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

var pdf = new jsPDF('p', 'pt', 'a4');
var imm = getImageFromUrl("images/" + pochodzenie.value + ".png");
pdf.addImage(img, "PNG", 0, 0, 100, 100, "karta", 180, 180);


pdf.save('karta_osiagniec.pdf');
}
