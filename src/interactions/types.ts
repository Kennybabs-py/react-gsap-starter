export interface SelectorProps {
  selector: string | HTMLElement;
  secondarySelectors: {
    [x: string]: string | HTMLElement;
  };
}

export interface ScrollAnimationSettings {
  initialState?: gsap.TweenVars;
  function?: (tl: GSAPTimeline) => void;
}

export interface ScrollAnimationProps {
  element: string | HTMLElement;
  animationProps: ScrollTrigger.Vars & ScrollAnimationSettings;
}

export type SecondaryElements = {
  [x: string]: HTMLElement[];
};

export interface ObserverAnimationProps
  extends Omit<SelectorProps, "secondarySelectors"> {
  initialState?: gsap.TweenVars;
  target?: HTMLElement | null;
  animation?: IntersectionObserverInit & {
    tween?: gsap.TweenVars;
    resetOnExit?: boolean;
  };
}
