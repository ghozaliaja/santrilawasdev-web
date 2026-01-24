"use client";
// Force rebuild

import { useState, useEffect, useRef } from "react";
import ShinyText from "../components/ShinyText";

export default function Home() {
  // Typing Effect State
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Menggabungkan Nilai Santri dengan Teknologi AI.", "Full Stack Developer.", "Android Enthusiast."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Moving Cyber Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-scroll"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
      </div>

      <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold font-mono text-white flex items-center gap-1">
            <ShinyText text="SantriLawas" disabled={false} speed={3} className="font-bold" />
            <span className="text-primary">Dev</span>
          </div>
          <a href="mailto:ghozali.elrifai@gmail.com" className="text-sm hover:text-primary transition">
            Contact
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/10">
            Open for Work & Collaboration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight min-h-[80px]">
            <span>{text}</span>
            <span className="cursor-blink">&nbsp;</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Spesialis Android Development & Web Solutions. Membangun solusi digital yang efisien dan bermanfaat.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full md:w-auto"
            >
              🚀 Lihat Project ClearPix
            </a>
            <a
              href="https://wa.me/6285163468816?text=Assalamualaikum%20Mas%20Ghozali%2C%20saya%20tertarik%20jasa%20pembuatan%20website%20dan%20aplikasi"
              target="_blank"
              className="px-8 py-3 border border-gray-600 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition w-full md:w-auto"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-gray-800 bg-black/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">Tech Stack & Tools</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-4xl text-gray-500">
            <i className="fab fa-android hover:text-[#3DDC84] transition transform hover:scale-110" title="Android Development"></i>
            <i className="fab fa-php hover:text-[#777BB4] transition transform hover:scale-110" title="PHP / Laravel"></i>
            <i className="fab fa-python hover:text-[#3776AB] transition transform hover:scale-110" title="Python / AI"></i>
            <i className="fas fa-database hover:text-white transition transform hover:scale-110" title="Database Management"></i>
            <i className="fab fa-github hover:text-white transition transform hover:scale-110" title="Version Control"></i>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="text-primary">#</span> Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard>
              <div className="h-64 bg-gray-700 flex items-center justify-center relative overflow-hidden rounded-t-xl group">
                <img
                  src="/projects/absen-sholat-1.jpg"
                  alt="Absen Sholat MTsN 1 Labuhan Batu"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Live Production
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">
                    Web App
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Absen Sholat MTsN 1 Labuhan Batu</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Platform digital terintegrasi untuk monitoring kehadiran siswa/guru dan jurnal ibadah harian. Dilengkapi fitur notifikasi WhatsApp dan rekapitulasi otomatis.
                </p>
                <div className="flex gap-4 text-sm font-mono text-gray-500">
                  <span>
                    <i className="fab fa-react mr-1"></i> Next.js
                  </span>
                  <span>
                    <i className="fas fa-database mr-1"></i> Prisma
                  </span>
                  <span>
                    <i className="fab fa-whatsapp mr-1"></i> WA Gateway
                  </span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="h-64 bg-gray-700 flex items-center justify-center relative overflow-hidden rounded-t-xl">
                <i className="fas fa-mobile-alt text-6xl text-gray-500 group-hover:scale-110 transition duration-500"></i>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded border border-purple-500/30">
                    AI Powered
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded border border-yellow-500/30">
                    On Review Playstore
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ClearPix AI</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Aplikasi Android canggih untuk menghapus background foto otomatis dan konversi foto ke gaya anime
                  menggunakan teknologi AI.
                </p>
                <div className="flex gap-4 text-sm font-mono text-gray-500">
                  <span>
                    <i className="fab fa-android mr-1"></i> Kotlin/Java
                  </span>
                  <span>
                    <i className="fas fa-brain mr-1"></i> TensorFlow
                  </span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="h-64 bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-t-xl group">
                <img
                  src="/projects/odoc-dashboard.jpg"
                  alt="ODOC Bimbingan Konseling"
                  className="h-full w-auto object-contain group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Android App
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">
                    School System
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ODOC - Bimbingan Konseling</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Aplikasi digital MTsN 1 Labuhanbatu untuk pencatatan kasus siswa, pemanggilan wali murid, dan rekapitulasi poin pelanggaran secara realtime.
                </p>
                <div className="flex gap-4 text-sm font-mono text-gray-500">
                  <span>
                    <i className="fab fa-react mr-1"></i> Next.js
                  </span>
                  <span>
                    <i className="fab fa-android mr-1"></i> Capacitor
                  </span>
                  <span>
                    <i className="fas fa-database mr-1"></i> PostgreSQL
                  </span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="h-64 bg-gray-900 flex items-center justify-center relative overflow-hidden rounded-t-xl group">
                <img
                  src="/projects/perpus-dashboard.jpg"
                  alt="Perpustakaan Digital MTsN 1 Labuhanbatu"
                  className="h-full w-auto object-contain group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Web & Android
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded border border-orange-500/30">
                    QR System
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Perpustakaan Digital</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Sistem manajemen perpustakaan modern dengan fitur scan QR Code pada Kartu Pelajar untuk peminjaman & pengembalian buku yang lebih cepat.
                </p>
                <div className="flex gap-4 text-sm font-mono text-gray-500">
                  <span>
                    <i className="fab fa-react mr-1"></i> Next.js
                  </span>
                  <span>
                    <i className="fab fa-android mr-1"></i> Capacitor
                  </span>
                  <span>
                    <i className="fas fa-qrcode mr-1"></i> Scanner
                  </span>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col items-center justify-center p-10 text-center min-h-[300px] border-dashed">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-600">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-400">Next Big Thing</h3>
              <p className="text-gray-600 text-sm mt-2 max-w-xs">
                Project Web Development untuk manajemen klub bola (Agtagana) sedang dalam tahap persiapan server.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>



      {/* --- PRICING SECTION (HARGA KHIDMAT / SEDULUR) --- */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Paket <span className="text-emerald-400">Digitalisasi Umat</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Harga khusus untuk Lembaga Pendidikan, Yayasan, & Masjid.
            Niat ingsun khidmat, bantu digitalisasi madrasah.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PAKET 1: PROFIL (MURAH MERIAH) */}
            <div className="spotlight-card bg-slate-800/50 rounded-xl border border-gray-700 p-8 relative group hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
              <div className="absolute inset-0 bg-emerald-500/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
              <h3 className="text-xl font-bold text-white mb-2">Profil Lembaga</h3>
              <p className="text-gray-400 text-sm mb-6">Website informasi sekolah/yayasan agar mudah dicari di Google.</p>
              <div className="text-4xl font-bold text-emerald-400 mb-6">
                500 RB <span className="text-lg text-gray-500 font-normal">/ web</span>
              </div>
              <ul className="text-gray-300 text-sm space-y-3 mb-8 flex-grow">
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Desain Modern & Responsif</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Gratis Hosting Selamanya</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Galeri Foto Kegiatan</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Tombol Chat WA</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> *Belum termasuk domain (.sch.id)*</li>
              </ul>
              <div className="relative z-20 mt-auto">
                <a href="https://wa.me/6285163468816?text=Assalamualaikum%20Mas%20Ghozali%2C%20saya%20tertarik%20Paket%20Web%20Profil%20500rb" target="_blank" className="block w-full py-3 text-center border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-black font-bold transition">
                  Ambil Paket Ini
                </a>
              </div>
            </div>

            {/* PAKET 2: SISTEM (BEST SELLER) */}
            <div className="spotlight-card bg-slate-800 rounded-xl border-2 border-emerald-500 p-8 relative group shadow-[0_0_30px_rgba(16,185,129,0.2)] transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">REKOMENDASI</div>
              <h3 className="text-xl font-bold text-white mb-2">Sistem Administrasi</h3>
              <p className="text-gray-400 text-sm mb-6">Solusi biar Guru/Admin nggak pusing rekap data manual.</p>
              <div className="text-4xl font-bold text-emerald-400 mb-6">
                1.5 JT <span className="text-lg text-gray-500 font-normal">/ sistem</span>
              </div>
              <ul className="text-gray-300 text-sm space-y-3 mb-8 flex-grow">
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> <b>Pilih Salah Satu:</b></li>
                <li className="flex gap-2 ml-4">- PPDB Online (Daftar Siswa Baru)</li>
                <li className="flex gap-2 ml-4">- SPP Digital / Keuangan</li>
                <li className="flex gap-2 ml-4">- Absensi Guru/Siswa</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Export Laporan ke Excel</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-500"></i> Ada Halaman Login Admin</li>
              </ul>
              <div className="relative z-20 mt-auto">
                <a href="https://wa.me/6285163468816?text=Assalamualaikum%20Mas%20Ghozali%2C%20saya%20butuh%20Sistem%20Administrasi%20Sekolah" target="_blank" className="block w-full py-3 text-center bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 font-bold transition shadow-lg">
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* PAKET 3: APP ANDROID (PREMIUM) */}
            <div className="spotlight-card bg-slate-800/50 rounded-xl border border-gray-700 p-8 relative group hover:border-purple-500/50 transition-all duration-300 flex flex-col">
              <div className="absolute inset-0 bg-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
              <h3 className="text-xl font-bold text-white mb-2">Aplikasi Android</h3>
              <p className="text-gray-400 text-sm mb-6">Bikin sekolah tampil bonafit & modern di mata wali murid.</p>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                3.5 JT <span className="text-lg text-gray-500 font-normal">/ app</span>
              </div>
              <ul className="text-gray-300 text-sm space-y-3 mb-8 flex-grow">
                <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> <b>File APK Android (.apk)</b></li>
                <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Web Admin Dashboard</li>
                <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Info Sekolah di HP Wali Murid</li>
                <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> Notifikasi Pengumuman</li>
                <li className="flex gap-2"><i className="fas fa-check text-purple-500"></i> <b>Bonus:</b> Gratis Maintenance 3 Bln</li>
              </ul>
              <div className="relative z-20 mt-auto">
                <a href="https://wa.me/6285163468816?text=Assalamualaikum%20Mas%20Ghozali%2C%20saya%20tertarik%20bikin%20Aplikasi%20Android%20Sekolah" target="_blank" className="block w-full py-3 text-center border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white font-bold transition">
                  Hubungi Developer
                </a>
              </div>
            </div>

          </div>

          <p className="text-center text-gray-500 text-xs mt-12">
            *Harga diatas adalah estimasi "Sedulur". Silakan diobrolin dulu, budget bisa diatur sambil ngopi. ☕
          </p>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-gray-800">
        <p className="text-xl italic font-serif text-gray-400 mb-6">"Man Jadda Wajada - Code with Heart."</p>
        <p className="text-gray-600 text-sm">&copy; 2025 Muh Ghozali Arrifa'i. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-gray-700 bg-card overflow-hidden hover:border-primary transition group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}