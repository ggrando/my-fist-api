//Funções principais
// Describe -> Aqui nós declaramos um bloco de teste -> tests suites (mais de um teste)
// IT OR TEST ->  Declara um único teste unitário -> chamamos de tests cases
//EXPECT -> faz asserções do resultado. Ajuda a validar se o resultado foi conforme o esperado


//nome do teste e a callback é o que o jest vai rodar

//function sum (a, b){
//  return a + b;
//}


//describe("Initial tests",() =>{
//  it ("First unit tests" ,() => {
//    const firstArgument = 7;
//    const secondArgument = 1;
//    let result = sum(firstArgument, secondArgument);
//    expect(result).toEqual(8);

//  })
//})


import AuthorController from '../authorsController';

describe("AuthorController", () => {
  test("Create Author", async () => {
    const req = {
      body: {
        name: "Jest Author",
        nationality: "Turco"
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    // Chama a função insertAuthor e espera até que ela seja resolvida
    await AuthorController.insertAuthor(req, res);

    // Verifica as expectativas após a resolução da função insertAuthor
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalled();
  });
});