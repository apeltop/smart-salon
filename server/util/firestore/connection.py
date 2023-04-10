import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('key/apeltop-firebase-adminsdk-dkbg3-3c56afccdb.json')

app = firebase_admin.initialize_app(cred)


class SingletonInstance:
    __instance = None

    @classmethod
    def __getInstance(cls):
        return cls.__instance

    @classmethod
    def instance(cls, *args, **kargs):
        cls.__instance = cls(*args, **kargs)
        cls.instance = cls.__getInstance
        return cls.__instance


class BaseClass:
    def get_db(self):
        return firestore.client()


class FirestoreInstance(BaseClass, SingletonInstance):
    pass


def get_db():
    return FirestoreInstance.instance().get_db()
