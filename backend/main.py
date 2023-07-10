import psycopg2
from flask import Flask, make_response, jsonify, request

LIMIT = 20

app = Flask(__name__)


def format_character_data(rows):
    characters = []
    for row in rows:
        character = {
            'id': row[0],
            'name': row[1],
            'status': row[2],
            'species': row[3],
            'type': row[4],
            'gender': row[5],
            'origin_name': row[6],
            'origin_url': row[7],
            'location_name': row[8],
            'location_url': row[9],
            'image': row[10],
            'url': row[11],
            'created': row[12]
        }
        characters.append(character)
    return characters


@app.route('/', methods=['GET'])
def get_characters():
    conn = psycopg2.connect(
        host="localhost",
        port="5432",
        database="postgres",
        user="postgres",
        password="123456"
    )

    try:
        cur = conn.cursor()

        page = int(request.args.get('page'))
        name = request.args.get('name')
        page = (page - 1) * LIMIT
        cur.execute(
            f"SELECT id, name, status, species, type, gender, origin_name, origin_url, location_name, location_url, image, url, created FROM characters WHERE name ILIKE '%{name}%' LIMIT {str(LIMIT)} OFFSET {str(page)}"
        )
        rows = cur.fetchall()

        characters = format_character_data(rows)

        return make_response(jsonify(characters), 200)
    except Exception as e:
        return make_response(jsonify(error=str(e)), 500)
    finally:
        cur.close()
        conn.close()


if __name__ == '__main__':
    app.run()
