
/*
* Attribute function
*/

HTMLElement.prototype.attr = function (attrb, val) {
  if (val === undefined) {
    return this.getAttribute(attrb)
  } else {
    this.setAttribute(attrb, val)
    return this
  }
}

NodeList.prototype.attr = function (attrb, val) {
  this.forEach(function ($el) {
    $el.classList.add(clss) // check for attrb at las of the las element
  })
}

/*
* Add class function
*/

HTMLElement.prototype.addClass = function (clss) {
  this.classList.add(clss)
}

NodeList.prototype.addClass = function (clss) {
  this.forEach (function ($el) {
    $el.classList.add(clss)
  })
}

/*
* Remove class function
*/

HTMLElement.prototype.removeClass = function (clss) {
  this.classList.remove(clss)
}

NodeList.prototype.removeClass = function (clss) {
  this.forEach (function ($el) {
    $el.classList.remove(clss)
  })
}

/*
* Find function
*/

NodeList.prototype.find = function (str) {
  return this.querySelectorAll(str)
}

HTMLElement.prototype.find = function (str) {
  return this.querySelectorAll(str)
}

/*
* event attachments
*/

NodeList.prototype.on = function ($ev, callback) {
  this.forEach (function ($el) {
    $el.addEventListener($ev, function (e) {
      e.$this = e.currentTarget
      e.$prev = e.preventDefault
      callback(e)
    })
  })
};

HTMLElement.prototype.on = function ($ev, callback) {
  this.addEventListener($ev, function (e) {
    e.$this = e.currentTarget
    e.$prev = e.preventDefault
    callback(e)
  })
};

/*
* Selector
*/

window.$ = function (str) {
  var $reqDOM = document.querySelectorAll(str)

  return $reqDOM.length > 1
    ? $reqDOM
    : $reqDOM[0]
}
