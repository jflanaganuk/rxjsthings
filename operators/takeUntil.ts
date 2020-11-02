import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

const source = interval(1000);

const timer$ = timer(5000);

const example = source.pipe(takeUntil(timer$));

const subscribe = example.subscribe(console.log);
