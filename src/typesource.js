var mustache = require('mustache')
,   fs = require('fs')
;

var typesource = {
  render: function(layout, target, data) {
    fs.readFile(layout, {encoding: 'utf8'}, function (err, template) {
      if (err) throw err;
      var output = mustache.render(template, data);
      fs.writeFile(target, output, function (err) { if (err) throw err; });
    });
  }
}

module.exports = typesource;
