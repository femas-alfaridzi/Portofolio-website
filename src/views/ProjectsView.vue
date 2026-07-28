<script>
  export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'Perpustakaan Website',
          imageUrl:'Perpustakaan',
          status: 'A PHP and Bootstrap-based library management system featuring digital catalog management, member administration, and loan/return transaction processing for digital libraries',
          tech: 'PHP, Bootstraps',
        },
        {
          id: 2,
          name: 'Laundry Website',
          imageUrl: 'laundry',
          status: 'A digital solution for modern laundry business automation. Features include online ordering, real-time laundry status tracking, customer management, and integrated payment transactions',
          tech: 'PHP, Java Script',
          github: 'null',
          demo: 'null'
        },
        {
          id: 3,
          name: 'IoT Website',
          imageUrl: 'iotweb',
          status: 'This integrated solution combines RFID-based parking access control, real-time fire detection sensors, and a live dashboard website for seamless monitoring. ',
          tech: 'Laravel',
          github: 'null',
          demo: 'null'
        },
        {
          id: 4,
          name: 'Hotel APP',
          imageUrl: 'hotel',
          status: 'A mobile solution revolutionizing hotel management and guest experiences. Enables seamless room booking, digital check-in, facility exploration, and service requests—all from a single intuitive interface designed for modern travelers and hospitality businesses',
          tech: 'Flutter',
          github: 'null',
          demo: 'null'
        },
        {
          id: 5,
          name: 'Laundry Fin',
          imageUrl: 'laundryfin',
          status: 'A comprehensive Figma UI kit for "Laundry Fin" – a mobile financial management solution designed specifically for laundry businesses. Focuses on simplifying complex financial operations through visual data representation and streamlined workflows.',
          tech: 'UI Design Fima',
          github: 'null',
          demo: 'null'
        },
        {
          id: 6,
          name: 'SIAP-PRO',
          imageUrl: 'siappro',
          status: 'SIAP-PRO (Sistem Informasi Acara dan Persidangan Protokol) is a web-based platform developed during my internship at the Ministry of State Secretariat of the Republic of Indonesia. The system digitalizes protocol officer assignments and council activity monitoring, replacing manual Google Spreadsheet workflows with a centralized platform featuring task management, activity tracking, reporting, and dashboard analytics.',
          tech: 'Laravel, PHP, MySQL, Tailwind CSS, Chart.js',
          github: 'null',
          demo: 'null'
        }
      ]
    };
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left mx-3 text-gray-900 dark:text-amber-50">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-gray-900 dark:text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col accent-text">
          <!-- <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div> -->
          <h4>Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id" class="h-full">
              <div
                class="item-card h-full flex flex-col gap-2 rounded bg-white dark:bg-[#1e1e1f] hover:bg-gray-50 dark:hover:bg-[#282828] border border-gray-200 dark:border-[#383838] rounded-xl text-gray-900 dark:text-amber-50 md:gap-3 px-5 py-5 lg:px-5 shadow-sm">
                <div class="zoom-in w-full">
                  <img :alt="item.name" loading="lazy" decoding="async" class="drop-shadow-md rounded-lg w-full h-auto"
                    :src="'/img/' + item.imageUrl + '.png'"> <!--tempat mengubah gambar project-->
                </div>
                <div class="w-full flex flex-col flex-1 gap-2 text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary text-left mt-2">{{ item.name }}</div>
                  <div class="w-full text-left text-[10px] text-gray-600 dark:text-[#c1c1c1] md:text-xs lg:text-sm flex-grow">
                    {{ item.status }}
                  </div>
                  <div class="w-full mt-auto pt-2 text-normal text-sm text-left text-amber-200">
                    {{ item.tech }}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </article>
</div>
</template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>