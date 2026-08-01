<template>
    <div class="w-full md:w-3/5 mx-auto mt-3 md:mt-5">
        <div class="bg-white dark:bg-[#1e1e1f] rounded-xl mx-3 p-5 md:p-10 md:mx-0 text-gray-900 dark:text-white fade-zoom-up">
            <div>
                <template v-if="selectedCertification">
                    <h1 class="text-xl md:text-4xl text-gray-900 dark:text-white text-left font-bold leading-relaxed fadein-up">{{ selectedCertification.title }}</h1>
                    <div class="mt-3 text-left text-gray-800 dark:text-amber-200 text-sm fadein-up fadein-1">The certificate was Published on <span>{{ selectedCertification.date }}</span></div>
                    <div class="h-[2px] w-20 my-5 md:my-10 bg-[#ffdb70] md:w-1/3 aos-init aos-animate mr-2 fadein-up fadein-2"></div>
                    <!-- Modern Document Preview Component -->
                    <div class="mt-6 border border-gray-200 dark:border-[#383838] rounded-xl overflow-hidden shadow-2xl bg-gray-900/5 dark:bg-[#121212] fadein-up fadein-3">
                        <!-- Toolbar / Header -->
                        <div class="bg-gray-100 dark:bg-[#18181b] border-b border-gray-200 dark:border-[#27272a] px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
                            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                <span>Document Preview</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="px-2.5 py-1 rounded bg-gray-200 dark:bg-[#27272a] text-gray-700 dark:text-gray-300 font-mono text-xs">1 / {{ selectedCertification.pages || 1 }}</span>
                                <a v-if="!isPdf(selectedCertification.pdfUrl || selectedCertification.image)" :href="selectedCertification.pdfUrl || selectedCertification.image" target="_blank" download class="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 rounded-lg transition-colors font-medium border border-amber-500/20">
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    <span>Download</span>
                                </a>
                            </div>
                        </div>
                        <!-- Document Canvas Area (100% FLUSH / MEPET - ZERO PADDING / NO GAP!) -->
                        <div class="w-full bg-white dark:bg-[#0d0d0e] overflow-y-auto max-h-[75vh] md:max-h-none" style="-webkit-overflow-scrolling: touch;">
                            <template v-if="isPdf(selectedCertification.pdfUrl || selectedCertification.image)">
                                <iframe :src="(selectedCertification.pdfUrl || selectedCertification.image) + '#pagemode=thumbs&view=FitH'" class="w-full h-[75vh] block" style="border: none; overflow-y: auto; -webkit-overflow-scrolling: touch;" scrolling="yes"></iframe>
                            </template>
                            <template v-else>
                                <div class="w-full p-4 flex justify-center items-center">
                                    <img :src="selectedCertification.image" class="rounded max-h-[70vh] w-auto object-contain mx-auto"
                                        :alt="selectedCertification.title + ' Certificate Document'">
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="text-left text-gray-900 dark:text-white mt-8 leading-relaxed fadein-up fadein-4" v-html="selectedCertification.content">
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
import aiCertFull from '@/assets/images/ai.png'; // sertifikat ai
import nextCertFull from '@/assets/images/next.png'; // sertifikat next
import dcCertFull from '@/assets/images/dc.png'; // sertifikat dc
import ictCertFull from '@/assets/images/ict.png'; // sertifikat ict
import bnspCertFull from '@/assets/images/bnsp-iot.pdf'; // sertifikat bnsp

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
                        <p> Gained practical experience in solving computational problems using both Python and Java.</p>
                        
                    `,
                    image: dtCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 21,
                    slug: 'ai-certificate',
                    title: 'Microsoft Azure AI Fundamentals (AI-900)',
                    date: '26 September, 2025',
                    content: `
                        <p>Gained foundational knowledge of Artificial Intelligence (AI) concepts and Microsoft Azure AI services, including Machine Learning, Computer Vision, Natural Language Processing (NLP), Speech, and Responsible AI practices. Covered practical scenarios such as image analysis, object detection, text recognition, face detection, translation, conversational AI, and building intelligent bots.</p>
                        
                    `,
                    image: aiCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 22,
                    slug: 'next-certificate',
                    title: 'Next.js App Router Fundamentals',
                    date: '2 October, 2025',
                    content: `
                        <p>Successfully completed the Next.js App Router Fundamentals course by Vercel, covering the core concepts of routing, layouts, data fetching, and server components in modern Next.js applications.</p>
                        
                    `,
                    image: nextCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 23,
                    slug: 'dc-certificate',
                    title: 'Learn AI Basics',
                    date: '10 October, 2025',
                    content: `
                        <p>Successfully completed the Learn AI Basics course by Dicoding, covering the core concepts of AI, machine learning, Deep Learning, and their applications.</p>
                    `,
                    image: dcCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 24,
                    slug: 'ict-certificate',
                    title: 'Microsoft Office Dekstop Application',
                    date: '2 December, 2025',
                    content: `
                        <p>Successfully completed the Microsoft Office Dekstop Application course by Trust Training Partners, covering the core concepts of Microsoft Office applications including Word, Excel, and PowerPoint.</p>
                    `,
                    image: ictCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null
                },
                {
                    id: 25,
                    slug: 'bnsp-certificate',
                    title: 'Badan Nasional Sertifikasi Profesi (BNSP)',
                    date: '12 January, 2026',
                    pages: 2,
                    content: `
                        <p>Certified in IoT system development, sensor integration, embedded systems, and implementation of connected technology solutions.</p>
                    `,
                    image: bnspCertFull, // Gambar full size untuk sertifikat ini
                    pdfUrl: null // Sertifikat PDF
                },
            ]
        }
    },
    mounted() {
        this.getCertificationDetails();
    },
    methods: {
        isPdf(fileUrl) {
            if (!fileUrl) return false;
            return typeof fileUrl === 'string' && (fileUrl.toLowerCase().includes('.pdf') || fileUrl.toLowerCase().endsWith('.pdf'));
        },
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
    height: auto;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container img {
    position: static !important; /* Nonaktifkan absolute positioning */
    max-width: 100%;
    max-height: 65vh;
    object-fit: contain; /* Penting agar gambar tidak terpotong */
}

@keyframes fadeZoomUp {
    0% {
        opacity: 0;
        transform: scale(0.96) translateY(20px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.fade-zoom-up {
    animation: fadeZoomUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(25px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadein-up {
    opacity: 0;
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.fadein-1 {
    animation-delay: 150ms;
}

.fadein-2 {
    animation-delay: 300ms;
}

.fadein-3 {
    animation-delay: 450ms;
}

.fadein-4 {
    animation-delay: 600ms;
}
</style>