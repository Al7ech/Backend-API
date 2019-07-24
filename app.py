from flask import Flask, jsonify, abort
from flask_cors import CORS
from flask_restplus import Resource, Api, reqparse

app = Flask(__name__)
CORS(app)
title = 'Test'
api = Api(app=app)

test_db = [
    {
        "id" : 1,
        "title" : "맥북에어 ㅍ",
        "url" : "example.com/article/12345",
        "price" : 1000000
    },
    {
        "id" : 2,
        "title" : "맥북에어 ㅍㅍ",
        "url" : "example.com/article/12346",
        "price" : 1234567
    }
]

class LaptopListAPI(Resource):

    def get(self):
        '''
        TODO : Docs
        '''
        return jsonify(test_db)

    def post(self):
        '''
        TODO : Docs
        '''
        parser = reqparse.RequestParser()
        parser.add_argument('title', type=str, required=True, help="Title cannot be blank!")
        parser.add_argument('url', type=str, required=True, help="Url cannot be blank!")
        parser.add_argument('price', type=int, required=True, help="Price cannot be blank!")

        args = parser.parse_args()
        if len(test_db) == 0:
            args['id'] = 1
        else:
            args['id'] = test_db[-1]['id'] + 1

        test_db.append(args)

        return {'msg': 'post ok'}

class LaptopAPI(Resource):

    def get(self, id):
        '''
        TODO : docs
        '''
        laptop = [laptop for laptop in test_db if laptop['id'] == id]
        if len(laptop) == 0:
            abort(404)
        elif len(laptop) != 1:
            abort(503)

        return jsonify(laptop)

    def put(self, id):
        '''
        TODO : docs
        '''
        parser = reqparse.RequestParser()
        parser.add_argument('title', type=str, required=True, help="Title cannot be blank!")
        parser.add_argument('url', type=str, required=True, help="Url cannot be blank!")
        parser.add_argument('price', type=int, required=True, help="Price cannot be blank!")

        laptop = [laptop for laptop in test_db if laptop['id'] == id]

        if len(laptop) == 0:
            abort(Response("ID not found!"))
        elif len(laptop) != 1:
            abort(503)

        args = parser.parse_args()
        args['id'] = laptop[0]['id']
        test_db[test_db.index(laptop[0])] = args

        return {'msg': 'put ok'}

    def delete(self, id):
        '''
        TODO : docs
        '''
        laptop = [laptop for laptop in test_db if laptop['id'] == id]
        if len(laptop) == 0:
            abort(404)
        elif len(laptop) != 1:
            abort(503)

        test_db.remove(laptop[0])

        return {'msg': 'delete ok'}


api.add_resource(LaptopListAPI, '/laptop/')
api.add_resource(LaptopAPI, '/laptop/<int:id>')

if __name__ == '__main__':
    app.run(debug=True, port=8004)