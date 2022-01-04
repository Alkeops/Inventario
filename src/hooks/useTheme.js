import { useState, useEffect} from 'react';

const themes = {
    default: {
        "--color-white": "#fff",
        "--color-black": "#222",
        "--color-primary": "#5B59B6",
        "--color-gray": "#6B6B6B",
        "--color-success": "#0C600A",
        "--color-error": "#822323",
    },
    dark:{
        "--color-bg-white": "#222",
        "--color-black": "#fff",
        "--color-primary": "#5B59B6",
        "--color-gray": "#6B6B6B",
        "--color-success": "#0C600A",
        "--color-error": "#822323",
    }
}

export const useTheme = (theme) => {
    const [_currentTheme, setCurrentTheme] = useState(theme);
    useEffect(() => {setCurrentTheme(theme)},[theme]);
    return themes[_currentTheme] || themes.default;
}