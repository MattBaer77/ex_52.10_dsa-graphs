class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {

    this.nodes.add(vertex)

  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {

    vertexArray.forEach(vertex => this.nodes.add(vertex))

  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {

    v1.adjacent.add(v2)
    v2.adjacent.add(v1)

  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {

    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)

  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {

    this.nodes.forEach(v => v.adjacent.delete(vertex))
    this.nodes.delete(vertex)

  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {

    const toVisit = [start];
    const result = [];
    const visited = [start.value];

    while(toVisit.length){

      let currNode = toVisit.pop();
      result.push(currNode.value)

      for(let adjacent of currNode.adjacent){

        if(!visited.includes(adjacent.value)){

          visited.push(adjacent.value)
          toVisit.push(adjacent)

        }

      }

    }

    return result

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {

    const toVisit = [start];
    const visited = [start.value];

    while(toVisit.length){

      let currNode = toVisit.shift();

      for(let adjacent of currNode.adjacent){

        if(!visited.includes(adjacent.value)){

          toVisit.push(adjacent)
          visited.push(adjacent.value)

        }

      }

    }

    return visited

  }
}

module.exports = {Graph, Node}