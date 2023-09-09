<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-white border-dark border-bottom ">
    <div class="container">

      <NuxtLink to="/" aria-label="Navbar Link" class="navbar-brand text-white">
        <NuxtImg class="d-inline-block align-text-top" src='/img/icon-green.png' :width="40" :height="40" alt="Logo" />
        Nuxt
        <span>
          Movies
        </span>
      </NuxtLink>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNavigation"
        aria-controls="mobileNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon "></span> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fafafa" className="bi bi-list"
          viewBox="0 0 16 16">
          <path fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <div class="collapse navbar-collapse justify-content-arround" id="mobileNavigation">
        <div class="navbar-nav">
          <NuxtLink
            :class="`nav-link mx-md-2 ${useRoute().path === '/' ? 'text-white' : 'text-white-50'}  fst-normal fs-6`"
            to="/">Beranda</NuxtLink>
          <NuxtLink
            :class="`nav-link mx-md-2 ${useRoute().path === '/movie' ? 'text-white' : 'text-white-50'}  fst-normal fs-6`"
            to="/movie">Film</NuxtLink>
          <NuxtLink
            :class="`nav-link mx-md-2 ${useRoute().path === '/series' ? 'text-white' : 'text-white-50'}  fst-normal fs-6`"
            to="/series">Drama</NuxtLink>
          <NuxtLink
            :class="`nav-link mx-md-2 ${useRoute().path === '/series' ? 'text-white' : 'text-white-50'}  fst-normal fs-6`"
            to="/series">Tentang Kami</NuxtLink>

        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
onMounted(() => {
  window.addEventListener('scroll', onNavbarScroll)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', onNavbarScroll)
})

const onNavbarScroll = () => {
  const scrollY = window.scrollY
  const navbar = document.querySelector('.navbar')

  if (scrollY > 50) {
    navbar?.classList.add('sticky-shadow')
  } else {
    navbar?.classList.remove('sticky-shadow')
  }
}

const route = useRoute()

</script>

<style scoped>
.navbar {
  width: 100%;
  min-height: auto;
  height: auto;
  /* background-color: #000; */
  background-color: #0B0A0A;
  color: #ECEBE8;
  transition: ease 300ms;
}

.navbar .navbar-brand {
  font-size: 28px;
  font-style: normal;
  letter-spacing: 1px;
}

.navbar .navbar-brand span {
  color: #00bd6f;
  font-size: 26px;
  margin-left: -10px;
  text-transform: capitalize;
}

.navbar.sticky-shadow {
  opacity: 0.8;
  filter: blur(50%)
}

.navbar-collapse {
  -webkit-transition: background-color 300ms ease-out !important;
  -moz-transition: background-color 300ms ease-out !important;
  -o-transition: background-color 300ms ease-out !important;
  transition: background-color 300ms ease-out !important;
  margin-left: 10px;
}

.navbar-toggler:focus {
  transition: ease-in-out 500ms;
}
</style>