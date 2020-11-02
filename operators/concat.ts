import { concat, EMPTY } from "rxjs";
import { delay, startWith } from "rxjs/operators";

const delayedMessage = (message: string | number, delayedTime: number = 1000) => {
    return EMPTY.pipe(startWith(message), delay(delayedTime));
};

concat(
    delayedMessage('Get Ready!'),
    delayedMessage(3),
    delayedMessage(2),
    delayedMessage(1),
    delayedMessage('Go!'),
    delayedMessage('', 2000),
).subscribe(message => process.stdout.write('\r\x1b[K' + message))
