<template>
  <div class="container mx-auto px-3 py-6 md:p-8 text-left text-gray-900 dark:text-amber-50">
    <article data-page="experience">
      <!-- Hero Title -->
      <header>
        <div
          class="text-2xl font-bold text-gray-900 dark:text-white mb-10 fade-zoom-up title-section flex items-center justify-center flex-col accent-text">
          <h4>Experience</h4>
          <h4 class="text-base font-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Explore my professional journeys, international exchanges, and leadership roles</h4>
        </div>
      </header>

      <!-- EXPERIENCES CONTAINER -->
      <div class="max-w-6xl mx-auto space-y-24 pb-28">

        <!-- SECTION 1: INTERNSHIP EXPERIENCE -->
        <section class="fade-zoom-up" data-aos="fade-up">
          <!-- Category Title Header -->
          <div class="flex items-center gap-4 mb-8">
            <div class="h-8 w-1.5 bg-amber-400 rounded-full"></div>
            <div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Internship Experience</h2>
              <p class="text-xs text-gray-500 dark:text-gray-400">Professional industry experience and software engineering roles</p>
            </div>
          </div>

          <!-- VERTICAL STACK OF INTERNSHIP EXPERIENCE CARDS (1 Card = 1 Kegiatan Magang) -->
          <div class="flex flex-col gap-12 md:gap-16 w-full">
            <div 
              v-for="(item, index) in internships" 
              :key="item.id"
              class="w-full bg-white dark:bg-[#1e1e1f] border border-gray-200 dark:border-[#383838] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <!-- 1. TOP AREA: 3-LAYER 3D COVERFLOW SLIDER FOR THIS SPECIFIC INTERNSHIP'S PHOTOS -->
              <div class="relative w-full flex items-center justify-center h-[260px] md:h-[380px] lg:h-[440px] py-4 overflow-hidden rounded-2xl">
                <!-- Left Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="prevImage('internship', index, item.images.length)"
                  class="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Previous Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- 3-Layer Photo Cards (Left Layer, Center Active Layer, Right Layer) -->
                <div 
                  v-for="(imgSrc, imgIdx) in item.images" 
                  :key="imgIdx"
                  @click.stop="setActiveImage('internship', index, imgIdx)"
                  :class="['absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden shadow-2xl', getLayerClass(imgIdx, getActiveImage('internship', index), item.images.length, 'internship')]"
                >
                  <img 
                    :src="imgSrc" 
                    :alt="item.title"
                    class="w-full h-full object-cover object-center"
                  />
                </div>

                <!-- Right Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="nextImage('internship', index, item.images.length)"
                  class="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Next Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- 2. BOTTOM AREA: DETAILS FOR THIS SPECIFIC INTERNSHIP -->
              <div class="pt-6 mt-4 border-t border-gray-200 dark:border-[#383838] transition-all duration-500">
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 class="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">{{ item.title }}</h3>
                    <p class="text-base font-semibold text-gray-900 dark:text-white mt-1">{{ item.company }}</p>
                  </div>
                  <span class="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 text-sm font-mono whitespace-nowrap md:self-start">
                    {{ item.period }}
                  </span>
                </div>
                
                <!-- Bulleted List Description OR String Description -->
                <ul v-if="Array.isArray(item.description)" class="list-disc list-outside ml-5 space-y-2.5 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <li v-for="(point, pIdx) in item.description" :key="pIdx">{{ point }}</li>
                </ul>
                <p v-else class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 2: STUDENT EXCHANGE EXPERIENCE -->
        <section class="fade-zoom-up" data-aos="fade-up">
          <!-- Category Title Header -->
          <div class="flex items-center gap-4 mb-8">
            <div class="h-8 w-1.5 bg-amber-400 rounded-full"></div>
            <div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Student Exchange Experience</h2>
              <p class="text-xs text-gray-500 dark:text-gray-400">International academic programs and cultural exchanges</p>
            </div>
          </div>

          <!-- VERTICAL STACK OF STUDENT EXCHANGE CARDS (1 Card = 1 Kegiatan Exchange) -->
          <div class="flex flex-col gap-12 md:gap-16 w-full">
            <div 
              v-for="(item, index) in exchanges" 
              :key="item.id"
              class="w-full bg-white dark:bg-[#1e1e1f] border border-gray-200 dark:border-[#383838] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <!-- 1. TOP AREA: 3-LAYER 3D COVERFLOW SLIDER FOR THIS SPECIFIC EXCHANGE'S PHOTOS -->
              <div class="relative w-full flex items-center justify-center h-[260px] md:h-[380px] lg:h-[440px] py-4 overflow-hidden rounded-2xl">
                <!-- Left Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="prevImage('exchange', index, item.images.length)"
                  class="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Previous Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- 3-Layer Photo Cards -->
                <div 
                  v-for="(imgSrc, imgIdx) in item.images" 
                  :key="imgIdx"
                  @click.stop="setActiveImage('exchange', index, imgIdx)"
                  :class="['absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden shadow-2xl', getLayerClass(imgIdx, getActiveImage('exchange', index), item.images.length, 'exchange')]"
                >
                  <img 
                    :src="imgSrc" 
                    :alt="item.title"
                    class="w-full h-full object-cover object-center"
                  />
                </div>

                <!-- Right Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="nextImage('exchange', index, item.images.length)"
                  class="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Next Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- 2. BOTTOM AREA: DETAILS FOR THIS SPECIFIC EXCHANGE -->
              <div class="pt-6 mt-4 border-t border-gray-200 dark:border-[#383838] transition-all duration-500">
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 class="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">{{ item.title }}</h3>
                    <p class="text-base font-semibold text-gray-900 dark:text-white mt-1">{{ item.company }}</p>
                  </div>
                  <span class="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 text-sm font-mono whitespace-nowrap md:self-start">
                    {{ item.period }}
                  </span>
                </div>
                
                <ul v-if="Array.isArray(item.description)" class="list-disc list-outside ml-5 space-y-2.5 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <li v-for="(point, pIdx) in item.description" :key="pIdx">{{ point }}</li>
                </ul>
                <p v-else class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 3: ORGANIZATIONAL EXPERIENCE -->
        <section class="fade-zoom-up" data-aos="fade-up">
          <!-- Category Title Header -->
          <div class="flex items-center gap-4 mb-8">
            <div class="h-8 w-1.5 bg-amber-400 rounded-full"></div>
            <div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Organizational Experience</h2>
              <p class="text-xs text-gray-500 dark:text-gray-400">Leadership roles, campus organizations, and technical committees</p>
            </div>
          </div>

          <!-- VERTICAL STACK OF ORGANIZATIONAL CARDS (1 Card = 1 Kegiatan Organisasi) -->
          <div class="flex flex-col gap-12 md:gap-16 w-full">
            <div 
              v-for="(item, index) in organizations" 
              :key="item.id"
              class="w-full bg-white dark:bg-[#1e1e1f] border border-gray-200 dark:border-[#383838] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <!-- 1. TOP AREA: 3-LAYER 3D COVERFLOW SLIDER FOR THIS SPECIFIC ORGANIZATION'S PHOTOS -->
              <div class="relative w-full flex items-center justify-center h-[260px] md:h-[380px] lg:h-[440px] py-4 overflow-hidden rounded-2xl">
                <!-- Left Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="prevImage('organization', index, item.images.length)"
                  class="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Previous Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- 3-Layer Photo Cards -->
                <div 
                  v-for="(imgSrc, imgIdx) in item.images" 
                  :key="imgIdx"
                  @click.stop="setActiveImage('organization', index, imgIdx)"
                  :class="['absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden shadow-2xl', getLayerClass(imgIdx, getActiveImage('organization', index), item.images.length, 'organization')]"
                >
                  <img 
                    :src="imgSrc" 
                    :alt="item.title"
                    class="w-full h-full object-cover object-center"
                  />
                </div>

                <!-- Right Arrow Button -->
                <button 
                  v-if="item.images && item.images.length > 1"
                  @click.stop="nextImage('organization', index, item.images.length)"
                  class="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#27272a]/90 hover:bg-white dark:hover:bg-[#383838] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white transition-all transform hover:scale-110 focus:outline-none"
                  aria-label="Next Photo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- 2. BOTTOM AREA: DETAILS FOR THIS SPECIFIC ORGANIZATION -->
              <div class="pt-6 mt-4 border-t border-gray-200 dark:border-[#383838] transition-all duration-500">
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 class="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">{{ item.title }}</h3>
                    <p class="text-base font-semibold text-gray-900 dark:text-white mt-1">{{ item.company }}</p>
                  </div>
                  <span class="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 text-sm font-mono whitespace-nowrap md:self-start">
                    {{ item.period }}
                  </span>
                </div>
                
                <ul v-if="Array.isArray(item.description)" class="list-disc list-outside ml-5 space-y-2.5 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <li v-for="(point, pIdx) in item.description" :key="pIdx">{{ point }}</li>
                </ul>
                <p v-else class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      activeInternship: 0,
      activeExchange: 0,
      activeOrganization: 0,
      
      // Store current active image index per category & card index
      activeImages: {
        internship: {},
        exchange: {},
        organization: {}
      },

      // 1. DATA INTERNSHIP EXPERIENCE (3 Lapis / 3 Card Kosong Siap Pakai)
      internships: [
        {
          id: 1,
          title: 'Kementerian Sekretariat Negara Republik Indonesia',
          company: 'System Analyst IT | Dewan Pertimbangan Presiden (WANTIMPRES)',
          period: 'Jakarta | January - March 2026',
          images: [
            '/img/m.jpeg',
            '/img/td.jpg',
            '/img/it.jpeg',
            '/img/3.JPEG',
            '/img/st.jpeg',
            '/img/yd.jpeg',
            '/img/12.jpeg',
            '/img/4.jpeg',
            '/img/5.jpeg',
            '/img/6.jpeg',
            '/img/7.jpeg',
            '/img/12.jpeg',
            '/img/14.jpeg',
            '/img/mt.JPEG'
          ],
          description: [
            'Designed and developed SIAPRO (Sistem Informasi Acara dan Persidangan Keprotokolan) to replace manual spreadsheet-based processes.',
            'Analyzed business processes within the Protocol Division and identified opportunities for digital transformation.',
            'Delivered a web-based monitoring system for council activities and protocol assignments to improve operational efficiency and reporting accuracy.'
          ],
          
        },
        {
          id: 2,
          title: 'PT CMLABS DIGITAL INDONESIA',
          company: 'IT Project Manager & Frontend Dev',
          period: 'Remote | August 2025 - January 2026',
          images: [
            '/img/cmlabs.JPEG',
            '/img/cv.jpg',
            '/img/labs.jpg',
            '/img/web.png',
            '/img/web2.png',
            '/img/web3.png'
          ],
          description: [
          'Led project coordination and task management during the development of a Content Management System (CMS).',
          'Developed responsive user interfaces using Next.js and modern frontend development practices.'
          ]
        },
      ],

      // 2. DATA STUDENT EXCHANGE EXPERIENCE (3 Lapis / 3 Card Kosong Siap Pakai)
      exchanges: [
        {
          id: 101,
          title: 'Universiti Teknologi Petronas (UTP)',
          company: 'Student Exchange Participant | Malaysia',
          period: 'Malaysia (September 2024)',
          images: [
            '/img/ub.jpg',
            '/img/ar.jpg',
            '/img/utp.jpg', 
            '/img/t7.jpg',
            '/img/t1.jpeg', 
            '/img/t4.jpg',
            '/img/t2.jpeg',
            '/img/t5.jpg',
            '/img/t8.jpg',
            '/img/t9.jpg',
            '/img/t10.jpeg',
            '/img/t11.jpeg',
            '/img/t3.jpg',
            '/img/t13.jpeg',
            '/img/t14.jpg',
            '/img/t15.jpg',
            '/img/t16.jpg',
            '/img/t17.jpg',
            '/img/bn.png',
            '/img/utm.jpeg'
          ],
          description: [
          'Represented Brawijaya University in an international academic exchange program focused on technology, engineering, and innovation.',
          'Participated in intensive short courses covering Virtual Reality (VR), STEM education, industrial automation, and emerging technologies.',
          'Explored Petronas industrial operations through technical site visits, gaining insights into automation systems, engineering, and digital technologies used in the oil and gas industry.'
          ]     
        },
      ],

      // 3. DATA ORGANIZATIONAL EXPERIENCE (3 Lapis / 3 Card Kosong Siap Pakai)
      organizations: [
        {
          id: 201,
          title: 'Eksekutif Mahasiswa Universitas Brawijaya',
          company: 'Staff Badan Usaha Milik Mahasiswa',
          period: 'Malang | August - Desember 2024',
          images: [
            '/img/em.jpg',
            '/img/em2.JPG',
            '/img/emub.png'
          ],
          description: [
            'Supported programs aimed at empowering student-led businesses through entrepreneurship development initiatives.',
            'Collaborated with cross-functional teams in planning and executing student development programs.'
          ]
        },
        {
          id: 202,
          title: 'Unit Aktivitas Bola Basket Universitas Brawijaya',
          company: 'Staff Pengembangan',
          period: 'Malang | February - December 2024',
          images: [
            '/img/b1.jpg',
            '/img/b2.jpg',
            '/img/b3.jpg'
          ],
          description: [
            'Secured sponsorships worth more than IDR 15 million, contributing approximately 75% of the event’s funding target.',
            'Assisted in proposal preparation, sponsorship acquisition, and partnership coordination to ensure successful event execution.'
          ]
        },
        {
          id: 203,
          title: 'Mahasiswa Wirausaha Universitas Brawijaya',
          company: 'Staff Brawijaya Enterpreneurship',
          period: 'Malang | Oktober - November 2024',
          images: [
            '/img/yb1.jpg',
            '/img/yb2.jpg',
            '/img/yb3.jpg',
            '/img/yb4.jpg',
            '/img/yb5.jpg'
          ],
          description: [
            'Handled logistics for one of BEF’s main events, including transportation, meals, and accommodation',
            'Collaborated with divisions and acted as contact person for the Young Business Summit.'
          ]
        }
      ]
    };
  },
  methods: {
    getActiveImage(category, cardIndex) {
      return (this.activeImages[category] && this.activeImages[category][cardIndex]) || 0;
    },
    setActiveImage(category, cardIndex, imgIndex) {
      if (!this.activeImages[category]) {
        this.$set ? this.$set(this.activeImages, category, {}) : (this.activeImages[category] = {});
      }
      this.activeImages[category][cardIndex] = imgIndex;
    },
    getLayerClass(imgIdx, activeImgIdx, totalImages) {
      if (imgIdx === activeImgIdx) {
        // CENTER ACTIVE LAYER (Layer Tengah - Jelas dan Fokus 16:9)
        const borderAccent = 'border-amber-500/60 dark:border-amber-400/50';
        return `z-20 scale-100 opacity-100 left-1/2 -translate-x-1/2 w-[76%] sm:w-[82%] md:w-[620px] lg:w-[680px] aspect-video ${borderAccent} border-2 shadow-2xl glow-amber-layer bg-gray-900 pointer-events-auto`;
      }
      
      const prevIdx = (activeImgIdx - 1 + totalImages) % totalImages;
      const nextIdx = (activeImgIdx + 1) % totalImages;

      if (imgIdx === prevIdx) {
        // LEFT LAYER (Layer Kiri - Aktif di Mobile & Desktop, sudut curve tidak terpotong)
        return 'z-10 scale-[0.82] md:scale-[0.85] opacity-40 hover:opacity-75 left-1/2 -translate-x-[70%] sm:-translate-x-[76%] md:-translate-x-[80%] lg:-translate-x-[78%] w-[76%] sm:w-[82%] md:w-[620px] lg:w-[680px] aspect-video border border-gray-500/50 dark:border-gray-600/60 bg-gray-900 cursor-pointer block';
      } else if (imgIdx === nextIdx) {
        // RIGHT LAYER (Layer Kanan - Aktif di Mobile & Desktop, sudut curve tidak terpotong)
        return 'z-10 scale-[0.82] md:scale-[0.85] opacity-40 hover:opacity-75 left-1/2 -translate-x-[30%] sm:-translate-x-[24%] md:-translate-x-[20%] lg:-translate-x-[22%] w-[76%] sm:w-[82%] md:w-[620px] lg:w-[680px] aspect-video border border-gray-500/50 dark:border-gray-600/60 bg-gray-900 cursor-pointer block';
      }

      // Hidden layer for any remaining images
      return 'z-0 scale-75 opacity-0 left-1/2 -translate-x-1/2 w-[76%] sm:w-[82%] md:w-[620px] lg:w-[680px] aspect-video pointer-events-none hidden';
    },
    prevImage(category, cardIndex, totalImages) {
      const current = this.getActiveImage(category, cardIndex);
      const next = (current - 1 + totalImages) % totalImages;
      this.setActiveImage(category, cardIndex, next);
    },
    nextImage(category, cardIndex, totalImages) {
      const current = this.getActiveImage(category, cardIndex);
      const next = (current + 1) % totalImages;
      this.setActiveImage(category, cardIndex, next);
    }
  }
};
</script>

<style scoped>
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(15px);
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
    transform: translateY(20px);
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

/* Golden ambient glow for center active photo layer (samar-samar tipis & super smooth as requested) */
.glow-amber-layer {
  box-shadow: 0 0 24px -2px rgba(245, 158, 11, 0.20), 0 0 10px 0px rgba(251, 191, 36, 0.12);
  -webkit-box-shadow: 0 0 24px -2px rgba(245, 158, 11, 0.20), 0 0 10px 0px rgba(251, 191, 36, 0.12);
  -moz-box-shadow: 0 0 24px -2px rgba(245, 158, 11, 0.20), 0 0 10px 0px rgba(251, 191, 36, 0.12);
}
</style>
