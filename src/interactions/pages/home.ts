import gsap from "gsap";
import { Dom } from "../classes/dom";
import { ScrollAnimation } from "../classes/scroll-animation";

export class Home extends Dom {
  timeline: GSAPTimeline;
  animations: ScrollAnimation[] = [];

  constructor() {
    super({
      selector: ".home",
      secondarySelectors: {
        dash: ".home__dash",
        textWrapper: ".text__wrapper",
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  init() {
    this.animations.push(
      new ScrollAnimation({
        element: this.secondaryElements.dash[0],
        context: this.secondaryElements.textWrapper[0],
        animationProps: {
          pin: this.element,
          trigger: this.secondaryElements.textWrapper[0],
          start: "top top",
          function: (tl) => {
            tl.to(this.secondaryElements.dash[0], {
              width: "40vw",
            });
          },
        },
      })
    );
  }
}
