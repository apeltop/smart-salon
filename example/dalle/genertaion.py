# imports
from datetime import datetime

import openai  # OpenAI Python library to make API calls
import requests  # used to download images
import os  # used to access filepaths
from PIL import Image  # used to print and edit images
from openai.cli import display

from example.gcp_secret import access_secret_version

# set API key
openai.api_key = access_secret_version('OPENAI_API_KEY')


def generate_image(prompt):
    # set a directory to save DALL-E images to
    image_dir_name = "images"
    image_dir = os.path.join(os.curdir, image_dir_name)

    # create the directory if it doesn't yet exist
    if not os.path.isdir(image_dir):
        os.mkdir(image_dir)

    # print the directory to save to
    print(f"{image_dir=}")

    # create an image

    # set the prompt
    # prompt = "A cyberpunk monkey hacker dreaming of a beautiful bunch of bananas, digital art"
    # prompt = "realistic portrait of 30 year old korean male model who is smiling and have mild curly brown hair and have big eyes and wearing hoodie in dreamy background, hq, 35mm photo"

    # call the OpenAI API
    generation_response = openai.Image.create(
        prompt=prompt,
        n=3,
        size="1024x1024",
        response_format="url",
    )

    # print response
    print(generation_response)

    # save the image
    generated_image_name = f"{datetime.now()}.png"  # any name you like; the filetype should be .png
    generated_image_filepath = os.path.join(image_dir, generated_image_name)
    generated_image_url = generation_response["data"][0]["url"]  # extract image URL from response
    generated_image = requests.get(generated_image_url).content  # download the image

    with open(generated_image_filepath, "wb") as image_file:
        image_file.write(generated_image)  # write the image to the file

    # print the image
    print(generated_image_filepath)
    display(Image.open(generated_image_filepath))
