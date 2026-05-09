"use client";

import { useCountUp } from "../hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2D5A3D]">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base text-[#7A7A7A]">{label}</div>
    </div>
  );
}
