# https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb
import time

import openai

from util.gcp.secret import access_secret_version

openai.api_key = access_secret_version('OPENAI_API_KEY')


def ask_to_chatGPT(ask):
    start_time = time.time()

    # send a ChatCompletion request to count to 100
    response = openai.ChatCompletion.create(
        model='gpt-3.5-turbo',
        messages=[
            {'role': 'system',
             'content': '안녕하세요. 고객, 디자이너 모두를 위한 헤어 뷰티 서비스 어플리케이션, 스마트 살롱(Smart Salon)입니다.  무엇을 도와드릴까요?'},
            {'role': 'user', 'content': f'{ask}'}
        ],
    )

    # calculate the time it took to receive the response
    response_time = time.time() - start_time

    # print the time delay and text received
    print(f"Full response received {response_time:.2f} seconds after request")
    print(f"Full response received: {response.choices[0].message.content}")

    return response.choices[0].message.content
