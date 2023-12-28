import g4f
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/api/quiz", methods=["POST"])
@cross_origin()
def generate_quiz():
    g4f.debug.logging = False  # Enable debug logging
    g4f.debug.check_version = False  # Disable automatic version checking
    data = request.get_json()
    topic = data.get("topic")
    language = data.get("language")
    items = int(data.get("items"))
    query_type = data.get("type")

    if query_type == "basic":
        query = f"""Generate a quiz about this topic: {topic},
        'Maximum of: {items} items,
        'adhere to the following rules:\n'
        '1. Must be multiple choices
        '2. The format will be 
        Question
        (a) a
        (b) b
        (c) c
        (d) d
        Answer: answer,
        The answer must be letter only,
        'Output the result in plain "json" format:\n'
        'Only provide the json result, no introduction. Just the plain json format only'
        Avoid using code block notation.
        'Avoid using ```json block notation'   
        """
    else:
        query = f"""Generate a enumaration quiz about this topic: {topic},
        'Maximum of: ({items}) items,
        'adhere to the following rules:\n'
        '1. The items must be tracing of the sample {language} program
        '2. The format will be 
        question: questions about the code,
        code: code of the problem,
        answer: output of the program,
        'Output the result in plain "json" format:\n'
        'Only provide the json result, no introduction. Just the plain json format only' 
        'Avoid using ```json block notation'   
        """

    response = g4f.ChatCompletion.create(
        model=g4f.models.gpt_35_long,
        messages=[
            {
                "role": "user",
                "content": query,
            }
        ],
    )
    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)
