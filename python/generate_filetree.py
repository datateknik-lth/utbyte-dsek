import click
import json
import os
import re
from uni_markdown import Uni

def standardize(name):
    name = re.sub(' ', '_', name).lower().strip()
    return name


@click.command()
@click.argument('file')
def main(file):
    with open(file, encoding='utf-16') as jf:
        data = json.load(jf)

    for country in data:
        unis = data[country]
        path = "../db/{}".format(country)
        if not os.path.exists(path):
            os.makedirs('../db/{}'.format(country))
            print("{}".format(country))

        for uni in unis:
            uni_path = path + "/{}".format(uni)
            if not os.path.exists(uni_path):
                os.makedirs(uni_path)
                print("  |-->{}".format(uni))

        # Create markdown base
            uni_md = Uni(uni)
            with open("{}/{}.md".format(uni_path, standardize(uni)), 'w+', encoding='utf-16') as file:
                file.write(uni_md.markdown)



if __name__=="__main__":
    main()