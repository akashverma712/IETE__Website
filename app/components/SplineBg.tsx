"use client";

import { useEffect, useState } from "react";

export default function SplineBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <iframe
      src="https://my.spline.design/3dstars-rvAlBo8Maxlo2VYbHwOHmN2O/"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
    />
  );
}
