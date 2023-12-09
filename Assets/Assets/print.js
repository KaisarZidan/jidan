$(document).ready(function() {
    // Fungsi untuk menangani klik pada tombol "bayar"
    $("#bayar").click(function() {
        console.log("Tombol 'bayar' ditekan!");
        var kiriID = $("#kiri").attr("id");
        console.log("ID kiri:", kiriID);

        // Logika lain yang ingin Anda jalankan saat tombol 'bayar' ditekan

        // Memanggil fungsi pencetakan saat tombol 'bayar' ditekan
        window.print();
   });

    
});