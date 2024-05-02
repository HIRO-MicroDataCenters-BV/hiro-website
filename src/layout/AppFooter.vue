<script setup lang="ts"></script>

<template>
  <footer class="app-footer">
    <section class="app-footer__side">Our Customers</section>
    <section class="app-footer__center">Contact Us</section>
    <section class="app-footer__side">Technology Pillars</section>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  gap: 50px;
}

.app-footer__side {
  background: url('assets/footer-bg-side.svg') bottom no-repeat;
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-footer__center {
  background: url('assets/footer-bg.svg') top no-repeat;
  width: 873px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
</style>
