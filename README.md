# Employees API

API construida durante o acompanhamento do
[vídeo Nest.js Full Course for Beginners](https://www.youtube.com/watch?v=8_X0nSrzrCw).

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Executando o projeto

Para executar esse projeto é preciso ter o [Node.js](https://nodejs.org/en) e o
[Docker](https://docs.docker.com/get-docker/) instalados em sua máquina.

1. Abra a pasta do projeto e instale as dependências do projeto

    ```bash
    npm i
    ```

2. Faça a cópia do arquivo de exemplo com as variáveis de ambiente

    ```bash
    cp .env.example .env
    ```

3. Inicie o banco de dados da aplicação com o docker compose

    ```bash
    docker compose up
    ```

4. Aplique as migrações do banco de dados

    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor local

    ```bash
    npm run start:dev
    ```

## Endpoints

A api inclui _endpoints_ para usuários (`/api/users`) e empregados
(`/api/employees`).

Ambos os recursos possuem os mesmos campos, a única diferença sendo que enquanto
os dados de usuários estão codificados diretamente no service na forma de
_array_, os dados de empregados são persistidos em um banco de dados postgres.

### `/api/users`

Endpoints referentes a entidade de usuário. Mudanças não são persistidas com o
fim da execução do programa.

Requisições que requerem o envio de um corpo, esperam que ele esteja nesse
formato:

```json
{
  "name": "nome do usuário",
  "email": "email do usuário",
  "role": "INTERN, ENGINEER ou ADMIN"
}
```

- `GET` `/`

    Retorna um array com todos os usuários cadastrados.

- `GET` `/{id}`

    Retorna o objeto do usuário ao qual o `id` se refere.

- `POST` `/`

    Cadastra um novo usuário. O corpo da requição deve conter os dados confome
    modelo apresentado no início da seção. Retorna o objeto referente ao usuário
    cadastrado.

- `PATCH` `/{id}`

    Atualiza os dados do usuário ao qual o `id` se refere. O corpo da requição
    deve conter os dados confome modelo apresentado no início da seção. Apenas
    os dados que o usuário deseja modificar precisam ser passados, não é
    necessário enviar todos os campos. O objeto referente ao usuário atualizado
    é retornado.

- `DELETE` `/{id}`

    Apaga o usuário ao qual o `id` se refere. O objeto referente ao usuário
    apagado é retornado.

### `/api/employees`

Endpoints referentes a entidade de empregados. Mudanças são persistidas com o
fim da execução do programa em um banco de dados postgres.

 Requisições que requerem o envio de um corpo, esperam que ele esteja nesse
formato:

```json
{
  "name": "nome do empregado",
  "email": "email do empregado",
  "role": "INTERN, ENGINEER ou ADMIN"
}
```

- `GET` `/`

    Retorna um array com todos os empregados cadastrados.

- `GET` `/{id}`

    Retorna o objeto do empregado ao qual o `id` se refere.

- `POST` `/`

    Cadastra um novo empregado. O corpo da requição deve conter os dados confome
modelo apresentado no início da seção. Retorna o objeto referente ao empregado cadastrado.

- `PATCH` `/{id}`

    Atualiza os dados do empregado ao qual o `id` se refere. O corpo da requição
deve conter os dados confome modelo apresentado no início da seção.
Apenas os dados que o usuário deseja modificar precisam ser passados, não é
necessário enviar todos os campos. O objeto referente ao empregado atualizado é
retornado.

- `DELETE` `/{id}`

    Apaga o empregado ao qual o `id` se refere. O objeto referente ao empregado
apagado é retornado.
