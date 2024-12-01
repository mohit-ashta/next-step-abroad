import React from "react";

export const Card = ({ title, description, icon }) => (
  <div class="px-4 p-2 bg-white shadow-xl hover:shadow-lightGreen hover:shadow-lg transition-all duration-[900ms] ease-in-out">
    <div class="flex flex-col h-full">
      <div class="pb-4">
        <div class="rounded-2xl w-14 h-14 flex items-center justify-center bg-green ml-4">
          {icon}
        </div>
      </div>
      <div class="relative pl-4 pb-12 border-l border-dashed border-gray-100 flex-1">
        <div class="absolute top-0 -left-px bg-green w-0.5 h-6"></div>
        <h2 class="text-2xl font-bold font-heading mb-4 ">{title}</h2>
        <p class=" ">{description}</p>
      </div>
    </div>
  </div>
);
