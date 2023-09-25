import os

from .bot import bot

basedir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))


def singleton(cls):
    instances = {}

    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]

    return get_instance