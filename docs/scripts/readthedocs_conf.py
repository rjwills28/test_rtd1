import glob


with open("docs/source/conf.py", 'a') as fp:
    fp.write("\nhtml_js_files = [\n\t'javascript/readthedocs.js',\n]\n")
