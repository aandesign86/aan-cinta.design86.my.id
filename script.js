function bukaUndangan() {
  const cover = document.getElementById("cover");
  const sections = document.querySelectorAll("section");

  // Minta layar penuh (fullscreen)
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }

  // Tambahkan animasi keluar pada cover
  cover.classList.add("slide-out");

  // Setelah animasi keluar selesai
  setTimeout(() => {
    cover.style.display = "none";

    // Tampilkan semua section setelah cover
    sections.forEach(section => {
      if (section.id !== "cover") {
        section.style.display = "block";
        section.classList.add("show");
      }
    });

    // Tampilkan bottom navbar setelah cover dibuka
    const bottomNav = document.getElementById("bottomNav");
    if (bottomNav) bottomNav.style.display = "flex";

    // Scroll smooth ke cover-section sebagai awal
    const firstSection = document.getElementById("cover-section");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }

    // Mainkan backsound jika ada
    const backsound = document.getElementById("backsound");
    if (backsound) backsound.play();

  }, 800); // waktu sesuai animasi slide-out
}

// Fungsi scroll ke section tertentu (jika ingin dipakai tombol navigasi)
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    section.classList.add("show");
  }
}

// Ambil parameter dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const namaTamu = urlParams.get('to');

  // Masukkan ke elemen nama tamu jika ada
  if (namaTamu) {
    const elemenNama = document.getElementById("namaTamu");
    elemenNama.textContent = decodeURIComponent(namaTamu).replace(/\+/g, ' ');
  }

// Event submit RSVP
const rsvpForm = document.getElementById("rsvp-form");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = this.nama.value;
    const kehadiran = this.kehadiran.value;
    const pesan = this.pesan.value;
    alert(`Terima kasih ${nama}, konfirmasi Anda: ${kehadiran}.\nPesan: ${pesan}`);
    this.reset();
  });
}

// Auto fullscreen saat user klik pertama kali di halaman (jika belum fullscreen)
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement && elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }, { once: true });
});

// Tanggal target akad nikah (tahun, bulan (0-11), tanggal, jam, menit)
  const akadDate = new Date(2030, 11, 31, 9, 0, 0).getTime(); // 31 Desember 2030, 09:00 WIB

  const countdownAkad = () => {
    const now = new Date().getTime();
    const distance = akadDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "<p>Acara telah berlangsung</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  };

  setInterval(countdownAkad, 1000);