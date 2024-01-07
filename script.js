const circle = document.getElementById('circle'); // Mendapatkan elemen lingkaran dengan ID 'circle' dari dokumen HTML
const line = document.getElementById('line'); // Mendapatkan elemen garis dengan ID 'line' dari dokumen HTML
const gray = document.getElementById('gray'); // Mendapatkan elemen abu-abu dengan ID 'gray' dari dokumen HTML
const width_image = 600; // Lebar gambar

let mousedown = false; // Menginisialisasi variabel mousedown sebagai false (mouse belum ditekan)
let width_percent = 50; // Inisialisasi persentase lebar elemen 'gray'
let mouse_position; // Variabel untuk menyimpan posisi mouse

function change() {
    // Mengubah lebar elemen 'gray', posisi lingkaran, dan posisi garis berdasarkan nilai width_percent
    gray.style.width = width_percent + "%";
    circle.style.left = width_percent - 2.2 + "%";
    line.style.left = width_percent - 0.2 + "%"
}

circle.addEventListener("mousedown", ()=> {
    // Ketika mouse ditekan pada elemen 'circle', mengubah nilai mousedown menjadi true
    mousedown = true;
    console.log('tekan'); // Mencetak pesan 'tekan' ke konsol saat mouse ditekan pada lingkaran
})

console.log(width_percent); // Mencetak nilai width_percent ke konsol

document.addEventListener("mousemove", (e)=> {
    // Ketika mouse digerakkan
    if (mousedown) {
        mouse_position = e.clientX - 20; // Mendapatkan posisi mouse terhadap dokumen, dikurangi offset 20
        width_percent = (mouse_position / width_image) * 100; // Menghitung persentase lebar elemen 'gray' berdasarkan posisi mouse
        if (width_percent >= 100) {
            width_percent = 100; // Batasan maksimum width_percent adalah 100%
        } else if (width_percent <= 0) {
            width_percent = 0; // Batasan minimum width_percent adalah 0%
        }
        change(); // Memanggil fungsi change untuk memperbarui tampilan elemen berdasarkan perubahan width_percent
    }
})

document.addEventListener("mouseup", ()=> {
    // Ketika tombol mouse dilepas, mengubah nilai mousedown menjadi false
    mousedown = false;
    console.log('lepas'); // Mencetak pesan 'lepas' ke konsol saat mouse dilepas
})

change(); // Memanggil fungsi change untuk inisialisasi tampilan awal
