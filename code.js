function iniciarProcessoBolo() {
    console.log("Inicie o processo de fazer o bolo de cenoura com cobertura de chocolate.");
    
    // 1. Adquirir ingredientes e organizar
    adquirirIngredientes();
    organizarIngredientes();

    // 2. Preparar a massa do bolo
    prepararMassa();
    
    // 3. Fazer a cobertura em paralelo
    prepararCobertura();

    // 4. Finalizar e servir
    finalizarBolo();
}

// Subprocesso: Adquirir e organizar ingredientes
function adquirirIngredientes() {
    console.log("Adquira todos os ingredientes necessários.");
    consultarReceita();
    organizarPorOrdemDeUso();
    descascarLegumes();
    console.log("Ingredientes prontos.");
}

function consultarReceita() {
    console.log("Consulte a receita para ver a lista de ingredientes e instruções.");
}

function organizarPorOrdemDeUso() {
    console.log("Organize os ingredientes na ordem de uso.");
}

function descascarLegumes() {
    console.log("Descasque as cenouras.");
}

// Escolha do modo de preparo: Liquidificador ou batedeira
function prepararMassa() {
    console.log("Escolha o modo de preparo da massa.");
    const modo = prompt("Escolha o modo de preparo (liquidificador/batedeira):");

    if (modo === "liquidificador") {
        console.log("Pegue o liquidificador.");
        baterIngredientesLiquidificador();
    } else if (modo === "batedeira") {
        console.log("Pegue a batedeira.");
        baterIngredientesBatedeira();
    } else {
        console.log("Modo inválido. Preparando no liquidificador por padrão.");
        baterIngredientesLiquidificador();
    }

    // Mistura em paralelo com pegar a forma
    misturarRestantesIngredientes();
    pegarForma();
    colocarMassaNaForma();

    // Assar o bolo
    preAquecerForno();
    assarBolo();
}

function baterIngredientesLiquidificador() {
    console.log("Coloque os ingredientes (exceto farinha e fermento) no liquidificador.");
    console.log("Ligue o liquidificador e bata por 5 minutos.");
}

function baterIngredientesBatedeira() {
    console.log("Coloque os ingredientes (exceto farinha e fermento) na batedeira.");
    console.log("Ligue a batedeira e bata por 7 minutos.");
}

function misturarRestantesIngredientes() {
    console.log("Coloque a farinha e o fermento com a massa em uma vasilha.");
    console.log("Misture por 8 minutos em uma única direção.");
    while (!massaHomogenea()) {
        console.log("A massa ainda não está homogênea. Misture por mais 5 minutos.");
    }
}

function massaHomogenea() {
    // Pergunta ao usuário se a massa está homogênea
    const resposta = prompt("A massa está homogênea? (sim/não):").toLowerCase();
    return resposta === "sim";
}

function pegarForma() {
    console.log("Pegue a forma do bolo.");
}

function colocarMassaNaForma() {
    console.log("Despeje a massa na forma.");
}

function preAquecerForno() {
    console.log("Pré-aqueça o forno a 180°C por 5 minutos.");
}

function assarBolo() {
    console.log("Coloque a forma no forno e asse o bolo por 30 minutos.");
    while (!boloPronto()) {
        console.log("O bolo ainda não está pronto. Asse por mais 5 minutos.");
    }
}

function boloPronto() {
    // Pergunta ao usuário se o bolo está pronto
    const resposta = prompt("O bolo está pronto? (sim/não):").toLowerCase();
    return resposta === "sim";
}

// Preparar a cobertura em paralelo
function prepararCobertura() {
    console.log("Inicie a preparação da cobertura de chocolate.");
    consultarReceita();
    organizarPorOrdemDeUso();

    // Colocar ingredientes da cobertura no canecão
    console.log("Coloque os ingredientes no canecão e ligue o fogo em fogo baixo.");
    console.log("Mexa a cobertura por 10 minutos.");
    while (!coberturaNoPonto()) {
        console.log("A cobertura ainda não está no ponto. Mexa por mais 4 minutos em fogo baixo.");
    }

    // Condicional para adicionar morangos
    const desejaMorangos = confirm("Deseja adicionar morangos à cobertura?");
    if (desejaMorangos) {
        adicionarMorangos();
    }

    console.log("Coloque a cobertura pronta sobre o bolo.");
}

function coberturaNoPonto() {
    // Pergunta ao usuário se a cobertura está no ponto
    const resposta = prompt("A cobertura está desgrudando da panela? (sim/não):").toLowerCase();
    return resposta === "sim";
}

function adicionarMorangos() {
    console.log("Reúna os morangos e lave-os bem.");
    console.log("Corte os morangos em pedaços.");
    console.log("Adicione os morangos à cobertura e misture bem.");
}

// Finalizar e servir
function finalizarBolo() {
    console.log("Aguarde o bolo esfriar por 10 minutos.");
    console.log("Desenforme o bolo.");
    console.log("Corte e sirva o bolo.");
}

// Iniciar o processo de fazer o bolo
iniciarProcessoBolo();
