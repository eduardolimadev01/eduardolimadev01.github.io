/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./public/cv.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f15208',
            }
        },
    },
    plugins: [],
}
