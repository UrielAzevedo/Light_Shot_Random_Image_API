from flask import Flask
from flask_restful import Api, Resource
import scrapping

app = Flask(__name__)
api = Api(app)

class random_image(Resource):
    def get(self):
        return scrapping.random_image_()

api.add_resource(random_image, "/random-image")

if __name__ == "__main__":
    app.run()