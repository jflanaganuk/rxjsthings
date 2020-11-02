import { ajax } from 'rxjs/ajax';
//@ts-ignore
import { XMLHttpRequest } from 'xmlhttprequest';

const githubUsers = `https://api.github.com/users?per_page=2`;

function createXHR() {
    return new XMLHttpRequest();
}

const users = ajax({
    createXHR,
    url: githubUsers
});

const subscribe = users.subscribe(
    res => console.log(res),
    err => console.error(err)
);