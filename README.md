# youtubeapi
Youtube listing oppgave

OPPGAVEN:

Jeg liker ikke at nettsidene til Youtube tror de vet bedre enn meg hva jeg har lyst til å se på. Spesielt hvordan forslagslisten på høyresiden endrer seg når jeg klikker på et av forslagene for å spille det av.

Jeg ønsker meg en veldig enkel interface:

1. Jeg ønsker å kunne legge inn en liste over de showene jeg ønsker å abonnere på, men i denne oppgaven kan listen hardkodes, se liste nedenfor.

2. Jeg ønsker å kunne klikke på den listen for å velge/velge bort (select/deselect) ett, ingen, eller flere av showene.

3. Etter å ha valgt ett eller flere show skal det være mulig å trykke på en SØK-knapp for å få opp én (1) felles liste over tilgjengelige filmer i alle de valgte showene, sortert på dato/tid, med nyeste først. Begrens antallet filmer som vises i listen til 10.

4. I listen over filmer skal datoen og HELE tittelen være synlig.

5. Jeg ønsker å kunne klikke et sted på en linje i listen for å "gjemme" filmer. De skal da ikke lenger vises i listen.

6. De gjemte filmene skal ikke vises i listen selv om jeg gjør et nytt søk.

7. Jeg ønsker å kunne klikke på en linje og få den tilhørende filmen avspilt.

8. Med en gang jeg har klikket en linje for avspilling skal filmen gjemmes på samme måte som i forrige punkt.

9. Koden skal skrives i enten ren React, React Redux eller React/MobX

10. Koden skal leveres som et npm-prosjekt

MERK:

- Fokuser på funksjonaliteten og strukturering/lesbarhet av kode + kommentarer! Kommentarer skal være på engelsk.

- Dere trenger BARE å vise nye filmer i listen når jeg trykker SØK-knappen

- Dere trenger IKKE å bevare status på siden til neste gang siden lastes inn (i.e. no persistence/storage).

- Dere trenger IKKE å kunne vise listen over gjemte filmer

- Utseendet spiller "ingen" rolle så lenge det ikke har betydning for funksjonaliteten.

- Dere trenger IKKE vise bilder/ikoner i noen av listene

- Koden trenger bare å være kompatibel med en av de siste versjonene av nettleserene Chrome, Firefox, Safari eller Opera

- Dere kan benytte "alle hjelpemidler", dvs ting hentet fra nettet, inkludert npm-pakker/moduler. Men send meg lenker til alle steder dere har kopiert kode av betydning fra.

- Kontakt meg dersom du har spørsmål om tolkning/avgrensning av oppgaven. Jeg gir *ikke* noen teknisk hjelp.

- Her er listen over show som skal være i listen (hardkodes):

https://www.youtube.com/channel/UCVTyTA7-g9nopHeHbeuvpRA (Late Night with Seth Myers)
https://www.youtube.com/channel/UCwWhs_6x42TyRM4Wstoq8HA (The Daily Show with Trevor Noah)
https://www.youtube.com/channel/UCMtFAi84ehTSYSE9XoHefig (The Late Show with Stephen Colbert)

Nok en avklaring: om det allerede spilles av en film, og det trykkes på en ny film, skal den nye filmen erstatte den gamle. Den gamle filmen skal fortsatt være merket som slettet.

Angående den hardkodede listen med show, så skal den hardkodes som en liste som "sendes rundt" i programmet for visning, det vil si ikke som statisk HTML.


Angående levering av besvarelsen, er det fint om dere kan gjøre det tilgjengelig på github og gi meg en link så jeg kan klone repositoryet.

Dere kan evt. bruke tar/zip til å sende meg repository + working directory.
