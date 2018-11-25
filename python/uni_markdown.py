class Uni:

    def __init__(self, name):
        self.table_base = "[1]: Namnet på den vars studieplan det är. [2] Reflekterar studieplanen det jag faktiskt läste " \
                          "i landet eller är detta endast det jag tänkte lästa?\n\n|Länk|Namn [1]|Godkänd av programledning?|Det jag faktiskt läste i landet? [2]|\n" \
                          "|----|-----|-----|-----|\n|||||"
        self.markdown = "#{}\n##Studieplaner\n{}\n##Länkar\nHär finner ni nyttiga länkar till universitetet, t.ex. till " \
                        "kurser eller information speciellt till utbytesstudenter.".format(name, self.table_base)


