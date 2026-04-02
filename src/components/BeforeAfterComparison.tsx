"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterComparisonProps = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
};

export function BeforeAfterComparison({
  beforeSrc,
  afterSrc,
  alt,
}: BeforeAfterComparisonProps) {
  const [split, setSplit] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image
          src={beforeSrc}
          alt={`${alt} before`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${split}%` }}>
          <div className="relative h-full w-[100vw] max-w-none">
            <Image
              src={afterSrc}
              alt={`${alt} after`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
          <div className="-ml-px h-full w-0.5 bg-white/90" />
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
          After
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
          Before
        </div>
      </div>
      <div className="p-4">
        <label htmlFor="compare-slider" className="mb-2 block text-sm font-medium">
          Drag to compare transformation
        </label>
        <input
          id="compare-slider"
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-luxe-sand accent-luxe-gold"
        />
      </div>
    </div>
  );
}
