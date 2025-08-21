import { reactive } from 'vue';
import navigation from './navigation';
import hero from './hero';
import about from './about';
import experience from './experience';
import projects from './projects';
import education from './education';
import contact from './contact';
import footer from './footer';

export const state = reactive({
  currentLanguage: 'en',
  translations: {
    pt: {

      navigation: navigation.pt,
      hero: hero.pt,
      about: about.pt,
      experience: experience.pt,
      projects: projects.pt,
      education: education.pt,
      contact: contact.pt,
      footer: footer.pt

    },

    en: {
      navigation: navigation.en,
      hero: hero.en,
      about: about.en,
      experience: experience.en,
      projects: projects.en,
      education: education.en,
      contact: contact.en,
      footer: footer.en

    },
  }
});

export function toggleLanguage() {
  const languages = ['en', 'pt'];
  const currentIndex = languages.indexOf(state.currentLanguage);
  const nextIndex = (currentIndex + 1) % languages.length;
  state.currentLanguage = languages[nextIndex];
}
