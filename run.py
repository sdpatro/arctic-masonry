import os

import tornado
from tornado.httpserver import HTTPServer
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop

rootdirectorypath = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ))


def run(port):
    app = Application([(r"/(.*)", tornado.web.StaticFileHandler, {"path": rootdirectorypath + "/arctic-masonry/static/"})],
                      debug=False)
    print rootdirectorypath
    server = HTTPServer(app)
    server.bind(port)
    server.start(1)
    print 'Arctic running at ' + str(port)
    tornado.ioloop.IOLoop.instance().start()

run(8888)