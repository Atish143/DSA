class Graph{
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(vertex){
        if(!this.adjancencyList[vertex]){
            this.adjancencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjancencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjancencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjancencyList[vertex1].addEdge(vertex2)
        this.adjancencyList[vertex2].addEdge(vertex1)
    }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")


graph.addEdge("A" , "B")
graph.addEdge("B" , "C")

