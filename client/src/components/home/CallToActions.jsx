import React from "react";
import CtaButton from "./CtaButton";

const CallToActions = () => {
  return (
    <section
      id="cta"
      className="relative flex flex-col items-center justify-center mx-auto w-full max-w-5xl text-center rounded-2xl mt-20 overflow-hidden
        px-4 py-14
        sm:px-8 sm:py-28
        md:px-12 md:py-20
        lg:px-16 lg:py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5">
        <h1 className="font-medium text-white leading-tight
          text-xl
          sm:text-2xl
          md:text-3xl
          lg:text-4xl
          max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl">
          Get Interview-Ready in Minutes
        </h1>

        <p className="text-white/90 leading-relaxed
          text-xs
          sm:text-sm
          md:text-base
          max-w-xs sm:max-w-sm md:max-w-lg">
          Let AI craft a resume tailored to your job role, optimized for ATS,
          and designed to impress every recruiter.
        </p>

        <div className="mt-1 sm:mt-3">
          <CtaButton />
        </div>
      </div>
    </section>
  );
};

export default CallToActions;