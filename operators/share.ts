import { timer } from "rxjs";
import { mapTo, share, tap } from "rxjs/operators";

const source = timer(1000);

const example = source.pipe(
    tap(() => console.log('***SIDE EFFECT***')),
    mapTo('***RESULT***')
);

const subscribe = example.subscribe(val => console.log(val))
const subscribeTwo = example.subscribe(val => console.log(val))

const sharedExample = example.pipe(share());

const subscribeThree = sharedExample.subscribe(val => console.log(val));
const subscribeFour = sharedExample.subscribe(val => console.log(val));
