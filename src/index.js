#!/usr/bin/env node

var typesource = require('./typesource');

var view = {
  title: "TypeSource",
  samples: [
    'League Gothic and Gentium',
    'Chunkfive and Fanwood-text',
    'Goudy Bookletter 1911'
  ],
  sampleArray: function(){
    return JSON.stringify(view.samples);
  }
};

typesource.render('src/layout.mustache', 'index.html', view);
