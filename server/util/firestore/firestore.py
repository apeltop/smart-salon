from util.firestore.connection import get_db

db = get_db()


def add_generated_image_document(filename, prompt):
    doc_ref = db.collection(u'gen_images').document(f'{filename}')
    doc_ref.set({
        filename: filename,
        prompt: prompt
    })


def print_collection():
    users_ref = db.collection(u'users')
    docs = users_ref.stream()

    l = []

    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')
        l.append(doc.to_dict())

    return l
