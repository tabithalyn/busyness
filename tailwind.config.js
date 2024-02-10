/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      lato: ["'Lato'", "sans-serif"],
      inconsolata: ["'Inconsolata'", "monospace"],
      averia: ["'Averia Libre'", "cursive"],
      caprasimo: ["'Caprasimo'", "cursive"]
    },
    layout: {
      section: "flex md:flex-row flex-col sm:py-16 py-16",
      sectionReverse: "flex md:flex-row flex-col-reverse sm:py-16 py-16",
      sectionImgReverse: "flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative",
      sectionInfo: "flex-1 justify-center items-start flex-col"
    },
    styles: {
      boxWidth: "xl:max-w-[1280px] w-full",
      flexCenter: "flex justify-center items-center",
      flexStart: "flex justify-center items-start",
      marginX: "sm:mx-16 mx-6",
      marginY: "sm:my-16 my-6",
      padding: "sm:px-16 px-6 sm:py-12 py-4",
      paddingX: "sm:px-16 px-6",
      paddingY: "sm:py-16 py-6"
    },
    extend: {},
  },
  plugins: [],
}

