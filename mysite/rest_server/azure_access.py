from xmlrpc.client import FastMarshaller
from azure.storage.blob import BlobServiceClient, ResourceTypes, AccountSasPermissions, generate_account_sas
from datetime import datetime, timedelta
from functools import cache
import os
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

credential = DefaultAzureCredential()

secret_client = SecretClient(vault_url="https://dac-datadiscovery.vault.azure.net/", credential=credential)
Storage_CONN_STR = secret_client.get_secret("STORAGE-CONN-STR")

print(Storage_CONN_STR.name)
print(Storage_CONN_STR.value)

connect_str = 'DefaultEndpointsProtocol=https;AccountName=dactelemetrystorageaccnt;AccountKey=yC+FLJxXXWhHOT6P7ua4LpndqM3um3yzIT+jhhnMhnF90U7aIn5hSytLT3tMIAGQTJVdIG0TSJvl+AStVYROiw==;EndpointSuffix=core.windows.net'
media_container = 'datadiscovery-media'

sas_cache = {}

def auth_shared_access_signature(connection_string):
    # Instantiate a BlobServiceClient using a connection string
    blob_service_client = BlobServiceClient.from_connection_string(connection_string)

    # Create a SAS token to use to authenticate a new client

    sas_token = generate_account_sas(
        blob_service_client.account_name,
        account_key=blob_service_client.credential.account_key,
        resource_types=ResourceTypes(object=True),
        permission=AccountSasPermissions(read=True),
        expiry=datetime.utcnow() + timedelta(minutes=1)
    )
    return sas_token

def create_sas():
    if sas_cache.get('value') and (sas_cache.get('timestamp') > datetime.now()-timedelta(seconds=10)):
        return sas_cache.get('value')
    else:
        key = auth_shared_access_signature(connect_str)
        sas_cache['value'] = key
        sas_cache['timestamp'] = datetime.now()
        return key


def upload_file(file, file_name):
    blob_service_client = BlobServiceClient.from_connection_string(connect_str)
    blob_client = blob_service_client.get_blob_client(container=media_container, blob=file_name)
    blob_client.upload_blob(file, overwrite = True)
