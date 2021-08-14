from flask import Flask, render_template, request #I had to remove flask from import
import psycopg2
import json

#This part collects the information from the website
app=Flask(__name__)
@app.route("/")
def index():
    return render_template("project3.html")#This is the webpage where you ask information

#This is the webpage where you ask information. https://stackoverflow.com/questions/57891275/simple-fetch-get-request-in-javascript-to-a-flask-server
@app.route("/GET", methods=['GET'])
def GET():
    if request.method=="GET":
        conn = psycopg2.connect(host="localhost", port=5432, database="testing", user="postgres", password="123")
        cur = conn.cursor()
        cur.execute("""
                    SELECT username FROM data ORDER BY user_id DESC LIMIT 1;""")
        query_results = cur.fetchall()
        cur.close()
        conn.close()
        usernamep=''.join(query_results[0]) #This converts the tupple that it is returned into a string
        return usernamep

@app.route("/GET2", methods=['GET'])
def GET2():
    if request.method=="GET":
        conn = psycopg2.connect(host="localhost", port=5432, database="testing", user="postgres", password="123")
        cur = conn.cursor()
        cur.execute("""
                    SELECT highscore FROM data ORDER BY user_id DESC LIMIT 1;""")
        query_results = cur.fetchall()
        cur.close()
        conn.close()
        scorep=''.join(query_results[0]) #This converts the tupple that it is returned into a string
        return scorep

@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=="POST":
        highscore=request.form["score"]
        username=request.form["username"]
        print(highscore)
        print(username)
        conn = psycopg2.connect(host="localhost", port=5432, database="testing", user="postgres", password="123")
        cur = conn.cursor()
        cur.execute("""
                    insert into data (username,highscore)
                    values(%s,%s);""", (username, highscore))
        conn.commit()
        cur.close()
        conn.close()
        return render_template("thankyou.html")

if __name__=='__main__':
    app.debug=True
    app.run()

#This part talks with the database which I got from https://towardsdatascience.com/python-and-postgresql-how-to-access-a-postgresql-database-like-a-data-scientist-b5a9c5a0ea43

#This part establishes the connection to the database


#This part creates a cursor object. What is the purpose?? It lets you send commands to database. I see the results but only when I close the connection. https://www.psycopg.org/docs/usage.html

#query_results=cur.fetchall()
#print(query_results)

#To close the connection to the server
