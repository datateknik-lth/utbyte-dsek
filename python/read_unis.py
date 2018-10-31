from openpyxl import load_workbook
import json
import re

def clean_uni_str(string):
    """Removed brackets and its content from string."""
    reg_brackets = re.compile('([\w*\s*]*)\(', re.UNICODE)  # Find words up until left bracket
    reg_star = re.compile("\*")

    clean_str = re.sub(reg_star, '', string)  # Remove star
    matches = re.match(reg_brackets, string)

    if matches is not None:
        return matches.group(1).strip()
    else:
        return clean_str.strip()

def main():

    # Read workbook from excel file in same directory
    wb = load_workbook('./01Engineering_ht18_web.xlsx')

    # Get first and only sheet
    sheet = wb[wb.sheetnames[0]]

    # Find row of headers
    header_row = 0

    for row in range(1, sheet.max_row):
        cell = sheet.cell(row=row, column=1).value
        if cell is not None and cell.lower() == 'country':
            header_row = row
            break

    # Traverse whole sheet and add to JSON
    JSON = {}
    c_col = 1
    u_col = 2

    for row in range(header_row+1, sheet.max_row+1):
        country = sheet.cell(row=row, column=c_col).value
        uni = sheet.cell(row=row, column=u_col).value

        # Stop traversing if country is empty and ignore middle header rows
        if country is None:
            break
        elif country.lower() != 'country':

            if country is not None and country.lower() in JSON:
                uni = clean_uni_str(uni)
                if uni not in JSON[country.lower()]:  # Only add if not already present
                    JSON[country.lower().strip()].append(uni)
            else:
                uni = clean_uni_str(uni)
                JSON[country.lower().strip()] = [uni]

    with open('data.json', 'w') as file:
        json.dump(JSON, file, ensure_ascii=False)

        print("Saved data in [data.json]")


if __name__=='__main__':
    main()
