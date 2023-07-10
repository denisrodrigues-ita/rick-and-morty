import psycopg2
from flask import Flask, make_response, jsonify, request

LIMIT = 20

app = Flask(__name__)


@app.route('/', methods=['GET'])
# Definir a função que será executada quando a rota for acessada
def get_characters():
    # Estabelecer a conexão com o banco de dados
    conn = psycopg2.connect(
        host="localhost",
        port="5432",
        database="postgres",
        user="postgres",
        password="123456"
    )

    try:
        # Criar um cursor para executar consultas
        cur = conn.cursor()

        page = int(request.args.get('page'))
        name = request.args.get('name')
        page = ((page - 1) * (LIMIT))
        # Executar uma consulta SELECT
        cur.execute(
            f"SELECT * FROM characters WHERE name ILIKE '%{name}%' LIMIT {str(LIMIT)} OFFSET {str(page)}")
        # Obter os resultados da consulta
        rows = cur.fetchall()

        return make_response(jsonify(rows), 200)
    except Exception as e:
        # Tratar exceção
        return make_response(jsonify(error=str(e)), 500)
    finally:
        # Fechar o cursor e a conexão
        cur.close()
        conn.close()


if __name__ == '__main__':
    app.run()
