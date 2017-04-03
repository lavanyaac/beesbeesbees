var Bee = function() {
	Grub.call(this);
  this.age = 5;
  this.color = 'yellow';

  // Grub.apply(this, [5, 'yellow']);

  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;

