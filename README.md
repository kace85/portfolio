# Portfolio Website - Vue.js

Portofolio website modern yang dibangun dengan Vue.js 3, Vite, dan styling modern.

## Fitur

✅ **Responsive Design** - Mobile-friendly  
✅ **Dark Mode** - Toggle tema gelap/terang  
✅ **Smooth Animations** - AOS (Animate On Scroll)  
✅ **Modern UI** - Gradient, shadows, dan transitions  
✅ **Contact Form** - Formulir kontak dengan validasi  
✅ **Projects Showcase** - Menampilkan project portfolio  
✅ **Skills Section** - Teknologi dan skill dengan progress bar  

## Struktur Project

```
portfolio/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   └── Footer.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Instalasi

1. **Install dependencies**
```bash
npm install
```

2. **Jalankan development server**
```bash
npm run dev
```

3. **Build untuk production**
```bash
npm run build
```

## Kustomisasi

### Ubah Data Personal
Edit file-file component untuk mengganti:
- Nama dan bio (HeroSection.vue)
- Skills dan teknologi (SkillsSection.vue)
- Project showcase (ProjectsSection.vue)
- Info kontak (ContactSection.vue)

### Ubah Warna
Edit variabel CSS di `App.vue`:
```css
:root {
  --primary: #6366f1;      /* Warna utama */
  --secondary: #ec4899;    /* Warna sekunder */
  --bg: #ffffff;           /* Background */
  --text: #1f2937;         /* Teks */
}
```

### Tambah Social Links
Edit bagian social links di `ContactSection.vue` dengan URL yang benar.

## Dependencies

- **Vue.js 3** - Framework UI
- **Vite** - Build tool
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icon library

## Tips

1. Ganti semua placeholder email, phone, dan lokasi di ContactSection.vue
2. Tambahkan project portfolio asli Anda di ProjectsSection.vue
3. Update skills dan proficiency sesuai kemampuan Anda
4. Jangan lupa update social media links
5. Test di berbagai device untuk memastikan responsive

## License

Free to use & modify

---

Happy coding! 🚀
