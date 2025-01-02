/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html, js}'],
  theme: {
    extend: {
      colors:{
        bgMe:{
          "nav": "#1436b2",
          "nav2": "#1177ad",
          "nav3": "#191b2b",
          "orng": "#0ed8a5",
          'prgs': "#e9ecef3f",
          'awhite': "#dfdfdf",
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': '4rem',
      },
      fontWeight: {
        'h1': 'bold',
      },
      lineHeight: {
        'h1': '1.25',
      },
      keyframes: {
        rotateIcon: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateIcon: 'rotateIcon 900ms linear',
      },
      width: {
        '200px':'200px',
        '260px':'260px',
        '280px':'280px',
        '100px':'100px',
        '120px':'120px',
        '400px':'400px',
        '500px':'500px',
        '550px':'550px',
        '600px':'600px',
        '700px':'700px',
        '70%':'70%',
        '81%':'81%',
        '85%':'85%',
        '88%':'88%',
        "90%":'90%',
        "95%":'95%',
        "100%":'100%',
      },
      margin:{
        '-10px':'10px',
        '-5px':'4px',
        '-30px':'30px',
        '-40px':'40px',
        '-50px':'50px',
        '-60px':'60px',
        '-100px':'-100px',
        '-200px':'-200px',
        '-300px':'-300px',
        '-400px':'-400px',
        '-500px':'-500px',
        '-600px':'-600px',
      }
    },
  },
  plugins: [],
}

