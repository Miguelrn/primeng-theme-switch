import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


    // switchTheme(theme: string) {
    //     let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    //     if (themeLink) {
    //         themeLink.href = 'theme-'+theme + '.css';          
    //     }
    // }



@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = false;

//   constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleDarkTheme() {
    if (this.isDark) {
        const href = 'theme-light-indigo.css';
        getLinkElementForKey('app-theme').setAttribute('href', href);
        // this.removeStyle('dark-theme'); // do nothing
        // document.body.classList.remove('dark-theme');
        this.isDark = false;
    } else {
        const href = 'theme-dark-indigo.css';
        getLinkElementForKey('app-theme').setAttribute('href', href);
        // document.body.classList.add('dark-theme');
        this.isDark = true;
    }
  }
  switchTheme(theme) {
    const href = 'theme-'+theme+'.css';
    getLinkElementForKey('app-theme').setAttribute('href', href);
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    console.log(
      existingLinkElement

    );
    
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}