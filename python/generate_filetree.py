import click
import json
import os
import re
import unicodedata


def standardize(name):
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    name = re.sub(' ', '_', name).lower().strip()
    return name


def create_html(uni_name, uni_path):
    # Create HTML base
    with open('../views/uni_template.html', 'r', encoding='utf-8') as file:
        html = file.read()

    html = html.replace("#title", uni_name)
    html = html.replace("#header", uni_name)

    with open("{}/{}.html".format(uni_path, standardize(uni_name)), 'w+', encoding='utf-8') as file:
        file.write(html)

CALI_UNIS = ["UC Berkeley", "UC Davis", "UC Irvine", "UCLA", "UC Merced", "UC Riverside", "UC San Diego", "UC San Francisco", "UC Santa Barbara", "UC Santa Cruz"]


@click.command()
@click.argument('file')
def main(file):
    with open(file, encoding='utf-16') as jf:
        data = json.load(jf)

    for country in data:
        unis = data[country]
        path = "../db/{}".format(country)
        print("{}".format(country))

        for uni in unis:

            uni_path = path + "/{}".format(standardize(uni))
            if not os.path.exists(uni_path):
                os.makedirs(uni_path)
                print("  |-->{}".format(uni))

            if country == "usa" and "university_of_california" == standardize(uni):
                for cali_uni in CALI_UNIS:
                    uni_cali_path = uni_path + "/{}".format(standardize(cali_uni))
                    if not os.path.exists(uni_cali_path):
                        os.makedirs(uni_cali_path)
                        print("     |-->{}".format(cali_uni))
                        create_html("{} - {}".format(uni, cali_uni), uni_cali_path)
            else:
                create_html(uni, uni_path)



if __name__ == "__main__":
    main()
