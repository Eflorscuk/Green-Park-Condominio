

CREATE TABLE lotes (
    id INT NOT NULL,
    nome VARCHAR(100),
    ativo BOOLEAN,
    criado_em TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE boletos (
    id INT NOT NULL,
    nome_sacado VARCHAR(255),
    id_lote INT NOT NULL, -- FOREIGN KEY com a tabela lotes
    valor DECIMAL,
    linha_digitavel VARCHAR(255),
    ativo BOOLEAN,
    criado_em TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (id_lote) REFERENCES lotes(id)
);