# https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb
import time

import openai
from example.gcp_secret import access_secret_version

openai.api_key = access_secret_version('OPENAI_API_KEY')
# openai.Model.list()

start_time = time.time()

# send a ChatCompletion request to count to 100
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[
        {'role': 'system', 'content': '안녕하세요. 고객, 디자이너 모두를 위한 헤어 뷰티 서비스 어플리케이션, 스마트 살롱(Smart Salon)입니다.  무엇을 도와드릴까요?'},
        {'role': 'user', 'content': '얼굴형이 길고 좁은 청년 남성에게 어울리는 머리스타일을 추천해줘'}
    ],
)

# calculate the time it took to receive the response
response_time = time.time() - start_time

# print the time delay and text received
print(f"Full response received {response_time:.2f} seconds after request")
# \n\n1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100."

# print(f"Full response received:\n{response}")
print(f"Full response received: {response.choices[0].message.content}")
