<template>
    <div class="w-full md:w-3/5 mx-auto md:mt-5">
        <div class="bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0">
            <div>
                <template v-if="selectedCertification">
                    <h1 class="text-xl md:text-4xl text-black text-left font-bold leading-relaxed">{{ selectedCertification.title }}</h1>
                    <div class="mt-3 text-left text-gray-800 text-sm">The certificate was Published on <span>{{ selectedCertification.date }}</span></div>
                    <div class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2"></div>
                    <div>
                        <div class="relative w-full image-container">
                            <img :src="selectedCertification.image" class="rounded-lg w-full h-full object-contain"
                                :alt="selectedCertification.title + ' Certificate'">
                        </div>
                    </div>
                    <div class="text-left text-black mt-8" v-html="selectedCertification.content">
                        </div>

                    <div v-if="selectedCertification.pdfUrl" class="mt-8 text-center">
                        <a :href="selectedCertification.pdfUrl" target="_blank" download class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Unduh Sertifikat (PDF)
                        </a>
                    </div>
                    <div v-if="selectedCertification.pdfUrl" class="mt-8">
                         <iframe :src="selectedCertification.pdfUrl" width="100%" height="600px" style="border: none;"></iframe>
                    </div>
                </template>
                <template v-else>
                    <p class="text-center text-gray-500">Sertifikat tidak ditemukan.</p>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

import iotCertFull from '@/assets/images/iot.png'; // sertifikat iot
import iotesp32CertFull from '@/assets/images/iotesp32.png'; // sertifikat iotesp32
import htmlCertFull from '@/assets/images/html.png'; // sertifikat html
import cyberCertFull from '@/assets/images/cyber.png'; // sertifikat cyber
import pythonCertFull from '@/assets/images/python.png'; // sertifikat python
import uiCertFull from '@/assets/images/ui.png'; // sertifikat ui ux
import sqlCertFull from '@/assets/images/sql.png'; // sertifikat sql
import wrCertFull from '@/assets/images/wr.png'; // sertifikat wr
import gdCertFull from '@/assets/images/gd.png'; // sertifikat gd
import lgCertFull from '@/assets/images/lg.png'; // sertifikat lg
import cyCertFull from '@/assets/images/cy.png'; // sertifikat cy
import rCertFull from '@/assets/images/r.png'; // sertifikat r
import sCertFull from '@/assets/images/s.png'; // sertifikat iot
import hCertFull from '@/assets/images/h.png'; // sertifikat iot raspberry
import jsCertFull from '@/assets/images/js.png'; // sertifikat js
import rvCertFull from '@/assets/images/rv.png'; // sertifikat rv
import ciCertFull from '@/assets/images/iotcisco.png'; // sertifikat rv
import sqCertFull from '@/assets/images/sql2.png'; // sertifikat sql2
import agCertFull from '@/assets/images/ag.png'; // sertifikat ag
import dtCertFull from '@/assets/images/dt.png'; // sertifikat dt

export default {
    data() {
        return {
            route: useRoute(),
            selectedCertification: null, // Ini akan menampung data sertifikat yang ditemukan
            
            // INI ADALAH DATA LENGKAP SEMUA SERTIFIKAT ANDA
            // Pastikan formatnya adalah ARRAY of OBJECTS []
            // ID dan SLUG harus cocok dengan yang ada di CertificationsView.vue
            allCertificationsData: [
                {
                    id: 1, // ID harus unik
                    slug: 'iot-certificate', // Slug harus unik dan cocok dengan yang di CertificationsView.vue
                    title: 'Internet of Things (IoT) - Fundamentals',
                    date: 'June 08, 2025', // Tanggal
                    content: `
                        <p>Completed a comprehensive IoT Fundamentals training covering the essential concepts of the Internet of Things and its growing importance in today’s industrial landscape.</p>
                        <p>The course explored the history of IoT and its connection to the Fourth Industrial Revolution, as well as its applications across various sectors such as industry, commerce, government, and the general public.</p>
                        <p>I gained knowledge of the key components in IoT development, the relationship between general programming and IoT-specific platforms, and the different types of networks utilized in IoT systems.</p>
                    `,
                    image: iotCertFull, // Menggunakan variabel gambar yang diimpor (gambar full size)
                    pdfUrl: null // Jika ada file PDF untuk sertifikat ini, impor dan masukkan variabelnya di sini
                },
                {
                    id: 2,
                    slug: 'Iotesp32-certificate',
                    title: 'Certified Web Developer',
                    date: 'Desember 1, 2024',
                    content: `
                        <p>Completed a hands-on training program focused on developing Internet of Things (IoT) applications using the ESP32 microcontroller.</p>
                        <p>The course covered the fundamentals of the ESP32 and the IoT ecosystem, including development environments and essential electronics.</p>
                        <p>I gained practical experience programming the ESP32 using the Arduino IDE, progressing from basic to advanced features. The training concluded with the implementation of real-world IoT projects using ESP32, integrating both hardware and software components effectively.</p>
                    `,
                    image: iotesp32CertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 3,
                    slug: 'html-certificate',
                    title: 'HTML Dasar',
                    date: 'November 02, 2024',
                    content: `
                        <p>Completed a foundational course in HTML, focusing on how to build a website from scratch using structured and semantic elements.</p>
                        <p>This course introduced the core structure of HTML documents and the use of elements, tags, attributes, and comments to create and organize content.</p>
                        <p>I learned how to use HTML tags for displaying text, embedding multimedia, creating tables and forms, as well as dividing the layout of a website—establishing a strong foundation for web development.</p>
                    `,
                    image: htmlCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 4,
                    slug: 'cyber-certificate',
                    title: 'Introduction Cybersecurity',
                    date: 'May 29, 2025',
                    image: cyberCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 5,
                    slug: 'python-certificate',
                    title: 'Python Fundamental for Data Science',
                    date: 'July 31, 2024',
                    image: pythonCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 6,
                    slug: 'ui-certificate',
                    title: 'Wireframing in UI/UX Design',
                    date: 'May 14, 2025',
                    image: uiCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 7,
                    slug: 'sql-certificate',
                    title: 'Fundamental SQL Using SELECT Statement',
                    date: 'August 01, 2024',
                    image: sqlCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 8,
                    slug: 'wr-certificate',
                    title: 'Wordpress Introduction',
                    date: 'May 23, 2025',
                    image: wrCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 9,
                    slug: 'gd-certificate',
                    title: 'Graphic Design Fundamental',
                    date: 'February  28, 2025',
                    image: gdCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 10,
                    slug: 'lg-certificate',
                    title: 'Logo Design',
                    date: 'May 22, 2025',
                    image: lgCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 11,
                    slug: 'cy-certificate',
                    title: 'Introduction to Cybersecurity',
                    date: 'May 29, 2025',
                    image: cyCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 12,
                    slug: 'r-certificate',
                    title: 'R Fundamental for Data Science ',
                    date: 'July 30, 2024',
                    image: rCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 13,
                    slug: 's-certificate',
                    title: 'Internet of Things (IoT) - Software and Platforms',
                    date: 'July 18, 2024',
                    content: `
                        <p>This certificate validates my proficiency in developing simple APIs with Flask, testing APIs using Postman and Request Library, and understanding the differences between SQL and NoSQL databases</p>
                        <p>I am skilled in querying data and utilizing MongoDB Atlas, as well as working with Node-RED—including its integration with Raspberry Pi. Additionally, I can transmit MQTT data, display it on Node-RED dashboards, and create data visualizations using UBIDOTS integrated with Python.</p>
                    `,
                    image: sCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 14,
                    slug: 'h-certificate',
                    title: 'Internet of Things (IoT) Project - Building Health Monitoring System',
                    date: 'July 18, 2024',
                    content: `
                        <p>This certification demonstrates my ability to design a simple health monitoring prototype using two sensors: a heart rate sensor and a blood oxygen (SpO2) sensor, as well as a body temperature sensor.</p>
                        <p>I am proficient in integrating sensor data with the Ubidots IoT Platform and presenting it through an interactive dashboard for real-time monitoring.</p>
                    `,
                    image: hCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 15,
                    slug: 'js-certificate',
                    title: 'Fundamentals of JavaScript Programming',
                    date: 'July 21, 2024',
                    content: `
                        <p>Completed JavaScript course covering DOM manipulation, functions, arrays, objects,</p>
                        <p>control structures, and ES6 to build interactive web applications.</p>
                    `,
                    image: jsCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 16,
                    slug: 'rv-certificate',
                    title: 'Software Engineering Coding Camp',
                    date: 'July 18, 2025',
                    content: `
                        <p>Certified in RevoU Software Engineering Coding Camp (1 week) —</p>
                        <p>focused on JavaScript fundamentals and interactive web development.</p>
                    `,
                    image: rvCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 17,
                    slug: 'ci-certificate',
                    title: 'Introduciton to IoT and Digital Transformation',
                    date: 'August 26, 2025',
                    content: `
                        <p>
                            Upon completing the Introduction to IoT and Digital Transformation certification from 
                            Cisco Networking Academy, I have gained a solid understanding of the fundamental 
                            concepts of the Internet of Things (IoT) and its role in modern digital transformation.
                        </p>
                        </br>
                        <p><strong>Key Skills Acquired:</strong></p>
                        </br>
                        <ul>
                            <li><strong>Connectivity:</strong> Comprehending how devices and networks function within the IoT ecosystem, from sensors to the cloud.</li>
                            <li><strong>Automation & Programming:</strong> Able to articulate how IoT devices can be programmed to automate tasks and processes, leading to increased efficiency.</li>
                            <li><strong>Data Analysis:</strong> Understanding the importance of data generated by IoT devices and how this data is leveraged for better decision-making.</li>
                            <li><strong>Cybersecurity:</strong> Mastering the basic principles of security in an IoT environment, including protecting data and devices from cyber threats.</li>
                            <li><strong>Business Opportunities:</strong> Gaining insights into the business and career opportunities emerging from the adoption of IoT technology and digital transformation.</li>
                        </ul>
                        </br>
                        <p>
                            These skills have equipped me to contribute to projects focused on innovation, 
                            operational efficiency, and leveraging data in the digital age.
                        </p>
                        `,
                    image: ciCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 18,
                    slug: 'sq-certificate',
                    title: 'Introduction to SQL',
                    date: '8 September, 2025',
                    content: `
                        <p>•	Gained foundational knowledge of SQL, including querying, filtering, and managing relational database.</p>
                        
                    `,
                    image: sqCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 19,
                    slug: 'ag-certificate',
                    title: 'Agile and Lean Development Culture',
                    date: '25 July, 2025',
                    content: `
                        <p>• Acquired knowledge of Agile principles and Lean practices to improve efficiency, collaboration, and product delivery in software development.</p>
                        
                    `,
                    image: agCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 20,
                    slug: 'dt-certificate',
                    title: 'Data Structure and Algorithms in Python and Java',
                    date: '29 July, 2025',
                    content: `
                        <p>• Gained practical experience in solving computational problems using both Python and Java.</p>
                        
                    `,
                    image: dtCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
            ]
        }
    },
    mounted() {
        this.getCertificationDetails();
    },
    methods: {
        getCertificationDetails() {
            const slug = this.$route.params.slug;
            const id = this.$route.params.id;

            // Mencari sertifikat yang cocok di array data lokal
            this.selectedCertification = this.allCertificationsData.find(cert => 
                cert.slug === slug && String(cert.id) === String(id) // Konversi ke string untuk perbandingan aman
            );

            // Jika sertifikat tidak ditemukan, bisa tampilkan pesan atau redirect
            if (!this.selectedCertification) {
                console.warn(`Sertifikat dengan slug '${slug}' dan ID '${id}' tidak ditemukan.`);
                // Opsi: redirect ke halaman daftar sertifikasi atau halaman 404
                // this.$router.push('/certifications');
            }
        },
    }
}
</script>

<style scoped>
/* Gaya CSS yang sudah ada atau modifikasi yang Anda inginkan */
/* Perbaikan padding-top: 50% mungkin membuat gambar terpotong.
   Untuk menampilkan gambar secara penuh, pertimbangkan untuk menghilangkan padding-top
   atau menggunakan 'object-fit: contain' seperti yang sudah saya tambahkan di template.
   Anda juga bisa mengatur tinggi tetap atau tinggi dinamis yang lebih fleksibel. */

.image-container {
    padding-top: 0 !important; /* Hapus padding-top default */
    height: auto; /* Atau atur tinggi tetap seperti height: 500px; */
    max-height: 80vh; /* Contoh: maksimal 80% dari tinggi viewport */
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container img {
    position: static !important; /* Nonaktifkan absolute positioning */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Penting agar gambar tidak terpotong */
}
</style>