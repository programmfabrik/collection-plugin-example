// Generated by CoffeeScript 1.12.7
var NCAGFilepicker,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

NCAGFilepicker = (function(superClass) {
  extend(NCAGFilepicker, superClass);

  function NCAGFilepicker() {
    return NCAGFilepicker.__super__.constructor.apply(this, arguments);
  }

  NCAGFilepicker.prototype.readOpts = function() {
    return NCAGFilepicker.__super__.readOpts.call(this);
  };

  NCAGFilepicker.prototype.type = function() {};

  'ncag';

  return NCAGFilepicker;

})(Filepicker);

ez5.session_ready(function() {
  return NCAGFilepicker.session_ready('ncag');
});
