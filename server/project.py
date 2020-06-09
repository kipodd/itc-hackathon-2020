import json
from datetime import datetime

from bson import ObjectId
from dateutil import parser


class Project:
    def __init__(
        self,
        name,
        city,
        description,
        start_time,
        end_time,
    ):
        self.name = name
        self.city = city
        self.description = description
        self.start_time = str(start_time)
        self.end_time = str(end_time)

    def to_dict(self):
        self.start_time = parser.parse(self.start_time)
        self.end_time = parser.parse(self.end_time)
        student_dict = self.__dict__

        return student_dict

    def to_json(self):
        return json.dumps(self, default=lambda student: student.__dict__)
