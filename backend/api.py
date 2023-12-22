from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name':"dexter",
        "Age":"20",
        "programming":"python"
        }

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Dextro",
        "about" :"Hello!"
    }

    return response_body

if __name__ == '__main__':
    app.run(debug=True)