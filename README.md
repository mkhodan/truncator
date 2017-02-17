# jQuery HTML truncator

jQuery plugin to truncate HTML text.

For example, you might see

```hmtl
Lorem ipsum dolor sit amet, consectetur...
```
Clicking "..." shows

```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi molestiae dolores rem.
Ratione accusantium corporis aut accusamus fugiat! At modi eum sint, reiciendis maiores
commodi tempore ipsa earum accusantium!
```
## Usage
```javascript
  $('.example').trunc( 100 );
```
Function get's only 1 parametr 'size'. It has a default value 'size = 100'.

### Size possible values:

#### Positive number 
e.g. 100 - hides all but first 100 characters.
Before:

After:

#### Negative number 
e.g. -100 - hides last 100 characters.

#### 0 - actually does nothing.
```javascript
  $('.example').trunc( 100 );
```
