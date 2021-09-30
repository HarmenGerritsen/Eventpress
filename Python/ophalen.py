from flask_cors import CORS
import flask
import csv
from flask import jsonify,Flask
import mysql.connector

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


with open(r"C:\Users\caspe\OneDrive\Documents\GitHub\Eventpress\txt\mysql.txt") as f1:
        data=csv.reader(f1,delimiter=",")
        for row in data:
            user=row[0]
            password=row[1]
            host=row[2]
            database=row[3]

mydb = mysql.connector.connect(
    database=database,
    host=host,
    password=password,
    user=user
)

mycursor = mydb.cursor()

@ app.route('/evenementen', methods=['GET'])
def users_fetch():
    connection = connectie()
    cursor = connection.cursor()
    cursor.execute("""SELECT titel_evenement, naam_categorie, naam_niveau, naam_locatie, omschrijving_evenement, voornaam_gebruiker, achternaam_gebruiker, deelnemers_evenement, max_deelnemers_evenement, gepland_evenement, aangemaakt_evenement
    FROM evenementen e
    JOIN categorie c ON e.id_categorie=c.id_categorie 
    JOIN niveau n ON e.id_niveau=n.id_niveau 
    JOIN locatie l ON e.id_locatie=l.id_locatie 
    JOIN gebruikers g ON e.id_organisator=g.id_gebruiker;"""
)
    
    results = cursor.fetchall()
    return jsonify(results), 200


def connectie():
    return mysql.connector.connect(
        user=user,
        password=password,
        host=host,
        database=database)
    
if __name__ == '__main__':
    app.run(debug=True)