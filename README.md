# angular-loading-interceptor

Add a $ionicLoading on HTTP requests automatically

## Installation

```sh
bower install --save azzra/angular-loading-interceptor
```

```js
angular.module('app', ['angular-loading-interceptor'])
```

## Documentation

### Disable the loading overlay

If you want to disable the automatic overlay, you need to add `hideLoading: true` in the resource [config](https://docs.angularjs.org/api/ng/service/$http#usage).

```js
return $resource(URL,
    {},
    {
        'whatwhat': { method: 'GET', hideLoading: true, ... }
    }
);
```

