import type {MotionValue} from "framer-motion";

import {useState, useEffect} from "react";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

type ScrollDirection = "up" | "down";

/**
 * It returns a string that's either "up" or "down" depending on the direction of the scroll
 * @returns A string that is either "up" or "down"
 */
const useScrollDirection = (): ScrollDirection => {
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const {scrollY} = useScroll();
  const yVelocity = useVelocity(scrollY);

  useEffect(() => {
    return yVelocity.onChange((latestVelocity) => {
      if (latestVelocity > 0) {
        setDirection("down");
      } else if (latestVelocity < 0) {
        setDirection("up");
      }
    });
  }, [yVelocity]);

  return direction;
};

// Reversible clock as MotionValue
/**
 * It returns a `MotionValue` that increases by the number of milliseconds that have passed since the
 * last frame
 * @param  - defaultValue - The initial value of the clock.
 * @returns A clock that can be used to create animations.
 */
const useClock = ({defaultValue = 0, reverse = false} = {}) => {
  const rawClock = useMotionValue(0);
  const clock = useMotionValue(defaultValue);

  useAnimationFrame((t) => {
    /* It's calculating the time difference between the current frame and the last frame. */
    const dt = t - rawClock.get();

    rawClock.set(rawClock.get() + dt);
    /* It's checking if the scroll direction is up or down. If it's up, it's subtracting the time
    difference from the clock. If it's down, it's adding the time difference to the clock. */
    if (reverse) {
      clock.set(clock.get() - dt);
    } else {
      clock.set(clock.get() + dt);
    }
  });

  return clock;
};

/**
 * It returns a spring that moves forward in time when the user scrolls down, and backwards in time
 * when the user scrolls up
 * @param  - `scrollAccelerationFactor` - The amount of time that should be added to the clock for each
 * pixel of scroll.
 * @returns A spring that is being updated by the scroll position.
 */
export const useScrollClock = ({scrollAccelerationFactor = 10} = {}): MotionValue<number> => {
  const {scrollY: scrollPosition} = useScroll();
  const scrollDirection = useScrollDirection();
  const clock = useClock({
    defaultValue: Date.now(),
    reverse: scrollDirection === "up",
  });

  /* It's creating a new `MotionValue` that is being updated by the `clock` and the `scrollPosition`. */
  const scrollClock = useTransform(
    [clock, scrollPosition as any],
    ([time, pos]: number[]) => time + (pos || 0) * scrollAccelerationFactor,
  );

  // Smooth out motion with a spring
  return useSpring(scrollClock, {mass: 0.05, stiffness: 100, damping: 10});
};
