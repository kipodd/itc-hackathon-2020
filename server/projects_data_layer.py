import pymongo
from bson import ObjectId

import project
from password import password


class ProjectsDataLayer:
    def __init__(self):
        client = pymongo.MongoClient(
            f"mongodb+srv://volunteer_today_admin:{password}@cluster0-omfb6.gcp.mongodb.net/volunteer_today?retryWrites=true&w=majority"
        )
        db = client.volunteer_today
        self.__projects_collection = db.projects

    def get_all_projects(self):
        return list(self.__projects_collection.find())
    
    def get_project(self, project_id):
        project_dict = self.__projects_collection.find_one(
            {"_id": ObjectId(project_id)}
        )
        return self.create_project_from_dict(project_dict)
    

    def set_project(self, project_data):
        project_dict = self.create_project_from_dict(project_data)
        insertion_result = self.__projects_collection.insert_one(project_dict.to_dict())
        return self.get_project(insertion_result.inserted_id)
    
    def create_project_from_dict(self, project_dict):
        return project.Project(
            project_dict["name"],
            project_dict["city"],
            project_dict["description"],
            project_dict["start_time"],
            project_dict["end_time"],
        )