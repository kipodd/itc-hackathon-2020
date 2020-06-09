from bson import json_util
from flask import Flask, request

from projects_data_layer import ProjectsDataLayer

app = Flask(__name__)
projects_collection = ProjectsDataLayer()

@app.route("/projects")
def get_all_projects():
    all_projects = projects_collection.get_all_projects()
    return (
        json_util.dumps(all_projects),
        200,
        {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
    )


@app.route("/projects", methods=["POST"])
def set_project():
    print(1)
    new_project = projects_collection.set_project(request.json)
    return new_project.to_json(), 201, {"Content-Type": "application/json"}

if __name__ == "__main__":
    app.run()
