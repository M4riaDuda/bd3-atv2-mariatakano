// a. PROCURA PELO PRODUTO MAIS CARO
use('bd3_atv3');
db['bd3_atv3_produtos'].find().sort({valor: -1}).limit(1);

// b. PROCURA PELO PRODUTO MAIS BARATO
use('bd3_atv3');
db['bd3_atv3_produtos'].find().sort({valor: 1}).limit(1);

// c. PRODUTOS EM UMA FAIXA DE VALOR
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
    valor : {$gte: 10, $lte: 15}
});

// d. PRODUTOS DE UMA DETERMINADA CATEGORIA
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
    categoria : {$eq: 'Cozinha'}
});

// e. PRODUTOS DE DUAS CATEGORIAS
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
        categoria : {$in: ['Papelaria', 'Chaveiros']}
});

// f. EXCLUI DUAS CATEGORIAS
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
    categoria : {$nin: ['Moda', 'Decoração']}
});

// g. PRODUTOS ORDENADOS DOS MAIS BARATOS AOS MAIS CAROS
use('bd3_atv3');
db['bd3_atv3_produtos'].find().sort({valor: 1});

// h. PRODUTOS ORDENADOS DOS MAIS CAROS AOS MAIS BARATOS
use('bd3_atv3');
db['bd3_atv3_produtos'].find().sort({valor: -1});

// i. PRODUTOS ORDENADOS DOS MAIS BARATOS AOS MAIS CAROS DE UMA CATEGORIA
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
    categoria : 'Papelaria'
}).sort({valor: 1});

// j. PRODUTOS ORDENADOS DOS MAIS CAROS AOS MAIS BARATOS EXCLUINDO UMA CATEGORIA
use('bd3_atv3');
db['bd3_atv3_produtos'].find({
    categoria : {$nin: ['Chaveiros']}
}).sort({valor: 1});