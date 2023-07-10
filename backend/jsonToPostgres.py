import json
import psycopg2

# Configurações de conexão com o banco de dados PostgreSQL
conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="123456"
)

# Abrir o arquivo JSON
with open('characters.json', encoding='utf-8') as file:
    data = json.load(file)

sorted_data = sorted(data, key=lambda x: x['id'])

# Conectar ao banco de dados e criar uma tabela (se necessário)
cursor = conn.cursor()
cursor.execute("""
    CREATE TABLE IF NOT EXISTS characters (
        id serial primary key,
        name VARCHAR(100),
        status VARCHAR(50),
        species VARCHAR(50),
        type VARCHAR(50),
        gender VARCHAR(10),
        origin_name VARCHAR(100),
        origin_url VARCHAR(200),
        location_name VARCHAR(100),
        location_url VARCHAR(200),
        image VARCHAR(200),
        url VARCHAR(200),
        created VARCHAR(50)
    )
""")
conn.commit()

# # Inserir os dados do arquivo JSON na tabela
for character_data in sorted_data:
    cursor.execute("""
        INSERT INTO characters (
            name, status, species, type, gender,
            origin_name, origin_url, location_name, location_url,
            image, url, created
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        # character_data['id'],
        character_data['name'],
        character_data['status'],
        character_data['species'],
        character_data['type'],
        character_data['gender'],
        character_data['origin']['name'],
        character_data['origin']['url'],
        character_data['location']['name'],
        character_data['location']['url'],
        character_data['image'],
        character_data['url'],
        character_data['created']
    ))
conn.commit()

# Fechar a conexão com o banco de dados
cursor.close()
conn.close()
