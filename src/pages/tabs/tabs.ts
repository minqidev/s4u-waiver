import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
<<<<<<< HEAD

=======
  tab4Root = ContactPage;
>>>>>>> 31de3156d6bf04aa0e35a8b3ec6a88ae92809c2d
  constructor() {

  }
}
