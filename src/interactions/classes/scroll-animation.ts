import gsap from "gsap";
import { Dom } from "./dom";
import { ScrollAnimationProps } from "@/interactions/types";

export class ScrollAnimation extends Dom {
  timeline: GSAPTimeline;
  context: string | HTMLElement;

  constructor({ element, context, animationProps }: ScrollAnimationProps) {
    super({ selector: element, secondarySelectors: {} });
    this.animate(animationProps);
    this.timeline = gsap.timeline();
    this.context = context;
  }

  animate(props: ScrollAnimationProps["animationProps"]) {
    const { scrub, trigger, start, ...rest } = props;

    gsap.set(this.element, {
      ...props.initialState,
    });

    const ctx = gsap.context(() => {
      this.timeline = gsap.timeline({
        scrollTrigger: {
          ...rest,
          start: start ?? "top bottom",
          scrub: scrub ?? 0.7,
          trigger: trigger ?? this.element,
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      props.function && props.function?.(this.timeline);
    }, this.context); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert();
  }

  async kill() {
    await this.timeline?.kill();
    return Promise.resolve();
  }
}
