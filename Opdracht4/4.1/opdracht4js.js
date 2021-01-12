var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    aantalWielen: 4,
    snelheid: 0,

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid)
    },

    toeteren: function() {
        console.log("toet!")
    }
}

mijnauto.gasgeven()
mijnauto.gasgeven()
mijnauto.toeteren()
mijnauto.toeteren()
mijnauto.gasgeven()
mijnauto.gasgeven()
mijnauto.gasgeven()