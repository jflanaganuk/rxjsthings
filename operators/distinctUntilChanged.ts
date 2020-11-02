import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const source$ = from([1,1,2,2,3,3]);

source$
    .pipe(distinctUntilChanged())
    .subscribe(console.log);
