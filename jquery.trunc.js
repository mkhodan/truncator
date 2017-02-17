$.fn.trunc = function(size = 100) {
    if(typeof(size) === 'number'){
	    this.each((i, el) => {
	        var value = el.innerHTML;
	        if (value.length > Math.abs(size) && size !== 0) {
	            if (size > 0) {
	                var valueTruncated = value.substring(0, size);
	            } else {
	                var valueTruncated = value.substring(0, value.length + size);
	            }
	            var span = document.createElement('span');
	            span.innerHTML = '&hellip;';
	            span.style.cursor = 'pointer';
	            el.innerHTML = valueTruncated;
	            span.addEventListener('click', () => {
	                el.innerHTML = value;
	            });
	            el.appendChild(span);
	        }
	    });
	}
	    return this;
}
