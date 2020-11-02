import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

const source = interval(500);
const example = source.pipe(bufferTime(2000));
const subscribe = example.subscribe(val =>
    console.log('Buffered with Time:', val)    
);