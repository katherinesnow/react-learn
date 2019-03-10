export const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    }
}

export default ThemeContext = React.createContext(
    themes.dark // 默认值
)