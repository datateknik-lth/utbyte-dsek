def main():
    markdown = "# Utbyte på Datatekniksektionen vid TLTH\nVälkomna! Här hittar ni nyttiga resurser för ert utbyte. " \
               "Vi samlar här främst nyttiga länkar och studieplaner, men även *Statement of Purpose*."

    table = "Land|Universitet|"

    with open("README.md", 'w+', encoding="'utf-16") as file:
        file.write(markdown + '\n' + table)

if __name__ == "__main__":
    main()
