var createCounter = function(init) {
    operations = {
        value: init,
        increment: function() {
            this.value += 1
            return this.value
        },
        decrement: function() {
            this.value -= 1
            return this.value
        },
        reset: function() {
            this.value = init
            return this.value
        }
    }
    return operations
};

/*Test code*/
const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
