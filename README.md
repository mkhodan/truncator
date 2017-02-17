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

If size value is bigger then actually elemnt's size function doesn't truncate it.

## Authors
* __Mykola Khodan__ - Initial work - [mkhodan](https://github.com/mkhodan)

## License
This project is licensed under the MIT License:
>  Copyright (c) 2017 Mykola Khodan
>
>  Permission is hereby granted, free of charge, to any person obtaining a copy
>  of this software and associated documentation files (the "Software"), to deal
>  in the Software without restriction, including without limitation the rights
>  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>  copies of the Software, and to permit persons to whom the Software is
>  furnished to do so, subject to the following conditions:
>
>  The above copyright notice and this permission notice shall be included in
>  all copies or substantial portions of the Software.
>
>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>  THE SOFTWARE.
