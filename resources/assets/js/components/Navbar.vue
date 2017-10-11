<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="http://bulma.io/images/bulma-logo.png" alt="" width="112" height="28">
      </a>
      <div class="navbar-menu is-active">
        <router-link v-for="(menu, i) in menus" :to="menu.link" :key="i" class="navbar-item">{{ menu.name }}</router-link>
      </div>
      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
  export default{
    data() {
      return {
        menus: [
          { link: '/', name: 'Home'},
          { link: '/profile', name: 'Profile'},
          { link: '/contact', name: 'Contact'}
        ]
      }
    }
  }
</script>