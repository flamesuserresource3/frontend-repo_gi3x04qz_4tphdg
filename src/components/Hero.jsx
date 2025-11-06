import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20">
            Premium Showroom Booking
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Drive your dream. Book it in minutes.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            Explore luxury brands, compare models, and reserve your car with a seamless booking experience designed for speed and style.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-200">
              Explore Collections
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950/90 to-transparent" />
    </section>
  );
};

export default Hero;
