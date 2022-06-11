from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
from PIL import Image
import random, string, os

def random_image_():

    img_id = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(6))
    url = Request(f'https://prnt.sc/{img_id}', headers={'User-Agent': 'Mozilla/5.0'})

    print('https://prnt.sc/' + img_id)

    html = urlopen(url)
    soup = BeautifulSoup(html, 'lxml')

    igm_container = soup.find('div', {"class": "image-container image__pic js-image-pic"})
    img_link = igm_container.findChild("img")['src']
    print(img_link)

    return({'img_url' : img_link})
    # headers = {'User-Agent': 'Opera/9.80'}

    # with open('screenshot_saved.png', 'wb') as handle:
    #     response = requests.get(img_link, stream=True, headers=headers)

    #     if not response.ok:
    #         print(response)

    #     for block in response.iter_content(1024):
    #         if not block:
    #             break
    #         handle.write(block)


