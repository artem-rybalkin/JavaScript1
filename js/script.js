var base = prompt( 'input base' ); //запрашиваем базовое число
var exponent = prompt( 'input exponent' ); //запрашиваем экспоненту
var result = 1;

function pow(base, exponent) {

	for (var i = 1; i <= exponent; i++) {
	 result = result * base;
	}

	return result;
}

console.log( pow(base,exponent) );
