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

pdf.addImage(getImageFromUrl("images/" + pochodzenie.value + ".png"), "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), "karta", 180);


pdf.save('karta_osiagniec.pdf');
}
