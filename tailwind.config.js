tailwind.config = {
    theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1400px',
        },

        extend: {
            colors: {
                primiry: '#000000',
            },
            fontFamily: {
                bevnpro: ['Be Vietnam Pro', 'sans-serif'],
            },
            backgroundImage: {
                picmain: "url('assets/image/bg-main-sec1.png')",
            }
        }
    }
}