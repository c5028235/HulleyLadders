import requests
port_number = 8000
url = f"http://127.0.0.1:{port_number}/api/"


def call_API_home(uri):
    new_url = url + uri
    response = requests.get(new_url)
    print(response.status_code)
    print(response.json())


if __name__ == "__main__":
    call_API_home("home/")
