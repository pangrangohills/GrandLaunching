document.getElementById("pushdata").onclick = function (e) {
  let name = document.getElementById("names").value;
  let domi = document.getElementById("domi").value;
  let notelp = document.getElementById("numbers").value;
  let agent = document.getElementById("agent").value;

  let datas = `Nama : ${name} Domisili : ${domi} No Telpon : ${notelp} Agent/Marketing : ${agent}`;

  var token = "7655916759:AAFN33QwRoKdN4XccJ41bvnGttIpyBVVJkI";
  var chat_id = "-4573752069";

  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${datas}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  let qr = `${name} ${domi} ${notelp} - SELAMAT ANDA BERHAK MENDAPATKAN DISCOUNT SPESIAL 10 JUTA Di Acara Grand Launching The Pangrango Hills SdanK`;
  genQr(qr);
};
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");

function genQr(inputText) {
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputText;
}
