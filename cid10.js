// Ficheiro: cid10.js
const listaCompletaCID = [
  // --- SINTOMAS GERAIS E INESPECÍFICOS (R) ---
  "R05 - Tosse",
  "R06.0 - Dispneia",
  "R07.4 - Dor no peito, não especificada",
  "R10.4 - Outras dores abdominais e as não especificadas",
  "R11 - Náusea e vómitos",
  "R31 - Hematúria não especificada",
  "R42 - Tontura e instabilidade",
  "R51 - Cefaleia (Dor de cabeça)",
  "R55 - Síncope e colapso",
  "R59.0 - Adenomegalia localizada (Gânglios/Linfonodos)",
  "R59.1 - Adenomegalia generalizada",
  "R63.4 - Perda de peso anormal",
  "R91 - Achados anormais exames por imagem do pulmão (Nódulo)",

  // --- NEUROLOGIA E CABEÇA/PESCOÇO ---
  "F03 - Demência não especificada",
  "G30.9 - Doença de Alzheimer, não especificada",
  "G35 - Esclerose múltipla",
  "G40.9 - Epilepsia, não especificada",
  "G43.9 - Enxaqueca, não especificada",
  "G51.0 - Paralisia de Bell (Paralisia facial)",
  "H66.9 - Otite média, não especificada",
  "I61.9 - Hemorragia intracerebral, não especificada",
  "I63.9 - Enfarte cerebral, não especificado (AVCi)",
  "I64 - Acidente vascular cerebral (AVC), não especificado",
  "J01.9 - Sinusite aguda, não especificada",
  "J32.9 - Sinusite crónica, não especificada",

  // --- COLUNA VERTEBRAL ---
  "M41.9 - Escoliose, não especificada",
  "M47.9 - Espondilose, não especificada (Artrose da coluna)",
  "M50.2 - Outro deslocamento de disco cervical (Hérnia cervical)",
  "M51.2 - Outro deslocamento de disco intervertebral (Hérnia lombar)",
  "M54.2 - Cervicalgia (Dor cervical)",
  "M54.3 - Ciática",
  "M54.4 - Lumbago com ciática",
  "M54.5 - Dor lombar baixa (Lombalgia)",
  "Q76.2 - Espondilolistese congénita",

  // --- OSTEOMUSCULAR E ARTICULAÇÕES (MSK) ---
  "M06.9 - Artrite reumatoide, não especificada",
  "M16.9 - Coxartrose não especificada (Artrose do quadril)",
  "M17.9 - Gonartrose não especificada (Artrose do joelho)",
  "M19.9 - Artrose não especificada",
  "M23.2 - Transtorno do menisco devido a rutura ou lesão antiga",
  "M25.5 - Dor em articulação",
  "M65.9 - Sinovite e tenossinovite, não especificadas",
  "M75.1 - Síndrome do manguito rotador",
  "M75.4 - Síndrome de impacto do ombro",
  "M77.9 - Entesopatia, não especificada (Tendinite)",
  "M79.1 - Mialgia",
  "M79.6 - Dor num membro",
  "M81.9 - Osteoporose, não especificada",

  // --- TRAUMATISMOS E FRATURAS ---
  "S00.9 - Traumatismo superficial da cabeça, não especificado",
  "S02.9 - Fratura do crânio e dos ossos da face, não especificada",
  "S06.9 - Traumatismo intracraniano, não especificado (TCE)",
  "S12.9 - Fratura do pescoço, não especificada",
  "S22.0 - Fratura de vértebra torácica",
  "S22.3 - Fratura de costela",
  "S32.0 - Fratura de vértebra lombar",
  "S42.2 - Fratura da extremidade superior do úmero",
  "S52.5 - Fratura da extremidade inferior do rádio",
  "S62.8 - Fratura de outros ossos e de ossos não especificados do punho e da mão",
  "S72.0 - Fratura do colo do fémur",
  "S82.0 - Fratura da rótula",
  "S82.8 - Fratura de outras partes da perna (Tornozelo)",
  "S93.4 - Entorse e distensão do tornozelo",

  // --- TÓRAX E RESPIRATÓRIO ---
  "J18.9 - Pneumonia, não especificada",
  "J20.9 - Bronquite aguda, não especificada",
  "J44.9 - Doença pulmonar obstrutiva crónica (DPOC), não especificada",
  "J45.9 - Asma, não especificada",
  "J90 - Derrame pleural não classificado em outra parte",
  "I26.9 - Embolia pulmonar sem menção de cor pulmonale agudo",

  // --- GASTROINTESTINAL E ABDÓMEN ---
  "K35.8 - Outras apendicites agudas e as não especificadas",
  "K40.9 - Hérnia inguinal unilateral ou não especificada, sem obstrução ou gangrena",
  "K42.9 - Hérnia umbilical sem obstrução ou gangrena",
  "K56.6 - Outras obstruções intestinais e as não especificadas",
  "K57.9 - Doença diverticular do intestino, não especificada",
  "K74.6 - Outras cirroses e as não especificadas do fígado",
  "K76.0 - Degeneração gordurosa do fígado (Esteatose hepática)",
  "K80.2 - Cálculo da vesícula biliar sem colecistite (Colelitíase)",
  "K81.9 - Colecistite, não especificada",
  "K85.9 - Pancreatite aguda, não especificada",

  // --- GENITURINÁRIO E GINECOLOGIA ---
  "N13.3 - Outras hidronefroses e as não especificadas",
  "N20.0 - Cálculo do rim",
  "N20.1 - Cálculo do uréter",
  "N23 - Cólica nefrética não especificada",
  "N28.9 - Transtorno do rim e do uréter, não especificado",
  "N39.0 - Infeção do trato urinário (ITU), de localização não especificada",
  "N40 - Hiperplasia da próstata",
  "N60.9 - Displasia mamária benigna, não especificada",
  "N63 - Nódulo mamário não especificado",
  "N80.9 - Endometriose, não especificada",
  "N83.2 - Outros cistos ovarianos e os não especificados",
  "D25.9 - Leiomioma do útero, não especificado (Mioma)",

  // --- VASCULAR E CARDIOLOGIA ---
  "I50.9 - Insuficiência cardíaca, não especificada",
  "I70.9 - Aterosclerose generalizada e a não especificada",
  "I71.9 - Aneurisma da aorta, de localização não especificada, sem menção de rutura",
  "I73.9 - Doença vascular periférica não especificada (Claudicação)",
  "I80.2 - Trombose venosa profunda (TVP) de outros vasos dos membros inferiores",
  "I83.9 - Varizes dos membros inferiores sem úlcera ou inflamação",

  // --- ENDÓCRINO E METABÓLICO ---
  "E04.1 - Nódulo tiroideu simples",
  "E04.9 - Bócio não tóxico, não especificado",
  "E11.9 - Diabetes mellitus não insulinodependente, sem complicações",

  // --- ONCOLOGIA (TUMORES MALIGNOS) ---
  "C18.9 - Neoplasia maligna do cólon, não especificada",
  "C22.9 - Neoplasia maligna do fígado, não especificada",
  "C25.9 - Neoplasia maligna do pâncreas, não especificada",
  "C34.9 - Neoplasia maligna dos brônquios ou pulmões, não especificada",
  "C50.9 - Neoplasia maligna da mama, não especificada",
  "C53.9 - Neoplasia maligna do colo do útero, não especificada",
  "C61 - Neoplasia maligna da próstata",
  "C64 - Neoplasia maligna do rim, exceto pelve renal",
  "C71.9 - Neoplasia maligna do encéfalo, não especificada",
  "C73 - Neoplasia maligna da glândula tiroide",
  "C77.9 - Neoplasia maligna secundária e não especificada dos gânglios linfáticos",
  "C78.7 - Neoplasia maligna secundária do fígado (Metástase)",
  "C79.5 - Neoplasia maligna secundária dos ossos e da medula óssea (Metástase)",

  // --- ROTINA E RASTREIO (Z) ---
  "Z01.6 - Exame radiológico, não classificado em outra parte",
  "Z01.7 - Exame de laboratório (Exames de rotina)",
  "Z03.9 - Observação por suspeita de doença ou afecção não especificada",
  "Z12.1 - Exame de rastreio especial para neoplasia do trato intestinal",
  "Z12.3 - Exame de rastreio especial para neoplasia da mama",
  "Z12.5 - Exame de rastreio especial para neoplasia da próstata",
  "Z36.9 - Rastreio pré-natal, não especificado (Ecografia obstétrica)",

  // Adições:
  "E78.0 - Hipercolesterolemia pura",
  "E79.0 - Hiperuricemia sem sinais de artrite inflamatória ou doença tofácea",
  "J84.9 - Doença pulmonar intersticial, não especificada"
];
