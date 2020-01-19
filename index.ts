var Graph = require("graph-data-structure");

class NodeGraph {
    
    array: any;
    root: string[] = [];
    leaf: string[] = [];
    rela: any[] = [];
    graph: any;

    init(){

        console.log("Initializing Nodes and Edges");


        //Using graph data structure library we add nodes and edges
        this.graph = Graph();

        this.graph.addNode("A");
        this.graph.addNode("B");
        this.graph.addNode("C");
        this.graph.addNode("D");
        this.graph.addNode("E");
        this.graph.addNode("F");
    
        this.graph.addEdge("A", "B");
        this.graph.addEdge("B", "C");
        this.graph.addEdge("B", "D");
        this.graph.addEdge("C", "A");
        this.graph.addEdge("C", "B");
        this.graph.addEdge("C", "E");
        this.graph.addEdge("E", "D");
        this.graph.addEdge("F", "E");     

        console.log("Serializing Graph..", this.graph.serialize());
    }

    calculation(){
        console.log("Setting the root, leaf and rela nodes.");
        
        this.graph.nodes().forEach((node: string) => {

            //Checking for the root nodes that have no outgoing connections to other nodes and adding to the array.
            if (this.graph.outdegree(node) === 0) {
                
                this.root.push(node);
            }

            //Checking for the leaf nodes that have ingoing connections to other nodes and adding to the array.
            if (this.graph.indegree(node) === 0) {
                this.leaf.push(node);
            }

            //Adding reachable nodes for each node.
            this.rela.push({ node : node, value: this.graph.depthFirstSearch([node])});

        });

        this.array = { root: this.root, leaf: this.leaf, rela: this.rela };
    }


    result() {
        //Displaying the results.
        console.log("Results:");

        console.log("Root Nodes:", this.array.root);    

        console.log("Leaf Nodes:", this.array.leaf);

        console.log("Rela Nodes:", this.array.rela);
    }
    
}

//Initializing the class and calling its methods.
let nodeGraph = new NodeGraph();

nodeGraph.init();
nodeGraph.calculation();
nodeGraph.result();
