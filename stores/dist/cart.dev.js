"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCartStore = void 0;

var _pinia = require("pinia");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = function state() {
  return {
    items: [],
    shipping: 1000
  };
};

var getters = {
  count: function count() {
    var count = 0;

    if (this.items.length) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          count = count + item.amount;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return count;
  },
  isEmpty: function isEmpty(state) {
    return state.count === 0;
  },
  total: function total() {
    var totalPrice = 0;

    if (this.items.length) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          var subtot = item.amount * item.price;
          totalPrice = totalPrice + subtot;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return totalPrice + this.shipping;
    } else {
      return 0;
    }
  }
};
var actions = {
  addItem: function addItem(item) {
    var exists = false;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var cartItem = _step3.value;

        if (cartItem.id === item.id) {
          cartItem.amount = cartItem.amount + 1;
          exists = true;
          break;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    if (!exists) {
      this.items.push(_objectSpread({}, item, {
        amount: 1
      }));
    }
  },
  clearItem: function clearItem(itemName) {
    this.items = this.items.filter(function (item) {
      return item.name != itemName;
    });
  },
  increment: function increment(item) {
    if (item.amount > item.quantity - 1) {
      alert("Всего товаров: " + item.quantity + " шт. Нельзя заказать больше, чем в наличии");
    } else {
      item.amount += 1;
    }
  },
  decrement: function decrement(item) {
    if (item.amount >= 2) {
      item.amount -= 1;
    } else {
      item.amount = 1;
    }
  }
};
var useCartStore = (0, _pinia.defineStore)('useCartStore', {
  state: state,
  getters: getters,
  actions: actions
});
exports.useCartStore = useCartStore;