import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { },
    resolvedTheme: 'light',
})

export function ThemeProvider({ children, defaultTheme = 'light' }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || defaultTheme
        }
        return defaultTheme
    })

    useEffect(() => {
        const root = document.documentElement

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            root.classList.toggle('dark', systemTheme === 'dark')
        } else {
            root.classList.toggle('dark', theme === 'dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    const resolvedTheme =
        theme === 'system'
            ? typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : theme

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
