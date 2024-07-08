<script setup lang="ts">
import { ref } from 'vue';
import IconCross from '@/assets/cross.svg';

const isContactSectionVisible = ref(false);
const showContactSection = () => {
  isContactSectionVisible.value = true;
};
const hideContactSection = () => {
  isContactSectionVisible.value = false;
};
</script>

<template>
  <footer class="app-footer">
    <template v-if="!isContactSectionVisible">
      <section class="app-footer__side">
        <RouterLink to="/">Our Customers</RouterLink>
      </section>
      <section class="app-footer__side app-footer__side--button">
        <button @click="showContactSection">Contact Us</button>
      </section>
      <section class="app-footer__side">
        <RouterLink to="/services">Our service</RouterLink>
      </section>
    </template>
    <template v-else>
      <section class="app-footer__contact-section">
        <div class="app-footer__contact-section-placeholder"></div>
        <address class="app-footer__contact-address">
          <h3>Contact Us</h3>
          <p>
            Email:
            <a href="mailto:info@hiro-microdatacenters.nl">
              info@hiro-microdatacenters.nl
            </a>
          </p>
          <p>
            Phone number:
            <a href="tel:0612345678">0612345678</a>
          </p>
        </address>
        <IconCross
          class="app-footer__contact-exit"
          scale="2"
          @click="hideContactSection"
        />
      </section>
    </template>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 80px;
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

.app-footer__side--button {
  button {
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
  }
}

.app-footer__contact-section {
  background: url('assets/footer-full-bg.svg') top no-repeat;
  width: 700px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-footer__contact-section-placeholder {
  margin: 20px;
  padding: 9px;
}

.app-footer__contact-address {
  display: flex;
  flex-direction: column;
  font-style: normal;
  align-items: center;

  h3 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  p {
    font-weight: 600;
  }

  a {
    color: var(--color-text);
  }
}

.app-footer__contact-exit {
  justify-self: end;
  cursor: pointer;
  color: white;
  scale: 1.5;
  margin: 20px;
}
</style>
