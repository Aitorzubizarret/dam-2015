function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

// Listener
self.addEventListener("message", function(e) {
    // Cogeremos el valor del mensaj    e en e.data
    //console.log(getPrimes(e.data));

    // Enviamos el resultado de vuelta en un mensaje
    self.postMessage(getPrimes(e.data));
});