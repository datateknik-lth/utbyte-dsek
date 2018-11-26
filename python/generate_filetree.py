import click
import json
import os
import re
import unicodedata
from uni_markdown import Uni


def standardize(name):
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
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
            os.makedirs('../db/{}'.format(standardize(country)))
            print("{}".format(country))

        for uni in unis:
            uni_path = path + "/{}".format(standardize(uni))
            if not os.path.exists(uni_path):
                os.makedirs(uni_path)
                print("  |-->{}".format(uni))

            # Create HTML base
            with open('../template/uni_template.html', 'r', encoding='utf-8') as file:
                html = file.read()

            html = html.replace("#title", uni)
            html = html.replace("#header", uni)

            with open("{}/{}.html".format(uni_path, standardize(uni)), 'w+', encoding='utf-8') as file:
                file.write(html)


if __name__ == "__main__":
    main()
