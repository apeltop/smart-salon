import datetime

from google.cloud import storage

storage_client = storage.Client().from_service_account_json('gcp-storage-service-account.json')


def upload_blob(bucket_name, source_file_name, destination_blob_name):
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)


def upload_blob_from_memory(bucket_name, contents, destination_blob_name):
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_string(contents, content_type='image/png')

    print(
        f"{destination_blob_name} with contents uploaded to {bucket_name}."
    )


def generate_download_signed_url_v4(bucket_name, blob_name):
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)

    url = blob.generate_signed_url(
        version="v4",
        expiration=datetime.timedelta(hours=24),
        method="GET",
    )

    return url
