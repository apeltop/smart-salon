# Imports the Google Cloud client library
from google.cloud import storage

# Instantiates a client
storage_client = storage.Client.from_service_account_json('./example/gcp-storage-service-account.json')


def print_bucket_list():
    buckets = storage_client.list_buckets()

    print("Buckets:")
    for bucket in buckets:
        print(bucket.name)
