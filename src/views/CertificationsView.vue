<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="certification in certifications" :key="certification.id">
            <router-link :to="`/read/${certification.slug}/${certification.id}`" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-amber-200 md:w-5 aos-init aos-animate mr-2"></div> {{ certification.date }}
                </div>
                <h1 class="text-sm md:text-md text-amber-200 font-bold mb-2 paraf">{{ certification.title }}</h1>
                <div class="text-sm hidden md:block paraf">{{ certification.desc }}</div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="certification.thumbnail" class="rounded-lg md:rounded-xl" :alt="certification.title">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent"> Experiences Organization</div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-amber-200 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div class="text-white text-md font-semibold">Event Organization</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Brawijaya All Star 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Eksekutif Mahasiswa UB 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Brawijaya Entrepreneur Festival 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Kampung Budaya 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Staff Pengembangan UABB 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Brawnation 3x3 2024</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Essay Competition Participant</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Young Enterpreneur Summit Singapore and Malaysia</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Public Speaking Skills Workshop</span>
              <span
                class="py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer">Leadership Program</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
// Hapus axios karena tidak lagi mengambil data dari API
// import axios from "axios";

// IMPOR GAMBAR THUMBNAIL SERTIFIKAT DI SINI
// Ini adalah thumbnail untuk daftar. Sesuaikan nama file dan path.
import iotCertThumbnail from '@/assets/images/iot.png'; // 
import iotesp32CertThumbnail from '@/assets/images/iotesp32.png'; // 
import htmlCertThumbnail from '@/assets/images/html.png'; // 
import cyberCertThumbnail from '@/assets/images/cyber.png'; // 
import pythonCertThumbnail from '@/assets/images/python.png'; // 
import uiCertThumbnail from '@/assets/images/ui.png'; // 
import sqlCertThumbnail from '@/assets/images/sql.png'; // 
import wrCertThumbnail from '@/assets/images/wr.png'; // 
import gdCertThumbnail from '@/assets/images/gd.png'; // 
import lgCertThumbnail from '@/assets/images/lg.png'; // 
import cyCertThumbnail from '@/assets/images/cy.png'; // 
import rCertThumbnail from '@/assets/images/r.png'; // 
import sCertThumbnail from '@/assets/images/s.png'; // 
import hCertThumbnail from '@/assets/images/h.png'; // 
import jsCertThumbnail from '@/assets/images/js.png'; // 
import rvCertThumbnail from '@/assets/images/rv.png'; // 


export default {
  data() {
    return {
      // Data sertifikat yang statis dan lokal
      certifications: [
        {
          id: 15,
          slug: 'js-certificate', // PASTIKAN SLUG INI SAMA DENGAN SLUG DI ArticleView.vue
          title: 'Fundamentals of JavaScript Programming',
          desc: 'Completed JavaScript course covering DOM manipulation, functions, arrays, objects, control structures, and ES6 to build interactive web applications.', // Deskripsi singkat
          date: 'July 21, 2025',
          thumbnail: jsCertThumbnail // Menggunakan variabel gambar thumbnail yang diimpor
        },
        {
          id: 14,
          slug: 'h-certificate', // PASTIKAN SLUG INI SAMA DENGAN SLUG DI ArticleView.vue
          title: 'Internet of Things (IoT) Project - Building Health Monitoring System',
          desc: 'Certificate of completion for successfully completing Internet of Things (IoT) Project - Building Health Monitoring System', // Deskripsi singkat
          date: 'July 18, 2025',
          thumbnail: hCertThumbnail // Menggunakan variabel gambar thumbnail yang diimpor
        },
        {
          id: 13,
          slug: 's-certificate', // PASTIKAN SLUG INI SAMA DENGAN SLUG DI ArticleView.vue
          title: 'Internet of Things (IoT) - Software and Platforms',
          desc: 'Certificate of completion for successfully completing Internet of Things(IoT) - Software and Platforms', // Deskripsi singkat
          date: 'July 18, 2025',
          thumbnail: sCertThumbnail // Menggunakan variabel gambar thumbnail yang diimpor
        },
        {
          id: 16,
          slug: 'rv-certificate', // PASTIKAN SLUG INI SAMA DENGAN SLUG DI ArticleView.vue
          title: 'ISoftware Engineering Coding Camp',
          desc: 'Certified in RevoU Software Engineering Coding Camp (1 week) — focused on JavaScript fundamentals and interactive web development.', // Deskripsi singkat
          date: 'July 18, 2025',
          thumbnail: rvCertThumbnail // Menggunakan variabel gambar thumbnail yang diimpor
        },
        {
          id: 1,
          slug: 'iot-certificate', // PASTIKAN SLUG INI SAMA DENGAN SLUG DI ArticleView.vue
          title: ' Internet of Things (IoT) - Fundamentals',
          desc: 'Certificate of completion for successfully completing Internet of Things(IoT) - Fundamentals', // Deskripsi singkat
          date: 'June 08, 2025',
          thumbnail: iotCertThumbnail // Menggunakan variabel gambar thumbnail yang diimpor
        },
        // Tambahkan data sertifikat lain di sini untuk daftar
         {
          id: 4,
          slug: 'cyber-certificate',
          title: 'Introduction Cybersecurity',
          desc: 'Certificate of course Completion has successfully achieved student level credential for completing the Introduction to Cybersecurity course',
          date: 'May 29, 2025',
          thumbnail: cyberCertThumbnail
        },
        {
          id: 2,
          slug: 'Iotesp32-certificate',
          title: 'IoT Development with ESP32',
          desc: 'Certificate of Completion for successfully completing IoT Development with ESP32',
          date: 'May 17, 2025',
          thumbnail: iotesp32CertThumbnail
        },       
        {
          id: 6,
          slug: 'ui-certificate',
          title: 'Wireframing in UI/UX Design',
          desc: 'Completing short class UI/UX Research and Design by MySkill',
          date: 'May 14, 2025',
          thumbnail: uiCertThumbnail
        },
        {
          id: 9,
          slug: 'gd-certificate',
          title: 'Graphic Design Fundamental',
          desc: 'Have completed the Graphic Design Training held by Ousean Indonesia & GDF Camp on date 17 - 27 February 2025',
          date: 'February 28, 2025',
          thumbnail: gdCertThumbnail
        },
        {
          id: 11,
          slug: 'cy-certificate',
          title: 'Introduction to Cybersecurity',
          desc: 'Successfully completing offered by Networking Academy through the Cisco Networking Academy program.',
          date: 'May 29, 2025',
          thumbnail: cyCertThumbnail
        },
        {
          id: 8,
          slug: 'wr-certificate',
          title: 'Wordpress Introduction',
          desc: 'Certificate of completion short class Software Engineering by MySkill',
          date: 'May 23, 2025',
          thumbnail: wrCertThumbnail
        },     
        {
          id: 10,
          slug: 'lg-certificate',
          title: 'Logo Design',
          desc: 'Completing short class Graphic Design by MySkill',
          date: 'May 22, 2025',
          thumbnail: lgCertThumbnail
        },
        {
          id: 3,
          slug: 'html-certificate',
          title: 'HTML Dasar',
          desc: 'Certificate of Completion for successfully completing HTML Dasar',
          date: 'November 02, 2024',
          thumbnail: htmlCertThumbnail
        },
        {
          id: 7,
          slug: 'sql-certificate',
          title: 'Fundamental SQL Using SELECT Statement',
          desc: 'Certificate of completion Fundamental SQL Using SELECT Statement',
          date: 'August 01, 2024',
          thumbnail: sqlCertThumbnail
        },            
        {
          id: 5,
          slug: 'python-certificate',
          title: 'Python Fundamental for Data Science ',
          desc: 'Certificate of Completion Python Fundamental for Data Science',
          date: 'July 31, 2024',
          thumbnail: pythonCertThumbnail
        },         
        {
          id: 12,
          slug: 'r-certificate',
          title: 'R Fundamental for Data Science',
          desc: 'Has completed in R Fundamental for Data Science ',
          date: 'July 30, 2024',
          thumbnail: rCertThumbnail
        },
        
      ]
    }
  },
  // Hapus components jika ArticleList tidak digunakan
  // components: {
  //   ArticleList
  // },
  mounted() {
    // Karena data sudah statis, tidak perlu method untuk mengambil data
    // this.getCertifications(); 
  },
  methods: {
    // Hapus method ini karena data sudah diinisialisasi di 'data()'
    // async getCertifications() {
    //   axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all')
    //     .then(response => {
    //       this.certifications = response.data;
    //     })
    // },
  }
}
</script>

<style scoped>
/* Pastikan ini sudah sesuai dengan perbaikan 'line-clamp' */
.paraf {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
}
@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>