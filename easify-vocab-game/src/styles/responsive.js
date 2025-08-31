import { App } from '../app/App.js';
import { CategoriesScreenComponentsResponsive } from './screens-components-responsive/categories-screen/categories-screen-components-responsive.js';
// import { GameScreenComponentsResponsive } from './screens-components-responsive/game-screen/game-screen-components-responsive.js';
import { HomeScreenComponentsResponsive } from './screens-components-responsive/home-screen/home-screen-components-responsive.js';
import { PreGameScreenComponentsResponsive } from './screens-components-responsive/pre-game-screen/pre-game-screen-components-responsive.js';
import { ReviewScreenComponentsResponsive } from './screens-components-responsive/review-screen/review-screen-components-responsive.js';

export class Responsive {
  static instance = null;

  static getInstance() {
    if (!Responsive.instance) {
      Responsive.instance = new Responsive();
    }
    return Responsive.instance;
  }

  constructor() {
    this.mediaQuery = window.matchMedia('(max-width: 767px)');
    const IS_MOBILE = this.mediaQuery.matches;

    if (IS_MOBILE) {
      App.getInstance().setSize(586, 837); // Aspect Ratio Vertical
    } else {
      App.getInstance().setSize(842, 582); // Aspect Ratio Horizontal
    }
  }

  setEvents() {
    if (this.mediaQuery.matches) {
      HomeScreenComponentsResponsive.getInstance().changeComponentsStylesAndPositions();
      CategoriesScreenComponentsResponsive.getInstance().changeComponentsStyles();
    }

    this.mediaQuery.addEventListener('change', (e) => {
      const reviewResponsiveInstance = ReviewScreenComponentsResponsive.instance;
      const preGameResponsiveInstance = PreGameScreenComponentsResponsive.instance;
      // const gameResponsiveInstance = GameScreenComponentsResponsive.instance;

      if (e.matches) {
        App.getInstance().setSize(586, 837);
        HomeScreenComponentsResponsive.getInstance().changeComponentsStylesAndPositions();
        CategoriesScreenComponentsResponsive.getInstance().changeComponentsStyles();
        if (reviewResponsiveInstance && reviewResponsiveInstance.isLoaded) {
          reviewResponsiveInstance.changeComponentsStylesAndPositions();
        }
        if (preGameResponsiveInstance && preGameResponsiveInstance.isLoaded) {
          preGameResponsiveInstance.changeComponentsStylesAndPositions();
        }
        // if (gameResponsiveInstance && gameResponsiveInstance.isLoaded) {
        //   gameResponsiveInstance.changeComponentsStylesAndPositions();
        // }
      } else {
        App.getInstance().setSize(842, 582);
        HomeScreenComponentsResponsive.getInstance().resetComponentsStylesAndPositions();
        CategoriesScreenComponentsResponsive.getInstance().resetComponentsStyles();
        if (reviewResponsiveInstance && reviewResponsiveInstance.isLoaded) {
          reviewResponsiveInstance.resetComponentsStylesAndPositions();
        }
        if (preGameResponsiveInstance && preGameResponsiveInstance.isLoaded) {
          preGameResponsiveInstance.resetComponentsStylesAndPositions();
        }
        // if (gameResponsiveInstance && gameResponsiveInstance.isLoaded) {
        //   gameResponsiveInstance.resetComponentsStylesAndPositions();
        // }
      }
    });
  }
}

// const mediaQuery = window.matchMedia('(max-width: 768px)');
// if (mediaQuery.matches) {
//   minhaFuncao();
// }

// mediaQuery.addEventListener('change', (e) => {
//   if (e.matches) {
//     minhaFuncao();
//   } else {
//     console.log("Tela voltou a ser maior que 768px");
//   }
// });

// function minhaFuncao() {
//   console.log("Tela menor que 768px!");
//   // Aqui você pode fazer qualquer coisa, como ativar animações, mudar comportamentos etc.
// }

// const BREAKPOINTS = {
//   mobile_tablet: 926,
//   laptop_desktop: 1024,
// }

// export const responsiveValue = (laptop_desktop, mobile_tablet, width) => {
//   if (width <= BREAKPOINTS.mobile_tablet) return mobile_tablet;
//   if (width <= BREAKPOINTS.laptop_desktop) return laptop_desktop;
//   return laptop_desktop;
// }

// export function setSizeAppRef(app, width, height) {
//   if (!app) return;
//   app.refWidth = width;
//   app.refHeight = height;
// }
// export function getSizeAppRef() {
//   return {
//     width: window.innerWidth,
//     height: window.innerHeight
//   };
// }

// // Define a media query
// const mediaQuery = window.matchMedia('(max-width: 768px)');

// // Verifica inicialmente se a condição já é verdadeira
// if (mediaQuery.matches) {
//   minhaFuncao();
// }

// // Escuta mudanças na condição
// mediaQuery.addEventListener('change', (e) => {
//   if (e.matches) {
//     minhaFuncao();
//   } else {
//     console.log("Tela voltou a ser maior que 768px");
//   }
// });
