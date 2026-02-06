import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { ThemeService } from './app/theme/service';

bootstrapApplication(App, {
  providers: [provideRouter(routes) ]
})

  .then(appRef => {
    const theme = appRef.injector.get(ThemeService);
    theme.initTheme();
  })
  .catch((err) => console.error(err));
