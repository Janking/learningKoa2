function Foo() {
  this.name = 123123
}

Foo.prototype.init = 3333333
Foo.prototype.inspect = () => ({ a: 1, b: 2 })
module.exports = Foo
