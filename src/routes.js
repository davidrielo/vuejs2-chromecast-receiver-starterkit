import SplashComponent from "../src/components/splash.vue";
import HomeComponent from "../src/components/home.vue";
import Page1Component from "../src/components/page1.vue";
import FontsComponent from "../src/components/fonts.vue";
import Fonts2Component from "../src/components/fonts2.vue";
import Fonts3Component from "../src/components/fonts3.vue";
import Fonts4Component from "../src/components/fonts4.vue";
import BootstrapGridComponent from "../src/components/bootstrap-grid.vue";
import GlyphiconsComponent from "../src/components/glyphicons.vue";

export default [
    {
      path: '/splash',
      name: 'Splash',
      component: SplashComponent,
      useAsDefault: true
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/page1/:message',
      name: 'Page1',
      component: Page1Component
    },
    {
      path: '/fonts',
      name: 'Fonts',
      component: FontsComponent
    },
    {
      path: '/fonts2',
      name: 'Fonts2',
      component: Fonts2Component
    },
    {
      path: '/fonts3',
      name: 'Fonts3',
      component: Fonts3Component
    },
    {
      path: '/fonts4',
      name: 'Fonts4',
      component: Fonts4Component
    },
    {
      path: '/grid',
      name: 'Grid',
      component: BootstrapGridComponent
    },
    {
      path: '/glyphicons',
      name: 'Glyphicons',
      component: GlyphiconsComponent
    },
  ]