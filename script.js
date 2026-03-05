function kirimWA(event) {

event.preventDefault();

var nama = document.getElementById("nama").value;
var telepon = document.getElementById("telepon").value;
var pesan = document.getElementById("pesan").value;

var nomorWA = "6281234567890"; // ganti dengan nomor WhatsApp kamu

var url = "https://wa.me/" + nomorWA + "?text="
+ "Halo Untung Karya,%0A%0A"
+ "Nama: " + nama + "%0A"
+ "Telepon: " + telepon + "%0A"
+ "Detail Pekerjaan: " + pesan;

window.open(url, "_blank");

}
