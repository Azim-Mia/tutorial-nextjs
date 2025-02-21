/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Class_2_Navigation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
     colors: {
      'default': '#1fb6ff',
      'purple': '#7e5bef',
      'blue':'#0000ff',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'lama':'#F35C7A',
    }, 
    screens:{
        'xs':'304px',
        'sm':'704px',
        'md':'992px',
        'lg':'1024px',
       'xl':'1280px',
       '2xl':'1536px',
      },
      fontSize: {
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
    },
    borderRadius: {
    1:'10px',
    2:'20px',
    3:'50px',
    4:'100px',
    }
    },
  },
  plugins: [],
};