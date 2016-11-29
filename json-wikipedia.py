import json
import requests

json_string = requests.get("http://en.wikipedia.org/w/api.php?action=query&list=allpages&format=json&aplimit=100")


parsed_json = json.loads(json_string.content)

print (parsed_json.keys())

print(parsed_json["u'query'"])
