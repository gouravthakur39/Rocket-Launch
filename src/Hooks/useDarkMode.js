import React, { useEffect, useState } from 'react'

function useDarkMode() {
    const [theme, setTheme ] = useState('light')
    const colorTheme = theme === 'dark' ? 'light' :'dark';
    useEffect(()=>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
    },[theme, colorTheme])

    return [colorTheme,setTheme]
}

export default useDarkMode