import pymongo

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
