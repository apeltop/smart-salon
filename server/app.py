"""
A sample Hello World server.
"""
import os

from flask import Flask, request, json
from flask_cors import CORS

from util.chatgpt.conversation import ask_to_chatGPT
from util.dalle.genertaion import generate_image

# pylint: disable=C0103
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    prompt = request.args.get('prompt')

    generate_image(prompt)
    return prompt


@app.route('/image', methods=['POST'])
def image_post():
    params = json.loads(request.get_data(), encoding='utf-8')
    if len(params) == 0:
        return 'No parameter'

    response = app.response_class(
        response=json.dumps({
            'images': generate_image(params['prompt'])
        }),
        status=200,
        mimetype='application/json'
    )

    return response


@app.route('/chat', methods=['POST'])
def chat_post():
    params = json.loads(request.get_data(), encoding='utf-8')
    if len(params) == 0:
        return 'No parameter'

    response = app.response_class(
        response=json.dumps({
            'answer': ask_to_chatGPT(params['prompt'])
        }),
        status=200,
        mimetype='application/json'
    )

    return response


if __name__ == '__main__':
    server_port = os.environ.get('PORT', '8080')
    app.run(debug=False, port=server_port, host='0.0.0.0')
