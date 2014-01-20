(function(){
  var template = document.querySelector('#row-template').innerHTML;

  var html = sampleArray.map(function(title){
    var classname = title.replace(/ /g, '-').toLowerCase();
    return template.replace('##class##', classname).replace('##title##', title);
  }).join('\n');

  document.querySelector('#samples').innerHTML = html;
})()
