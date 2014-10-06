# propfinder

A micro library to find a property on an object. It was specifically
written to solve this problem:

```javascript
if (foo && foo.bar && foo.bar.baz === 'something') {}
```

You cannot just write the following because you might have a
ReferenceError thrown.

```javascript
if (foo.bar.baz === 'something') {}
```

But with propfinder you can do:

```javascript
if (propfinder('bar.baz', foo) === 'something') {}
```


If the property does not exist, propfinder will return `undefined`.


It is curryable, so you can do stuff like this:

```javascript

var someJsonStructure = {
    meta: {
        id: 123
    },
    ...
};

var someOtherJsonStructure = {
    error: "Not found"
}

var getId = propfinder('meta.id');

var id = getId(someJsonStructure); // => 123

var id2 = getId(someOtherJsonStructure); // => undefined

```

It should work in all ES3 browsers and in node.
