import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultLayoutComponent } from "./components/layouts/default-layout/default-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mugivies';

  titleService = inject(Title);
  metaService = inject(Meta);
  ativatedRouter = inject(ActivatedRoute);
  router = inject(Router);



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (typeof window !== 'undefined') {
      this.setMetaTags();
    }
  }

  setMetaTags() {
    // Set title
    this.titleService.setTitle('Mugivies - Your All-in-One Music Hub');

    // Set meta tags
    this.metaService.updateTag({ name: 'description', content: 'Mugivies connects musicians and music lovers to gigs, bandmates, original music, and local music events.' });
    this.metaService.updateTag({ name: 'keywords', content: 'music hub, gigs, musicians, bandmates, original music, music events, Mugivies' });

    // Open Graph Meta Tags for social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Mugivies - Your All-in-One Music Hub' });
    this.metaService.updateTag({ property: 'og:description', content: 'Mugivies connects musicians and music lovers to gigs, bandmates, original music, and local music events.' });
    this.metaService.updateTag({ property: 'og:image', content: 'path-to-your-mugivies-image.jpg' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });

    // Twitter Card Meta Tags for social sharing
    this.metaService.updateTag({ name: 'twitter:title', content: 'Mugivies - Your All-in-One Music Hub' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Mugivies connects musicians and music lovers to gigs, bandmates, original music, and local music events.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'path-to-your-mugivies-image.jpg' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
