// script.js
const germanWords = {
    "Basics": [
        { german: "Hund", swedish: "Hund" },
        { german: "Katze", swedish: "Katt" },
        { german: "Vogel", swedish: "Fågel" },
        { german: "Kuh", swedish: "Ko" },
        { german: "Pferd", swedish: "Häst" },
        { german: "Schwein", swedish: "Svin" },
        { german: "Schaf", swedish: "Får" },
        { german: "Fisch", swedish: "Fisk" },
        { german: "Huhn", swedish: "Kyckling" },
        { german: "Bär", swedish: "Björn" },
        { german: "Löwe", swedish: "Lejon" },
        { german: "Elefant", swedish: "Elefant" },
        { german: "Tiger", swedish: "Tiger" },
        { german: "Giraffe", swedish: "Giraff" },
        { german: "Affe", swedish: "Apa" },
        { german: "Kaninchen", swedish: "Kanin" },
        { german: "Eichhörnchen", swedish: "Ekorre" },
        { german: "Ente", swedish: "Anka" },
        { german: "Hai", swedish: "Haj" },
        { german: "Wal", swedish: "Val" },
        { german: "Schlange", swedish: "Orm" },
        { german: "Schildkröte", swedish: "Sköldpadda" },
        { german: "Esel", swedish: "Åsna" },
        { german: "Kamel", swedish: "Kamel" },
        { german: "Pinguin", swedish: "Pingvin" },
        { german: "Eule", swedish: "Uggla" },
        { german: "Zebra", swedish: "Zebra" },
        { german: "Gorilla", swedish: "Gorilla" },
        { german: "Krokodil", swedish: "Krokodil" },
        { german: "Nashorn", swedish: "Noshörning" },
        { german: "Brot", swedish: "Bröd" },
        { german: "Milch", swedish: "Mjölk" },
        { german: "Käse", swedish: "Ost" },
        { german: "Apfel", swedish: "Äpple" },
        { german: "Wasser", swedish: "Vatten" },
        { german: "Fleisch", swedish: "Kött" },
        { german: "Butter", swedish: "Smör" },
        { german: "Bier", swedish: "Öl" },
        { german: "Wein", swedish: "Vin" },
        { german: "Ei", swedish: "Ägg" },
        { german: "Kaffee", swedish: "Kaffe" },
        { german: "Tee", swedish: "Te" },
        { german: "Schokolade", swedish: "Choklad" },
        { german: "Zucker", swedish: "Socke" },
        { german: "Salz", swedish: "Salt" },
        { german: "Pfeffer", swedish: "Peppar" },
        { german: "Honig", swedish: "Honung" },
        { german: "Gemüse", swedish: "Grönsak" },
        { german: "Obst", swedish: "Frukt" },
        { german: "Reis", swedish: "Ris" },
        { german: "Nudeln", swedish: "Pasta" },
        { german: "Pizza", swedish: "Pizza" },
        { german: "Suppe", swedish: "Soppa" },
        { german: "Sandwich", swedish: "Smörgås" },
        { german: "Fisch", swedish: "Fisk" },
        { german: "Schinken", swedish: "Skinka" },
        { german: "Joghurt", swedish: "Yoghurt" },
        { german: "Marmelade", swedish: "Marmelad" },
        { german: "Kuchen", swedish: "Tårta" },
        { german: "Kartoffel", swedish: "Potatis" },
        { german: "Tomate", swedish: "Tomat" },
        { german: "Banane", swedish: "Banan" },
        { german: "Orange", swedish: "Apelsin" },
        { german: "Erdbeere", swedish: "Jordgubbe" },
        { german: "Gurke", swedish: "Gurka" },
        { german: "Zwiebel", swedish: "Lök" },
        { german: "Möhre", swedish: "Morot" },
        { german: "Aprikose", swedish: "Aprikos" },
        { german: "Birne", swedish: "Päron" },
        { german: "Pfirsich", swedish: "Persika" },
        { german: "Melone", swedish: "Melon" },
        { german: "Spaghetti", swedish: "Spagetti" },
        { german: "Bratkartoffeln", swedish: "Stekt potatis" },
        { german: "Eis", swedish: "Glass" },
        { german: "Keks", swedish: "Kex" },
        { german: "Müsli", swedish: "Musli" },
        { german: "Käsekuchen", swedish: "Ostkaka" },
        { german: "Tisch", swedish: "Bord" },
        { german: "Stuhl", swedish: "Stol" },
        { german: "Sofa", swedish: "Soffa" },
        { german: "Bett", swedish: "Säng" },
        { german: "Schrank", swedish: "Skåp" },
        { german: "Regal", swedish: "Hylla" },
        { german: "Tür", swedish: "Dörr" },
        { german: "Fenster", swedish: "Fönster" },
        { german: "Lampe", swedish: "Lampa" },
        { german: "Spiegel", swedish: "Spegel" },
        { german: "Kühlschrank", swedish: "Kylskåp" },
        { german: "Herd", swedish: "Spis" },
        { german: "Mikrowelle", swedish: "Mikrovågsugn" },
        { german: "Geschirrspüler", swedish: "Diskmaskin" },
        { german: "Waschmaschine", swedish: "Tvättmaskin" },
        { german: "Trockner", swedish: "Torktumlare" },
        { german: "Bügeleisen", swedish: "Strykjärn" },
        { german: "Staubsauger", swedish: "Dammsugare" },
        { german: "Besen", swedish: "Sopborste" },
        { german: "Eimer", swedish: "Hink" },
        { german: "Mülleimer", swedish: "Sopkorg" },
        { german: "Decke", swedish: "Täcke" },
        { german: "Kissen", swedish: "Kudde" },
        { german: "Handtuch", swedish: "Handduk" },
        { german: "Badezimmer", swedish: "Badrum" },
        { german: "Küche", swedish: "Kök" },
        { german: "Wohnzimmer", swedish: "Vardagsrum" },
        { german: "Schlafzimmer", swedish: "Sovrum" },
        { german: "Arbeitszimmer", swedish: "Arbetsrum" },
        { german: "Flur", swedish: "Hall" },
        { german: "Garten", swedish: "Trädgård" },
        { german: "Terrasse", swedish: "Terrass" },
        { german: "Garage", swedish: "Garage" },
        { german: "Dachboden", swedish: "Vind" },
        { german: "Baum", swedish: "Träd" },
        { german: "Blume", swedish: "Blomma" },
        { german: "Gras", swedish: "Gräs" },
        { german: "Berg", swedish: "Berg" },
        { german: "See", swedish: "Sjö" },
        { german: "Fluss", swedish: "Flod" },
        { german: "Wald", swedish: "Skog" },
        { german: "Wiese", swedish: "Äng" },
        { german: "Himmel", swedish: "Himmel" },
        { german: "Sonne", swedish: "Solen" },
        { german: "Mond", swedish: "Måne" },
        { german: "Stern", swedish: "Stjärna" },
        { german: "Wolke", swedish: "Moln" },
        { german: "Regen", swedish: "Regn" },
        { german: "Schnee", swedish: "Snö" },
        { german: "Wind", swedish: "Vind" },
        { german: "Blatt", swedish: "Blad" },
        { german: "Vogel", swedish: "Fågel" },
        { german: "Frosch", swedish: "Groda" },
        { german: "Biene", swedish: "Bi" },
        { german: "Schmetterling", swedish: "Fjäril" },
        { german: "Eichhörnchen", swedish: "Ekorre" },
        { german: "Hase", swedish: "Hare" },
        { german: "Reh", swedish: "Rådjur" },
        { german: "Fuchs", swedish: "Räv" },
        { german: "Eule", swedish: "Uggla" },
        { german: "Bär", swedish: "Björn" },
        { german: "Wolf", swedish: "Varg" },
        { german: "Elch", swedish: "Älg" },
        { german: "Adler", swedish: "Örn" },
        { german: "Ameise", swedish: "Myra" },
        { german: "Libelle", swedish: "Trollslända" },
        { german: "Seestern", swedish: "Sjöstjärna" },
        { german: "Kaktus", swedish: "Kaktus" },
        { german: "Düne", swedish: "Sanddyn" },
        { german: "Ebbe", swedish: "Ebbe" },
        { german: "Flut", swedish: "Flod" },
        { german: "Koralle", swedish: "Korall" },
        { german: "Riff", swedish: "Rev" },
        { german: "Wasserfall", swedish: "Vattenfall" },
        { german: "Gletscher", swedish: "Glaciär" },
        { german: "Hose", swedish: "Byxor" },
        { german: "Kleid", swedish: "Klänning" },
        { german: "Rock", swedish: "Kjol" },
        { german: "Hemd", swedish: "Skjorta" },
        { german: "Bluse", swedish: "Blus" },
        { german: "Pullover", swedish: "Tröja" },
        { german: "Jacke", swedish: "Jacka" },
        { german: "Mantel", swedish: "Kappa" },
        { german: "Anzug", swedish: "Kostym" },
        { german: "Unterwäsche", swedish: "Underkläder" },
        { german: "Socken", swedish: "Strumpor" },
        { german: "Schuhe", swedish: "Skor" },
        { german: "Stiefel", swedish: "Stövlar" },
        { german: "Mütze", swedish: "Mössa" },
        { german: "Schal", swedish: "Halsduk" },
        { german: "Handschuhe", swedish: "Handskar" },
        { german: "Gürtel", swedish: "Bälte" },
        { german: "Badeanzug", swedish: "Baddräkt" },
        { german: "Badehose", swedish: "Badbyxor" },
        { german: "Brille", swedish: "Glasögon" },
        { german: "Hut", swedish: "Hatt" },
        { german: "Flip-Flops", swedish: "Flip-flops" },
        { german: "Trainingsanzug", swedish: "Träningsdräkt" },
        { german: "Regenjacke", swedish: "Regnjacka" },
        { german: "Sandalen", swedish: "Sandaler" },
        { german: "Handtasche", swedish: "Handväska" },
        { german: "Rucksack", swedish: "Ryggsäck" },
        { german: "Sonnenbrille", swedish: "Solglasögon" },
        { german: "Armbanduhr", swedish: "Armbandsur" },
        { german: "Auto", swedish: "Bil" },
        { german: "Bus", swedish: "Buss" },
        { german: "Zug", swedish: "Tåg" },
        { german: "Flugzeug", swedish: "Flygplan" },
        { german: "Fahrrad", swedish: "Cykel" },
        { german: "Motorrad", swedish: "Motorcykel" },
        { german: "Straßenbahn", swedish: "Spårvagn" },
        { german: "U-Bahn", swedish: "Tunnelbana" },
        { german: "Taxi", swedish: "Taxi" },
        { german: "Boot", swedish: "Båt" },
        { german: "Fähre", swedish: "Färja" },
        { german: "Hubschrauber", swedish: "Helikopter" },
        { german: "LKW", swedish: "Lastbil" },
        { german: "Traktor", swedish: "Traktor" },
        { german: "Roller", swedish: "Skoter" },
        { german: "Segelboot", swedish: "Segelbåt" },
        { german: "Heißluftballon", swedish: "Luftballong" },
        { german: "Einrad", swedish: "Enhjuling" },
        { german: "Fallschirm", swedish: "Fallschärm" },
        { german: "Surfbrett", swedish: "Surfbräda" },
        { german: "Bahn", swedish: "Järnväg" },
        { german: "Gleitflugzeug", swedish: "Glider" },
        { german: "Ruderboot", swedish: "Rodd" },
        { german: "Schlitten", swedish: "Släde" },
        { german: "Arzt", swedish: "Läkare" },
        { german: "Lehrer", swedish: "Lärare" },
        { german: "Ingenieur", swedish: "Ingenjör" },
        { german: "Koch", swedish: "Kock" },
        { german: "Polizist", swedish: "Polis" },
        { german: "Feuerwehrmann", swedish: "Brandman" },
        { german: "Krankenschwester", swedish: "Sjuksköterska" },
        { german: "Anwalt", swedish: "Advokat" },
        { german: "Bäcker", swedish: "Bagare" },
        { german: "Friseur", swedish: "Frisör" },
        { german: "Verkäufer", swedish: "Säljare" },
        { german: "Journalist", swedish: "Journalist" },
        { german: "Architekt", swedish: "Arkitekt" },
        { german: "Mechaniker", swedish: "Mekaniker" },
        { german: "Maler", swedish: "Målare" },
        { german: "Gärtner", swedish: "Trädgårdsmästare" },
        { german: "Tischler", swedish: "Snickare" },
        { german: "Elektriker", swedish: "Elektriker" },
        { german: "Musiker", swedish: "Musiker" },
        { german: "Schauspieler", swedish: "Skådespelare" },
        { german: "Athlet", swedish: "Idrottsman" },
        { german: "Designer", swedish: "Designer" },
        { german: "Psychologe", swedish: "Psykolog" },
        { german: "Manager", swedish: "Chef" },
        { german: "Pilot", swedish: "Pilot" },
        { german: "Sekretärin", swedish: "Sekreterare" },
        { german: "Fotograf", swedish: "Fotograf" },
        { german: "Fahrer", swedish: "Förare" },
        { german: "Fischer", swedish: "Fiskare" },
        { german: "Handwerker", swedish: "Hantverkare" },
        { german: "Landwirt", swedish: "Jordbrukare" },
        { german: "Professor", swedish: "Professor" },
        { german: "Techniker", swedish: "Tekniker" },
        { german: "Tierarzt", swedish: "Veterinär" },
        { german: "Richter", swedish: "Domare" },
        { german: "Archäologe", swedish: "Arkeolog" },
        { german: "Forschung", swedish: "Forskning" },
        { german: "Büroangestellte", swedish: "Kontorspersonal" },
        { german: "Schneider", swedish: "Skomakare" },
        { german: "Krankenpfleger", swedish: "Sjukvårdare" },
        { german: "Mitarbeiter", swedish: "Anställd" },
        { german: "Rot", swedish: "Röd" },
        { german: "Blau", swedish: "Blå" },
        { german: "Grün", swedish: "Grön" },
        { german: "Gelb", swedish: "Gul" },
        { german: "Schwarz", swedish: "Svart" },
        { german: "Weiß", swedish: "Vit" },
        { german: "Grau", swedish: "Grå" },
        { german: "Braun", swedish: "Brun" },
        { german: "Orange", swedish: "Orange" },
        { german: "Lila", swedish: "Lila" },
        { german: "Glück", swedish: "Lycka" },
        { german: "Trauer", swedish: "Sorg" },
        { german: "Angst", swedish: "Rädsla" },
        { german: "Liebe", swedish: "Kärlek" },
        { german: "Wut", swedish: "Ilska" },
        { german: "Überraschung", swedish: "Överraskning" },
        { german: "Ekel", swedish: "Avsky" },
        { german: "Stolz", swedish: "Stolthet" },
        { german: "Scham", swedish: "Skam" },
        { german: "Neid", swedish: "Avund" },
        { german: "Kopf", swedish: "Huvud" },
        { german: "Gesicht", swedish: "Ansikte" },
        { german: "Haare", swedish: "Hår" },
        { german: "Augen", swedish: "Ögon" },
        { german: "Ohren", swedish: "Öron" },
        { german: "Nase", swedish: "Näsa" },
        { german: "Mund", swedish: "Mun" },
        { german: "Zähne", swedish: "Tänder" },
        { german: "Zunge", swedish: "Tunga" },
        { german: "Hals", swedish: "Hals" },
        { german: "Schulter", swedish: "Axel" },
        { german: "Arm", swedish: "Arm" },
        { german: "Ellenbogen", swedish: "Armbåge" },
        { german: "Hand", swedish: "Hand" },
        { german: "Finger", swedish: "Finger" },
        { german: "Daumen", swedish: "Tumme" },
        { german: "Brust", swedish: "Bröst" },
        { german: "Bauch", swedish: "Mage" },
        { german: "Rücken", swedish: "Rygg" },
        { german: "Bein", swedish: "Ben" },
        { german: "Knie", swedish: "Knä" },
        { german: "Fuß", swedish: "Fot" },
        { german: "Zehe", swedish: "Tå" },
        { german: "Hüfte", swedish: "Höft" },
        { german: "Po", swedish: "Stjärt" },
        { german: "Handgelenk", swedish: "Handled" },
        { german: "Fußgelenk", swedish: "Vrist" },
        { german: "Knochen", swedish: "Ben" },
        { german: "Muskel", swedish: "Muskel" },
        { german: "Herz", swedish: "Hjärta" },
        { german: "Lunge", swedish: "Lunga" },
        { german: "Leber", swedish: "Lever" },
        { german: "Niere", swedish: "Njure" },
        { german: "Magen", swedish: "Mage" },
        { german: "Darm", swedish: "Tarm" },
        { german: "Blase", swedish: "Blåsa" },
        { german: "Gehirn", swedish: "Hjärna" },
        { german: "Haut", swedish: "Hud" },
        { german: "Blut", swedish: "Blod" },
        { german: "Zelle", swedish: "Cell" },
        { german: "Montag", swedish: "Måndag" },
        { german: "Dienstag", swedish: "Tisdag" },
        { german: "Mittwoch", swedish: "Onsdag" },
        { german: "Donnerstag", swedish: "Torsdag" },
        { german: "Freitag", swedish: "Fredag" },
        { german: "Samstag", swedish: "Lördag" },
        { german: "Sonntag", swedish: "Söndag" },
        { german: "Januar", swedish: "Januari" },
        { german: "Februar", swedish: "Februari" },
        { german: "März", swedish: "Mars" },
        { german: "April", swedish: "April" },
        { german: "Mai", swedish: "Maj" },
        { german: "Juni", swedish: "Juni" },
        { german: "Juli", swedish: "Juli" },
        { german: "August", swedish: "Augusti" },
        { german: "September", swedish: "September" },
        { german: "Oktober", swedish: "Oktober" },
        { german: "November", swedish: "November" },
        { german: "Dezember", swedish: "December" },
        { german: "die Familie", swedish: "familjen" },
        { german: "der Vater", swedish: "fader" },
        { german: "die Mutter", swedish: "moder" },
        { german: "die Eltern", swedish: "föräldrar" },
        { german: "der Sohn", swedish: "son" },
        { german: "die Tochter", swedish: "dotter" },
        { german: "der Bruder", swedish: "bror" },
        { german: "die Schwester", swedish: "syster" },
        { german: "der Großvater", swedish: "farfar" },
        { german: "die Großmutter", swedish: "mormor" },
        { german: "der Großeltern", swedish: "morföräldrar" },
        { german: "der Enkel", swedish: "barnbarn" },
        { german: "die Enkelin", swedish: "barnbarn" },
        { german: "der Onkel", swedish: "farbror" },
        { german: "die Tante", swedish: "moster" },
        { german: "der Neffe", swedish: "brorson" },
        { german: "die Nichte", swedish: "brorsdotter" },
        { german: "der Cousin", swedish: "kusin (manlig)" },
        { german: "die Cousine", swedish: "kusin (kvinnlig)" },
        { german: "der Schwiegervater", swedish: "svärfar" },
        { german: "die Schwiegermutter", swedish: "svärmor" },
        { german: "der Schwager", swedish: "svåger" },
        { german: "die Schwägerin", swedish: "svägerska" },
        { german: "der Ehemann", swedish: "make" },
        { german: "die Ehefrau", swedish: "fru" },
        { german: "der Verlobte", swedish: "fästman" },
        { german: "die Verlobte", swedish: "fästmö" },
        { german: "der Stiefvater", swedish: "styvfar" },
        { german: "die Stiefmutter", swedish: "styvmor" },
        { german: "der Stiefsohn", swedish: "styvson" },
        { german: "die Stieftochter", swedish: "styvdotter" },
        { german: "der Halbbruder", swedish: "halvbror" },
        { german: "die Halbschwester", swedish: "halvsyster" },
        { german: "Sport", swedish: "sporten" },
        { german: "Fußball", swedish: "fotboll" },
        { german: "Basketball", swedish: "basket" },
        { german: "Tennis", swedish: "tennis" },
        { german: "Schwimmen", swedish: "simning" },
        { german: "Laufen", swedish: "löpning" },
        { german: "Radfahren", swedish: "cykling" },
        { german: "Wandern", swedish: "vandring" },
        { german: "Skifahren", swedish: "skidåkning" },
        { german: "Surfen", swedish: "surfing" },
        { german: "Segeln", swedish: "segling" },
        { german: "Klettern", swedish: "klättring" },
        { german: "Tanzen", swedish: "dans" },
        { german: "Singen", swedish: "sång" },
        { german: "Malen", swedish: "målning" },
        { german: "Zeichnen", swedish: "teckning" },
        { german: "Basteln", swedish: "pyssel" },
        { german: "Kochen", swedish: "matlagning" },
        { german: "Backen", swedish: "bakning" },
        { german: "Lesen", swedish: "läsning" },
        { german: "Schreiben", swedish: "skrivande" },
        { german: "Fotografieren", swedish: "fotografering" },
        { german: "Filme schauen", swedish: "titta på film" },
        { german: "Spielen", swedish: "spelande" },
        { german: "Musizieren", swedish: "musikspel" },
        { german: "Sammeln", swedish: "samlande" },
        { german: "Modellieren", swedish: "modellering" },
        { german: "Gartenarbeit", swedish: "trädgårdsarbete" },
        { german: "Camping", swedish: "camping" },
        { german: "Reisen", swedish: "resande" },
        { german: "Schach", swedish: "schack" },
        { german: "Kartenspiel", swedish: "kortspel" },
        { german: "Brettspiel", swedish: "brädspel" },
        { german: "Videospiele", swedish: "datorspel" },
        { german: "Angeln", swedish: "fiske" },
        { german: "Tauchen", swedish: "dykning" },
        { german: "Golf", swedish: "golf" },
        { german: "Handball", swedish: "handboll" },
        { german: "Volleyball", swedish: "volleyboll" },
        { german: "Badminton", swedish: "badminton" },
        { german: "Tischtennis", swedish: "bordtennis" },
        { german: "Rudern", swedish: "rodd" },
        { german: "Skaten", swedish: "skateboardåkning" },
        { german: "Snowboarden", swedish: "snowboardåkning" },
        { german: "Kitesurfen", swedish: "kitesurfing" },
        { german: "Paragliding", swedish: "skärmflygning" },
        { german: "Fallschirmspringen", swedish: "fallskärmshoppning" },
        { german: "Bergsteigen", swedish: "bergsklättring" },
        { german: "Bogenschießen", swedish: "bågskytte" },
        { german: "Boxen", swedish: "boxning" },
        { german: "Judo", swedish: "judo" },
        { german: "Karate", swedish: "karate" },
        { german: "Ringen", swedish: "brottning" },
        { german: "Yoga", swedish: "yoga" },
        { german: "Pilates", swedish: "pilates" },
        { german: "Joggen", swedish: "jogging" },
        { german: "Fahrradfahren", swedish: "cykling" },
        { german: "Motorradfahren", swedish: "motorcykling" },
        { german: "Autofahren", swedish: "körning" },
        { german: "Skateboarden", swedish: "skateboardåkning" },
        { german: "Fotografieren", swedish: "fotografering" },
        { german: "Malen", swedish: "målning" },
        { german: "Zeichnen", swedish: "teckning" },
        { german: "Basteln", swedish: "pyssel" },
        { german: "Kochen", swedish: "matlagning" },
        { german: "Backen", swedish: "bakning" },
        { german: "Lesen", swedish: "läsning" },
        { german: "Schreiben", swedish: "skrivande" },
        { german: "Musizieren", swedish: "musikspel" },
        { german: "Sammeln", swedish: "samlande" },
        { german: "Modellieren", swedish: "modellering" },
        { german: "Gartenarbeit", swedish: "trädgårdsarbete" },
        { german: "Camping", swedish: "camping" },
        { german: "Reisen", swedish: "resande" },
        { german: "Schach", swedish: "schack" },
        { german: "Kartenspiel", swedish: "kortspel" },
        { german: "Brettspiel", swedish: "brädspel" },
        { german: "Videospiele", swedish: "datorspel" },
        { german: "Computer", swedish: "dator" },
        { german: "Internet", swedish: "internet" },
        { german: "Smartphone", swedish: "smartphone" },
        { german: "Tablette", swedish: "surfplatta" },
        { german: "Laptop", swedish: "laptop" },
        { german: "Fernseher", swedish: "TV" },
        { german: "Drucker", swedish: "skrivare" },
        { german: "Tastatur", swedish: "tangentbord" },
        { german: "Maus", swedish: "mus" },
        { german: "Bildschirm", swedish: "skärm" },
        { german: "Kamera", swedish: "kamera" },
        { german: "Fotografie", swedish: "fotografering" },
        { german: "Videokamera", swedish: "videokamera" },
        { german: "Fernbedienung", swedish: "fjärrkontroll" },
        { german: "USB-Stick", swedish: "USB-minne" },
        { german: "CD", swedish: "CD" },
        { german: "DVD", swedish: "DVD" },
        { german: "Blu-ray", swedish: "Blu-ray" },
        { german: "Software", swedish: "mjukvara" },
        { german: "Hardware", swedish: "hårdvara" },
        { german: "Betriebssystem", swedish: "operativsystem" },
        { german: "Programmierung", swedish: "programmering" },
        { german: "Programmiersprache", swedish: "programspråk" },
        { german: "App", swedish: "app" },
        { german: "Webseite", swedish: "webbplats" },
        { german: "E-Mail", swedish: "e-post" },
        { german: "sozialen Medien", swedish: "sociala medier" },
        { german: "Cloud", swedish: "moln" },
        { german: "Datenschutz", swedish: "dataskydd" },
        { german: "Sicherheit", swedish: "säkerhet" },
        { german: "Passwort", swedish: "lösenord" },
        { german: "Verschlüsselung", swedish: "kryptering" },
        { german: "Drahtloses Netzwerk", swedish: "trådlöst nätverk" },
        { german: "Bluetooth", swedish: "bluetooth" },
        { german: "GPS", swedish: "GPS" },
        { german: "Virtuelle Realität", swedish: "virtuell verklighet" },
        { german: "Erweiterte Realität", swedish: "augmented verklighet" },
        { german: "Cyberspace", swedish: "cyberrymden" },
        { german: "Server", swedish: "server" },
        { german: "Datenbank", swedish: "databas" },
        { german: "Algorithmus", swedish: "algoritm" },
        { german: "Netzwerk", swedish: "nätverk" },
        { german: "Router", swedish: "router" },
        { german: "Modem", swedish: "modem" },
        { german: "Herunterladen", swedish: "nedladdning" },
        { german: "Hochladen", swedish: "uppladdning" },
        { german: "Browser", swedish: "webbläsare" },
        { german: "Suchmaschine", swedish: "sökmotor" },
        { german: "Verknüpfung", swedish: "länk" },
        { german: "Cookie", swedish: "cookie" },
        { german: "Virus", swedish: "virus" },
        { german: "Schadsoftware", swedish: "skadlig programvara" },
        { german: "Hacken", swedish: "hackning" },
        { german: "Firewall", swedish: "brandvägg" },
        { german: "Backup", swedish: "säkerhetskopiering" },
        { german: "Datei", swedish: "fil" },
        { german: "Ordner", swedish: "mapp" },
        { german: "Textverarbeitung", swedish: "textbehandling" },
        { german: "Tabellenkalkulation", swedish: "kalkylblad" },
        { german: "Präsentation", swedish: "presentation" },
        { german: "Pixel", swedish: "pixel" },
        { german: "Auflösung", swedish: "upplösning" },
        { german: "Schnittstelle", swedish: "gränssnitt" },
        { german: "die Schule", swedish: "skolan" },
        { german: "die Grundschule", swedish: "grundskolan" },
        { german: "das Gymnasium", swedish: "gymnasiet" },
        { german: "die Universität", swedish: "universitetet" },
        { german: "die Klasse", swedish: "klassen" },
        { german: "der Lehrer", swedish: "läraren" },
        { german: "die Lehrerin", swedish: "lärarinnan" },
        { german: "der Schüler", swedish: "eleven (pojke)" },
        { german: "die Schülerin", swedish: "eleven (flicka)" },
        { german: "der Student", swedish: "studenten (manlig)" },
        { german: "die Studentin", swedish: "studenten (kvinnlig)" },
        { german: "der Professor", swedish: "professorn (manlig)" },
        { german: "die Professorin", swedish: "professorn (kvinnlig)" },
        { german: "die Prüfung", swedish: "prov" },
        { german: "der Test", swedish: "test" },
        { german: "das Examen", swedish: "examen" },
        { german: "das Zeugnis", swedish: "betyget" },
        { german: "die Hausaufgaben", swedish: "läxorna" },
        { german: "die Bibliothek", swedish: "biblioteket" },
        { german: "das Buch", swedish: "boken" },
        { german: "die Note", swedish: "betyget" },
        { german: "die Pause", swedish: "rasten" },
        { german: "die Ferien", swedish: "lov" },
        { german: "das Semester", swedish: "terminen" },
        { german: "die Klausur", swedish: "tentan" },
        { german: "der Stundenplan", swedish: "schema" },
        { german: "die Schultasche", swedish: "skolväskan" },
        { german: "der Bleistift", swedish: "blyertspennan" },
        { german: "das Heft", swedish: "häftet" },
        { german: "der Radiergummi", swedish: "suget" },
        { german: "der Kugelschreiber", swedish: "kulspetspennan" },
        { german: "die Tafel", swedish: "tavlan" },
        { german: "die Kreide", swedish: "kritan" },
        { german: "der Computer", swedish: "datorn" },
        { german: "das Tablet", swedish: "plattan" },
        { german: "das Whiteboard", swedish: "whiteboarden" },
        { german: "die Präsentation", swedish: "presentationen" }
    ],
    "Common Verbs": [
        { german: "gehen", swedish: "gå" },
        { german: "sehen", swedish: "se" },
        { german: "sprechen", swedish: "prata" },
        { german: "hören", swedish: "höra" },
        { german: "lesen", swedish: "läsa" },
        { german: "schreiben", swedish: "skriva" },
        { german: "essen", swedish: "äta" },
        { german: "trinken", swedish: "dricka" },
        { german: "schlafen", swedish: "sova" },
        { german: "spielen", swedish: "spela" },
        { german: "laufen", swedish: "springa" },
        { german: "sitzen", swedish: "sitta" },
        { german: "stehen", swedish: "stå" },
        { german: "liegen", swedish: "ligga" },
        { german: "arbeiten", swedish: "arbeta" },
        { german: "lernen", swedish: "lära sig" },
        { german: "verstehen", swedish: "förstå" },
        { german: "wissen", swedish: "veta" },
        { german: "machen", swedish: "göra" },
        { german: "haben", swedish: "ha" },
        { german: "sein", swedish: "vara" },
        { german: "kommen", swedish: "komma" },
        { german: "bleiben", swedish: "stanna" },
        { german: "geben", swedish: "ge" },
        { german: "nehmen", swedish: "ta" },
        { german: "fahren", swedish: "köra" },
        { german: "fliegen", swedish: "flyga" },
        { german: "öffnen", swedish: "öppna" },
        { german: "schließen", swedish: "stänga" },
        { german: "finden", swedish: "hitta" },
        { german: "suchen", swedish: "leta" },
        { german: "kaufen", swedish: "köpa" },
        { german: "verkaufen", swedish: "sälja" },
        { german: "brauchen", swedish: "behöva" },
        { german: "wollen", swedish: "vilja" },
        { german: "können", swedish: "kunna" },
        { german: "müssen", swedish: "måste" },
        { german: "dürfen", swedish: "få" },
        { german: "sollen", swedish: "bör" },
        { german: "sagen", swedish: "säga" },
        { german: "helfen", swedish: "hjälpa" },
        { german: "ziehen", swedish: "dra" },
        { german: "treffen", swedish: "möta" },
        { german: "singen", swedish: "sjunga" },
        { german: "tanzen", swedish: "dansa" },
        { german: "schwimmen", swedish: "simma" },
        { german: "springen", swedish: "hoppa" },
        { german: "steigen", swedish: "klättra" }
    ],
    "Adjectives": [
        { german: "groß", swedish: "stor" },
        { german: "klein", swedish: "liten" },
        { german: "schön", swedish: "vacker" },
        { german: "hässlich", swedish: "ful" },
        { german: "alt", swedish: "gammal" },
        { german: "jung", swedish: "ung" },
        { german: "gut", swedish: "bra" },
        { german: "schlecht", swedish: "dålig" },
        { german: "schnell", swedish: "snabb" },
        { german: "langsam", swedish: "långsam" },
        { german: "hell", swedish: "ljus" },
        { german: "dunkel", swedish: "mörk" },
        { german: "warm", swedish: "varm" },
        { german: "kalt", swedish: "kall" },
        { german: "müde", swedish: "trött" },
        { german: "aktiv", swedish: "aktiv" },
        { german: "faul", swedish: "lat" },
        { german: "gesund", swedish: "frisk" },
        { german: "krank", swedish: "sjuk" },
        { german: "glücklich", swedish: "lycklig" },
        { german: "traurig", swedish: "ledsen" },
        { german: "lustig", swedish: "rolig" },
        { german: "ernst", swedish: "ernst" },
        { german: "stark", swedish: "stark" },
        { german: "schwach", swedish: "svag" },
        { german: "sauber", swedish: "ren" },
        { german: "schmutzig", swedish: "smutsig" },
        { german: "leer", swedish: "tom" },
        { german: "voll", swedish: "full" },
        { german: "einfach", swedish: "enkel" },
        { german: "schwierig", swedish: "svår" },
        { german: "laut", swedish: "högljudd" },
        { german: "leise", swedish: "tyst" },
        { german: "teuer", swedish: "dyr" },
        { german: "billig", swedish: "billig" },
        { german: "hoch", swedish: "hög" },
        { german: "niedrig", swedish: "låg" },
        { german: "stolz", swedish: "stolt" },
        { german: "bescheiden", swedish: "blygsam" },
        { german: "freundlich", swedish: "vänlig" },
        { german: "unfreundlich", swedish: "ovänlig" },
        { german: "nett", swedish: "snäll" },
        { german: "böse", swedish: "elak" },
        { german: "geduldig", swedish: "tålamodig" },
        { german: "ungeduldig", swedish: "otålig" },
        { german: "dumm", swedish: "dum" },
        { german: "klug", swedish: "smart" },
        { german: "gefährlich", swedish: "farlig" },
        { german: "sicher", swedish: "säker" },
        { german: "neu", swedish: "ny" },
        { german: "interessant", swedish: "intressant" },
        { german: "langweilig", swedish: "tråkig" },
        { german: "wichtig", swedish: "viktig" },
        { german: "unwichtig", swedish: "oviktig" },
        { german: "richtig", swedish: "rätt" },
        { german: "falsch", swedish: "fel" },
        { german: "bekannt", swedish: "känd" },
        { german: "unbekannt", swedish: "okänd" }
    ],
    "Numbers": [
        { german: "null", swedish: "0" },
        { german: "eins", swedish: "1" },
        { german: "zwei", swedish: "2" },
        { german: "drei", swedish: "3" },
        { german: "vier", swedish: "4" },
        { german: "fünf", swedish: "5" },
        { german: "sechs", swedish: "6" },
        { german: "sieben", swedish: "7" },
        { german: "acht", swedish: "8" },
        { german: "neun", swedish: "9" },
        { german: "zehn", swedish: "10" },
        { german: "elf", swedish: "11" },
        { german: "zwölf", swedish: "12" },
        { german: "dreizehn", swedish: "13" },
        { german: "vierzehn", swedish: "14" },
        { german: "fünfzehn", swedish: "15" },
        { german: "sechzehn", swedish: "16" },
        { german: "siebzehn", swedish: "17" },
        { german: "achtzehn", swedish: "18" },
        { german: "neunzehn", swedish: "19" },
        { german: "zwanzig", swedish: "20" },
        { german: "einundzwanzig", swedish: "21" },
        { german: "zweiundzwanzig", swedish: "22" },
        { german: "dreiundzwanzig", swedish: "23" },
        { german: "vierundzwanzig", swedish: "24" },
        { german: "fünfundzwanzig", swedish: "25" },
        { german: "sechsundzwanzig", swedish: "26" },
        { german: "siebenundzwanzig", swedish: "27" },
        { german: "achtundzwanzig", swedish: "28" },
        { german: "neunundzwanzig", swedish: "29" },
        { german: "dreißig", swedish: "30" },
        { german: "einunddreißig", swedish: "31" },
        { german: "zweiunddreißig", swedish: "32" },
        { german: "dreiunddreißig", swedish: "33" },
        { german: "vierunddreißig", swedish: "34" },
        { german: "fünfunddreißig", swedish: "35" },
        { german: "sechsunddreißig", swedish: "36" },
        { german: "siebenunddreißig", swedish: "37" },
        { german: "achtunddreißig", swedish: "38" },
        { german: "neununddreißig", swedish: "39" },
        { german: "vierzig", swedish: "40" },
        { german: "einundvierzig", swedish: "41" },
        { german: "zweiundvierzig", swedish: "42" },
        { german: "dreiundvierzig", swedish: "43" },
        { german: "vierundvierzig", swedish: "44" },
        { german: "fünfundvierzig", swedish: "45" },
        { german: "sechsundvierzig", swedish: "46" },
        { german: "siebenundvierzig", swedish: "47" },
        { german: "achtundvierzig", swedish: "48" },
        { german: "neunundvierzig", swedish: "49" },
        { german: "fünfzig", swedish: "50" },
        { german: "einundfünfzig", swedish: "51" },
        { german: "zweiundfünfzig", swedish: "52" },
        { german: "dreiundfünfzig", swedish: "53" },
        { german: "vierundfünfzig", swedish: "54" },
        { german: "fünfundfünfzig", swedish: "55" },
        { german: "sechsundfünfzig", swedish: "56" },
        { german: "siebenundfünfzig", swedish: "57" },
        { german: "achtundfünfzig", swedish: "58" },
        { german: "neunundfünfzig", swedish: "59" },
        { german: "sechzig", swedish: "60" },
        { german: "einundsechzig", swedish: "61" },
        { german: "zweiundsechzig", swedish: "62" },
        { german: "dreiundsechzig", swedish: "63" },
        { german: "vierundsechzig", swedish: "64" },
        { german: "fünfundsechzig", swedish: "65" },
        { german: "sechsundsechzig", swedish: "66" },
        { german: "siebenundsechzig", swedish: "67" },
        { german: "achtundsechzig", swedish: "68" },
        { german: "neunundsechzig", swedish: "69" },
        { german: "siebzig", swedish: "70" },
        { german: "einundsiebzig", swedish: "71" },
        { german: "zweiundsiebzig", swedish: "72" },
        { german: "dreiundsiebzig", swedish: "73" },
        { german: "vierundsiebzig", swedish: "74" },
        { german: "fünfundsiebzig", swedish: "75" },
        { german: "sechsundsiebzig", swedish: "76" },
        { german: "siebenundsiebzig", swedish: "77" },
        { german: "achtundsiebzig", swedish: "78" },
        { german: "neunundsiebzig", swedish: "79" },
        { german: "achtzig", swedish: "80" },
        { german: "einundachtzig", swedish: "81" },
        { german: "zweiundachtzig", swedish: "82" },
        { german: "dreiundachtzig", swedish: "83" },
        { german: "vierundachtzig", swedish: "84" },
        { german: "fünfundachtzig", swedish: "85" },
        { german: "sechsundachtzig", swedish: "86" },
        { german: "siebenundachtzig", swedish: "87" },
        { german: "achtundachtzig", swedish: "88" },
        { german: "neunundachtzig", swedish: "89" },
        { german: "neunzig", swedish: "90" },
        { german: "einundneunzig", swedish: "91" },
        { german: "zweiundneunzig", swedish: "92" },
        { german: "dreiundneunzig", swedish: "93" },
        { german: "vierundneunzig", swedish: "94" },
        { german: "fünfundneunzig", swedish: "95" },
        { german: "sechsundneunzig", swedish: "96" },
        { german: "siebenundneunzig", swedish: "97" },
        { german: "achtundneunzig", swedish: "98" },
        { german: "neunundneunzig", swedish: "99" },
        { german: "hundert", swedish: "100" },
        { german: "einhundert", swedish: "101" },
        { german: "einhundertzwei", swedish: "102" },
        { german: "einhundertdrei", swedish: "103" },
        { german: "einhundertvier", swedish: "104" },
        { german: "einhundertfünf", swedish: "105" },
        { german: "einhundertsechs", swedish: "106" },
        { german: "einhundertsieben", swedish: "107" },
        { german: "einhundertacht", swedish: "108" },
        { german: "einhundertneun", swedish: "109" },
        { german: "einhundertzehn", swedish: "110" },
        { german: "einhundertelf", swedish: "111" },
        { german: "einhundertzwölf", swedish: "112" },
        { german: "einhundertdreizehn", swedish: "113" },
        { german: "einhundertvierzehn", swedish: "114" },
        { german: "einhundertfünfzehn", swedish: "115" },
        { german: "einhundertsechzehn", swedish: "116" },
        { german: "einhundertsiebzehn", swedish: "117" },
        { german: "einhundertachtzehn", swedish: "118" },
        { german: "einhundertneunzehn", swedish: "119" },
        { german: "einhundertzwanzig", swedish: "120" },
        { german: "einhunderteinundzwanzig", swedish: "121" },
        { german: "einhundertzweiundzwanzig", swedish: "122" },
        { german: "einhundertdreiundzwanzig", swedish: "123" },
        { german: "einhundertvierundzwanzig", swedish: "124" },
        { german: "einhundertfünfundzwanzig", swedish: "125" },
        { german: "einhundertsechsundzwanzig", swedish: "126" },
        { german: "einhundertsiebenundzwanzig", swedish: "127" },
        { german: "einhundertachtundzwanzig", swedish: "128" },
        { german: "einhundertneunundzwanzig", swedish: "129" },
        { german: "einhundertdreißig", swedish: "130" },
        { german: "einhunderteinunddreißig", swedish: "131" }
    ],
    "Common Phrases": [
        { german: "Wie spät ist es?", swedish: "Vad är klockan?" },
        { german: "Wie heißt das auf Deutsch?", swedish: "Vad heter det på tyska?" },
        { german: "Ich liebe dich", swedish: "Jag älskar dig" },
        { german: "Ich vermisse dich", swedish: "Jag saknar dig" },
        { german: "Alles Gute zum Geburtstag!", swedish: "Grattis på födelsedagen!" },
        { german: "Frohe Weihnachten!", swedish: "God jul!" },
        { german: "Gute Besserung!", swedish: "Krya på dig!" },
        { german: "Viel Glück!", swedish: "Lycka till!" },
        { german: "Prost!", swedish: "Skål!" },
        { german: "Zum Wohl!", swedish: "Prosit!" },
        { german: "Guten Appetit!", swedish: "Smaklig måltid!" },
        { german: "Was ist das?", swedish: "Vad är det här?" },
        { german: "Woher kommen Sie?", swedish: "Var kommer du ifrån?" },
        { german: "Was machen Sie beruflich?", swedish: "Vad jobbar du med?" },
        { german: "Ich bin ein Student/eine Studentin.", swedish: "Jag är student." },
        { german: "Wo kann ich ... finden?", swedish: "Var kan jag hitta ...?" },
        { german: "Wie viel kostet das Ticket?", swedish: "Hur mycket kostar biljetten?" },
        { german: "Können Sie mir helfen?", swedish: "Kan du hjälpa mig?" },
        { german: "Ich bin allergisch gegen ...", swedish: "Jag är allergisk mot ..." },
        { german: "Entschuldigen Sie die Störung.", swedish: "Ursäkta störningen." },
        { german: "Ich habe eine Frage.", swedish: "Jag har en fråga." },
        { german: "Kein Problem.", swedish: "Inga problem." },
        { german: "Bis bald!", swedish: "Vi ses snart!" },
        { german: "Ich bin müde.", swedish: "Jag är trött." },
        { german: "Das ist interessant.", swedish: "Det är intressant." },
        { german: "Guten Morgen", swedish: "God morgon" },
        { german: "Guten Tag", swedish: "God dag" },
        { german: "Guten Abend", swedish: "God kväll" },
        { german: "Gute Nacht", swedish: "God natt" },
        { german: "Wie geht es Ihnen?", swedish: "Hur mår du?" },
        { german: "Mir geht es gut, danke.", swedish: "Jag mår bra, tack." },
        { german: "Wie heißen Sie?", swedish: "Vad heter du?" },
        { german: "Ich heiße...", swedish: "Jag heter..." },
        { german: "Entschuldigung", swedish: "Ursäkta" },
        { german: "Ja", swedish: "Ja" },
        { german: "Nein", swedish: "Nej" },
        { german: "Vielleicht", swedish: "Kanske" },
        { german: "Bitte", swedish: "Snälla" },
        { german: "Danke", swedish: "Tack" },
        { german: "Bitte schön", swedish: "Varsågod" },
        { german: "Es tut mir leid", swedish: "Jag är ledsen" },
        { german: "Auf Wiedersehen", swedish: "Adjö" },
        { german: "Ich verstehe nicht", swedish: "Jag förstår inte" },
        { german: "Können Sie das bitte wiederholen?", swedish: "Kan du snälla upprepa det?" },
        { german: "Ich spreche nur ein wenig Deutsch", swedish: "Jag talar bara lite tyska" },
        { german: "Wie viel kostet das?", swedish: "Vad kostar det?" },
        { german: "Wo ist die Toilette?", swedish: "Var är toaletten?" },
        { german: "Ich bin verloren", swedish: "Jag är vilse" },
        { german: "Hilfe!", swedish: "Hjälp!" },
        { german: "Wie war dein Tag?", swedish: "Hur har din dag varit?" },
        { german: "Ich bin beschäftigt.", swedish: "Jag är upptagen." },
        { german: "Es tut mir leid, ich habe das vergessen.", swedish: "Förlåt, jag glömde det." },
        { german: "Das ist lustig!", swedish: "Det är roligt!" },
        { german: "Das ist traurig.", swedish: "Det är sorgligt." },
        { german: "Wie lange dauert das?", swedish: "Hur lång tid tar det?" },
        { german: "Ich bin nicht sicher.", swedish: "Jag är osäker." },
        { german: "Kannst du das bitte erklären?", swedish: "Kan du förklara det, tack?" },
        { german: "Das ist in Ordnung.", swedish: "Det är okej." },
        { german: "Was denkst du?", swedish: "Vad tycker du?" },
        { german: "Lass uns gehen!", swedish: "Låt oss gå!" },
        { german: "Ich bin aufgeregt!", swedish: "Jag är spänd!" },
        { german: "Ich bin nervös.", swedish: "Jag är nervös." },
        { german: "Ich bin fertig.", swedish: "Jag är klar." },
        { german: "Es tut mir leid für die Unannehmlichkeiten.", swedish: "Jag är ledsen för besväret." },
        { german: "Wie heißt das auf Schwedisch?", swedish: "Vad heter det på svenska?" },
        { german: "Ich habe eine Idee.", swedish: "Jag har en idé." },
        { german: "Kannst du das bitte wiederholen?", swedish: "Kan du snälla upprepa det?" },
        { german: "Ich habe es geschafft!", swedish: "Jag klarade det!" },
        { german: "Ich bin hungrig.", swedish: "Jag är hungrig." },
        { german: "Ich bin durstig.", swedish: "Jag är törstig." },
        { german: "Kann ich Ihnen helfen?", swedish: "Kan jag hjälpa dig?" },
        { german: "Das ist nicht fair.", swedish: "Det är inte rättvist." },
        { german: "Ich bin müde.", swedish: "Jag är trött." },
        { german: "Ich bin krank.", swedish: "Jag är sjuk." },
        { german: "Lass uns anfangen!", swedish: "Låt oss börja!" },
        { german: "Es geht mir gut, danke der Nachfrage.", swedish: "Det går bra, tack för att du frågar." },
        { german: "Das ist eine gute Idee.", swedish: "Det är en bra idé." },
        { german: "Wie lange dauert der Flug?", swedish: "Hur lång tid tar flygningen?" },
        { german: "Kannst du mir helfen, bitte?", swedish: "Kan du hjälpa mig, snälla?" },
        { german: "Ich habe eine Frage dazu.", swedish: "Jag har en fråga om det." },
        { german: "Ich habe keine Ahnung.", swedish: "Jag har ingen aning." },
        { german: "Ich weiß es nicht.", swedish: "Jag vet inte." },
        { german: "Können wir das später machen?", swedish: "Kan vi göra det senare?" },
        { german: "Ich bin sehr interessiert.", swedish: "Jag är mycket intresserad." },
        { german: "Es ist zu spät.", swedish: "Det är för sent." },
        { german: "Es ist in Ordnung.", swedish: "Det är okej." },
        { german: "Ich bin mir nicht sicher.", swedish: "Jag är osäker." },
        { german: "Wie bitte?", swedish: "Ursäkta, vad sa du?" },
        { german: "Was denkst du darüber?", swedish: "Vad tycker du om det?" },
        { german: "Ich habe es nicht verstanden.", swedish: "Jag förstod det inte." },
        { german: "Kann ich einen Augenblick haben?", swedish: "Kan jag få en ögonblick?" },
        { german: "Es ist ein schöner Tag heute.", swedish: "Det är en vacker dag idag." },
        { german: "Können Sie das bitte aufschreiben?", swedish: "Kan du skriva ner det, snälla?" },
        { german: "Ich bin damit einverstanden.", swedish: "Jag håller med om det." },
        { german: "Das ist sehr nett von Ihnen.", swedish: "Det är mycket snällt av dig." },
        { german: "Ich bin nicht bereit dafür.", swedish: "Jag är inte redo för det." },
        { german: "Ich kann das nicht glauben.", swedish: "Jag kan inte tro det." },
        { german: "Ich fühle mich nicht wohl.", swedish: "Jag mår inte bra." },
        { german: "Ich habe keinen Hunger.", swedish: "Jag är inte hungrig." },
        { german: "Kannst du das bitte erklären?", swedish: "Kan du förklara det, tack?" },
        { german: "Ich bin hier neu.", swedish: "Jag är ny här." },
        { german: "Was hältst du davon?", swedish: "Vad tycker du om det?" },
        { german: "Das klingt gut.", swedish: "Det låter bra." },
        { german: "Das ist nicht fair.", swedish: "Det är inte rättvist." }
    ]
};

const germanGrammar = {
    beginner: [
        {
            question: "Conjugate 'sein' for 'ich'",
            correct: "bin",
            options: ["bin", "bist", "ist", "sind"],
            explanation: "Verb for 'to be' in first person singular (I)."
        },
        {
            question: "Conjugate 'haben' for 'du'",
            correct: "hast",
            options: ["hast", "hat", "haben", "habt"],
            explanation: "Verb for 'to have' in second person singular (you)."
        },
        {
            question: "Translate 'I speak German'",
            correct: "Ich spreche Deutsch",
            options: ["Ich spreche Deutsch", "Du sprichst Deutsch", "Er spricht Deutsch", "Sie spricht Deutsch"],
            explanation: "Select the correct alternative for 'I'"
        },
        {
            question: "Translate 'He is a student'",
            correct: "Er ist Student",
            options: ["Er ist Lehrer", "Sie ist Studentin", "Es ist Student", "Er ist Student"],
            explanation: "Select the correct alternative for 'he'"
        },
        {
            question: "Which pronoun is used for 'she'?",
            correct: "sie",
            options: ["ich", "du", "sie", "wir"],
            explanation: "Pronoun used to refer to a female person."
        },
        {
            question: "Which preposition is used with 'Haus'?",
            correct: "in",
            options: ["auf", "bei", "in", "an"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'machen' for 'wir'",
            correct: "machen",
            options: ["mache", "macht", "machen", "machst"],
            explanation: "The Verb 'machen' means 'to do'."
        },
        {
            question: "Which preposition is used with 'Schule'?",
            correct: "zur",
            options: ["auf", "bei", "in", "zur"],
            explanation: "Preposition to describe direction to school."
        },
        {
            question: "Which article is used with 'Stadt'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Stadt' means 'City'"
        },
        {
            question: "Conjugate 'trinken' for 'du'",
            correct: "trinkst",
            options: ["trinke", "trinkst", "trinkt", "trinken"],
            explanation: "The Verb 'trinken' means 'to drink'."
        },
        {
            question: "Translate 'They read a book'",
            correct: "Sie lesen ein Buch",
            options: ["Er liest ein Buch", "Sie lesen ein Buch", "Wir lesen ein Buch", "Ich lese ein Buch"],
            explanation: "Select the correct alternative for 'they'."
        },
        {
            question: "Which preposition is used with 'Park'?",
            correct: "im",
            options: ["auf", "bei", "in", "im"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'spielen' for 'sie'",
            correct: "spielen",
            options: ["spielst", "spielt", "spielen", "spiele"],
            explanation: "The Verb 'spielen' means 'to play'."
        },
        {
            question: "Which article is used with 'Hund'?",
            correct: "der",
            options: ["der", "die", "das", "den"],
            explanation: "'Hund' means 'dog'"
        },
        {
            question: "Conjugate 'gehen' for 'ich'",
            correct: "gehe",
            options: ["gehe", "gehst", "geht", "gehen"],
            explanation: "The Verb 'gehen' means 'to go'."
        },
        {
            question: "Translate 'We speak English'",
            correct: "Wir sprechen Englisch",
            options: ["Wir sprechen Englisch", "Du sprichst Englisch", "Er spricht Englisch", "Sie spricht Englisch"],
            explanation: "Select the correct alternative for 'we'."
        },
        {
            question: "Which preposition is used with 'Strand'?",
            correct: "am",
            options: ["auf", "bei", "in", "am"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'lesen' for 'wir'",
            correct: "lesen",
            options: ["lese", "liest", "lesest", "lesen"],
            explanation: "The Verb 'lesen' means 'to read'."
        },
        {
            question: "Which article is used with 'Apfel'?",
            correct: "der",
            options: ["der", "die", "das", "den"],
            explanation: "'Apfel' means 'apple'"
        },
        {
            question: "Translate 'She drinks water'",
            correct: "Sie trinkt Wasser",
            options: ["Ich trinke Wasser", "Du trinkst Wasser", "Er trinkt Wasser", "Sie trinkt Wasser"],
            explanation: "Select the correct alternative for 'she'."
        }
    ],
    intermediate: [
        {
            question: "Conjugate 'schreiben' for 'ich'",
            correct: "schreibe",
            options: ["schreibe", "schreibst", "schreibt", "schreiben"],
            explanation: "The Verb 'schreiben' means 'to write'."
        },
        {
            question: "Which case is used after 'mit'?",
            correct: "dative",
            options: ["nominative", "accusative", "dative", "genitive"],
            explanation: "'mit' means 'with'."
        },
        {
            question: "Which preposition is used with 'Wald'?",
            correct: "im",
            options: ["auf", "bei", "in", "im"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Which pronoun is used for 'you'?",
            correct: "ihr",
            options: ["ich", "du", "er", "ihr"],
            explanation: "Pronoun used to refer to multiple persons."
        },
        {
            question: "Conjugate 'kommen' for 'sie'",
            correct: "kommen",
            options: ["kommt", "kommst", "kommt", "kommen"],
            explanation: "The Verb 'kommen' means 'to come'."
        },
        {
            question: "Which article is used with 'Stuhl'?",
            correct: "der",
            options: ["der", "die", "das", "den"],
            explanation: "'Stuhl' means 'chair'"
        },
        {
            question: "Translate 'They eat pizza'",
            correct: "Sie essen Pizza",
            options: ["Ich esse Pizza", "Du isst Pizza", "Er isst Pizza", "Sie essen Pizza"],
            explanation: "Select the correct alternative for 'they'."
        },
        {
            question: "Which preposition is used with 'See'?",
            correct: "am",
            options: ["auf", "bei", "in", "am"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'lernen' for 'wir'",
            correct: "lernen",
            options: ["lerne", "lernst", "lernt", "lernen"],
            explanation: "The Verb 'lernen' means 'to learn'."
        },
        {
            question: "Which article is used with 'Tasse'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Tasse' means 'cup'"
        },
        {
            question: "Translate 'She writes a letter'",
            correct: "Sie schreibt einen Brief",
            options: ["Ich schreibe einen Brief", "Du schreibst einen Brief", "Er schreibt einen Brief", "Sie schreibt einen Brief"],
            explanation: "Select the correct alternative for 'she'."
        },
        {
            question: "Which preposition is used with 'Himmel'?",
            correct: "am",
            options: ["auf", "bei", "in", "am"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'arbeiten' for 'sie'",
            correct: "arbeiten",
            options: ["arbeitet", "arbeitest", "arbeitet", "arbeiten"],
            explanation: "The Verb 'arbeiten' means 'to work'."
        },
        {
            question: "Which article is used with 'Katze'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Katze' means 'cat'"
        },
        {
            question: "Translate 'We travel to Berlin'",
            correct: "Wir reisen nach Berlin",
            options: ["Ich reise nach Berlin", "Du reist nach Berlin", "Er reist nach Berlin", "Wir reisen nach Berlin"],
            explanation: "Select the correct alternative for 'we'."
        },
        {
            question: "Which preposition is used with 'Buch'?",
            correct: "im",
            options: ["auf", "bei", "in", "im"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'lesen' for 'sie'",
            correct: "lesen",
            options: ["lese", "liest", "lesest", "lesen"],
            explanation: "The Verb 'lesen' means 'to read'."
        },
        {
            question: "Which article is used with 'Blume'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Blume' means 'flower'"
        },
        {
            question: "Translate 'He goes to school'",
            correct: "Er geht zur Schule",
            options: ["Ich gehe zur Schule", "Du gehst zur Schule", "Er geht zur Schule", "Sie geht zur Schule"],
            explanation: "Select the correct alternative for 'he'."
        }
    ],
    advanced: [
        {
            question: "Which case is used after 'ohne'?",
            correct: "accusative",
            options: ["nominative", "accusative", "dative", "genitive"],
            explanation: "'ohne' means 'without'."
        },
        {
            question: "Which preposition is used with 'Buch'?",
            correct: "bei",
            options: ["zwischen", "gegenüber", "während", "bei"],
            explanation: "Preposition for relation to 'Buch'."
        },
        {
            question: "Conjugate 'sehen' for 'wir'",
            correct: "sehen",
            options: ["sehe", "sieht", "siehst", "sehen"],
            explanation: "The Verb 'sehen' means 'to see'."
        },
        {
            question: "Which article is used with 'Universität'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Universität' means 'University'"
        },
        {
            question: "Which preposition is used with 'Tisch'?",
            correct: "auf",
            options: ["unter", "vor", "neben", "auf"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'laufen' for 'sie'",
            correct: "laufen",
            options: ["läuft", "läufst", "laufen", "laufe"],
            explanation: "The Verb 'laufen' means 'to run'."
        },
        {
            question: "Which article is used with 'Gebäude'?",
            correct: "das",
            options: ["der", "die", "das", "den"],
            explanation: "'Gebäude' means 'building'"
        },
        {
            question: "Translate 'We listen to music'",
            correct: "Wir hören Musik",
            options: ["Ich höre Musik", "Du hörst Musik", "Er hört Musik", "Wir hören Musik"],
            explanation: "Select the correct alternative for 'we'."
        },
        {
            question: "Which preposition is used with 'Kino'?",
            correct: "im",
            options: ["an", "vor", "neben", "im"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'sprechen' for 'sie'",
            correct: "sprechen",
            options: ["spricht", "sprichst", "sprecht", "sprechen"],
            explanation: "The Verb 'sprechen' means 'to speak'."
        },
        {
            question: "Which article is used with 'Krankenhaus'?",
            correct: "das",
            options: ["der", "die", "das", "den"],
            explanation: "'Krankenhaus' means 'hospital'"
        },
        {
            question: "Translate 'He writes a letter'",
            correct: "Er schreibt einen Brief",
            options: ["Ich schreibe einen Brief", "Du schreibst einen Brief", "Er schreibt einen Brief", "Sie schreibt einen Brief"],
            explanation: "Select the correct alternative for 'he'."
        },
        {
            question: "Which preposition is used with 'Museum'?",
            correct: "im",
            options: ["an", "neben", "vor", "im"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'verstehen' for 'wir'",
            correct: "verstehen",
            options: ["verstehe", "versteht", "verstehst", "verstehen"],
            explanation: "The Verb 'verstehen' means 'to understand'."
        },
        {
            question: "Which article is used with 'Sonne'?",
            correct: "die",
            options: ["der", "die", "das", "den"],
            explanation: "'Sonne' means 'sun'"
        },
        {
            question: "Translate 'They cook dinner'",
            correct: "Sie kochen Abendessen",
            options: ["Ich koche Abendessen", "Du kochst Abendessen", "Er kocht Abendessen", "Sie kochen Abendessen"],
            explanation: "Select the correct alternative for 'they'."
        },
        {
            question: "Which preposition is used with 'Berg'?",
            correct: "auf",
            options: ["unter", "vor", "neben", "auf"],
            explanation: "Preposition for location relation."
        },
        {
            question: "Conjugate 'treffen' for 'sie'",
            correct: "treffen",
            options: ["triffst", "trifft", "treffen", "treffe"],
            explanation: "The Verb 'treffen' means 'to meet'."
        },
        {
            question: "Which article is used with 'Tisch'?",
            correct: "der",
            options: ["der", "die", "das", "den"],
            explanation: "'Tisch' means 'table'"
        }
    ]
};

let selectedCategory = "random";
let gameMode = "";
let currentWords = [];
let currentIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;

function chooseCategory(mode) {
    gameMode = mode;
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("category-menu").classList.remove("hidden");
}

function showGrammarMenu() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("grammar-menu").classList.remove("hidden");
}

function startGrammarGame(level) {
    currentWords = germanGrammar[level];
    gameMode = "grammar";
    document.getElementById("grammar-menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("stop-game-id").classList.remove("hidden");
    document.getElementById("grammar-counter").classList.remove("hidden");

    currentIndex = 0;
    correctAnswers = 0;
    totalQuestions = currentWords.length;
    currentwords = shuffle(currentWords);
    updateCounter();
    nextWord();
}

function startGame(category) {
    selectedCategory = category;
    document.getElementById("category-menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("stop-game-id").classList.remove("hidden");

    if (selectedCategory === "random") {
        currentWords = [];
        for (let key in germanWords) {
            currentWords = currentWords.concat(germanWords[key]);
        }
    } else {
        currentWords = germanWords[selectedCategory];
    }

    currentWords = shuffle(currentWords);

    if (gameMode === "quickPlay") {
        currentWords = currentWords.slice(0, 10);
    }

    currentIndex = 0;
    correctAnswers = 0;
    document.getElementById("show-answers-btn").classList.remove("hidden");
    nextWord();
}

function showAnswers() {
    const showAnswersBtn = document.getElementById("show-answers-btn");
    const optionsContainer = document.getElementById("options");

    showAnswersBtn.classList.add("hidden");
    optionsContainer.classList.remove("hidden");
}

function stopGame() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("stop-game-id").classList.add("hidden");
    document.getElementById("grammar-counter").classList.add("hidden");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextWord() {
    if (gameMode === "infiniteMode" && currentIndex >= currentWords.length) {
        currentWords = shuffle(currentWords);
        currentIndex = 0;
    } else if (gameMode === "quickPlay" && currentIndex >= currentWords.length) {
        showSummary();
        return;
    } else if (gameMode === "grammar" && currentIndex >= currentWords.length) {
        showSummary(); // End the grammar game and show summary when all questions are answered
        return;
    }

    const wordObj = currentWords[currentIndex];
    if (gameMode === "grammar") {
        document.getElementById("word").innerText = wordObj.question;
    } else {
        document.getElementById("word").innerText = wordObj.german;
    }
    document.getElementById("game-mode-title").innerText = gameMode === "quickPlay" ? "Quick Play" : gameMode === "infiniteMode" ? "Infinite Mode" : "Practice Grammar";
    document.getElementById("options").classList.add("hidden");
    document.getElementById("show-answers-btn").classList.remove("hidden");

    if (gameMode === "grammar") {
        const options = shuffle([...wordObj.options]);
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(option, wordObj.correct || wordObj.swedish);
            optionsDiv.appendChild(button);
        });
        document.getElementById("explanation").innerText = wordObj.explanation;
        updateCounter();
    } else {
        const options = shuffle([...generateOptions(wordObj.german, wordObj)]);
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(option, wordObj.swedish);
            optionsDiv.appendChild(button);
        });
    }
    currentIndex++;
}

function generateOptions(correctGerman, wordObj) {
    const options = [];
    const category = getCategoryOfWord(correctGerman);

    if (!category) {
        return []; // Handle edge case where category is not found
    }

    const wordsInCategory = germanWords[category];
    const shuffledWords = shuffle([...wordsInCategory]);

    // Add correct answer as one of the options
    options.push(wordObj.swedish);

    // Generate the rest of the options
    while (options.length < 4) {
        const randomOption = shuffledWords.pop().swedish;
        if (randomOption !== wordObj.swedish && !options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    return shuffle(options);
}

function getCategoryOfWord(word) {
    for (let key in germanWords) {
        const wordsInCategory = germanWords[key];
        if (wordsInCategory.some(obj => obj.german === word)) {
            return key;
        }
    }
    return null; // Handle case where category is not found
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        showPopup("✓", "green");
        correctAnswers++;
    } else {
        showPopup("✗", "red", correct);
    }
    setTimeout(nextWord, 3000);
}

function showPopup(result, color, correct = "") {
    const popup = document.getElementById("popup");
    const resultSpan = document.getElementById("result");
    const correctTranslation = document.getElementById("correct-translation");

    // Set the result text and color
    resultSpan.innerText = result;
    resultSpan.style.color = color;

    // Show or hide correct translation based on whether it's provided
    if (correct) {
        correctTranslation.innerText = `Correct translation: ${correct}`;
        correctTranslation.classList.remove("hidden");
    } else {
        correctTranslation.classList.add("hidden");
    }

    // Display the popup
    popup.classList.remove("hidden");

    // Automatically hide the popup after 3 seconds
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000);
}

function showSummary() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("summary").classList.remove("hidden");
    document.getElementById("summary-text").innerText = `You got ${correctAnswers} out of ${currentWords.length} correct!`;
    document.getElementById("stop-game-id").classList.add("hidden");
}

function resetGame() {
    document.getElementById("summary").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

function updateCounter() {
    document.getElementById("grammar-counter").innerText = `Correct: ${correctAnswers} / ${totalQuestions}`;
}
