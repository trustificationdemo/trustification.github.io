import React, { useState } from "react";
import { Container } from "../Container";

export const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-xl mx-auto overflow-hidden lg:mb-20 rounded-1xl text-center">
        <div className="relative bg-primary-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-slate-50 to-slate-100 pt-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BqpWvESLW78"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};
