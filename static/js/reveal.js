function Reveal(selector, options = {}) {
  this.elements = Array.prototype.map.call(
    document.querySelectorAll(selector),
    function (element) {
      return element;
    }
  );
  this.options = options
  this._observerCb = this._observerCb.bind(this)
  this.observer = new IntersectionObserver(this._observerCb, {
    threshold: this.options.threshold,
  });
}

Reveal.prototype.init = function init() {
  const observer = this.observer
  this.elements.forEach(function (element) {
    observer.observe(element)
  })
}

Reveal.prototype._observerCb = function _observerCb(entries, observer) {
  const options = this.options
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add(options.intersected)
      observer.unobserve(entry.target)
    }
  })
}
