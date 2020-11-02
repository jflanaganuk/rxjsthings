import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const source = of(1,2,3);

const example = source.pipe(startWith(0));

const subscribe = example.subscribe(val => console.log(val));
