import boto3
from botocore.exceptions import NoCredentialsError

def upload_to_s3(local_file_path, bucket_name, s3_file_name):
    # Set your AWS credentials (replace 'YOUR_ACCESS_KEY' and 'YOUR_SECRET_KEY' with your actual keys)
    aws_access_key = 'hr'
    aws_secret_key = 'br'

    s3 = boto3.client('s3', aws_access_key_id=aws_access_key, aws_secret_access_key=aws_secret_key)

    try:
        # Upload the file
        s3.upload_file(local_file_path, bucket_name, s3_file_name)
        print("Upload Successful")
        return True
    except FileNotFoundError:
        print("The file was not found")
        return False
    except NoCredentialsError:
        print("Credentials not available")
        return False

# Example usage
local_image_path = "C:/Users/kedaranath Ambekar/OneDrive/Pictures/photo.jpg"  # Replace with the actual local file path
s3_bucket_name = 'fypbuckets'  # Replace with your S3 bucket name
s3_file_name = 'bob.jpg'  # Replace with the desired S3 file path

upload_to_s3(local_image_path, s3_bucket_name, s3_file_name)
