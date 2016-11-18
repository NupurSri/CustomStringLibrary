(function (window) {

var tQueyObj = function(str) {
	this.arr = [str];
};

tQueyObj.prototype.split = function(separatorToken) {
  this.arr = this.arr.map(function(ele){
    return ele.split(separatorToken);
  });
  this.arr = this.arr.reduce(function(a,b){
    return a.concat(b);
  })
  return this;
};

tQueyObj.prototype.reverse = function() {
  this.arr = this.arr.map(function(ele){
    return ele.split('').reverse().join('');
  });
  return this;
};

tQueyObj.prototype.join = function(token) {
  var strTemp = this.arr.join(token);
  this.arr = [strTemp];
  return this;
};

tQueyObj.prototype.get = function() {
  return this.arr;
};

var tQuery = function(params) {
  return new tQueyObj(params);
};

window.tQuery = tQuery;
}(window));