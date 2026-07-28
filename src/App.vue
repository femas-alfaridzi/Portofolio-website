<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-gray-50/80 dark:bg-[#121212]/80 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Femas Alfaridzi</span>
        </button>
            <div class="flex md:order-2 fadein-bot items-center gap-3">
              <a href="https://www.linkedin.com/in/femas-alfaridzi-534b44285/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <img :src="linkedinIcon" alt="LinkedIn Icon" class="w-8 h-8 hover:scale-110 transition-transform duration-300">
              </a>
            </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/" class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0" aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/projects" class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Projects</router-link>
            </li>
            <li>
              <router-link to="/certifications" class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 blog">Certifications</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-gray-200 dark:border-[#383838] bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md backdrop-opacity-90">
  <nav class="flex justify-around py-4 text-xs">
    <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
    <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
  <router-link to="/projects" class="text-gray-300 hover:text-white">Projects</router-link>
    <router-link to="/certifications" class="text-gray-300 hover:text-white">Certifications</router-link>
  </nav>
</footer>
</template>

<script>
import linkedinIcon from '@/assets/linkedin.png';
import { initTheme } from '@/composables/useTheme';

export default {
  data() {
    return {
      linkedinIcon: linkedinIcon,
    };
  },
  mounted() {
    this.$nextTick(() => {
      initTheme();
    });
  },
  methods: {
    redirectToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px; 
}

::-webkit-scrollbar-thumb {
  background: #ffe070;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

:root,
.dark {
  /* Permanent Dark theme default */
  --bg: #0b0b0c;
  --text: #f8fafc;
  --muted: #9ca3af;
  --nav-bg: rgba(18,18,18,0.8);
  --card-bg: #1e1e1f;
  --card-border: #383838;
  --accent-from: #e6eef8; /* light slate for contrast */
  --accent-to: #ffdb70;
}

body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  height: 100vh;
}

/* Accent gradient text utility that uses the CSS variables above */
.accent-text {
  background-image: linear-gradient(90deg, var(--accent-from), var(--accent-to));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

nav {
  padding: 30px;
  background: var(--nav-bg);
}

nav a {
  font-weight: bold;
  color: var(--muted);
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: var(--accent-from); /* use accent color in light mode */
  transition: color 0.3s;
}

.dark nav a.router-link-exact-active {
  color: white; /* keep white in dark mode */
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ffdb70;
}

.dark nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
