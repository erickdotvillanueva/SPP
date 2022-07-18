//Leave Warning
window.addEventListener("beforeunload", function (e) {

    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.

  });

//Variables
var data = JSON.parse(localStorage.getItem('PartsChoosen'));
var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

console.log(today);

var wb = XLSX.utils.book_new();
wb.Props = {
  Title: "Spare Parts Export",
  Subject: "SP Export",
  Author: "GuntnerFileExport",
  CreatedDate: new Date(2019,18,7)
};
wb.SheetNames.push("Test Sheet");
var ws = XLSX.utils.aoa_to_sheet(data);
wb.Sheets["Test Sheet"] = ws;

var wbout = XLSX.write(wb, {booktype:'xlsx', type: 'binary'});
function s2ab(s){
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

$('#PDFgeneratorButton').click(function(){
    saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), 'GuntnerSPExport.xlsx');
});