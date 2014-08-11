This is a simple input text field masking implemented in the PrototypeJS Framework

```javascript
$('id').mask(<string>);
//or
Element.mask('id',<string>);
```

The method "mask()" is added via Element.addMethods() so it is available for all Form elements.

The mask string takes a combination of "#","A","*" characters to define the acceptable characters and the format.

* # equals numbers 0-9
* A equals letters uppercase or lowercase
* * equals wildcard, any character

Any puctuation characters will be automatically added.

for example

```html
<input type="text" id="myzipcode" />
```

```javascript
$("myzipcode").mask("#####");
```

will setup the observer and capture all keyboard events on that input field and only allow 5 numbers 0-9 to be input.

```html
<input type="text" id="mystate" />
```

```javascript
$("mystate").mask("AA");
```
will setup the observe and capture all keyboard events on that input field and only allow 2 letters.


any other characters other than # or A will be treated as formatting - this works for US phone numbers, but lets say we have multiple phone numbers on the page

```html
<input type="text" class="phoneformat" />
<input type="text" class="phoneformat" />
<input type="text" class="phoneformat" />
```

```javascript
$$(".phoneformat").invoke("mask","###-###-####");
```

Example JSFiddle for phoneformat above
http://jsfiddle.net/KDYan/

Requires PrototypeJS 1.7.2

This is a port of 
autoMask - an adaption of anyMask from email kireol at yahoo.com