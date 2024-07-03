<script setup lang="ts"></script>

<template>
  <footer class="app-footer">
    <section class="app-footer__side">
      <RouterLink to="/">Our Customers</RouterLink>
    </section>
    <section class="app-footer__side">
      <RouterLink to="/services">Our service</RouterLink>
    </section>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.app-footer__side {
  background: url('assets/footer-bg-side.svg') bottom no-repeat;
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: var(--color-text);
  }
}
</style>
