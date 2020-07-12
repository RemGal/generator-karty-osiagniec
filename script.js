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

var pdf = new jsPDF({unit: 'px'});

pdf.addImage(getImageFromUrl("images/" + pochodzenie.value + ".png"), "PNG", 0, 0, 1654, 2339, "karta", 180, 180);


pdf.save('karta_osiagniec.pdf');
}
