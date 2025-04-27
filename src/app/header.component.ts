import { Component } from "@angular/core";

@Component({
    selector: 'app-header', //descripes what HTML-elements should be replaced by this component (at least 'two-words' to avoid overwrite 'build-in-elements' e.g. 'header')
    standalone: true, // 'true' is default in angular 19 and higher. in lower versions 'false' is default ('module-based' component)
    templateUrl: './header.component.html' // relative path to find the used html content
    // template: '<h1>My Headline</h1> =>> alternative (in-line-approach) for very small html-code
})

export class HeaderComponent {} // makes the component useable in other components as class