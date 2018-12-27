import click
import json
import os
import re

CALI_UNIS = ["UC Berkeley", "UC Davis", "UC Irvine", "UCLA", "UC Merced", "UC Riverside", "UC San Diego", "UC San Francisco", "UC Santa Barbara", "UC Santa Cruz"]


@click.command()
@click.argument('file')
def main(file):
    with open(file, encoding='utf-8') as jf:
        data = json.load(jf)

    for country in data:
        unis = data[country]["unis"]
        path = "../db/{}".format(country)
        print("{}".format(country))

        for uni in unis:

            uni_path = path + "/{}".format(uni)
            if not os.path.exists(uni_path):
                os.makedirs(uni_path)
                print("  |-->{}".format(uni))

            if country == "usa" and "university_of_california" == uni:
                for cali_uni in CALI_UNIS:
                    uni_cali_path = uni_path + "/{}".format(cali_uni)
                    if not os.path.exists(uni_cali_path):
                        os.makedirs(uni_cali_path)
                        print("     |-->{}".format(cali_uni))


if __name__ == "__main__":
    main()
