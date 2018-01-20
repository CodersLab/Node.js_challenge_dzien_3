<img alt="Logo" src="https://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Node.js challenge

Witaj w challengu Node.js, gdzie codziennie przez 7 dni zdobędziesz konkretną dawkę informacji dotyczących Node.js oraz wykorzystasz ją w praktyce. **Pamiętaj żeby wykonywać dni challengu po kolei - od dnia pierwszego do ostatniego** (dzięki temu Twoja wiedza będzie poukładana i kompletna).

Każdy dzień to jeden temat przewodni. W jego ramach **stworzysz aplikację Node.js, która faktycznie będzie potrafiła coś zrobić** - od razu zobaczysz wynik swojej pracy.

___

> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

**Do pełnego i satysfakcjonującego doświadczania tego challengu jest potrzebna znajomość JavaScript z elementami ES6.** Jeżeli potrzebujesz informacji z zakresu ES6 to znajdziesz je tutaj: [*tutorial ES6*][es6-tutorial].

## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

## Plan challengu

* Pierwszy dzień to wstęp do Twojej przygody z Node.js - dowiesz się w jaki sposób przygotować środowisko oraz jak pisać i testować programy Node.js.
* W kolejnych dniach dowiesz się w jaki sposób za pomocą Node.js wchodzić w interakcję z systemem operacyjnym (np. modyfikować pliki czy dokonywać szyfrowania).
* Druga część challengu jest poświęcona tworzeniu back-endu - dowiesz się jak stworzyć własny serwer.
* Pod koniec doświadczysz roli full-stack developera - stworzysz komunikujący się ze sobą front-end i back-end.  

___

# Dzień 3: P|$z|\\/|y $zyfr3|\\/|

## Moduł `crypto`

Wczoraj nauczyliśmy się wykorzystywać pierwsze wbudowany w Node moduł: `fs`. Dzisiaj poznajemy kolejny, o nazwie `crypto`. Jak sama nazwa wskazuje - kojarzy nam się z kryptografią - dokładnie tym się zajmuje. Dzięki wykorzystaniu `crypto` jesteśmy w stanie używać pewnych szyfrów, czy funkcji skrótu. Dołączenie modułu następuje w standardowy, poznany wcześniej sposób:

```JavaScript
const crypto = require('crypto');
```

> Szyfrowanie, kryptografia i bezpieczeństwo to bardzo skomplikowane tematy. Nie daj się zrazić teoretycznym opisom dzisiejszego dnia :) Pod koniec każdego działu podajemy praktyczny kawałek kodu, który zrealizuje dane zadanie!
> 
> **W praktyce nie zawsze te przygotowane dla Ciebie gotowce są w 100% bezpieczne! Wszystko zależy od konkretnego użycia.** Żeby było jasne - ten dzień sprawi, że będziesz potrafić szyfrować, deszyfrować i pobierać "hash", ale nie zrobi z Ciebie eksperta ds. bezpieczeństwa :)

## Funkcje skrótu

> Funkcja skrótu, funkcja mieszająca lub funkcja haszująca – funkcja przyporządkowująca dowolnie dużej liczbie krótką, zawsze posiadającą stały rozmiar, niespecyficzną, quasi-losową wartość, tzw. skrót nieodwracalny.
>
> Źródło: Wikipedia. Zaraz rozszyfrujemy tę definicję :)

Funkcją skrótu nazywamy taki algorytm, który jest w stanie z dowolnej długości danych stworzyć krótki ich "podpis".

Przykładowo dla pliku w `app/data/someText.txt` funkcja skrótu `sha256` 
 zwróci jako hex (te dziwnie nazwy rozwikłamy już wkrótce): `cc995beff4574d7acb384bf79f5527e1e0fbca926dcf7fa95c8bab06a5237ecf`. Niezależnie od tego jak długi tekst źródłowy podamy ta funkcja skrótu zwróci podpis o takiej samej długości. W dodatku każdy tekst wygeneruje zupełnie inny, unikalny podpis.
 
 W praktyce bardzo często stosuje się funkcje skrótu przede wszystkim w dwóch miejscach:
 
 - W celu przechowywania haseł. Funkcja skrótu ma bowiem ciekawą właściwość: jest unikalna\* dla każdego tekstu, z drugiej strony nie pozwala odzyskać oryginalnego tekstu. (czyt: jeżeli ktoś nawet włamie się to nie pozna prawdziwych haseł użytkowników).
 - Żeby określić czy pobrane pliki są takie same jak oryginał. Sprawdzając czy skrót z pliku jest taki jak był w oryginale możemy stwierdzić czy mamy do czynienia z prawdziwym i poprawnie pobranym plikiem.

### Jak pobrać wartość funkcji skrótu za pomocą `crypto`

Czas na praktykę - jak pobrać ten "podpis" dla stringa np. `'Hello, World!'`? Za pomocą funkcji `crypto.createHmac()`. Cały kod jest dosyć złożony, ale spokojnie - tutaj podajemy gotowca:

```JavaScript
const crypto = require('crypto');

const hash = crypto.createHmac(algorytmFunkcjiSkrotu, twojTekst)
    .digest(format);
console.log(hash); //Wyświetl "hash" - czyli wynik funkcji skrótu
```

Na przykład dla algorytmu `sha256`, formatu hex i tekstu 'Hello, World!':

```JavaScript
const crypto = require('crypto');

const text = 'Hello, World!';
const hash = crypto.createHmac('sha256', text)
    .digest('hex');
console.log(hash); //Zwróci '11febc4b352d7961ee0ff767b846dd87712a94f4ac3380d6c66d5a6f74bc3500'
```

### Algorytm funkcji skrótu

Pierwszym argumentem funkcji `crypto.createHmac()` jest algorytm. Masz kilka możliwości, m.in.:
- `'sha256'` (popularny i bezpieczny)
- `'sha512'` (popularny i bardzo bezpieczny, ale dłuższy)
- `'md5'` (bardzo niebezpieczny i przestarzały)
- `'rmd160'`

(uwaga: nie na każdym systemie działają wszystkie te algorytmy). W praktyce najczęściej wykorzystujemy `sha256` lub `sha512`.

### Format

Na koniec naszego kodu musieliśmy wywołać `.digest()`, który wymaga jako argument formatu. Od tego zależy w jakiej formie zostanie przedstawiony nasz "podpis". Masz kilka możliwości, m.in.: `'hex'` czy `'base64'`. Nie ma to teraz większego znaczenia dla nas i możesz używać wartości `'hex'`.

## Szyfrowanie

Szyfrowanie w programowaniu jest zaawansowanym i dosyć długim tematem. Pokażemy Ci jednak jak w prosty sposób można coś szybko zaszyfrować lub rozszyfrować! Poznamy tylko najważniejsze informacje, żebyś szybko mógł/mogła zacząć.

Na początku używamy funkcji `crypto.createCipher(algorytmSzyfrujacy, haslo)`, któremu podajemy odpowiednie dane - co zwróci nam obiekt typu `Cipher` (zapisujemy go po prostu do zmiennej).

Później na tym obiekcie wykonujemy `.update(tekstOryginalny, kodowanieWejsciowe, formatWyjsciowy)`. Ta metoda zwróci nam część zaszyfrowanego tekstu.

Na koniec na tym samym obiekcie wykonujemy `.final(formatWyjsciowy)`.

Brzmi skomplikowanie? Trochę tak jest :) Dlatego przygotowaliśmy dla Ciebie wygodną funkcję, która realizuje szyfrowanie i korzysta z wyżej podanej wiedzy:

```JavaScript
const crypto = require('crypto');

function encodeText(text, password, algorithm){
    const cipher = crypto.createCipher(algorithm, password);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
```

Żeby jej użyć musisz jeszcze tylko wiedzieć jakie algorytmy masz do wyboru. Jest ich bardzo dużo i zależą od Twojego systemu, masz do dospozycji m.in.: `'aes192'`, `'aes-256-cbc'`, `'aes-256-ecb'` i inne.

Np. szyfrując wiadomość `'Hello, World!'` za pomocą algorytmu `'aes-256-cbc'` i hasła `'M0j3 has|0!'` otrzymamy `352c9abb9cd20b41766f352b2611bb7b`:

```JavaScript
const crypto = require('crypto');

function encodeText(text, password, algorithm){
    const cipher = crypto.createCipher(algorithm, password);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

console.log(encodeText('Hello, World!', 'M0j3 has|0!', 'aes-256-cbc')); //Wyświetli `352c9abb9cd20b41766f352b2611bb7b`
```

## Deszyfrowanie

Ok. Mamy już zaszyfrowaną wiadomość... To w jaki sposób ją teraz rozszyfrować? Właściwie cały proces jest identyczny jak w przypadku szyfrowania - z tą różnicą, że używamy funkcji `crypto.createDecipher()`.

Oto funkcja deszyfrująca dla Ciebie:

```JavaScript
const crypto = require('crypto');

function decodeText(encodedText, password, algorithm){
    const decipher = crypto.createDecipher(algorithm, password);
    
    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
```

Próbując zatem odwrócić poprzedni proces:

```JavaScript
const crypto = require('crypto');

function decodeText(encodedText, password, algorithm){
    const decipher = crypto.createDecipher(algorithm, password);
    
    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

console.log(decodeText('352c9abb9cd20b41766f352b2611bb7b', 'M0j3 has|0!', 'aes-256-cbc')); //Wyświetli `Hello, World!`
```

> Pamiętaj: żaden szyfr nie jest w 100% bezpieczny. Bezpieczeństwo to skomplikowane zagadnienie. Dzisiejszy challenge nie jest przewodnikiem po bezpiecznym szyfrowaniu.

# Ćwiczenia

> Ćwiczenia wykonuj w odpowiednich plikach. W folderze `app` są one ponumerowane tak samo jak poniżej - zadaniu `1. Rozgrzewka` odpowiada plik `app/zadanie01.js` itd.
> Aby uruchomić zadanie podaj jego nazwę (pamiętaj, aby linia komend/terminal był otwarty na katalogu `app` tego repozytorium), np.:
> ```cmd
> node ./zadanie01.js
> ```

## 1. Którego hasła użyłem?

Sprawdźmy Twoje umiejętności korzystania z funkcji skrótu.

W pliku `app/zadanie01.js` znajduje się ciąg `'5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e'`. Twoim zadaniem jest określenie którego z poniższych haseł użyłem do jego wygenerowania:

- `'??TegoHasła'`
- `'CodersLab'`
- `'Node.js Szyfruje Pliki'`
- `'Zaźółć Gęślą Jaźń'`
- `'Moje Haslo 1@3!'`
- `'111#$((@)n'`
- `'Dzisiaj Szyfruje 83'`

Nie wiadomo jaki został użyty algorytm funkcji skrótu. Zerknij do działu funkcji skrótu, aby przypomnieć sobie o jakich wspominaliśmy.

Zadanie możesz wykonać ręcznie, możesz też spróbować wykonać go za pomocą pętli - aby program sam znalazł, które z powyższych haseł zwróci dla danej funkcji skrótu `'5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e'`.

## Zadanie dnia 1: Narzędzie do sumy kontrolnej pliku

Połącz swoją wiedzę z pierwszego, drugiego i dzisiejszego dnia. Stwórz program, któremu można przekazać jako argument ścieżkę pliku tekstowego. Następnie Twój program ma wczytać zawartość tego pliku i na końcu wykonać funkcję skrótu `'sha256'` na nim i ją wyświetlić.

Przykładowo wykonanie:

```cmd
node ./zadanieDnia1.js ./data/zadanieDnia1/testFile.txt
```

Powinno wyświetlić `4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca`.

Takie narzędzie jest bardzo praktyczne i powszechnie stosowane np. do sprawdzania oryginalności pobieranych plików (autor na swojej stronie pobierania musi podać oryginalny `sha256`, my po pobraniu generujemy swój i porównujemy czy są takie same).

## Zadanie dnia 2: 4f9f...03c40

<img src="http://karenfirestone.com/wp-content/uploads/2013/09/Computer-Detective.jpg" alt="Komputerowy Detektyw" width="450">

Pobawmy się jak komputerowy Detektyw :)

Ostatnie zadanie polega na rozszyfrowaniu niżej podanego tekstu. Ten tekst znajduje się również w pliku `app/zadanieDnia2.js`. Użyto jednego z algorytmów szyfrujących które wymieniliśmy. Hasłem jest pierwsza i ostatnia litera każdego słowa w pierwszym zdaniu tego zadania :)

**4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40**

<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[es6-tutorial]: http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
[download-node]: https://nodejs.org/en/download/