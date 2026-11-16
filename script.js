const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeClass = document.getElementById("welcomeClass");
const menuLinks = document.querySelectorAll(".nav-link");
const studentName = document.getElementById("studentName");
const className = document.getElementById("className");
const progressPanel = document.getElementById("progressPanel");
const activitiesPanel = document.getElementById("activitiesPanel");
const attachmentsPanel = document.getElementById("attachmentsPanel");
const statisticsPanel = document.getElementById("statisticsPanel");

const welcomeTexts = {
    home: ["Selamat Datang, Nama Mahasiswa", "Kelas SI-3X"],
    mahasiswa: ["Selamat Datang, Novi Hidayat", "Kelas SI-3E"],
    kelas: ["Selamat Datang, Novi Hidayat", "Kelas SI-3E"],
    aktivitas: ["Aktivitas Selanjutnya", "4 Aktivitas Menunggumu"],
    statistik: ["Statistik Mahasiswa", "Lihat Grafik Kelas A sampai E"],
    dokumen: ["Lampiran Dokumen", "3 Dokumen Siap Dilihat"],
    settings: ["Pengaturan Akun", "Ubah Nama dan Kelasmu"]
};

function resetPanelColors() {
    progressPanel.classList.remove("red-mode");
    activitiesPanel.classList.remove("red-mode");
    attachmentsPanel.classList.remove("red-mode");
    statisticsPanel.classList.remove("red-mode");
}

menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedMenu = link.dataset.menu;
        menuLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
        resetPanelColors();

        const teks = welcomeTexts[selectedMenu];
        if (teks) {
            welcomeTitle.textContent = teks[0];
            welcomeClass.textContent = teks[1];
        }

        if (selectedMenu === "mahasiswa") {
            welcomeTitle.innerHTML = 'Selamat Datang, <span id="welcomeName">Novi Hidayat</span>';
            welcomeClass.textContent = "Kelas SI-3E";
            const namaSpan = document.getElementById("welcomeName");
            namaSpan.classList.remove("timbul-nama");
            void namaSpan.offsetWidth;
            namaSpan.classList.add("timbul-nama");
        }

        if (selectedMenu === "kelas") {
            welcomeTitle.textContent = "Selamat Datang, Novi Hidayat";
            welcomeClass.innerHTML = '<span id="kelasNama">Kelas SI-3E</span>';
            progressPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (selectedMenu === "aktivitas") {
            activitiesPanel.classList.add("red-mode");
            progressPanel.classList.add("red-mode");
            activitiesPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (selectedMenu === "statistik") {
            statisticsPanel.classList.add("red-mode");
            statisticsPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (selectedMenu === "dokumen") {
            attachmentsPanel.classList.add("red-mode");
        }
        if (selectedMenu === "settings") {
            
        }
        if (selectedMenu === "signout") {
            if (confirm("Yakin mau Sign Out, Novi?")) {
                alert("Kamu sudah Sign Out. Klik Home untuk masuk lagi.");
            }
        }
    });
});

const searchInput = document.getElementById("searchInput");
const searchTargets = [
    { kata: ["statistik"], panel: statisticsPanel },
    { kata: ["kelas", "progres", "matakuliah"], panel: progressPanel },
    { kata: ["aktivitas", "perkuliahan"], panel: activitiesPanel },
    { kata: ["dokumen", "lampiran"], panel: attachmentsPanel }
];

searchInput.addEventListener("input", () => {
    const teks = searchInput.value.toLowerCase().trim();
    [progressPanel, activitiesPanel, attachmentsPanel, statisticsPanel].forEach((p) => p.classList.remove("search-highlight"));
    if (teks === "") return;
    for (const target of searchTargets) {
        if (target.kata.some((k) => teks.includes(k))) {
            target.panel.classList.add("search-highlight");
            target.panel.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
});

    const s = document.getElementById('searchInput');
    s.addEventListener('input', () => {
    const q = s.value.toLowerCase();
    document.querySelectorAll('.panel').forEach(p => p.style.display = !q || (p.textContent + (p.querySelector('img')?.alt || '')).toLowerCase().includes(q) ? '' : 'none');
    });
    document.querySelector('form').addEventListener('submit', e => e.preventDefault());