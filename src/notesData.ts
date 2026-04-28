
export interface Note {
  topic: string;
  explanation?: string;      // 🧠 Simple Explanation
  keyPoints?: string[];      // 📌 Key Points
  realLifeExample?: string;  // 💡 Real-Life Example
  examTip?: string;         // 🎯 Exam Tip
  diagramHint?: string;    // 🖼️ Diagram Hint
  diagramUrl?: string;     // Keep for search logic
  // Legacy fields for backward compatibility during migration
  short?: string;
  detailed?: string;
  bulletin?: string[];
}

export const hinglishNotes: Note[] = [
  // BCA-401 RDBMS
  {
    topic: "Overview and History of DBMS",
    explanation: "DBMS ek software hai jo data ko store, organize aur retrieve karne mein help karta hai. Pehle data files mein save hota tha (Manual registers ki tarah), par modern DBMS ne use digital aur smart bana diya hai.",
    keyPoints: [
      "Evolution: 1960s mein Hierarchical model (IBM IMS) se start hua.",
      "Relational Model: 1970 mein E.F. Codd ne SQL based rules laye.",
      "Modern State: Aaj hum MySQL, Oracle aur NoSQL (MongoDB) use karte hain.",
      "Efficiency: DBMS data redundancy (duplicate data) ko khatam karta hai."
    ],
    realLifeExample: "Jaise aapki Phonebook—pehle log diary mein likhte the (File System), ab phone contacts app mein naam, number, aur email smartly search hota hai (DBMS).",
    examTip: "Exam mein E.F. Codd ka naam aur 1970 zaroor mention karna, isse extra weightage milta hai.",
    diagramHint: "Ek timeline banaiye showing 1960s (IMS) -> 1970s (Relational) -> Modern (NoSQL)."
  },
  {
    topic: "File System vs DBMS",
    explanation: "File System purana tareeka hai data save karne ka jahan documents manually organized hote hain, jabki DBMS ek digital librarian ki tarah hai jo sab kuch systematic rakhta hai.",
    keyPoints: [
      "Redundancy: File system mein data baar-baar duplicate hota hai, DBMS mein nahi.",
      "Security: DBMS mein access rules set kiye ja sakte hain, files mein storage simple hoti hai.",
      "Independence: DBMS mein data structure change karne se storage par asar nahi padta.",
      "Integrity: DBMS rules (PK, FK) enforce karta hai taaki data hamesha sahi rahe."
    ],
    realLifeExample: "Ek Library jahan books floor par bikhri hain (File System) vs Ek Library jahan har book shelf number aur index ke sath properly managed hai (DBMS).",
    examTip: "Difference likhte waqt ek comparison table zaroor banaye (Redundancy, Recovery, Security points use kare).",
    diagramHint: "Comparison table diagram with icons showing 'Duplicate Data' (File System) vs 'Unique Data' (DBMS).",
    diagramUrl: "true"
  },
  {
    topic: "Advantage of DBMS",
    explanation: "DBMS use karne ke fayde simple hain: Yeh data ko safe rakhta hai, space bachata hai, aur jab boht saare log ek saath kaam karte hain toh data ko corrupt nahi hone deta.",
    keyPoints: [
      "Data Sharing: Multiple users bina conflict ke ek hi database access kar sakte hain.",
      "Atomicity: Transaction ya toh pura hoga ya bilkul nahi (All or Nothing).",
      "Backup & Recovery: System crash hone par data wapas laane ka feature hota hai.",
      "Standardization: Pure organization mein data format uniform rehta hai."
    ],
    realLifeExample: "ATM Withdrawal—Agar paise kat gaye par machine se nahi nikle, toh transaction fail hoke paise wapas aa jate hain, yeh DBMS ki Atomicity ki wajah se hai.",
    examTip: "Points mein 'Atomicity' aur 'Data Integrity' jaise keywords use karne par full marks milte hain.",
    diagramHint: "A diagram showing multiple 'Users' connected to a single 'Central Database' block.",
    diagramUrl: "true"
  },
  {
    topic: "The 3 level architecture of DBMS",
    explanation: "DBMS architecture humein data ko abstractly dekhne mein madad karta hai. Ismein teen levels hote hain taaki developer aur user ke beech ek saaf separation rahe.",
    keyPoints: [
      "View Level (External): Sabse upar wala level jahan user ko sirf zaruri cheezein dikhti hain.",
      "Conceptual Level (Logical): Middle level jo batata hai ki 'What' data is stored (Tables, Relationships).",
      "Physical Level (Internal): Sabse niche wala level jahan data actually disk/hard drive pe bit format mein save hota hai.",
      "Data Independence: Ek level pe change karne se dusre pe farq nahi padta."
    ],
    realLifeExample: "Jaise Car chalana—Aapko sirf steering aur pedals dikhte hain (View Level), engine ki logic middle mein hai (Conceptual), aur piston/valves actually physical engine block mein move kar rahe hain (Physical).",
    examTip: "3-Schema Architecture diagram banaye aur 'Data Independence' word ko highlight karein.",
    diagramHint: "Teen boxes banaiye (External, Conceptual, Internal) aur unke beech logical aur physical data independence lines dikhaiye.",
    diagramUrl: "true"
  },
  {
    topic: "Overview of Data Design Entities",
    explanation: "Data design mein 'Entities' wo real-world objects hote hain jinko hume system mein track karna hota hai. Jaise ek college system mein Student ek entity hai.",
    keyPoints: [
      "Entity: Koi bhi physical ya abstract object jiski property ho (Rectangle block).",
      "Entity Set: Similar entities ka group (e.g., All students in a class).",
      "Attributes: Entity ki properties (Oval shapes) (e.g., Name, Roll No).",
      "Key Attribute: Jo entity ko uniquely identify kare (Underlined attribute)."
    ],
    realLifeExample: "E-commerce app mein 'Product', 'Customer', aur 'Order' sab unique entities hain.",
    examTip: "Entity aur Entity Set ke beech difference clarity se likhein aur Rectangle symbol use karein.",
    diagramHint: "Ek Rectangle box banaiye jiske andar 'Student' likha ho aur charo taraf ovals ho attributes ke liye.",
    diagramUrl: "true"
  },
  {
    topic: "Components of DBMS",
    explanation: "DBMS sirf ek software nahi, balki ek pura system hai jo hardware, software, data, users aur procedures se milkar banta hai.",
    keyPoints: [
      "Hardware: Computer, hard disk, aur storage system.",
      "Software: Actual DBMS engine jo queries (SQL) process karta hai.",
      "Data: Sabse zaruri hissa, jo records hum manage karte hain.",
      "Users: DBA (Admin), Application Programmers, aur End Users.",
      "Procedures: Rules aur instructions (How-to guides) system manage karne ke liye."
    ],
    realLifeExample: "Railway Reservation: Servers (Hardware), IRCTC Portal (Software), Passenger details (Data), Booking Clerks (Users), Reservation rules (Procedures).",
    examTip: "In panch components ko hierarchy diagram mein dikhaiye.",
    diagramHint: "Ek central 'DBMS' circle banaiye aur charo taraf panch components as satellites nodes.",
    diagramUrl: "true"
  },
  {
    topic: "Conceptual Data Base Design with ER Model",
    short: "ER Diagram system ka blueprint hai jo entities aur unke beech logical relationships ko visually show karta hai.",
    detailed: "Entity-Relationship (ER) diagram database design ka visual tool hai. Isme Rectangles (Entities), Ellipses (Attributes), aur Diamonds (Relationships) use hote hain. Yeh conceptual level pe requirements mapping karta hai taaki developer logic samajh sake bina actual tables dekhe. Isme cardinality (1:1, 1:N, M:N) aur participation constraints (Total/Partial) define ki jati hain.",
    bulletin: [
      "Cardinality: Defines mapping limits (e.g., one student has one ID).",
      "Diagram Symbols: Rectangles(E), Ellipses(A), Diamonds(R), Lines.",
      "Conceptual Design: Bridge between business rules and table logic.",
      "Participation: Total (Double line) vs Partial participation constraints.",
      "Standard: Peter Chen's notation is the academic base for ER design."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Weak Entities",
    short: "Weak entity wo hai jo bina owner (strong) entity ke exist nahi kar sakti.",
    detailed: "Weak Entity ki apni koi identifying primary key nahi hoti (e.g., Dependents of an Employee). Isko identify karne ke liye owner entity ki key aur ek partial key, jise 'Discriminator' kehte hain, ki zaroorat hoti hai. ER diagram mein isko double rectangle se show karte hain aur iski identifying relationship double diamond se denote ki jati hai.",
    bulletin: [
      "No Primary Key: Depends on the parent entity.",
      "Representation: Double rectangle symbol.",
      "Identifying Relationship: Linked to owner via double diamond symbol.",
      "Partial Key: Uses a discriminator to distinguish items.",
      "Total Participation: Always fully dependent on its owner."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Generalization and Specialization",
    short: "Generalization bottom-up process hai (combining entities), jabki Specialization top-down process hai (splitting entities).",
    detailed: "ER modeling mein class hierarchies hoti hain. 1. Generalization: Jab multiple specific entities ko combine karke ek broader entity banayi jati hai (jaise 'Car' aur 'Truck' milke 'Vehicle' bante hain). 2. Specialization: Ek general entity ko aur specifically sub-divide karna (e.g., 'Employee' ko 'Manager' aur 'Worker' mein split karna). Inheritance dono mein use hoti hai.",
    bulletin: [
      "Generalization: Bottom-up abstraction approach.",
      "Specialization: Top-down refinement approach.",
      "Inheritance: Lower-level entities inherit attributes from higher-level.",
      "ISA Relationship: Can be expressed as 'Car IS A Vehicle'.",
      "Usage: Resolves overlap and organizes data neatly."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Aggregation",
    short: "Aggregation ek relationship-of-relationships concept hai jo complex ER logic model karne mein madat karta hai.",
    detailed: "Jab abstract level par ek relationship ko hi ek 'Entity' ki tarah treat kiya jata hai taaki use kisi aur entity/relationship ke saath connect kiya ja sake, to use Aggregation kehte hain. Yeh basically nested relationships ko simplify karne ke liye ER diagram mein box enclosure se show kiya jata hai.",
    bulletin: [
      "Abstraction logic: Treating a relationship as an entity.",
      "Complexity resolution: Helps link higher-order relationships.",
      "Visuals: Drawn by putting a bounding box around a relationship.",
      "Ternary Avoidance: Often used to avoid complex ternary relationships.",
      "Use Case: E.g., A 'Project Assignment' relationship connected to an 'Evaluation' entity."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Relational Model",
    explanation: "Relational model data ko simple 'Tables' (Relations) mein organize karta hai. Yeh modern database management ka backbone hai.",
    keyPoints: [
      "Tuple: Table ki ek Single Row (Record).",
      "Attribute: Table ka ek Single Column (Field).",
      "Domain: Kisi column mein allow hone wali values ka range.",
      "Primary Key: Jo har row ko uniquely identify kare."
    ],
    realLifeExample: "Excel sheet jahan rows aur columns properly defined hote hain, wo ek basic relational model ka example hai.",
    examTip: "Table bana kar 'Tuple', 'Attribute', aur 'Degree' ko mark karein examiner ko impress karne ke liye.",
    diagramHint: "Ek simple table design jiske parts (Row, Column, Header) labeled hon.",
    diagramUrl: "true"
  },
  {
    topic: "Functional Dependencies",
    explanation: "Functional Dependency (FD) ek constraint hai jo batata hai ki ek column (X) ki value doosre column (Y) ki value ko fix karti hai. Iska use normalization ke liye hota hai.",
    keyPoints: [
      "Notation: X -> Y (X determinant hai, Y dependent).",
      "Trivial FD: Jab Y, X ka hi ek hissa ho (e.g., RollNo, Name -> Name).",
      "Transitive FD: Agar A->B aur B->C, toh indirectly A->C ban jata hai.",
      "Importance: FD identify karke hi hum table se redundancy (duplicate data) nikalte hain."
    ],
    realLifeExample: "Jaise 'Aadhar Number' -> 'Name'. Agar mujhe Aadhar number pata hai, toh main person ka naam uniquely nikal sakta hoon.",
    examTip: "X -> Y signify karta hai ki Y is functionally dependent on X. Is line ko exam mein underline karein.",
    diagramHint: "Ek arrow diagram dikhaiye: [Aadhar Number] --- determines ---> [User Name]."
  },
  {
    topic: "Third Normal Form",
    explanation: "3NF table ko aur bhi clean banata hai by ensuring ki koi bhi non-key column kisi doosre non-key column pe depend na kare.",
    keyPoints: [
      "Condition 1: Table 2NF mein honi chahiye.",
      "Condition 2: No Transitive Dependency (Non-prime attribute should not depend on another non-prime attribute).",
      "Goal: Data duplication ko zero ke kareeb lana.",
      "Mantra: Everything should depend on the Key, the whole Key, and nothing but the Key."
    ],
    realLifeExample: "Student table mein agar City depends on Pincode, aur Pincode depends on StudentID, toh studentID -> Pincode -> City ek transitive dependency hai. 3NF ise tod dega.",
    examTip: "Transitive dependency word ka zikr zaroor karein aur example table banayein.",
    diagramHint: "Example table split dikhaiye: [ID, Pin, City] split into [ID, Pin] and [Pin, City]."
  },
  {
    topic: "SQL Queries: Union, Intersection and Except",
    explanation: "Yeh Set Operations hain jo do queries ke results ko aapas mein combine ya compare karne ke kaam aate hain.",
    keyPoints: [
      "UNION: Dono queries ki unique rows ko combine karta hai.",
      "INTERSECT: Sirf wahi rows dikhata hai jo dono results mein common hain.",
      "EXCEPT (MINUS): Pehli query ki wo rows jo doosri mein nahi hain.",
      "Constraint: Dono queries mein number of columns aur data types same hone chahiye."
    ],
    realLifeExample: "UNION ka use - Ek shop ke 'Local Customers' aur 'Online Customers' ki combined list nikalne ke liye.",
    examTip: "Venn Diagrams banakar in operations ko samjhayein, full marks milenge.",
    diagramHint: "A B overlap circles with shaded areas for Union, Intersect, and Except."
  },
  {
    topic: "Boyce-Codd Normal Form",
    explanation: "BCNF 3NF se bhi zyada strict hai. Yeh tab use hota hai jab table mein multiple candidate keys aapas mein overlap kar rahi hon.",
    keyPoints: [
      "Rule: Har functional dependency (X -> Y) mein, X hamesha ek 'Super Key' honi chahiye.",
      "Stricter than 3NF: BCNF redundancy ke har chote se chote case ko solve karta hai.",
      "Decomposition: Isme table ko thoda zyada split karna pad sakta hai."
    ],
    realLifeExample: "Ek professor jo multiple subjects padhata ho aur students ka multi-key dependency ho, wahan BCNF lagana padta hai data accurately save karne ke liye.",
    examTip: "BCNF ko 3.5 NF bhi kehte hain, ye fact likhna mat bhulna.",
    diagramHint: "Hierarchy diagram dikhaiye: 1NF -> 2NF -> 3NF -> BCNF (Strictness direction)."
  },
  {
    topic: "ODBC and JDBC",
    explanation: "ODBC aur JDBC middleware APIs hain jo aapke software code (Java/C++) ko database (MySQL/Oracle) se baat karne ke liye bridge dete hain.",
    keyPoints: [
      "ODBC (Open DB Connectivity): C/C++ apps ke liye standard hai.",
      "JDBC (Java DB Connectivity): Java ecosystem ke liye exclusive API hai.",
      "Platform Independence: Code change kiye bina aap backend database badal sakte hain.",
      "Standardization: Har database engine ke liye alag drivers use hote hain par code style same rehta hai."
    ],
    realLifeExample: "Jaise Universal Charger—aapka phone koi bhi ho, standard protocol (driver) se charge ho jata hai.",
    examTip: "Architecture diagram (Application -> JDBC/ODBC -> Driver -> Database) zaroor banayein.",
    diagramHint: "Middleware layer architecture with arrows showing data flow."
  },

  // BCA-402 Digital Electronics
  {
    topic: "Basic Computer Block Diagram",
    explanation: "Yeh diagram dikhata hai ki computer ke main hardware parts (CPU, Memory, I/O) aapas mein kaise coordinate karte hain.",
    keyPoints: [
      "CPU: Brain jo calculation (ALU) aur management (CU) karta hai.",
      "Memory: Jahan programs aur data temporarily save hote hain (RAM).",
      "Input Unit: Keyboard/Mouse jahan se commands milti hain.",
      "Output Unit: Monitor/Printer jahan result dikhta hai."
    ],
    realLifeExample: "Jaise aapka dimaag (CPU) information process karta hai aur hath-paon (I/O) action lete hain.",
    examTip: "Block diagram mein Arrows ka dhyan dein (Data flow vs Control flow) — dotted lines usually control dikhati hain.",
    diagramHint: "Central CPU block connected to Memory and surrounding I/O blocks with arrows.",
    diagramUrl: "true"
  },
  {
    topic: "The Von-Neumann Architecture",
    explanation: "Yeh ek design framework hai jisme computer code aur data dono ko ek hi memory mein rakha jata hai. Hamare aaj ke computers isi par base hain.",
    keyPoints: [
      "Stored Program Concept: Code aur data same storage use karte hain.",
      "Sequential Execution: Instructions ek ke baad ek process hoti hain.",
      "Bottleneck: CPU and Memory ke beech single path hone se traffic slow ho sakta hai.",
      "Foundational Design: Proposed by John Von Neumann in 1945."
    ],
    realLifeExample: "Jaise ek hi copy mein aap notes bhi likhte ho aur rough work bhi karte ho (Shared memory).",
    examTip: "Exam mein 'Von Neumann Bottleneck' ko highlight karein, ye advanced concept hai marks badhane ke liye.",
    diagramHint: "CPU and Memory connected via a shared bus line labeled 'Shared Data/Instruction Path'.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Cycle",
    explanation: "CPU har command ko ek cycle mein execute karta hai jise Instruction Cycle kehte hain. Iske char main steps hote hain: Fetch, Decode, Execute, aur Store.",
    keyPoints: [
      "Fetch: Memory se instruction ko CPU registers mein lana.",
      "Decode: Control Unit instruction ka matlab samjhati hai (Decoding).",
      "Execute: Actual operation perform karna (Arithmetic ya Logic).",
      "Store: Result ko register ya RAM mein wapas save karna."
    ],
    realLifeExample: "Jaise ek Waiter—pehli bar Order leta hai (Fetch), kitchen ko samjhata hai (Decode), khana banwata hai (Execute), aur table pe deliver karta hai (Store).",
    examTip: "Exam mein ek flow chart banaiye showing loop connecting all 4 stages.",
    diagramHint: "Circular loop diagram with arrows: Fetch -> Decode -> Execute -> Store -> (Back to Fetch).",
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Cycle",
    explanation: "Interrupt ek aisa signal hai jo CPU ko current kaam rok kar kisi urgent task (jaise keyboard input ya error) ko handle karne ke liye majboor karta hai.",
    keyPoints: [
      "Urgency: Jab computer ko kuch urgent handle karna ho, interrupt use hota hai.",
      "ISR (Interrupt Service Routine): Wo special code jo interrupt ke waqt chalta hai.",
      "Types: Hardware (Mouse click) ya Software (Divide by zero error).",
      "Maskable: Jin interrupts ko temporarily ignore kiya ja sake."
    ],
    realLifeExample: "Jaise aap movie dekh rahe ho (Current task) aur phone ki bell baj jaye (Interrupt). Aap movie pause karke phone uthate ho (ISR).",
    examTip: "Interrupt handling ke steps (Save State -> Run ISR -> Restore State) line-wise likhein.",
    diagramHint: "Interrupt flow diagram: Main Program -> [Interrupt Signal] -> Jump to ISR -> Return to Main Program.",
    diagramUrl: "true"
  },
  {
    topic: "Computers: Then and Now",
    explanation: "Computer ki history ko generations mein banta gaya hai, jahan har generation mein sizes chote aur speeds fast hoti gayi hain.",
    keyPoints: [
      "1st Gen (Vacuum Tubes): Bahut bade aur garam (e.g., ENIAC).",
      "2nd Gen (Transistors): Tubes ki jagah transistors aaye, size kam hua.",
      "3rd Gen (Integrated Circuits): Ek chip pe hazaron parts (LSI era).",
      "4th Gen (Microprocessors): Sab kuch ek chip pe (Modern PC era).",
      "5th Gen (AI/Quantum): Artificial Intelligence aur super-parallel processing."
    ],
    realLifeExample: "Pehle ka computer ek pure room jitna bada tha (1st Gen), aaj ka computer aapki wrist watch mein fit hai (Apple Watch).",
    examTip: "Generation wise technology names (Vacuum tubes, Transistors, ICs, VLSI) ko tabular form mein likhein.",
    diagramHint: "Evolution timeline: Vacuum Tube -> Transistor -> IC -> Microprocessor -> AI icon.",
  },
  {
    topic: "Number Systems",
    explanation: "Computers decimal (0-9) nahi, balki binary (0,1) aur hexadecimal (0-F) language samjhte hain.",
    keyPoints: [
      "Binary (Base 2): 0 aur 1, digital electronics ka base.",
      "Hexadecimal (Base 16): Shorthand code jo memory address likhne ke kaam aata hai.",
      "Octal (Base 8): Pehle use hota tha, ab kam hai.",
      "Radix: Base number ko radix kehte hain."
    ],
    realLifeExample: "Hum 10 ungliyon se ginte hain (Decimal), par switch sirf 'On' ya 'Off' hota hai (Binary).",
    examTip: "Conversion examples (Decimal to Binary) dikhana mat bhulein, especially fractional numbers.",
    diagramHint: "Comparison table of Base 2, 8, 10, and 16 with their character sets.",
  },
  {
    topic: "Decimal & Alphanumeric Representation",
    explanation: "Computer numbers aur letters ko store karne ke liye BCD, ASCII, aur Unicode jaise standards use karta hai.",
    keyPoints: [
      "BCD (Binary Coded Decimal): Har decimal digit ko 4 binary bits mein convert karna.",
      "ASCII: English letters aur symbols ke liye standard encoding.",
      "Unicode: Global standard jo duniya ki har bhasa (Hindi, Chinese, etc.) ko cover karta hai.",
      "Parity Bit: Error check karne ke liye extra bit lagana."
    ],
    realLifeExample: "Jab aap 'A' press karte ho, computer use number '65' (ASCII) ki tarah save karta hai.",
    examTip: "ASCII aur Unicode ka difference (Storage size aur character range) zaroor mention karein.",
    diagramHint: "A character 'A' and its binary/hex mapped value representation.",
  },
  {
    topic: "Floating Point Representation",
    explanation: "Floating Point numbers real values (decimals) ko binary mein store karte hain scientific notation (Mantissa aur Exponent) ka use karke.",
    keyPoints: [
      "IEEE 754: Sabse common standard jo globally computers use karte hain.",
      "Sign Bit: 1 bit batati hai number positive (+) hai ya negative (-).",
      "Exponent: Batata hai decimal point kahan move hoga.",
      "Mantissa: Actual digits or value jo store karni hai."
    ],
    realLifeExample: "Jaise 0.0005 m ko digital memory mein 5 x 10^-4 ki tarah save karna accuracy ke liye.",
    examTip: "IEEE 32-bit (Single Precision) aur 64-bit (Double Precision) ke configuration ko zaroor draw karein.",
    diagramHint: "3 blocks diagram: [Sign] [Exponent] [Mantissa] showing bit distribution (1, 8, 23).",
  },
  {
    topic: "Error Detection and Correction Codes",
    explanation: "Data transfer ke waqt agar koi bit badal jaye, toh Error Codes use hote hain use pakadne (Detection) aur sahi karne (Correction) ke liye.",
    keyPoints: [
      "Parity Bit: Ek extra bit add karna (Odd ya Even) signal detect karne ke liye.",
      "Hamming Code: Yeh error ko sirf dhoondta nahi, balki use automatically correct bhi karta hai.",
      "Checksum: Network mein bad data packets ko discard karne ke liye use hota hai.",
      "Reliability: Isse files corrupt hone se bachti hain."
    ],
    realLifeExample: "Jaise bank transaction ke waqt agar signal weak ho, toh CRC codes ensure karte hain ki paise sahi account mein jayein.",
    examTip: "Hamming Code ka parity check table banakar dikhayein examiner ko marks ke liye.",
    diagramHint: "Data bits vs Redundant (Parity) bits comparison box.",
  },
  {
    topic: "Logic Gates",
    explanation: "Logic gates digital systems ke sabse chote hisse (atoms) hain jo binary signals (0,1) pe decision lete hain.",
    keyPoints: [
      "Basic Gates: AND (Multiplier), OR (Adder), NOT (Inverter).",
      "Universal Gates: NAND aur NOR (Inse koi bhi doosra gate banaya ja sakta hai).",
      "XOR (Exclusive OR): Jab inputs alag hon toh hi output 1 deta hai.",
      "Building Blocks: Inhe combine karke hi CPU banta hai."
    ],
    realLifeExample: "AND Gate: Jaise microwave chalane ke liye Menu set hona chahiye AND darwaza band hona chahiye.",
    examTip: "Exam mein Truth Table (0/1 combinations) har gate ke sath zaroor banayein.",
    diagramHint: "Standard symbols of AND, OR, NOT, NAND, NOR with their boolean expressions.",
    diagramUrl: "true"
  },
  {
    topic: "Logic Circuits",
    explanation: "Jab multiple logic gates aapas mein judte hain, toh wo ek Specific Function perform karte hain jise Logic Circuit kehte hain.",
    keyPoints: [
      "Voltage Levels: Digital circuits 5V ko '1' aur 0V ko '0' maante hain.",
      "Processing: Yeh circuits binary data process karke control signals dete hain.",
      "Types: Combinational (State independent) aur Sequential (State dependent)."
    ],
    realLifeExample: "Calculator ke buttons press karne pe display dikhna circuits ki coordination hai.",
    examTip: "Circuits ko block diagram ke form mein dikhayen jahan inputs aur outputs clearly marked hon.",
    diagramHint: "Block diagram with 'Input', 'Processing Logic (Gates)', and 'Output' labels.",
    diagramUrl: "true"
  },
  {
    topic: "Combinational Circuits",
    explanation: "In circuits mein koi memory nahi hoti. Inka output sirf us waqt ke inputs pe depend karta hai.",
    keyPoints: [
      "Instant Output: Input badalte hi output instantly change ho jata hai.",
      "Examples: Adders, MUX, Decoders, Encoders.",
      "Boolean Algebra: Inke design ke liye Boolean math use kiya jata hai.",
      "Efficiency: Speed fast hoti hai kyunki past state check nahi karni padti."
    ],
    realLifeExample: "Ek light switch—jab aap switch dabate ho directly output badalta hai, puraana record nahi dekhta.",
    examTip: "Combinational aur Sequential ke beech difference (Memory factor) ko highlight karein.",
    diagramHint: "Block diagram showing inputs going into a 'Combinational Logic' box and coming out as outputs directly.",
    diagramUrl: "true"
  },
  {
    topic: "Minimization of Gates",
    explanation: "Logic design mein hamara hamesha goal hota hai ki kam se kam gates use karein (Cost kam karne ke liye). Iske liye K-Map use hota hai.",
    keyPoints: [
      "K-Map (Karnaugh Map): Ek visual method hai circuit simplify karne ka.",
      "Grouping: Pairs (2), Quads (4), aur Octets (8) banake variables khatam kiye jate hain.",
      "Don't Care (X): Jin inputs ka record matter nahi karta, unhe grouping mein help ke liye use karte hain.",
      "Simplification: Isse circuit chota, fast aur sasta banta hai."
    ],
    realLifeExample: "Jaise hum Maths mein equations ko simplify karte hain taaki solve karna asaan ho.",
    examTip: "4-variable K-Map draw karein aur 1s ko group karke final equation derive karein.",
    diagramHint: "A 4x4 K-map grid with labeled binary axes (AB, CD) showing groups of 1s.",
  },
  {
    topic: "Half Adder and Full Adder",
    explanation: "Adders CPU ke wo circuits hain jo binary addition (plus) ka kaam karte hain.",
    keyPoints: [
      "Half Adder: 2 bits ko add karta hai (Sum and Carry). Yeh pichle carry ko handle nahi karta.",
      "Full Adder: 3 bits ko add karta hai (A, B, aur pichla Carry). Isse multiple columns add ho sakte hain.",
      "Arithmetic Foundation: Calculator ka plus button inhi pe base hai."
    ],
    realLifeExample: "Jaise hum carry-over karte hain maths mein (e.g., 9+5 = 4 with 1 carry), computer adders wahi logic bits mein karte hain.",
    examTip: "Donon adders ke Logic Diagrams aur Boolean expressions (Sum=A⊕B, Carry=A.B) likhein.",
    diagramHint: "Logic Gate structure of Half Adder (XOR + AND) and Full Adder (2 Half Adders).",
    diagramUrl: "true"
  },
  {
    topic: "Encoder and Decoder",
    explanation: "Decoders binary codes ko normal signals mein badalte hain, aur Encoders normal signals ko binary code mein convert karte hain.",
    keyPoints: [
      "Decoder: n inputs se 2^n outputs generate karta hai (e.g., Selecting a memory address).",
      "Encoder: Multiple Active lines ko chote binary code mein compress karta hai.",
      "Usage: Keyboard buttons (Encoder) aur Memory Addressing (Decoder) mein main role hota hai."
    ],
    realLifeExample: "Decoder: Jaise remote control—ek button dabane pe TV mein specific function select hona. Encoder: Calculator keypad—button dabane pe binary number generate hona.",
    examTip: "3-to-8 Decoder ka logic diagram aur truth table practice karein, ye aksar pucha jata hai.",
    diagramHint: "Block diagram showing 'n inputs' entering and '2^n outputs' leaving for a Decoder.",
    diagramUrl: "true"
  },
  {
    topic: "Multiplexer and Demultiplexer",
    explanation: "MUX multiple inputs mein se kisi ek ko select karke output pe bhejta hai. DEMUX iska theek ulta karta hai.",
    keyPoints: [
      "MUX (Data Selector): N select lines ka use karke 1 input ko chunna.",
      "DEMUX (Data Distributor): 1 input ko multiple possible output lines pe bhejana.",
      "Necessity: Inke bina CPU ek sath multiple data sources se baat nahi kar pata."
    ],
    realLifeExample: "MUX: Jaise TV set-top box—pichhe se 100 channels (inputs) aa rahe hain, par aap remote se 1 channel (Select line) screen pe dekhte ho.",
    examTip: "MUX ko 'Many-to-One' aur DEMUX ko 'One-to-Many' device ke roop mein define karein.",
    diagramHint: "Trapezoid shaped block for MUX showing multiple inputs and 1 output with select lines at the bottom.",
    diagramUrl: "true"
  },
  {
    topic: "Programmable Logic Array (PLA)",
    explanation: "PLA ek special chip hai jise hum apne hisaab se program kar sakte hain custom logical tasks perform karne ke liye.",
    keyPoints: [
      "Flexibility: Iske AND aur OR dono gates ko hum connect ya disconnect kar sakte hain.",
      "Efficiency: Yeh fix chips se behtar hai kyunki ye silicon space bachaata hai.",
      "Implementation: Sum of Products (SOP) logic implementation ke liye design kiya gaya hai."
    ],
    realLifeExample: "Jaise ek Blank Notebook—aap usmein kuch bhi likh sakte ho (Custom Logic), unlike printed books (Fixed Logic).",
    examTip: "PLA, PAL, aur PROM ke beech ka difference table banayein (Which part is programmable).",
    diagramHint: "Grid of horizontal and vertical lines showing programmable fuse links between AND and OR gates.",
    diagramUrl: "true"
  },
  {
    topic: "Read Only Memory (ROM)",
    explanation: "ROM ek permanent memory hai jo computer band hone ke baad bhi data (e.g., Startup instructions) ko delete nahi hone deti.",
    keyPoints: [
      "Non-Volatile: Power jane pe bhi data save rehta hai.",
      "Types: PROM (One-time programmable), EPROM (Erasable by UV light), EEPROM (Electrically erasable).",
      "Usage: BIOS ya hardware firmware store karne ke liye."
    ],
    realLifeExample: "Jaise Car ki manual—aap ise sirf padh sakte ho (Read-only), change nahi kar sakte, aur ye hamesha car mein rehti hai.",
    examTip: "EEPROM ka full form (Electrically Erasable Programmable Read-Only Memory) correctly likhein.",
    diagramHint: "Internal grid diagram showing fixed diodes/transistors representing stored bits.",
    diagramUrl: "true"
  },
  {
    topic: "RAM vs ROM",
    explanation: "RAM temporary workspace hai, jabki ROM permanent startup instructions save karti hai.",
    keyPoints: [
      "Volatility: RAM volatile hai (Data wipes on power off), ROM non-volatile hai.",
      "Speed: RAM bahut fast hoti hai CPU ke operations ke liye.",
      "Read/Write: RAM mein hum data read aur write dono kar sakte hain. ROM mein mainly read hota hai."
    ],
    realLifeExample: "RAM: Jaise aapka desk—aap us pe files kholke kaam karte ho. ROM: Jaise library ki reference book—aap sirf dekh sakte ho, badal nahi sakte.",
    examTip: "SRAM (Static) aur DRAM (Dynamic) ke beech difference (Refresh requirement) highlights karein.",
    diagramHint: "Side-by-side comparison boxes for Volatility, Usage, and Cost.",
    diagramUrl: "true"
  },
  {
    topic: "Sequential Circuits",
    explanation: "Sequential circuits mein memory hoti hai. Inka output current inputs + pichli ya purani (Past) states pe depend karta hai.",
    keyPoints: [
      "Memory: Inmein Flip-flops use hote hain state save karne ke liye.",
      "Clocking: Aksar ye circuits 'Clock Pulse' ke sath sync hoke kaam karte hain.",
      "Complexity: Combinational se mushkil hote hain par memory ke liye zaroori hain."
    ],
    realLifeExample: "Jaise Locker ka Digital Lock—aapne '1' dabaya, switch ko yaad (Memory) rakhna hai ki '1' pehle dab chuka hai tabhi '2' accept karega.",
    examTip: "Sequential logic = Combinational logic + Feedback (Memory). Is formula ko box mein likhein.",
    diagramHint: "Combinational block with an extra 'Memory Element' box connected via feedback arrows.",
    diagramUrl: "true"
  },
  {
    topic: "Flip-Flops (SR, JK, D, T)",
    explanation: "Flip-flops digital memory ke sabse basic elements hain jo sirf 1-bit (0 ya 1) data save karte hain.",
    keyPoints: [
      "SR: Basic Set/Reset flip-flop. (Donon 1 hon toh error deta hai).",
      "JK: SR ka improved version jo 1,1 pe toggle (switch) karta hai.",
      "D (Data): Data delay aur storage ke liye best hai.",
      "T (Toggle): Input 1 hote hi output badal deta hai (Counter mein use hota hai)."
    ],
    realLifeExample: "Jaise ek light switch—ek baar dabaya toh 'On' (1), dobara dabaya toh 'Off' (0). Ye state yaad rakhta hai.",
    examTip: "Master-Slave flip-flop ka zikr karein 'Race Around Condition' solve karne ke liye.",
    diagramHint: "Logic symbol of JK Flip-flop with J, K, and Clock inputs.",
    diagramUrl: "true"
  },
  {
    topic: "Registers",
    explanation: "Registers kaafi saare flip-flops ka ek group hota hai jo fast temporary storage ke kaam aata hai CPU ke andar.",
    keyPoints: [
      "Speed: Registers computer ki sabse fast memory hote hain.",
      "Types: SISO (Serial In Serial Out), PIPO (Parallel In Parallel Out - Best).",
      "General Purpose: AX, BX, CX registers jo programmers use karte hain operations ke liye."
    ],
    realLifeExample: "Jaise aapke haath mein pakdi hui cheez—ye use ke liye sabse fast aur paas hai, unlike bag (RAM) jo thoda door hai.",
    examTip: "Registers ke types aur shift functionality (Left/Right shift) ke uses likhein.",
    diagramHint: "Parallel row of 4 or 8 flip-flops labeled as a single register unit.",
    diagramUrl: "true"
  },
  {
    topic: "Counters (Asynchronous and Synchronous)",
    explanation: "Counters sequential circuits hain jo computer cycles ya clock pulses ko count karne ke kaam aate hain.",
    keyPoints: [
      "Asynchronous (Ripple): Ek flip-flop ka output agle ke liye clock banta hai (Slow delay).",
      "Synchronous: Saare flip-flops ek sath common clock se trigger hote hain (Fast).",
      "Up/Down Counter: Numbers ko badhane ya ghatane wala logic."
    ],
    realLifeExample: "Jaise Digital Clock ka second counter—har second (pulse) pe value badhti hai.",
    examTip: "Ripple counter aur Synchronous counter ke beech ka propagation delay difference table banayein.",
    diagramHint: "Chain of flip-flops connected with a clock line and output lines (Q0, Q1, Q2).",
    diagramUrl: "true"
  },
  {
    topic: "ALU Organization",
    explanation: "ALU (Arithmetic Logic Unit) CPU ka wo engine hai jo actual math (Plus/Minus) aur logic (AND/OR) perform karta hai.",
    keyPoints: [
      "Arithmetic: Addition, Subtraction, Multiplication handles karta hai.",
      "Logic: Comparison aur bitwise logic (XOR/NOT) handles karta hai.",
      "Flags: Carry (C), Zero (Z), aur Sign (S) bits result ka status batati hain."
    ],
    realLifeExample: "Jaise Calculator ke andar ka chip jo input numbers lekar result screen pe bhejta hai.",
    examTip: "Accumulator register ka role ALU result store karne mein highlights karein.",
    diagramHint: "V-shaped ALU block showing two inputs (A, B) and one output (F) with control lines.",
    diagramUrl: "true"
  },
  {
    topic: "Control Unit",
    explanation: "Control Unit CPU ka 'Traffic Policeman' hai jo instructions ko decode karta hai aur hardware ko signals bhejta hai.",
    keyPoints: [
      "Coordinator: CPU ke har module ko batata hai ki kab kab kya karna hai.",
      "Clock Sync: Computer ki clock ke mutabik timing signals generate karta hai.",
      "Decoding: Binary code ko action signals mein badalta hai."
    ],
    realLifeExample: "Jaise Orchestra ka conductor—wo kisi instrument ko nahi bajata, par sabko batata hai kab bajna hai.",
    examTip: "Microprogrammed vs Hardwired CU ke differences ko ache se tabular form mein present karein.",
    diagramHint: "Central CU block sending control signals (dotted lines) to ALU and Memory.",
    diagramUrl: "true"
  },
  {
    topic: "Hardwired Control Unit",
    explanation: "Hardwired CU mein control logic directly hardware gates aur wires mein fix (hardcoded) hoti hai.",
    keyPoints: [
      "Fastest: Isme koi software layer nahi hoti, signal seedha gates se jata hai.",
      "Inflexible: Ise design hone ke baad badalna impossible hai.",
      "Usage: RISC processors mein fast processing ke liye use hota hai."
    ],
    realLifeExample: "Jaise purane zamane ka mechanical calculator—uske purze jis tarah fitted hain, wo sirf wahi calculation kar sakta hai.",
    examTip: "Hardwired CU ko modern fast computers (ARM/RISC) ke liye efficient batayein.",
    diagramHint: "Fixed logic gate matrix with state flip-flops.",
    diagramUrl: "true"
  },
  {
    topic: "Microprogrammed Control Unit",
    explanation: "Microprogrammed CU mein logic ek choti si memory (Control ROM) mein software-like form mein save hoti hai.",
    keyPoints: [
      "Flexible: Firmware update karke computer ki functionality badli ja sakti hai.",
      "Complex: Bahut saari advanced instructions handle kar sakta hai (CISC era).",
      "Slower: Hardwired ke comparison mein transition time thoda zyada hota hai."
    ],
    realLifeExample: "Jaise aapka Smart Microwave—uske software (Microprogram) mein recipes ki instructions code mein save hain.",
    examTip: "Horizontal aur Vertical micro-instruction formats ko explain karein.",
    diagramHint: "CU structure with a specific 'Control Store (memory)' block shown inside.",
    diagramUrl: "true"
  },
  {
    topic: "Addressing Modes",
    explanation: "Addressing modes CPU ko batate hain ki use apna data (operand) memory ke kis hisse se fetch karna hai.",
    keyPoints: [
      "Immediate: Data seedha instruction mein hi hota hai (Fastest).",
      "Direct: Memory ka address instruction mein hota hai.",
      "Indirect: Address ka bhi address (Pointer logic).",
      "Indexed: Base address + index register (Array ke liye use hota hai)."
    ],
    realLifeExample: "Immediate: 'Paise mere pocket mein hain'. Direct: 'Paise locker number 50 mein hain'. Indirect: 'Paise ka address diary mein likha hai'.",
    examTip: "Program Counter (PC) relative addressing mode ko branching ke liye explain karein.",
    diagramHint: "Memory blocks showing arrows pointing from instruction to data addresses.",
    diagramUrl: "true"
  },
  {
    topic: "Input Output Techniques",
    explanation: "CPU aur bahar ke devices (Mouse, Disk) ke beech data transfer ke techniques hain.",
    keyPoints: [
      "Programmed I/O: CPU baar-baar check karta hai device ready hai ya nahi (Slow).",
      "Interrupt Driven: Device alert bhejti hai jab data ready ho (Efficient).",
      "DMA (Direct Memory Access): Device aur RAM directly baat karte hain, CPU ko disturb nahi karte (Best for fast data)."
    ],
    realLifeExample: "Programmed: Aap baar-baar darwaza kholke dekhte ho delivery aayi ya nahi. Interrupt: Doorbell bajna. DMA: Delivery wala seedha kitchen (RAM) mein saaman rakh gaya.",
    examTip: "DMA controller ke advantage (CPU bandwidth saving) par focus karein.",
    diagramHint: "DMA architecture showing direct arrow between I/O Device and Main Memory.",
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    explanation: "RAID multiple hard disks ko milakar ek single unit banata hai high speed aur data safety ke liye.",
    keyPoints: [
      "RAID 0 (Striping): Super fast speed par ek bhi disk kharab hui toh data gaya.",
      "RAID 1 (Mirroring): Do disks mein same data (Full safety, par costly).",
      "RAID 5 (Parity): Speed aur safety dono ka balance (BCA exam favorite).",
      "RAID 10: Speed + Mirroring (High-end servers)."
    ],
    realLifeExample: "RAID 1: Jaise aap important document ki do photo copies rakhte ho safety ke liye.",
    examTip: "RAID 5 ke 'Parity bit' concept ko draw karke samjhayein.",
    diagramHint: "Group of disks showing data stripes (A1, A2, B1, B2) and parity blocks.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Pipelining",
    explanation: "Yeh ek assembly-line technique hai jahan CPU ek instruction khatam hone ka wait nahi karta, balki agle ka kaam beech mein hi shuru kar deta hai.",
    keyPoints: [
      "Overlap: Pehli instruction decode ho rahi hai toh doosri fetch ho sakti hai.",
      "Throughput: Computer ek waqt mein zyada instructions process kar pata hai.",
      "Hazards: Kabab mein haddi—agar data dependency ho toh pipeline 'stall' (rukn) sakti hai."
    ],
    realLifeExample: "Jaise Car manufacturing plant—ek stage pe engine lag raha hai, toh pichli car ki body paint ho rahi hai parallelly.",
    examTip: "Pipeline hazards (Data, Structural, Control) ke names point-wise likhein.",
    diagramHint: "Stages vs Time chart showing instructions overlapping in IF, ID, EX, MEM, WB blocks.",
    diagramUrl: "true"
  },
  {
    topic: "Memory Hierarchy",
    explanation: "Computer hardware mein storage ko speed aur cost ke hisaab se ek pyramid (hierarchy) mein arrange kiya jata hai.",
    keyPoints: [
      "Speed vs Cost: Jitna CPU ke paas (fast), utna hi mehnga aur chota.",
      "Levels: Registers (Fastest) -> Cache -> RAM -> Hard Disk (Slowest).",
      "Goal: Memory access time ko kam karna taaki CPU ko wait na karna pade."
    ],
    realLifeExample: "Registers: Aapka dimaag. Cache: Aapka hath. RAM: Aapka desk. Hard Disk: Door rakhi cupboard.",
    examTip: "Memory pyramid draw karein—top pe registers aur base pe mass storage.",
    diagramHint: "Pyramid diagram showing Registers at the peak and Magnetic Tapes at the base.",
    diagramUrl: "true"
  },
  {
    topic: "Cache Memory Organization",
    explanation: "Cache ek bahut fast buffer memory hai jo CPU aur slow RAM ke beech speed gap ko khatam karti hai.",
    keyPoints: [
      "Hit Ratio: Agar data cache mein mil gaya toh 'Hit', nahi mila toh 'Miss'.",
      "Mapping: Direct, Associative, aur Set-Associative methods data store karne ke liye.",
      "Locality of Reference: Theoretical base—padosi data fetch hone ke chances zyada hote hain."
    ],
    realLifeExample: "Jaise aapki pocket—aksar use hone wali cheezein (paisa, phone) aap pocket mein rakhte ho taaki bar-bar bag na kholna pade.",
    examTip: "Mapping techniques (Direct/Set-Associative) ke diagram exam mein full marks dilate hain.",
    diagramHint: "Block diagram showing CPU <-> Cache <-> Main Memory data exchange.",
    diagramUrl: "true"
  },
  {
    topic: "Combinational vs Sequential Circuits",
    explanation: "Combinational circuits ka output sirf current input pe depend karta hai, jabki Sequential circuits memory (history) ka use karke output dete hain.",
    keyPoints: [
      "Memory: Sequential mein memory (Flip-flops) hoti hai, Combinational mein nahi.",
      "Clocking: Sequential ko clock signal chahiye sync rehne ke liye.",
      "Complexity: Sequential circuits zyada complex hote hain par memory storage ke liye zaroori hain."
    ],
    realLifeExample: "Combinational: Calculator (Plus button). Sequential: Computer (Locker password).",
    examTip: "Dono ke beech ka difference table hamesha 5-10 marks mein aata hai.",
    diagramHint: "Side-by-side comparison of feedback loop vs direct propagation.",
    diagramUrl: "true"
  },
  {
    topic: "Input / Output System",
    explanation: "CPU aur bahar ke hardware (keyboard, monitor) ke beech communication link ko I/O System kehte hain.",
    keyPoints: [
      "Interface: CPU aur devices ki speed alag hoti hai, interface buffering handle karta hai.",
      "Ports: Hardware plug karne ke points (e.g., USB).",
      "Drivers: Wo software jo CPU ko batata hai hardware se kaise baat karein."
    ],
    realLifeExample: "Jaise interpreter—agar aapko mandarin nahi aati toh aap beech mein ek interpreter rakhte ho baat karne ke liye.",
    examTip: "I/O Controller ka block diagram zaroor banayein.",
    diagramHint: "Block diagram with CPU, System Bus, I/O Controller, and I/O Device.",
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Driven I/O",
    explanation: "Is technique mein CPU devices ke peeche nahi bhagta, balki device khud CPU ko signal (Interrupt) bhejti hai jab wo ready ho jaye.",
    keyPoints: [
      "Efficiency: CPU empty wait nahi karta, apna doosra kaam jaari rakhta hai.",
      "Asynchronous: Data kisi bhi waqt aa sakta hai, computer handle kar lega.",
      "Reliability: Koi data packet miss nahi hota."
    ],
    realLifeExample: "Jaise doorbell—aap gate pe khade hoke wait nahi karte, jab koi aata hai toh bell bajti hai aur aap darwaza kholte ho.",
    examTip: "Interrupt Service Routine (ISR) ka workflow exam mein flow chart se samjhayein.",
    diagramHint: "CPU line with a break showing 'Jump to ISR' and 'Return to Program'.",
    diagramUrl: "true"
  },
  {
    topic: "DMA (Direct Memory Access)",
    explanation: "DMA ek aisi trick hai jisme hardware devices seedha RAM se data exchange karti hain bina CPU ko bich mein laye.",
    keyPoints: [
      "CPU Freedom: CPU bada data transfer karne ke bojh se mukt ho jata hai.",
      "Speed: Hard disks aur Graphics cards ke liye bahut fast method hai.",
      "Bus Hijacking: DMA controller kuch der ke liye System Bus ka control lekar transfer finish karta hai."
    ],
    realLifeExample: "Jaise self-service buffet—aap waiteron ka wait nahi karte, seedha khana khud platform (Memory) se uthate ho.",
    examTip: "DMA controller ke registers (Address register, Count register) ke baare mein likhein.",
    diagramHint: "Architecture showing I/O device directly linked to Memory through a DMA Controller.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Formats",
    explanation: "Instruction format batata hai ki ek command (e.g., ADD) mein Opcode aur Addresses kaise arrange honge.",
    keyPoints: [
      "Opcode: Wo code jo batata hai kya operation karna hai.",
      "Zero Address: Stack use karta hai.",
      "One Address: Accumulator use karta hai.",
      "Two/Three Address: Direct registers ya memory address use karta hai."
    ],
    realLifeExample: "Jaise shortcut keys—Ctrl+S (1 command) vs 'Save this file as project.doc' (Full detail).",
    examTip: "Har format (0, 1, 2, 3 address) ka ek chota box diagram zaroor draw karein.",
    diagramHint: "Rectangular formats showing [Opcode] [Address1] [Address2].",
    diagramUrl: "true"
  },

  // BCA-403 Data Structure
  {
    topic: "Singly Linked Lists",
    short: "Linked list nodes use karta hai jo memory mein scattered ho sakte hain par pointers ke through connected rehte hain.",
    detailed: "Singly Linked List mein har node ke pass data aur ek Next pointer hota hai. Iska advantage Dynamic Sizing hai—arrays ki tarah fix size ki limit nahi hoti.",
    bulletin: [
      "Singly: One-way direction; Head to Null pointer flow.",
      "Node Structure: Contains data and next pointer.",
      "Dynamic Allocation: Grows and shrinks at runtime."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Doubly Linked Lists",
    short: "Doubly linked list bidirectional traversal provide karta hai prev aur next pointers ke through.",
    detailed: "Har node ke pass Prev aur Next pointers hote hain jo forward aur backward movement allow karte hain. Ismein deletion operation faster hota hai kyunki hume previous node ka access direct milta hai.",
    bulletin: [
      "Doubly: Two-way traversal possible.",
      "Memory: Takes more memory due to extra pointer.",
      "Head/Tail: Often uses both head and tail pointers."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Circularly Linked Lists",
    short: "Circular list ka last node wapas first node ko point karta hai round-robin efficiency ke liye.",
    detailed: "Singly ya Doubly list jisme last node null point karne ke bajaye head ko point kare. Iska common use buffer management aur scheduling algorithms mein hota hai.",
    bulletin: [
      "Circular: Constant loop structure.",
      "Round Robin: Used in OS scheduling.",
      "Traversal: Can start from any node and reach others."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Representation of Arrays in Memory",
    short: "Arrays linear memory blocks hote hain jahan elements contiguous locations pe store hote hain indexing ke through.",
    detailed: "Computer memory linear hoti hai. Array elements ko address calculate karne ke liye formula use hota hai: Address = BaseAddr + Index * SizeOfElement. 1-D arrays simple hote hain, jabki 2-D arrays Row-Major (row side) ya Column-Major (column side) order mein map ho sakte hain logic placement ke liye.",
    bulletin: [
      "Contiguous Storage: No gaps between elements.",
      "Address Calculation: BaseAddr + (Index * Size).",
      "Row Major vs Column Major: Different 2D storage layouts."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Polynomials & Sparse matrix",
    short: "Sparse matrix wo matrix hai jisme majority elements zero hote hain, aur optimized storage ki zaroorat hoti hai.",
    detailed: "Agar matrix mein non-zero elements kam hon, to zero elements store karna memory waste hai. Optimized representation: 1. Triplet Representation: (Row, Col, Value) lists save karna. 2. Compressed Sparse Row (CSR). Isse analysis speed badhti hai aur storage drastically kam ho jati hai scientific computation mein.",
    bulletin: [
      "Zero Density: Significantly more zeros than non-zeros.",
      "Triplet Form: (Row, Col, Value) list.",
      "Optimization: Saves memory and computation time."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Stack Operations",
    short: "Stack LIFO (Last-In-First-Out) logic pe based hai jahan PUSH aur POP primary operations hote hain memory pointer management ke sath.",
    detailed: "Stack ek linear data structure hai jo strictly 'Last-In-First-Out' (LIFO) protocol follow karta hai. Iska matlab hai jo element sabse aakhir mein insert kiya gaya hai, wahi sabse pehle delete hoga. Do main operations hote hain: 1. PUSH - Naya element stack ke top pe add karna. Isse pehle hume 'Stack Overflow' (Stack full hona) check karna padta hai. 2. POP - Top element ko remove karna. Isse pehle 'Stack Underflow' (Stack khali hona) check karna zaroori hai. Iske alawa 'PEEK' operation se hum top element dekh sakte hain bina use remove kiye. Hardware level pe, registers jaise 'Stack Pointer' (SP) hamesha current top element ka address hold karte hain. Stack ka use Recursion handling, Expression transformation (Infix to Postfix), aur Function calls memory management mein heavily kiya jata hai.",
    bulletin: [
      "LIFO Mechanism: Last element in is the first one to be removed.",
      "PUSH: Adding an element; requires checking for Overflow condition.",
      "POP: Removing an element; requires checking for Underflow condition.",
      "PEEK: View the top element without altering the stack state.",
      "Applications: Backtracking, Undo/Redo, Function Call Stack, Expression Parsing."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Queue: Linear and Circular",
    short: "Queue FIFO (First-In-First-Out) protocol use karta hai system scheduling aur buffering ke liye (Front & Rear pointers).",
    detailed: "1. Linear Queue: Front se delete (De-queue) aur Rear se insert (En-queue) hota hai. Issue: Rear full hone pe front khali reh gaya to data insert nahi hota. 2. Circular Queue: Is problem ko modular arithmetic se solve karta hai jahan last index ke baad wapas zero index start hota hai space optimization ke liye.",
    bulletin: [
      "FIFO Logic: First input is processed first (Fair service).",
      "Linear Queue: Suffers from memory fragmentation at the front.",
      "Circular Queue: Pointers wrap around to the start (Memory efficient).",
      "En-queue: Adding to the rear; De-queue: Removing from the front.",
      "Modulus Math: (Rear + 1) % Size logic for circular movement."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Binary Trees: Basic Terminologies and Types",
    explanation: "Binary Tree ek aisi hierarchy hai jahan har node ke zyada se zyada 2 bacche (Children) ho sakte hain—Left aur Right.",
    keyPoints: [
      "Root: Sabse upar wala node.",
      "Leaf: Wo nodes jinka koi baccha nahi hai.",
      "Types: Full (0 ya 2 children), Complete (Saare levels filled), Skewed (Sirf ek side badh raha hai).",
      "Height: Root se lekar sabse door wale leaf tak ka rasta."
    ],
    realLifeExample: "Jaise family tree—ek maa-baap ke maximum 2 bacche, har bacche ke aage 2 bacche.",
    examTip: "Inorder, Preorder, aur Postorder traversal ke rules (Left-Root-Right) zaroor yaad karein.",
    diagramHint: "Circles connected by lines in a branching structure.",
    diagramUrl: "true"
  },
  {
    topic: "BST & AVL Trees",
    explanation: "BST ek organized tree hai search karne ke liye, aur AVL ek 'Self-Balancing' tree hai jo tree ko zyada lamba (Skewed) nahi hone deta.",
    keyPoints: [
      "BST Rule: Chote numbers Left mein, bade numbers Right mein.",
      "AVL Balance: Har node pe height ka difference max 1 hona chahiye.",
      "Rotations: AVL tree balanced rehne ke liye Left aur Right rotations use karta hai.",
      "Search Speed: Dono tree search operations ko bahut fast bana dete hain (O(log n))."
    ],
    realLifeExample: "Jaise phonebook—aap binary search karke turant naam dhoond lete ho, har page palatne ki zaroorat nahi.",
    examTip: "AVL rotations (LL, RR, LR, RL) ke chote diagrams zaroor draw karein balancing samjhane ke liye.",
    diagramHint: "A balanced tree with numerical values showing height balance factors (-1, 0, 1).",
    diagramUrl: "true"
  },
  {
    topic: "Representations of Graphs",
    explanation: "Graph nodes (Vertices) aur unki connections (Edges) ka collection hai. Ise store karne ke 2 main tareeke hain.",
    keyPoints: [
      "Adjacency Matrix: Ek 2D table (Matrix) jisme 1 yani path hai, 0 yani path nahi hai.",
      "Adjacency List: Har node ke paas uske 'padosiyon' ki list hoti hai.",
      "Efficiency: Matrix asaan hai par space zyada leta hai, List space bachati hai."
    ],
    realLifeExample: "Jaise Social Media—aap (Node) jisse connected ho wo aapki Friend List (Adjacency List) mein hai.",
    examTip: "Dense graphs ke liye Matrix aur Sparse graphs ke liye List optimize hoti hai, ye point zaroor likhein.",
    diagramHint: "A small graph with 3-4 nodes and its corresponding 2D matrix/list representation.",
    diagramUrl: "true"
  },
  {
    topic: "Graph Traversals",
    explanation: "Graph traversal ka matlab hai graph ke har node ko ek baar visit karna (dhoondna).",
    keyPoints: [
      "BFS (Breadth-First): Level-by-level dhoondna. Ye 'Queue' data structure use karta hai.",
      "DFS (Depth-First): Ek raste pe end tak jana phir peeche aana. Ye 'Stack' use karta hai.",
      "Shortest Path: BFS shortest path dhoondne mein expert hai."
    ],
    realLifeExample: "BFS: Pani mein pathar phenkne pe bani lehrein—wo level by level failti hain. DFS: Maze (Bhool-bhulaiya) mein raasta dhoondna.",
    examTip: "BFS ke liye 'Queue' aur DFS ke liye 'Stack/Recursion' keywords mention karna mandatory hai.",
    diagramHint: "Two graphs showing different visit orders (numbers 1, 2, 3...) for BFS and DFS.",
    diagramUrl: "true"
  },
  {
    topic: "B Trees",
    explanation: "B-Tree ek special multi-way tree hai jo database indexing ke liye use hota hai taaki lakhon records mein se data turant mil jaye.",
    keyPoints: [
      "Multi-way: Ek node mein 2 se zyada keys aur pointers ho sakte hain.",
      "Disk Friendly: Ye tree bahut 'Choda' par system mein 'Chota' (Height kam) hota hai.",
      "Balanced: Hamesha balanced rehta hai operations ke baad bhi."
    ],
    realLifeExample: "Jaise Library ka index card system—aap section select karte ho, phir shelf, phir book.",
    examTip: "Database Files aur SQL Indexes mein B-Trees ka use highlights karein.",
    diagramHint: "Wide nodes with multiple keys (e.g., [10 | 20 | 30]) pointing to several children.",
    diagramUrl: "true"
  },
  {
    topic: "AVL Trees: Definition and Operations",
    explanation: "AVL Trees BST hi hain, par inmein height control rehne se performance hamesha top-notch rehti hai.",
    keyPoints: [
      "Balance Factor: Height(Left) - Height(Right). Iski value -1, 0, 1 hi ho sakti hai.",
      "Rotations: Jab balance bigadta hai toh single ya double rotation se theek kiya jata hai.",
      "Efficiency: Search, Insert, aur Delete teeno O(log n) mein ho jate hain."
    ],
    realLifeExample: "Jaise Balanced Diet—agar ek cheez zyada ho jaye toh balance bigadne lagta hai aur body (tree) execute nahi kar paati.",
    examTip: "AVL rotations ka example LL (Left-Left) aur RR (Right-Right) draw karke zaroor dikhayein.",
    diagramHint: "Tree transformations before and after rotation.",
    diagramUrl: "true"
  },
  {
    topic: "Internal Sorting",
    explanation: "Internal sorting wo techniques hain jo tab use hoti hain jab processor aur RAM milkarr data ko arrange karte hain.",
    keyPoints: [
      "Quick Sort: Pivot select karke data ko do parts (chote, bade) mein baant ta hai.",
      "Heap Sort: Max/Min Heap tree banakar elements nikalta hai.",
      "Bubble Sort: Padosi elements ko swap karke sabse bade ko end mein bhejta hai."
    ],
    realLifeExample: "Jaise taash (Cards) khelte waqt unhe haath mein arrange karna.",
    examTip: "Quick Sort ka Partition logic aur Heap Sort ka Heapify process exam ke liye important hain.",
    diagramHint: "Step-by-step array transformation for Quick Sort or Heap Tree conversion.",
    diagramUrl: "true"
  },
  {
    topic: "Searching",
    explanation: "Searching ka matlab hai kisi target element ko ek bade group mein se dhoondna.",
    keyPoints: [
      "Linear Search: Ek-ek karke sabko check karna (Slow).",
      "Binary Search: Sorted data ko half-half mein divide karke dhoondna (Very Fast).",
      "Efficiency: Binary search sirf sorted data par hi kaam karta hai."
    ],
    realLifeExample: "Linear: Apni cycle ki chabi dhoondna jo kahin bhi ho sakti hai. Binary: Dictionary mein word dhoondna.",
    examTip: "Binary Search ki complexity O(log n) aur Linear ki O(n) compare karein.",
    diagramHint: "Arrow jumping to mid-points of a sorted array.",
    diagramUrl: "true"
  },
  {
    topic: "Histograms and frequency polygons",
    explanation: "Histogram data ko bars mein dikhata hai, aur frequency polygon unhi bars ke top points ko line se jodkar trend dikhata hai.",
    keyPoints: [
      "Bars: Bar ki height batati hai ki koi cheez kitni baar (Frequency) aayi hai.",
      "Trend: Polygon se hume pata chalta hai ki data badh raha hai ya ghat raha hai.",
      "Continuous Data: Inka use weight, height ya marks jaise continuous data ke liye hota hai."
    ],
    realLifeExample: "Jaise cricket match mein run rate graph—bars (runs per over) aur line (overall trend) dikhate hain.",
    examTip: "Exam mein X-axis pe 'Class Intervals' aur Y-axis pe 'Frequency' likhna na bhoolein.",
    diagramHint: "Group of vertical bars with a line connecting their top-middle points.",
    diagramUrl: "true"
  },
  {
    topic: "Theoretical distribution",
    explanation: "Theoretical distribution hume batata hai ki mathematical rules ke mutabik data kaisa dikhna chahiye (Probability).",
    keyPoints: [
      "Binomial: Do results (Success/Failure) ke liye use hota hai (e.g., Coin toss).",
      "Poisson: Bahut rare events dhoondne ke liye (e.g., Typing errors per page).",
      "Parameters: Binomial mein trials (n) aur probability (p) main hote hain."
    ],
    realLifeExample: "Binomial: Exam mein pass hona ya fail hona. Poisson: 1 ghante mein bank mein aane wale customers ki ginti.",
    examTip: "Binomial aur Poisson ke formulas aur unke conditions (N is large, P is small) likhein.",
    diagramHint: "Probability curves (Discrete points for Binomial, smooth curve for Poisson).",
    diagramUrl: "true"
  },
  {
    topic: "Least Square Regression lines",
    explanation: "Regression line wo line hoti hai jo hume do variables (X aur Y) ke beech ka rasta (Trend) dikhati hai future predict karne ke liye.",
    keyPoints: [
      "Equation: Y = a + bX. Jahan 'b' batata hai X ka asar Y pe kya hoga.",
      "Best Fit: Yeh line data points ke sabse kareeb (Least error) se guzarti hai.",
      "Prediction: Agar hume X pata hai toh hum Y ki value guess kar sakte hain."
    ],
    realLifeExample: "Jaise experience aur salary—aapka experience (X) badhega toh salary (Y) kitni badhegi, ye regression line batati hai.",
    examTip: "Regression coefficients (bxy aur byx) nikalne ka formula zaroor likhein.",
    diagramHint: "A scatter plot with a straight line passing through the middle of all points.",
    diagramUrl: "true"
  },
  {
    topic: "Normal distribution",
    explanation: "Normal distribution sabse common pattern hai jahan zyadaatar log 'Average' hote hain aur shape ek ghanti (Bell) jaisi hoti hai.",
    keyPoints: [
      "Symmetric: Mean ke Left aur Right side ek jaisi hoti hai.",
      "Empirical Rule: 68% data 1 SD ke andar, 95% data 2 SD ke andar hota hai.",
      "Total Area: Curve ke neeche ka poora area hamesha 1 hota hai."
    ],
    realLifeExample: "Jaise logon ki height—bahut kam log bahut chote ya bahut lambe hote hain, maximum log average height ke hote hain.",
    examTip: "Normal distribution curve draw karein aur Mean (μ) ko center mein dikhayein.",
    diagramHint: "A perfect bell-shaped curve symmetric around the center.",
    diagramUrl: "true"
  },
  {
    topic: "Linear Correlation",
    explanation: "Correlation batata hai ki do variables aapas mein kitne jude huye hain. Ise '-1' se '+1' ke beech napa jata hai.",
    keyPoints: [
      "Positive (+1): Dono sath badhte hain (e.g., Garmi aur Ice cream sales).",
      "Negative (-1): Ek badhta hai toh doosra ghat ta hai (e.g., Price aur Demand).",
      "Zero Correlation: Dono ka aapas mein koi lena-dena nahi hai."
    ],
    realLifeExample: "Positive: Padhyi ke ghante aur marks. Negative: Car ki speed aur destination tak pahunchne ka time.",
    examTip: "Karl Pearson's coefficient (r) ka formula aur value ranges (-1 to +1) zaroor mention karein.",
    diagramHint: "Scatter plots showing dots moving Up (Positive), Down (Negative), or scattered (Zero).",
    diagramUrl: "true"
  },
  {
    topic: "Mean, Mode, Median",
    explanation: "Mean average hota hai, Median middle value hoti hai, aur Mode wo value h jo sabse zyada baar aayi ho.",
    keyPoints: [
      "Mean: Sabka sum / total count (Outliers se affect hota hai).",
      "Median: Bich ka number (Outliers se farak nahi padta).",
      "Mode: Highest frequency wala number.",
      "Relation: Mode = 3*Median - 2*Mean (BCA exam favorite formula)."
    ],
    realLifeExample: "Mean: Class ke average marks. Mode: Kounsa size ka joota (Shoe size) sabse zyada bik raha hai.",
    examTip: "Empirical relation (Mode = 3*Median - 2*Mean) jarur likhen.",
    diagramHint: "A curve showing where Mean, Median, and Mode sit relative to each other.",
  },
];


export function getDiagramForTopic(topicTitle: string): string | null {
  const note = hinglishNotes.find(n => n.topic === topicTitle);
  return note?.diagramUrl || null;
}

export function getNoteForTopic(topicTitle: string): Note | null {
  const note = hinglishNotes.find(n => n.topic === topicTitle);
  if (!note) return null;
  
  // High-performance fallback for non-migrated notes
  if (!note.explanation) {
    return {
      topic: note.topic,
      explanation: note.short || "Is topic ke liye high-quality revision notes digital library mein process ho rahe hain.",
      keyPoints: note.bulletin || ["Notes updating soon..."],
      realLifeExample: "Coming soon...",
      examTip: "Refer to the detailed explanation for key exam points.",
      diagramHint: note.detailed ? "Check detailed notes for structural insights." : undefined,
      diagramUrl: note.diagramUrl
    };
  }

  return note;
}
