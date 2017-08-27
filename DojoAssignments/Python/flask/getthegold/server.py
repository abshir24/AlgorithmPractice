from flask import Flask, render_template,request, redirect,session
from datetime import datetime
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

messages = []

@app.route('/')

def index():

    return render_template("index.html", array = messages, length = len(messages))


@app.route('/findgold', methods = ['POST'])

def findgold():
    if not 'gold' in session:
        session['gold'] = 0

    if request.form['building'] == 'farm':
        randomint = random.randrange(10, 20)
        session['randomint'] = 2
        session['gold'] += randomint
        messages.append("Earned " + str(randomint) + " golds from the farm! "+str(datetime.now()))

    if request.form['building'] == 'cave':
        randomint = random.randrange(5, 10)
        session['randomint'] = 2
        session['gold'] += randomint
        messages.append("Earned " + str(randomint) + " golds from the cave! "+str(datetime.now()))

    if request.form['building'] == 'house':
        randomint = random.randrange(2, 5)
        session['randomint'] = 2
        session['gold'] += randomint
        messages.append("Earned " + str(randomint) + " golds from the house! "+str(datetime.now()))

    if request.form['building'] == 'casino':
        randomint = random.randrange(0, 2)
        randomgold = random.randrange(0, 50)
        if randomint == 1:
            session['randomint'] = 1
            session['gold'] -= randomgold
            messages.append("Lost " + str(randomgold) + " golds from the casino! "+str(datetime.now()))
        else:
            session['randomint'] = 2
            session['gold'] += randomgold
            messages.append("Earned " + str(randomgold) + " golds from the casino! "+str(datetime.now()))

    return redirect('/')



app.run(debug=True)      # Run the app in debug mode.
