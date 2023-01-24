function calc(val) {
    const self = Object.create(calc.prototype);
    self.val = val;
    return self;
  }
  calc.prototype = {
    plus(val) {
      this.val += val;
      return this;
    },
    minus(val) {
      this.val -= val;
      return this;
    },
    valueOf() {
      return this.val;
    },
  };
  
  +calc(1).plus(6).minus(30).divide(2).multiply(3); 
  calc(3).plus(6).minus(30) * 3; 
  99 + calc(1); 