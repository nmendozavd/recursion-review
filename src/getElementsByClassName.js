// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
    
    // create empty array to push nodes
    var nodes = [];
    

    var searchNodes = function(node){
        // compare nodes classname with classname
            // if matched, save node
        
        // iterate over children
            // for each child, invoke getElementsByClassName 
    // start with top of document
    searchNodes(document.body);

    return nodes;
};
