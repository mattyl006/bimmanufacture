const engText = [
    'start', 'offer', 'projects', 'references', 'contact',
    'Building Information Modeling', 'Client: Województwo Wielkopolskie – Urząd Marszałkowski Województwa Wielkopolskiego w Poznaniu',
    'General Contractor: WARBUD S.A.', 'General Designer: Industria Project', 'BIM Manager: BIM Manufacture',
    'What we offer?',  'Laser scanning', 'BIM Management', 'Coordination and BIM Modeling', 'Laser Scanning',
    `3D laser scanning is a quick and accurate way to capture the geometry of objects such as buildings
          with installations or process equipments.
          This technology allows a non-invasive and safe architectural inventory of industrial plants
          and other facilities, such as tanks or pipe bridges.`,
          `We register point clouds taken from laser scanning measurements
          by combining them in one specific coordinate system.
          The measurement range from one scanning position is 70 meters.
          Measurements are precise at +/- 2mm.`,
    'We have experience in scanning:', `small and large buildings (our largest project is a facility with an area of over 150,000 m2),`,
    'dense installations and complex process equipment,', 'facilities without technical documentation,',
    'in terms of creating and updating 2D, 3D and BIM models,', 'unusual objects such as planes, boats and houses on the water,',
    'facilities in Europe.', `3D laser scanning technology is used more and more often when creating as-built or existing documentation. 
    After scanning the object, we can provide a floor plan or a section made anywhere.`,
    'In addition to laser scans, we also provide 360 panoramas in the form of a virtual tour.', 'Over', '250000', 'm2', '32', 'investments',
    '4', 'countries', 'BIM Management', `BIM - Building Information Modeling is mainly information management at every stage of the investment
          process from concept design, through all stages of design and construction up to the service
          and maintenance of the constructed facility.
          We have been using BIM technology for over 10 years.
          We are observing the continuous development of this technology beyond the 3D design itself.`, 'We have experience in the field of:',
    'Performing the function of BIM Manager of large investments at the design, construction and as-built stage,',
    'BIM implementation and training for investors, designers and contractors,', 'Development of a BIM Execution Plan,',
    'Creation of the Employer\'s Information Requirements - EIR.', 'Coordination and BIM Modeling',
    `We develop BIM models based on 2D documentation or point clouds captured using the laser scanning method.
          We provide coordinated, multi-discipline models in the field of architecture, construction,
          building services, electrical and process equipment.`, `We have experience in creating simplified
          and complex BIM models in various Level of Detail (LOD) and Level of Information (LOI).
          We have experience in creation of BIM models at various stages, from the concept, through the construction,
          executive and tender design stage, to the BIM 7D as-built stage for facility management.`,
    `We also specialize in carrying out multidiscipline coordination and verification of BIM models, 
    detecting not only collisions but also elements that do not comply with the investor's BIM requirements.`,
    'Projects', 'Engine factory in Poland', 'Wielkopolskie Centrum Zdrowia Dziecka', 'Sliding door BIM libraries',
    'Engine factory in Poland', `The scope of work of the BIM Manufacture team includes providing the BIM Manager service, multi-stage
              verification of BIM models, performing measurements by laser scanning of several buildings with an area
              of over 180,000 m2. In the field of scanning, multi-storey production buildings with technical buildings.`,
    'Object area: over', '180000', 'm2', 'Number of laser scanning measuring stations: over', '9000', 'Investment value: over EUR',
    '500', 'million', 'Wielkopolskie Centrum Zdrowia Dziecka', `Wielkopolskie Centrum Zdrowia Dziecka in Poznań is the 
    most modern children's hospital in Poland, and also the largest children's hospital in the country built from scratch.`,
    `The scope of work of the BIM Manufacture team includes: BIM Management service,
              multi-stage verification of BIM models, quantity settlements with subcontractors and the client based
              on BIM models, development of BIM 4D model, creating animations and renderings based on BIM models,
              creating documentation based on BIM models, performing laser scanning measurements of the entire facility,`,
    'Building area: over', '41500', 'm2', 'Number of laser scans: over', '12000',
    'Client: Województwo Wielkopolskie – Urząd Marszałkowski Województwa Wielkopolskiego w Poznaniu',
    'General Contractor: WARBUD S.A.', 'General Designer: Industria Project', 'BIM Manager: BIM Manufacture',
    'Sliding door BIM libraries', `The scope of work of the BIM Manufacture team included the implementation of the entire catalog of sliding
              doors for the LIUNE Doors company from Finland.
              We have developed over 630 door types as parametric libraries in Revit.`, 'Number of types: over',
    '630', 'Delivery time:', '4', 'months', 'References', 'Address:', 'ul. Koperkowa 69', '62-064 Plewiska',
    'Email:', 'Telephone:',
];

plText = [
    'start', 'oferta', 'realizacje', 'referencje', 'kontakt', 'Building Information Modeling',
    'Zamawiający: Województwo Wielkopolskie – Urząd Marszałkowski Województwa Wielkopolskiego w Poznaniu',
    'Generalny wykonawca: WARBUD S.A.', 'Główny projektant: Industria Project', 'BIM Manager: BIM Manufacture',
    'Jakie świadczymy usługi?', 'Skanowanie laserowe', 'Koordynacja i modelowanie BIM', 'Doradztwo BIM', 'Skanowanie laserowe',
    `Skanowanie laserowe 3D jest szybkim i dokładnym sposobem na pozyskanie informacji o geometrii obiektów jak 
    budynki z zamontowanymi w nich instalacjami czy urządzeniami procesowymi. Technologia ta pozwala 
    na bezinwazyjną i bezpieczną inwentaryzację architektoniczną, obiektów przemysłowych i innych obiektów jak 
    np. zbiorniki czy tranzyty instalacji.`, `Chmury punktów uzyskane z pomiarów metodą skanowania laserowego 
    rejestrujemy łącząc je ze sobą w jednym określonym układzie współrzędnych. Zasięg pomiaru z jednego 
    stanowiska to 70 metrów. Pomiary są precyzyjne na poziomie +/- 2mm.`,
    'Posiadamy doświadczenie w skanowaniu:', 'małych i dużych obiektów (nasz największy projekt to obiekt o powierzchni ponad 150000 m2)',
    'gęstych instalacji i złożonych urządzeń procesowych', 'obiektów nie posiadających dokumentacji technicznej,',
    'pod kątem tworzenia i aktualizacji modeli 2D, 3D i BIM,', 'nietypowych obiektów jak samoloty, łodzie i domy na wodzie,',
    'obiektów w Europie,', `Technologia skanowania laserowego 3D jest coraz częściej wykorzystywana podczas 
    tworzenia dokumentacji powykonawczej lub stanu istniejącego. 
    Po zeskanowaniu obiektu możemy dostarczyć rzut lub przekrój wykonany w dowolnym miejscu.`,
    'Oprócz skanów laserowych dostarczamy również panoramy 360 w formie wirtualnego spaceru.', 'Ponad', '250000', 'm2',
    '32', 'inwestycji', '4', 'kraje', 'Doradztwo BIM',
    `BIM – Modelowanie Informacji o Budynku (z angielskiego Building Information Modeling) to przede wszystkim zarządzanie 
    informacją na każdym etapie procesu inwestycyjnego, począwszy od koncepcji, przez wszystkie etapy projektowania i budowy, 
    aż do obsługi wybudowanego obiektu. Technologią BIM zajmujemy się już od ponad 10 lat. Obserwujemy ciągły rozwój 
    tego nurtu  wychodzącego już poza samo projektowanie 3D.`, 'Posiadamy doświadczenie w zakresie:',
    'Pełnienia funkcji BIM Managera na dużych inwestycjach na etapie projektowym, wykonawczym i powykonawczym,',
    'Wdrażania i szkolenia BIM dla inwestorów, projektantów i wykonawców,', 'Opracowania Planu Realizacji BIM (BIM Execution Plan),',
    'Tworzenia Wymagań Informacyjnych Zamawiającego – EIR – (ang. Employer’s information requirements).',
    'Koordynacja i modelowanie BIM', `Opracowujemy modele BIM na podstawie dokumentacji 2D lub chmur punktów uzyskanych 
    z pomiarów metodą skaningu laserowego. Dostarczamy skoordynowane modele wielobranżowe w zakresie architektury, 
    konstrukcji, instalacji sanitarnych, instalacji elektrycznych oraz urządzeń procesowych.`,
    `Mamy doświadczenie w tworzeniu uproszczonych i złożonych modeli w różnych poziomach dokładności geometrycznej 
    LOD (Level of Detail) i informacyjnej LOI (Level of Information). Posiadamy doświadczenie w wykonywaniu modeli 
    na różnych etapach od koncepcji, przez etap projektu budowlanego, wykonawczego, przetargowego, aż do etapu projektu 
    powykonawczego BIM 7D służącymi do zarządzania obiektem.`, `Specjalizujemy się dodatkowo w przeprowadzaniu 
    wielobranżowej koordynacji i weryfikacji modeli BIM wykrywając nie tylko kolizje ale i elementy, które nie 
    są zgodne z wymogami Inwestora w zakresie BIM.`, 'Realizacje', 'Fabryka silników', 'Wielkopolskie Centrum Zdrowia Dziecka',
    'Biblioteki BIM', `Fabryka silników w Polsce`, `Zakres prac zespołu BIM Manufacture to m.in. 
    świadczenie usługi BIM Managera, weryfikacja wieloetapowa modeli BIM, 
    wykonanie pomiarów metodą skaningu laserowego kilku budynków o powierzchni ponad 180000 m2. 
    W zakresie skanowania wielopoziomowe budynki produkcyjne wraz z budynkami technicznymi.`, 'Powierzchnia obiektu: ponad',
    '180000', 'm2', 'Ilość stanowisk pomiarowych skaningu laserowego: ponad', '9000', 'Wartość inwestycji: ponad',
    '500', 'mln EUR', 'Wielkopolskie Centrum Zdrowia Dziecka', `Wielkopolskie Centrum Zdrowia Dziecka w Poznaniu to 
    najnowocześniejszy szpital dziecięcy w Polsce, a także jest największym, budowanym od podstaw, takim obiektem w kraju.`,
    `Zakres prac zespołu BIM Manufacture to m.in. świadczenie usługi BIM Managera, weryfikacja wieloetapowa modeli BIM, 
    rozliczenia z podwykonawcami i zamawiającym na podstawie modeli BIM, opracowanie modelu BIM 4D, tworzenie animacji 
    i renderingów na podstawie modeli BIM, tworzenie dokumentacji na podstawie modeli BIM, wykonanie pomiarów metodą 
    skaningu laserowego całego obiektu,`, 'Powierzchnia obiektu: ponad', '41500', 'm2', 'Ilość stanowisk pomiarowych skaningu laserowego: ponad', '12000',
    'Zamawiający: Województwo Wielkopolskie – Urząd Marszałkowski Województwa Wielkopolskiego w Poznaniu',
    'Generalny wykonawca: WARBUD S.A', 'Główny projektant: Industria Project', 'BIM Manager: BIM Manufacture',
    'Biblioteki BIM drzwi przesuwnych', `Zakres prac zespołu BIM Manufacture obejmował wykonanie całego katalogu 
    drzwi przesuwnych dla firmy LIUNE Doors z Finlandii. Opracowaliśmy ponad 630 typów drzwi w formie parametrycznych 
    bibliotek w oprogramowaniu Revit.`, 'Liczba typów: ponad', '630', 'Czas realizacji:', '4', 'miesiące', 'Referencje',
    'Adres:', 'ul. Koperkowa 69', '62-064 Plewiska', 'Email:', 'Telefon:'
];

const text = document.querySelectorAll('.text--js');
const plButton = document.querySelector('.pl--js');
const engButton = document.querySelector('.eng--js');

console.log(text);

engButton.addEventListener('click', () => {
    let i = 0;
    for (let elem of text) {
        elem.innerHTML = engText[i];
        i++;
    }
});

plButton.addEventListener('click', () => {
    let i = 0;
    for (let elem of text) {
        elem.innerHTML = plText[i];
        i++;
    }
})
