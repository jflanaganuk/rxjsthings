import { from } from "rxjs";
import { filter } from "rxjs/operators";

const source = from([1,2,3,4,5]);

const example = source.pipe(filter(num => num % 2 === 0));

const subscribe = example.subscribe(val => console.log(`Even Number: ${val}`));
