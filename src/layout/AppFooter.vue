<script setup lang="ts">
import { ref } from 'vue';
import IconCross from '@/assets/cross.svg';
import IconLinkedin from '@/assets/linkedin.svg';

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
          <div class="app-footer__contact-address-container">
            <p>
              Email:
              <a href="mailto:info@hiro-microdatacenters.nl">
                info@hiro-microdatacenters.nl
              </a>
            </p>
            <a
              href="https://www.linkedin.com/company/hiro-microdatacenters/"
              target="_blank"
            >
              <IconLinkedin scale="2" />
            </a>
          </div>
        </address>
        <IconCross
          class="app-footer__contact-exit"
          scale="1"
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
  gap: 0 50px;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 1rem;
  height: calc(100px + 4rem);

  @media (--breakpoint-tablet-large) {
    padding-top: 0;
    padding-bottom: 0;
    height: 100px;
  }
}

.app-footer__side {
  background: url('assets/footer-bg-link-mobile.svg') bottom no-repeat;
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms ease-out;

  button {
    font-size: 0.875rem;
  }

  a {
    color: var(--color-text);
    width: 100%;
    text-align: center;
  }

  &:has(a.router-link-exact-active) {
    font-weight: 900;
    transform: initial !important;
  }

  .router-link-exact-active {
    font-weight: 900;
    transform: initial !important;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
  }

  @media (--breakpoint-desktop) {
    background: url('assets/footer-bg-link.svg') bottom no-repeat;
    width: 200px;
    font-size: 0.9375rem;

    button {
      font-size: 0.9375rem;
    }
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
  background: url('assets/footer-full-bg-mobile.svg') top no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;

  @media (--breakpoint-desktop) {
    background: url('assets/footer-full-bg.svg') top no-repeat;
    width: 700px;
    justify-content: space-between;
  }
}

.app-footer__contact-section-placeholder {
  @media (--breakpoint-desktop) {
    margin: 20px;
    padding: 9px;
  }
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
    font-weight: 900;
    padding-right: 10px;
    border-right: var(--color-text) 1px solid;
  }

  a {
    color: var(--color-text);
  }
}

.app-footer__contact-address-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.app-footer__contact-exit {
  justify-self: end;
  cursor: pointer;
  color: white;
  margin-right: 10px;

  @media (--breakpoint-desktop) {
    scale: 1.5;
    margin: 20px;
  }
}
</style>
