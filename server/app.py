from bson import json_util
from flask import Flask, request
from flask_cors import CORS 

from projects_data_layer import ProjectsDataLayer

app = Flask(__name__)
CORS(app)

projects_collection = ProjectsDataLayer()

@app.route("/projects")
def get_all_projects():
    all_projects = projects_collection.get_all_projects()
    return (
        json_util.dumps(all_projects),
        200,
        {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
    )


@app.route("/projects/<string:project_id>")
def get_project(project_id):
    project = projects_collection.get_project(project_id)
    return project.to_json(), 200, {"Content-Type": "application/json"}


@app.route("/projects", methods=["POST"])
def set_project():
    new_project = projects_collection.set_project(request.json)
    return new_project.to_json(), 201, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}


if __name__ == "__main__":
    app.run()
