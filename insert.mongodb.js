// Insert de 50 alunos no banco
use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].insertMany(
    [
        {
            "cod_aluno": 1,
            "nome": "Carlos Silva",
            "cpf": "12345678901",
            "rg": "123456789",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "carlos.silva@gmail.com",
            "data_nascimento": "2000-01-01T00:00:00"
        },
        {
            "cod_aluno": 2,
            "nome": "Ana Oliveira",
            "cpf": "23456789012",
            "rg": "234567890",
            "telefone_aluno": "11976543210",
            "telefone_responsavel": "11923456789",
            "email": "ana.oliveira@yahoo.com",
            "data_nascimento": "1999-05-15T00:00:00"
        },
        {
            "cod_aluno": 3,
            "nome": "Pedro Costa",
            "cpf": "34567890123",
            "rg": "345678901",
            "telefone_aluno": "11965432109",
            "telefone_responsavel": "11934567890",
            "email": "pedro.costa@hotmail.com",
            "data_nascimento": "2001-12-30T00:00:00"
        },
        {
            "cod_aluno": 4,
            "nome": "Maria Santos",
            "cpf": "45678901234",
            "rg": "456789012",
            "telefone_aluno": "11954321098",
            "telefone_responsavel": "11945678901",
            "email": "maria.santos@gmail.com",
            "data_nascimento": "1998-08-22T00:00:00"
        },
        {
            "cod_aluno": 5,
            "nome": "João Almeida",
            "cpf": "56789012345",
            "rg": "567890123",
            "telefone_aluno": "11943210987",
            "telefone_responsavel": "11956789012",
            "email": "joao.almeida@gmail.com",
            "data_nascimento": "2002-07-10T00:00:00"
        },
        {
            "cod_aluno": 6,
            "nome": "Beatriz Rocha",
            "cpf": "67890123456",
            "rg": "678901234",
            "telefone_aluno": "11932109876",
            "telefone_responsavel": "11967890123",
            "email": "beatriz.rocha@yahoo.com",
            "data_nascimento": "1997-03-12T00:00:00"
        },
        {
            "cod_aluno": 7,
            "nome": "Lucas Pereira",
            "cpf": "78901234567",
            "rg": "789012345",
            "telefone_aluno": "11921098765",
            "telefone_responsavel": "11978901234",
            "email": "lucas.pereira@gmail.com",
            "data_nascimento": "2003-11-18T00:00:00"
        },
        {
            "cod_aluno": 8,
            "nome": "Fernanda Lima",
            "cpf": "89012345678",
            "rg": "890123456",
            "telefone_aluno": "11910987654",
            "telefone_responsavel": "11989012345",
            "email": "fernanda.lima@hotmail.com",
            "data_nascimento": "1996-04-04T00:00:00"
        },
        {
            "cod_aluno": 9,
            "nome": "Rafael Souza",
            "cpf": "90123456789",
            "rg": "901234567",
            "telefone_aluno": "11909876543",
            "telefone_responsavel": "11990123456",
            "email": "rafael.souza@gmail.com",
            "data_nascimento": "2004-09-25T00:00:00"
        },
        {
            "cod_aluno": 10,
            "nome": "Juliana Carvalho",
            "cpf": "01234567890",
            "rg": "012345678",
            "telefone_aluno": "11908765432",
            "telefone_responsavel": "11901234567",
            "email": "juliana.carvalho@yahoo.com",
            "data_nascimento": "1995-12-10T00:00:00"
        },
        {
            "cod_aluno": 11,
            "nome": "Gabriel Almeida",
            "cpf": "11223344556",
            "rg": "223344556",
            "telefone_aluno": "11907654321",
            "telefone_responsavel": "11922334455",
            "email": "gabriel.almeida@gmail.com",
            "data_nascimento": "1993-06-14T00:00:00"
        },
        {
            "cod_aluno": 12,
            "nome": "Camila Ribeiro",
            "cpf": "99887766554",
            "rg": "998877665",
            "telefone_aluno": "11906543210",
            "telefone_responsavel": "11955443322",
            "email": "camila.ribeiro@hotmail.com",
            "data_nascimento": "2001-01-29T00:00:00"
        },
        {
            "cod_aluno": 13,
            "nome": "Renato Freitas",
            "cpf": "33445566778",
            "rg": "334455667",
            "telefone_aluno": "11905432109",
            "telefone_responsavel": "11966778899",
            "email": "renato.freitas@outlook.com",
            "data_nascimento": "1994-09-03T00:00:00"
        },
        {
            "cod_aluno": 14,
            "nome": "Larissa Martins",
            "cpf": "22334455667",
            "rg": "223344556",
            "telefone_aluno": "11904321098",
            "telefone_responsavel": "11977889966",
            "email": "larissa.martins@gmail.com",
            "data_nascimento": "1998-07-22T00:00:00"
        },
        {
            "cod_aluno": 15,
            "nome": "Vinícius Barbosa",
            "cpf": "55667788991",
            "rg": "556677889",
            "telefone_aluno": "11903210987",
            "telefone_responsavel": "11999887766",
            "email": "vinicius.barbosa@yahoo.com",
            "data_nascimento": "2002-03-17T00:00:00"
        },
        {
            "cod_aluno": 16,
            "nome": "Mariana Andrade",
            "cpf": "98765432122",
            "rg": "987654321",
            "telefone_aluno": "11902198765",
            "telefone_responsavel": "11976543212",
            "email": "mariana.andrade@gmail.com",
            "data_nascimento": "1996-08-31T00:00:00"
        },
        {
            "cod_aluno": 17,
            "nome": "Eduardo Gomes",
            "cpf": "87654321011",
            "rg": "876543210",
            "telefone_aluno": "11903219876",
            "telefone_responsavel": "11965432109",
            "email": "eduardo.gomes@outlook.com",
            "data_nascimento": "1997-04-22T00:00:00"
        },
        {
            "cod_aluno": 18,
            "nome": "Sofia Moura",
            "cpf": "76543210988",
            "rg": "765432109",
            "telefone_aluno": "11904321087",
            "telefone_responsavel": "11954321098",
            "email": "sofia.moura@gmail.com",
            "data_nascimento": "2000-02-13T00:00:00"
        },
        {
            "cod_aluno": 19,
            "nome": "Ricardo Lima",
            "cpf": "65432109877",
            "rg": "654321098",
            "telefone_aluno": "11905432176",
            "telefone_responsavel": "11943210987",
            "email": "ricardo.lima@yahoo.com",
            "data_nascimento": "1995-07-19T00:00:00"
        },
        {
            "cod_aluno": 20,
            "nome": "Isabela Freitas",
            "cpf": "54321098766",
            "rg": "543210987",
            "telefone_aluno": "11906543265",
            "telefone_responsavel": "11932109876",
            "email": "isabela.freitas@gmail.com",
            "data_nascimento": "1994-01-08T00:00:00"
        },
        {
            "cod_aluno": 21,
            "nome": "Thiago Nascimento",
            "cpf": "43210987655",
            "rg": "432109876",
            "telefone_aluno": "11907654310",
            "telefone_responsavel": "11921098765",
            "email": "thiago.nascimento@hotmail.com",
            "data_nascimento": "1998-03-22T00:00:00"
        },
        {
            "cod_aluno": 22,
            "nome": "Luiza Mendes",
            "cpf": "32109876544",
            "rg": "321098765",
            "telefone_aluno": "11906543210",
            "telefone_responsavel": "11965432198",
            "email": "luiza.mendes@gmail.com",
            "data_nascimento": "1997-06-11T00:00:00"
        },
        {
            "cod_aluno": 23,
            "nome": "Marcelo Borges",
            "cpf": "21098765433",
            "rg": "210987654",
            "telefone_aluno": "11905432176",
            "telefone_responsavel": "11943210987",
            "email": "marcelo.borges@outlook.com",
            "data_nascimento": "1999-10-05T00:00:00"
        },
        {
            "cod_aluno": 24,
            "nome": "Clara Almeida",
            "cpf": "10987654322",
            "rg": "109876543",
            "telefone_aluno": "11904321098",
            "telefone_responsavel": "11998765432",
            "email": "clara.almeida@gmail.com",
            "data_nascimento": "1995-12-19T00:00:00"
        },
        {
            "cod_aluno": 25,
            "nome": "André Costa",
            "cpf": "99887766554",
            "rg": "334455667",
            "telefone_aluno": "11903210987",
            "telefone_responsavel": "11912345678",
            "email": "andre.costa@yahoo.com",
            "data_nascimento": "1994-11-08T00:00:00"
        },
        {
            "cod_aluno": 26,
            "nome": "Elaine Vasconcelos",
            "cpf": "88997766554",
            "rg": "123344555",
            "telefone_aluno": "11902187654",
            "telefone_responsavel": "11987654321",
            "email": "elaine.vasconcelos@gmail.com",
            "data_nascimento": "2000-05-12T00:00:00"
        },
        {
            "cod_aluno": 27,
            "nome": "Felipe Santana",
            "cpf": "77889966788",
            "rg": "998877665",
            "telefone_aluno": "11909876532",
            "telefone_responsavel": "11976543212",
            "email": "felipe.santana@hotmail.com",
            "data_nascimento": "1993-01-03T00:00:00"
        },
        {
            "cod_aluno": 28,
            "nome": "Aline Cruz",
            "cpf": "66778899544",
            "rg": "112233445",
            "telefone_aluno": "11921098754",
            "telefone_responsavel": "11967890122",
            "email": "aline.cruz@gmail.com",
            "data_nascimento": "2001-08-15T00:00:00"
        },
        {
            "cod_aluno": 29,
            "nome": "Roberto Cunha",
            "cpf": "55667788911",
            "rg": "556677889",
            "telefone_aluno": "11923456789",
            "telefone_responsavel": "11934567891",
            "email": "roberto.cunha@yahoo.com",
            "data_nascimento": "1992-09-07T00:00:00"
        },
        {
            "cod_aluno": 30,
            "nome": "Cecília Martins",
            "cpf": "44556677882",
            "rg": "123455667",
            "telefone_aluno": "11945678901",
            "telefone_responsavel": "11965432198",
            "email": "cecilia.martins@gmail.com",
            "data_nascimento": "1996-04-27T00:00:00"
        },
        {
            "cod_aluno": 31,
            "nome": "Paula Figueiredo",
            "cpf": "33445566778",
            "rg": "334455667",
            "telefone_aluno": "11904321087",
            "telefone_responsavel": "11912344321",
            "email": "paula.figueiredo@gmail.com",
            "data_nascimento": "1999-07-14T00:00:00"
        },
        {
            "cod_aluno": 32,
            "nome": "Eduarda Neves",
            "cpf": "77889911223",
            "rg": "778899112",
            "telefone_aluno": "11905432176",
            "telefone_responsavel": "11956789012",
            "email": "eduarda.neves@yahoo.com",
            "data_nascimento": "1994-09-20T00:00:00"
        },
        {
            "cod_aluno": 33,
            "nome": "Gustavo Fernandes",
            "cpf": "22334455667",
            "rg": "223344556",
            "telefone_aluno": "11906543210",
            "telefone_responsavel": "11989012345",
            "email": "gustavo.fernandes@hotmail.com",
            "data_nascimento": "2000-01-11T00:00:00"
        },
        {
            "cod_aluno": 34,
            "nome": "Melissa Santos",
            "cpf": "99887766554",
            "rg": "998877665",
            "telefone_aluno": "11903210987",
            "telefone_responsavel": "11978901234",
            "email": "melissa.santos@outlook.com",
            "data_nascimento": "1995-06-07T00:00:00"
        },
        {
            "cod_aluno": 35,
            "nome": "Leonardo Braga",
            "cpf": "55667788991",
            "rg": "556677889",
            "telefone_aluno": "11902187654",
            "telefone_responsavel": "11987654321",
            "email": "leonardo.braga@gmail.com",
            "data_nascimento": "1998-04-15T00:00:00"
        },
        {
            "cod_aluno": 36,
            "nome": "Simone Moura",
            "cpf": "88776655443",
            "rg": "887766554",
            "telefone_aluno": "11943210987",
            "telefone_responsavel": "11932109876",
            "email": "simone.moura@gmail.com",
            "data_nascimento": "1993-03-27T00:00:00"
        },
        {
            "cod_aluno": 37,
            "nome": "Henrique Rezende",
            "cpf": "77889911324",
            "rg": "778899113",
            "telefone_aluno": "11921098765",
            "telefone_responsavel": "11999887766",
            "email": "henrique.rezende@yahoo.com",
            "data_nascimento": "2001-10-25T00:00:00"
        },
        {
            "cod_aluno": 38,
            "nome": "Letícia Corrêa",
            "cpf": "88991122334",
            "rg": "889911223",
            "telefone_aluno": "11910987654",
            "telefone_responsavel": "11965432198",
            "email": "leticia.correa@gmail.com",
            "data_nascimento": "1996-09-13T00:00:00"
        },
        {
            "cod_aluno": 39,
            "nome": "Renata Pinto",
            "cpf": "22334455666",
            "rg": "223344556",
            "telefone_aluno": "11998765432",
            "telefone_responsavel": "11956789012",
            "email": "renata.pinto@hotmail.com",
            "data_nascimento": "1994-12-05T00:00:00"
        },
        {
            "cod_aluno": 40,
            "nome": "Fábio Monteiro",
            "cpf": "33445566777",
            "rg": "334455667",
            "telefone_aluno": "11904321098",
            "telefone_responsavel": "11989012345",
            "email": "fabio.monteiro@outlook.com",
            "data_nascimento": "1997-06-18T00:00:00"
        },
        {
            "cod_aluno": 41,
            "nome": "Bruna Oliveira",
            "cpf": "11223344556",
            "rg": "112233445",
            "telefone_aluno": "11907865432",
            "telefone_responsavel": "11932106789",
            "email": "bruna.oliveira@gmail.com",
            "data_nascimento": "1998-08-29T00:00:00"
        },
        {
            "cod_aluno": 42,
            "nome": "Maurício Campos",
            "cpf": "99887766543",
            "rg": "998877665",
            "telefone_aluno": "11908765421",
            "telefone_responsavel": "11943217654",
            "email": "mauricio.campos@hotmail.com",
            "data_nascimento": "1995-11-14T00:00:00"
        },
        {
            "cod_aluno": 43,
            "nome": "Tatiana Almeida",
            "cpf": "88996655432",
            "rg": "889966554",
            "telefone_aluno": "11909754310",
            "telefone_responsavel": "11954321087",
            "email": "tatiana.almeida@gmail.com",
            "data_nascimento": "2001-04-19T00:00:00"
        },
        {
            "cod_aluno": 44,
            "nome": "Rodrigo Rocha",
            "cpf": "77889933445",
            "rg": "778899334",
            "telefone_aluno": "11908765432",
            "telefone_responsavel": "11965432109",
            "email": "rodrigo.rocha@yahoo.com",
            "data_nascimento": "1993-03-08T00:00:00"
        },
        {
            "cod_aluno": 45,
            "nome": "Daniela Ferreira",
            "cpf": "66778899511",
            "rg": "667788995",
            "telefone_aluno": "11909876543",
            "telefone_responsavel": "11976543210",
            "email": "daniela.ferreira@gmail.com",
            "data_nascimento": "1997-09-25T00:00:00"
        },
        {
            "cod_aluno": 46,
            "nome": "Samuel Silva",
            "cpf": "55667788922",
            "rg": "556677889",
            "telefone_aluno": "11921098765",
            "telefone_responsavel": "11909876543",
            "email": "samuel.silva@hotmail.com",
            "data_nascimento": "1996-12-11T00:00:00"
        },
        {
            "cod_aluno": 47,
            "nome": "Amanda Costa",
            "cpf": "44556677882",
            "rg": "445566778",
            "telefone_aluno": "11906543210",
            "telefone_responsavel": "11987654321",
            "email": "amanda.costa@gmail.com",
            "data_nascimento": "1994-05-04T00:00:00"
        },
        {
            "cod_aluno": 48,
            "nome": "Vitor Cardoso",
            "cpf": "33445566778",
            "rg": "334455667",
            "telefone_aluno": "11905432176",
            "telefone_responsavel": "11912343210",
            "email": "vitor.cardoso@yahoo.com",
            "data_nascimento": "2000-07-27T00:00:00"
        },
        {
            "cod_aluno": 49,
            "nome": "Luana Santana",
            "cpf": "11223344556",
            "rg": "112233445",
            "telefone_aluno": "11904321098",
            "telefone_responsavel": "11998765432",
            "email": "luana.santana@gmail.com",
            "data_nascimento": "1999-06-15T00:00:00"
        },
        {
            "cod_aluno": 50,
            "nome": "Mateus Albuquerque",
            "cpf": "99887766543",
            "rg": "998877665",
            "telefone_aluno": "11903210987",
            "telefone_responsavel": "11978901234",
            "email": "mateus.albuquerque@hotmail.com",
            "data_nascimento": "1998-01-18T00:00:00"
        }
    ]
)