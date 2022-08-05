//Testando Arrow Functions


const arrow = (a, b) => a + b;

console.log(arrow(8,2));

const name = (nome) => {
    let transform = nome.toLowerCase();

    return transform;
};

console.log(name('LUCAS'));