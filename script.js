function bukaUndangan() {
  const cover = document.getElementById("cover");
  const sections = document.querySelectorAll("section");

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

// Tampilkan nama tamu dari URL (?to=Nama+Tamu)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get("to");
if (namaTamu) {
  const elemenTamu = document.querySelectorAll(".tamu");
  elemenTamu.forEach(el => el.textContent = decodeURIComponent(namaTamu.replace(/\+/g, ' ')));
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
