// tryor.js
// MIT licensed, see LICENSE file
// Copyright (c) 2013 Olov Lassus <olov.lassus@gmail.com>

module.exports = function(fn, v) {
    "use strict";

    try {
        return fn();
    } catch (e) {
        return v;
    }
};
