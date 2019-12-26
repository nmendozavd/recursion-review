// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {

  // create nodes array that we will push classNames 
  var nodes = [];
  // set start node that we provide, or the document.body 
  node = node || document.body;

  // some classes have mutiple names, we split them on the space 
  var parts = node.className.split(' ');
  // check if the className exists
  if (parts.indexOf(className) >= 0) {
    // if matched/exisits, save node 
    nodes.push(node);
  }
    
  // iterate over children 
  for (var i = 0; i < node.children.length; i++) {
    // for each child, invoke getElementsByClassName (recursion)
    var childResults = getElementsByClassName(className, node.children[i]);
    // concat children to nodes array
    nodes = nodes.concat(childResults);
  }      

  return nodes;

};