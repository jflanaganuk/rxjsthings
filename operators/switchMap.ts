/*
 * Must be ran in browser
 * Compile to js code and import in a script tag
 * 
 * Steps:
 * tsc debounceTime.ts
 * browserify debounceTime.js > debounceTimeBuilt.js
 * open up debounceTime.html
 */

import { fromEvent, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

fromEvent(document, 'click')
    .pipe(
        switchMap(() => interval(1000))
    )
    .subscribe(console.log);
