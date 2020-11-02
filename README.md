# Rxjs Things

To setup:

```
npm i
```

To run an example operator:

1. install ts-node

```
npm i -g ts-node
```

2. run with ts-node

```
ts-node operators/ajax.ts
```

To run an example game or operator that requires a browser window:

1. compile with typescript

```
tsc debounceTime.ts
```

2. browserify the output

(install browserify if required)

```
npm i -g browserify
browserify debounceTime.js > debounceTimeBuilt.js
```

3. open the html file in your browser and view the console!
