import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dom } from "./classes/dom";
import { Home } from "./pages/home";

export class Interactions {
  components: { [x: string]: Dom } = {};

  constructor() {
    gsap.registerPlugin(ScrollTrigger);

    this.onResize();
    this.createSmoothScroll();
    this.createPreloader();
    this.addEventListeners();
  }

  createSmoothScroll() {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  createPreloader() {
    /**
     * - preload media
     * - initializations
     * - call onpreloaded on completion
     * */
    this.onPreloaded();
  }

  onPreloaded() {
    this.components.home = new Home();
  }

  onResize() {
    /**
     * - recalculate
     * - reinitialise
     * - reset, etc.
     * */
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
}
