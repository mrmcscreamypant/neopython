from bottle import *
import urllib.request as req

TARGET = "https://google.com/"

def get_page_from_target(path):
    try:
        with req.urlopen(TARGET+path) as page:
            content = page.read()
    except Exception as e:
        print(f"Exception '{e}' ocurred when accesing '{TARGET+path}'")
        content = "null"
    return content

def make_page_compatible(html):
    print(html[0:200])
    try:
        str(html).replace(TARGET,"/")
    except Exception as e:
        print(e)
    return html

@route("/")
@route("/<target:path>")
def page(target=""):
    return make_page_compatible(get_page_from_target(target))

run(host="0.0.0.0",port="8080",debug=True)