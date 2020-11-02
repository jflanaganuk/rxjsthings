import { interval } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

const source = interval(5000);
const secondSource = interval(1000);
const example = source.pipe(
    withLatestFrom(secondSource),
    map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
    })
);

const subscribe = example.subscribe(console.log);
