import { Component } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timeout :any;
  loader = true;
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loader = true;
    }
    if (event instanceof NavigationEnd) {
      // Hide loading indicator
      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout);
        this.loader = false;
      }, 3000);
    }
    if (event instanceof NavigationCancel) {
      this.loader = false;
    }
    if (event instanceof NavigationError) {
       console.log(event);
      this.loader = false;
    }

  }
}
