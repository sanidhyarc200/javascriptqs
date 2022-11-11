let result = [];

function getElementById(Idname){
    function getChildren(node){
        Object.keys(node.children).forEach((child) => {
            let childNode = node.children[child];
            let attr = childNode.getAttribute('id');
            if (attr === Idname){
                result.push(childNode);
            }
            getChildren(childNode);
        });
        return;

    };

    const nodes = document.body;
    // console.log(nodes);
    getChildren(nodes);
}

getElementById('a-3');
console.log(result);