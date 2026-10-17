<script setup>
import config from '@/config.js'
import { useRevealAnimations } from '@/composables/useRevealAnimations.js'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HighlightsSection from '@/components/sections/HighlightsSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import DevicesSection from '@/components/sections/DevicesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import MethodSection from '@/components/sections/MethodSection.vue'
import SectorsSection from '@/components/sections/SectorsSection.vue'
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection.vue'
import CallToActionSection from '@/components/sections/CallToActionSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useRevealAnimations()
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <HighlightsSection />
    <StatsSection v-if="config.showTrust" />
    <ServicesSection />
    <DevicesSection />
    <AboutSection />
    <MethodSection />
    <SectorsSection />
    <DifferentiatorsSection />
    <CallToActionSection v-if="config.showPoster" />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
