import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    private readonly storageKey = 'theme';

    initTheme() {
        const saved = localStorage.getItem(this.storageKey) ?? 'light';
        this.applyTheme(saved as 'light' | 'dark');
    }

    toggleTheme() {
        const next = this.getTheme() === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
    }

    getTheme(): 'light' | 'dark' {
        return (localStorage.getItem(this.storageKey) as 'light' | 'dark') ?? 'light';
    }

    private applyTheme(theme: 'light' | 'dark') {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }

        localStorage.setItem(this.storageKey, theme);
    }
}
