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
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  init() {
    this.animations.push(
      new ScrollAnimation({
        element: this.secondaryElements.dash[0],
        animationProps: {
          trigger: this.element,
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
