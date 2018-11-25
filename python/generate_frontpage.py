import os

def main():
    markdown = "# Utbyte på Datatekniksektionen vid TLTH\nVälkomna! Här hittar ni nyttiga resurser för ert utbyte. " \
               "Vi samlar här främst nyttiga länkar och studieplaner, men även *Statement of Purpose*."

    allrows = ""
    for country in os.listdir("../db"):
        row = html_row(country.capitalize(), "")
        allrows += row + "\n"

    table = "<table>\n<tbody>\n<tr>\n<th>Land</th>\n<th>Universitet</th></tr>\n{}\n</tbody>\n</table>".format(allrows)

    with open("../index.md", 'w+', encoding="'utf-16") as file:
        file.write(markdown + '\n' + table)


def html_row(country, uni):
    return "<tr><td>{}</td><td>{}</td></tr>".format(country, uni)

if __name__ == "__main__":
    main()
