use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].updateOne(
    {'cod_aluno' : 1},
    {$set: {
        'nome': 'Rafaella Rayssa da Silva',
        'cpf': '48757587825',
        'rg': '331198575',
        'telefone_aluno': '11988248986',
        'telefone_responsavel': '11986807349',
        'email': 'rafinhasilva@gmail.com',
        'data_nascimento': '2005-12-02T12:30:12'
    }
    }
);

db['bd3-nosql-atv2'].find({'cod_aluno' : 1});