import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";

const source = of(2000, 1000);
const example = source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
const subscribe = example.subscribe(val =>
    console.log(`With concatMap: ${val}`)    
);;

const mergeMapExample = source
    .pipe(
        delay(5000),
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val => console.log(`With mergeMap: ${val}`));
