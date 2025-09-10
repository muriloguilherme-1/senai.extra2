// const nums = [10,15,20,25,30];
// const Nums2 = nums.filter(n => n >= 20);
// console.log(Nums2);

// const palavras = ["js", "html"];
// const palavrasmaiusculo = palavras.map(palavras => palavras.
//     toUpperCase()); 
// console.log (palavrasmaiusculo)


// const nomes = [
//     {id: 1, nome: "A"},
//     {id: 3, nome: "M"},
//     {id: 2, nome: "L"},
// ]
// const usuarioid3 = usuarios.find(usuario => usuario.id === 3);
// console.log (usuarioid3)

// const produtos = [
//     { nome: "X", preco: 10},
//     { nome: "Y", preco: 30},
// ];
// const produtoscaros = produtos.filter(p => p.preco > 20);

// const nomescaros = produtoscaros.map(p => p.nome);
// console.log(produtoscaros);


// const itens = [
//     {preco: 10},
//     {preco: 20},
//     {preco: 5},
    
// ];
// const precototal = itens.reduce((acumulador, item) => {
//     return acumulador + item.preco;
// }, 0)
// console.log(precototal);

// const itens = [
//     { nome: "Caneta", categoria: "papel", preco: 3 },
//     { nome: "Caderno", categoria: "papel", preco: 15 },
//     { nome: "Banana", categoria: "alimento", preco: 2 },
//   ];
//   const agrupado = itens.reduce((acc, item) =>{
//     if (!acc[item.categoria]) {
//         acc[item.categoria] = 0
//     }
//     acc [item.categoria] += item.preco;
//     return acc;

//   },{})
//   console.log(agrupado)




const itens = [
 { nome: "Caneta", categoria: "papel", preco: 1000 },
     { nome: "Caderno", categoria: "papel", preco: 500 },
        { nome: "Banana", categoria: "alimento", preco: 350 },
      ];

      const produtos= produtos.filter(produtos => produtos.preco > 500);

      const caderno = produtos.find(produto => produto.nome === "caderno");

      const nomesprodutos = produtos.map(produtos => produtos.nome);

      const totalpreco = produtos.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
      }, 0)