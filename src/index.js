#!/usr/bin/env node

var typesource = require('./typesource');

var view = {
  title: "TypeSource",
  samples: ['League Gothic and Gentium', 'Chunkfive and Fanwood-text'],
  sampleArray: function(){
    return JSON.stringify(view.samples);
  }
};

typesource.render('src/layout.mustache', 'index.html', view);
