/*function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 }*/
function reConstructBinaryTree(pre, vin)
{
    if(pre.length <= 0 && vin.length <= 0 ){
        return null;
    }

    var val = pre[0];
    var root = new TreeNode(val);
    var rootIndex = vin.indexOf(val);
    var vinLeft = vin.slice(0,rootIndex),
        vinRight = vin.slice(rootIndex + 1),
        preLeft = pre.slice(1,rootIndex + 1),
        preRight = pre.slice(rootIndex + 1);


    root.left = reConstructBinaryTree(preLeft,vinLeft);
    root.right = reConstructBinaryTree(preRight,vinRight);

    return root;

}