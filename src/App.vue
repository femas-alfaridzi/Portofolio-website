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
              <button
                @click="toggleTheme"
                aria-label="Toggle theme"
                class="p-2 rounded transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-400">
                  <path d="M12 3.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2A.75.75 0 0112 3.25zM12 17a5 5 0 100-10 5 5 0 000 10zM5.47 5.47a.75.75 0 011.06 0l1.414 1.414a.75.75 0 11-1.06 1.06L5.47 6.53a.75.75 0 010-1.06zM17.05 17.05a.75.75 0 011.06 0l1.414 1.414a.75.75 0 11-1.06 1.06l-1.414-1.414a.75.75 0 010-1.06zM3.25 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2A.75.75 0 013.25 12zM17 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2A.75.75 0 0117 12zM5.47 18.53a.75.75 0 010-1.06l1.414-1.414a.75.75 0 111.06 1.06L6.53 18.53a.75.75 0 01-1.06 0zM17.05 6.95a.75.75 0 010-1.06l1.414-1.414a.75.75 0 111.06 1.06L18.11 6.95a.75.75 0 01-1.06 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 text-gray-800 dark:text-gray-200">
                  <path d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 1121.75 12c0 .346-.012.688-.034 1.028a.75.75 0 01.036 2.0z" />
                </svg>
              </button>
              <a href="https://www.linkedin.com/in/femas-alfaridzi-534b44285/">
                <img :src="linkedinIcon" alt="LinkedIn Icon" class="w-8 h-">
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
// --- Perbaikan di sini: Sesuaikan nama file dan ekstensinya ke linkedin.jpg ---
import linkedinIcon from '@/assets/linkedin.png';
import { initTheme, toggleTheme as toggleThemeFn } from '@/composables/useTheme';

export default {
  data() {
    return {
      linkedinIcon: linkedinIcon,
      theme: 'light',
    };
  },
  mounted() {
    this.$nextTick(() => {
      const t = initTheme();
      this.theme = t;
    });
  },
  methods: {
    redirectToHome() {
      this.$router.push('/');
    },
    toggleTheme() {
      const t = toggleThemeFn();
      this.theme = t;
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

:root {
  /* Light theme (default) */
  --bg: linear-gradient(180deg,#f8fafc 0%, #ffffff 100%);
  --text: #0f172a;
  --muted: #475569;
  --nav-bg: rgba(255,255,255,0.85);
  --card-bg: #ffffff;
  --card-border: #e6e6e9;
  --accent-from: #334155; /* slate-700 */
  --accent-to: #ffdb70; /* amber */
}

.dark {
  /* Dark theme overrides */
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
