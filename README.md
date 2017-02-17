# jQuery HTML truncator

jQuery plugin to truncate HTML text.
## Simple Example
For example, you might see:
```hmtl
Lorem ipsum dolor sit amet, consectetur...
```
Clicking "..." shows:
```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi molestiae dolores rem.
Ratione accusantium corporis aut accusamus fugiat! At modi eum sint, reiciendis maiores
commodi tempore ipsa earum accusantium!
```

## Usage
Function get's only 1 parametr 'size'. It has a default value 'size = 100'.
```javascript
  $('.example').trunc( 100 );
```

### Size possible values:

#### Positive number 
e.g. 100 - hides all but first 100 characters.

Before:
```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi molestiae dolores rem.
Ratione accusantium corporis aut accusamus fugiat! At modi eum sint, reiciendis maiores
commodi tempore ipsa earum accusantium!
```
After:
```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum mollitia, deleniti perspiciatis! Mol...
```
#### Negative number 
e.g. -100 - hides last 100 characters.

Before:
```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sequi molestiae dolores rem.
Ratione accusantium corporis aut accusamus fugiat! At modi eum sint, reiciendis maiores
commodi tempore ipsa earum accusantium!
```
After:
```hmtl
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum mollitia, deleniti perspiciatis! 
Molestias quam nobis ducim...
```
#### 0 
Actually does nothing

#### Possible errors

If size value is bigger then actually elemnt's size funtion doesn't truncate it.
