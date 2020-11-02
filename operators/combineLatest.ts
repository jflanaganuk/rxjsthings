import { timer, combineLatest } from 'rxjs';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

combineLatest([timerOne$, timerTwo$, timerThree$]).subscribe(
    ([timerValOne, timerValTwo, timerValThree]) => {
        console.log(
            `Timer One Latest: ${timerValOne}`,
            `Timer Two Latest: ${timerValTwo}`,
            `Timer Three Latest: ${timerValThree}`,
        );
    }
);
