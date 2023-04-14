//Se crea una clase nodo con sus atributos correspondientes
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Crear el árbol de muestra
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

// Función para verificar si el valor de un nodo está dentro de un rango dado
function isInRange(node, min, max) {
  if (!node) {
    return true; 
  }
  
  if (node.value < min || node.value > max) {
    return false; 
  }
  
  return isInRange(node.left, min, node.value) && isInRange(node.right, node.value, max);
}

// Función principal para verificar si el árbol es un árbol de búsqueda binaria y saber si está dentro del ranfo 0 a 10000
function isBinarySearchTree(root) {
  return isInRange(root, 0, Math.pow(10, 4)); 
}

const result = isBinarySearchTree(root); 
console.log(result); 
