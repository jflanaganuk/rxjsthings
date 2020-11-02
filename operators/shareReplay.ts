import { Subject } from "rxjs";
import { pluck, share, shareReplay, tap } from "rxjs/operators";

const routeEnd = new Subject<{data: any, url: string}>();

const lastUrl = routeEnd.pipe(
    tap(_ => console.log('executed')),
    pluck('url'),
    shareReplay()
);

const initialSubscriber = lastUrl.subscribe(console.log);

routeEnd.next({data: {}, url: 'my-path'});

const lateSubscriber = lastUrl.subscribe(console.log);
