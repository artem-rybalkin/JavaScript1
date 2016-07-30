var base;
var exponent;
var result = 1;

base = prompt( 'input base' );

if ( isNaN (base) || base <= 0 ) {
	do {
 		base = prompt( 'please input positive number' );
 	 } while ( isNaN (base) || base <= 0 )
}

exponent = prompt( 'input exponent' );

if ( isNaN (exponent) || exponent <= 0 ) {
	do {
 		exponent = prompt( 'please input positive number' );
 	 } while ( isNaN (exponent) || exponent <= 0 )
}

function pow(base, exponent) {

	for (var i = 1; i <= exponent; i++) {
	 result = result * base;
	}

	return result;
}

console.log( pow(base,exponent) );
