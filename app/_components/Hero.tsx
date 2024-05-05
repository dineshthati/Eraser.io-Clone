import React from "react";

export const Hero = () => {
  return (
    <section className="bg-black h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#94DBFF]">
            Understand User Flow.
            <strong className="font-extrabold text-white sm:block">
              {" "}
              Increase Conversion.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-white">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-zinc-700 focus:outline-none focus:ring  sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
