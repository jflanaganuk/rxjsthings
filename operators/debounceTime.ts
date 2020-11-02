/*
 * Must be ran in browser
 * Compile to js code and import in a script tag
 * 
 * Steps:
 * tsc debounceTime.ts
 * browserify debounceTime.js > debounceTimeBuilt.js
 * open up debounceTime.html
 */

import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

const searchBox = document.getElementById('search');

const keyup$ = fromEvent(searchBox!, 'keyup');

keyup$
    .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
    )
    .subscribe(console.log)
