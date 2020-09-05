function getImage(dir)
{
  var img = new Image();
  img.src = dir;
  return img;
}

function PobierzKarte()
{
  var pochodzenie = document.getElementById("pochodzenie");
  var przeszlosc = document.getElementById("przeszlosc");
  var rola = document.getElementById("rola");
  const { jsPDF } = window.jspdf;
  var pdf = new jsPDF();
  var pageSize = {
    height: pdf.internal.pageSize.getHeight(),
    width: pdf.internal.pageSize.getWidth()
  }
  pdf.addImage(getImage("images/" + pochodzenie.value + ".png"), "PNG", 0, 0, pageSize.width, pageSize.height);
  pdf.addImage(getImage("images/" + przeszlosc.value + ".png"), "PNG", 0, 0, pageSize.width, pageSize.height);
  pdf.addImage(getImage("images/" + rola.value + ".png"), "PNG", 0, 0, pageSize.width, pageSize.height);
  pdf.save('karta_osiagniec.pdf');
}
