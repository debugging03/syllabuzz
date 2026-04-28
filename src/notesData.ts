
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
    diagramHint: "Ek arrow diagram dikhaiye: [Aadhar Number] --- determines ---> [User Name].",
    diagramUrl: "true"
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
    diagramHint: "Example table split dikhaiye: [ID, Pin, City] split into [ID, Pin] and [Pin, City].",
    diagramUrl: "true"
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
    diagramHint: "Hierarchy diagram dikhaiye: 1NF -> 2NF -> 3NF -> BCNF (Strictness direction).",
    diagramUrl: "true"
  },
  {
    topic: "Introductions to Schema Refinement",
    explanation: "Schema refinement woh process hai jisme hum database design ko reorganize karte hain taaki data duplication kam ho aur storage efficient bane.",
    keyPoints: [
      "Objective: Data redundant system ko khatam karna.",
      "Anomalies: Insertion, Update aur Deletion anomalies ko fix karna.",
      "Method: Normalization ka use karke tables ko split karna.",
      "Integrity: Ensure karna ki data relations hamesha valid rahein."
    ],
    realLifeExample: "Jaise ek messy wardrobe ko organize karna taaki har kapda (data) apni sahi jagah pe ho aur duplicate na rakha ho.",
    examTip: "Anomalies (Insert, Delete, Update) ko define karna is topic ka main part hai.",
    diagramHint: "Flowchart showing: Rough Schema -> Refinement Process -> Refined Schema."
  },
  {
    topic: "Attributes and Entity Sets",
    explanation: "Attributes ek entity ki properties hoti hain, aur Entity Set un entities ka ek collection hota hai jo ek jaisi properties share karte hain.",
    keyPoints: [
      "Attribute: Property of an entity (e.g., Student Name). Represented by Oval.",
      "Entity Set: Group of similar entities (e.g., All Students).",
      "Types: Simple, Composite, Multi-valued, and Derived attributes.",
      "Keys: Specific attributes jo entity ko uniquely identify karte hain."
    ],
    realLifeExample: "Aapki Class ek Entity Set hai, aur har student ke attributes hain—Roll No, Name, Address.",
    examTip: "Multi-valued attribute (double oval) aur Derived attribute (dashed oval) ko diagram mein sahi banayein.",
    diagramHint: "ER diagram snippet with one Rectangle and multiple Ovals connected to it.",
    diagramUrl: "true"
  },
  {
    topic: "Relationship and Relationship Sets",
    explanation: "Relationship do ya do se zyada entities ke beech ka connection hai. Relationship set un relationships ka group hota hai.",
    keyPoints: [
      "Symbol: ER diagram mein isse Diamond shape se dikhaya jata hai.",
      "Cardinality: Batata hai ki ek entity kitne doosre entities se jud sakti hai (1:1, 1:N, M:N).",
      "Degree: Kitni entities us relationship mein involve hain (Unary, Binary, Ternary).",
      "Mapping: Entities ki association ke rules define karta hai."
    ],
    realLifeExample: "Student 'Enrolls' in Course—'Enrolls' yahan relationship hai between Student and Course entities.",
    examTip: "Cardinality ratio (1:1, 1:M) ko arrow notation ke sath samjhayein.",
    diagramHint: "Diamond box connecting two rectangles with cardinality labels.",
    diagramUrl: "true"
  },
  {
    topic: "Introduction to Data Structure",
    explanation: "Data Structure data ko memory mein store aur organize karne ka ek efficient tareeka hai taaki hum use asani se retrieve aur manipulate kar sakein.",
    keyPoints: [
      "Classification: Linear (Array, Stack) aur Non-linear (Tree, Graph).",
      "Primitive: int, char, float types.",
      "Non-Primitive: User-defined structures jaise Linked Lists ya Queues.",
      "Operations: Insertion, Deletion, Searching, aur Sorting."
    ],
    realLifeExample: "Jaise ek kitchen storage rack—masale properly dabbo mein hain taaki cooking (Processing) ke waqt jaldi mil sakein.",
    examTip: "Data type vs Data structure ka difference explain karna exam ke liye bhot imp hai.",
    diagramHint: "Classification tree: Linear vs Non-Linear structures."
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
    topic: "Algorithms and Analysis of Algorithms",
    explanation: "Algorithm ek step-by-step procedure hai kisi problem ko solve karne ke liye. Analysis hume batata hai ki wo algorithm kitna 'Efficient' hai (Time aur Space ke terms mein).",
    keyPoints: [
      "Time Complexity: Algorithm kitna waqt lega (Big O notation: O(n), O(log n)).",
      "Space Complexity: Algorithm memory mein kitni jagah lega.",
      "Asymptotic Notations: Big-O (Worst case), Omega (Best case), aur Theta (Average case).",
      "Efficiency: Kam time aur kam memory lene wala algorithm hamesha BEST hota hai."
    ],
    realLifeExample: "Jaise chai banane ka recipe (Algorithm). Agar aap 1 minute mein bana rahe ho toh wo 10 minute wali recipe se zyada efficient hai.",
    examTip: "Big O notation (O(n), O(n^2)) ke graphs aur definitions zaroor yaad karein.",
    diagramHint: "Graph showing Time (Y-axis) vs Input Size (X-axis) for different complexities.",
    diagramUrl: "true"
  },
  {
    topic: "Stack-Introduction",
    explanation: "Stack ek linear data structure hai jo LIFO (Last In First Out) principle follow karta hai. Isme insertion aur deletion sirf ek hi end (Top) se hota hai.",
    keyPoints: [
      "LIFO: Jo aakhir mein aaya, wo sabse pehle jayega.",
      "Push: Element add karna.",
      "Pop: Element remove karna.",
      "Overflow/Underflow: Stack full ya khali hone ki conditions."
    ],
    realLifeExample: "Jaise shadi mein rakhi hui plateon ka dher (Pile of plates). Aap sabse upar wali plate pehle uthate ho.",
    examTip: "Stack operations ka visual stack diagram (Vertical box) zaroor banayein.",
    diagramHint: "Vertical box with elements stacked on top of each other.",
    diagramUrl: "true"
  },
  {
    topic: "Queues-Introduction",
    explanation: "Queue ek linear data structure hai jo FIFO (First In First Out) principle follow karta hai. Isme insertion peeche (Rear) se aur deletion aage (Front) se hota hai.",
    keyPoints: [
      "FIFO: Jo pehle aaya, wo pehle jayega.",
      "Enqueue: Element peeche se add karna.",
      "Dequeue: Element aage se remove karna.",
      "Pointers: Front (nikalne ke liye) aur Rear (dalne ke liye) pointers use hote hain."
    ],
    realLifeExample: "Jaise ticket counter ki line—jo banda pehle line mein laga, use ticket pehle milegi.",
    examTip: "Circular queue aur Priority queue ke concepts ko brief mein mention karein.",
    diagramHint: "Horizontal boxes with arrows labeled 'Front' and 'Rear'.",
    diagramUrl: "true"
  },
  {
    topic: "Permutation and Combination",
    explanation: "Permutation ka matlab hai 'Arrangement' (Order matters), aur Combination ka matlab hai 'Selection' (Order doesn't matter).",
    keyPoints: [
      "Permutation (nPr): Objects ko arrange karne ke kitne tareeke hain.",
      "Combination (nCr): Objects ko select karne ke kitne tareeke hain.",
      "Formula: nPr = n! / (n-r)! aur nCr = n! / r!(n-r)!.",
      "Difference: Permutation mein order zaroori hai (e.g., Password), Combination mein nahi (e.g., Team selection)."
    ],
    realLifeExample: "Permutation: 1, 2, 3 se banne wale numbers (123 vs 321). Combination: 3 doston mein se 2 ko party pe bulana.",
    examTip: "nCr = nCn-r property ka use calculations fast karne ke liye karein.",
    diagramHint: "Matrix or diagram showing selection vs arrangement differences."
  },
  {
    topic: "Binomial Theorem",
    explanation: "Binomial theorem ek mathematical formula hai jo (a + b)^n jaise expressions ko expand karne mein madad karta hai, chahe 'n' kitna bhi bada ho.",
    keyPoints: [
      "Expansion: (a+b)^n = nC0 a^n + nC1 a^n-1 b + ... + nCn b^n.",
      "General Term: Tr+1 = nCr a^n-r b^r.",
      "Application: Iska use probability distributions (Binomial Distribution) mein hota hai.",
      "Coefficients: Pascal's Triangle ka use karke coefficients turant nikale ja sakte hain."
    ],
    realLifeExample: "Jaise kisi cheez ke hone ke chances nikalna multiple trials mein (e.g., 10 bar coin toss karne pe heads aane ki probability).",
    examTip: "Pascal's Triangle draw karke dikhayein examiner ko coefficients samjhane ke liye.",
    diagramHint: "Pascal's Triangle (1, 1-1, 1-2-1, 1-3-3-1 etc.)."
  },
  {
    topic: "Dispersion",
    explanation: "Dispersion hume batata hai ki data 'Mean' (Average) se kitna bikhra hua (Spread) hai. Yeh data ki consistency check karne mein help karta hai.",
    keyPoints: [
      "Measures: Range, Mean Deviation, Standard Deviation (SD), aur Variance.",
      "Range: Max value - Min value.",
      "Standard Deviation: Sabse reliable measure jo batata hai average deviation kitna hai.",
      "Consistency: Kam dispersion matlab data ek jaisa hai (Consistent), zyada dispersion matlab data bikhra hua hai."
    ],
    realLifeExample: "Jaise do batsmen ka score—agar ek hamesha 40-50 banata hai (Low Dispersion), aur dusra kabhi 0 kabhi 100 (High Dispersion).",
    examTip: "Standard Deviation (σ) ka formula zaroor yaad karein, har numerical mein kaam aata hai.",
    diagramHint: "Two curves: one sharp (low dispersion) and one flat (high dispersion)."
  },
  {
    topic: "Moments, Skewness, kurtosis",
    explanation: "Yeh measures data ki 'Shape' batate hain. Skewness batata hai asymmetry, aur Kurtosis batata hai ki curve kitna peake ya flat hai.",
    keyPoints: [
      "Skewness: Agar data left ya right side jhuka hua hai (Positive/Negative skew).",
      "Kurtosis: Curve ki 'Peakedness'. Leptokurtic (Pointy), platykurtic (Flat), mesokurtic (Normal).",
      "Moments: Base calculations jo SD, Skewness aur Kurtosis nikalne mein help karte hain."
    ],
    realLifeExample: "Skewness: Jaise income distribution—zyadatar log kam kamate hain (Left skew), kuch hi log boht ameer hote hain.",
    examTip: "Skewness = (Mean - Mode) / SD formula zaroor mention karein.",
    diagramHint: "Three curves showing Left-skewed, Symmetric, and Right-skewed data.",
    diagramUrl: "true"
  },
  {
    topic: "Distributed Database",
    explanation: "Distributed Database mein data ek jagah nahi, balki alag-alag locations (Sites) par save hota hai jo network se jude hote hain.",
    keyPoints: [
      "Transparency: User ko lagta hai ki data ek hi jagah hai (Single unit).",
      "Reliability: Agar ek site down ho jaye, toh dusri site se data mil sakta hai.",
      "Fragmentation: Data ko todkar (Horizontal/Vertical) alag sites pe rakhna.",
      "Replication: Same data ki copies multiple sites pe rakhna."
    ],
    realLifeExample: "Jaise Google Drive—aapka data duniya ke alag-alag servers (US, India, Europe) pe distributed hai par aapko ek hi dashboard dikhta hai.",
    examTip: "Homogeneous vs Heterogeneous distributed systems ka difference likhein.",
    diagramHint: "Cloud icon connected to multiple server icons in different locations.",
    diagramUrl: "true"
  },
  {
    topic: "OODBMS (Basic Concepts)",
    explanation: "Object-Oriented DBMS data ko 'Objects' (jaise Java/C++ code mein hota hai) ke form mein store karta hai, na ki sirf tables mein.",
    keyPoints: [
      "Objects & Classes: Data aur functions ek saath (Encapsulation).",
      "Inheritance: Parent class ki properties child class mein aana.",
      "Complexity: Yeh complex data (jaise maps, videos, 3D models) handle karne ke liye best hai.",
      "No Tables: Isme rows/columns ka concept nahi hota, seedha object pointers hote hain."
    ],
    realLifeExample: "Jaise Video Games—har character ek object hai jisme uski health, speed aur skills (data + functions) ek saath hain.",
    examTip: "Persistent Objects word ka use karein jo software band hone ke baad bhi DB mein rehte hain.",
    diagramHint: "Icon of an object containing 'Data' and 'Methods' blocks inside."
  },
  {
    topic: "Instruction Set Architecture",
    explanation: "ISA ek abstract model hai jo batata hai ki CPU kounsi instructions (Commands) execute kar sakta hai aur memory se kaise baat karega.",
    keyPoints: [
      "Interface: Yeh hardware aur software ke beech ka bridge hai.",
      "Components: Opcode types, Addressing modes, aur Registers list.",
      "RISC vs CISC: RISC (Simple/Fast instructions), CISC (Complex/Powerful instructions).",
      "Importance: Bina ISA ke koi compiler ya OS nahi likha ja sakta."
    ],
    realLifeExample: "Jaise restaurant ka Menu—ye batata hai ki kitchen (Hardware) kya-kya bana sakta hai aur customer (Software) kya order de sakta hai.",
    examTip: "x86 (Intel) vs ARM architecture ka example zaroor dein.",
    diagramHint: "Layered diagram showing Hardware -> ISA -> Software (OS/Apps)."
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
  {
    topic: "chi-square test",
    explanation: "Chi-Square ek statistical test hai jo ye check karta hai ki actual data (Observed) aur expected data mein kitna farak hai.",
    keyPoints: [
      "Goodness of Fit: Kya data expected pattern ko follow kar raha hai?",
      "Independence: Kya do factors (e.g., Smoking and Cancer) aapas mein jude hain ya nahi.",
      "Symbol: χ² (Khai-Square).",
      "Null Hypothesis: Yeh maanta hai ki koi significant difference nahi hai."
    ],
    realLifeExample: "Jaise ek ludo ka gitta (Die)—kya usme har number aane ke equal chances hain? Check karne ke liye Chi-Square test lagao.",
    examTip: "Degree of Freedom (df = n-1) calculate karna mat bhulein.",
    diagramHint: "Chi-square distribution curve (starts at 0, positively skewed)."
  },
  {
    topic: "Sampling Theory",
    explanation: "Sampling ka matlab hai ek bade group (Population) se ek chota hissa (Sample) chunna taaki poore group ke baare mein prediction ki ja sake.",
    keyPoints: [
      "Population vs Sample: Poora India vs 1000 selected citizens.",
      "Random Sampling: Har kisi ke select hone ke equal chances hote hain (Fair).",
      "Z-test & T-test: Sample ke results ko verify karne ke liye tests.",
      "Bias: Agar selection galat ho toh result galat aayega."
    ],
    realLifeExample: "Jaise khana banate waqt sirf ek chammach test karna ye janne ke liye ki namak sahi hai ya nahi.",
    examTip: "Small sample (n < 30) ke liye T-test aur Large sample (n >= 30) ke liye Z-test use hota hai.",
    diagramHint: "Large circle (Population) with a smaller circle (Sample) being pulled out by an arrow."
  },
  {
    topic: "Mean deviation and standard deviation",
    explanation: "Mean Deviation average deviation batata hai, aur Standard Deviation (SD) squares use karta hai taaki negative signs khatam ho jayein aur accuracy badhe.",
    keyPoints: [
      "Mean Deviation: Sum(|x - mean|) / n. Simple deviaton calculation.",
      "Standard Deviation (σ): Root Mean Square deviation. Statistics ka king hai.",
      "Variance: SD ka square (σ^2).",
      "Usage: Quality control aur financial risk calculation mein bypass nahi kiya ja sakta."
    ],
    realLifeExample: "Jaise bijli ka bill—agar har mahine fix hai toh SD kam hai, agar kabhi 100 kabhi 5000 toh SD bahut zyada hai.",
    examTip: "SD find karne ka short-cut method (Assumed mean method) practice karein time bachane ke liye.",
    diagramHint: "Formula box with Σ symbols and square roots.",
    diagramUrl: "true"
  },
  {
    topic: "Probability theory",
    explanation: "Probability ka matlab hai kisi event ke hone ke 'Chances'. Iski value hamesha 0 (Impossible) se 1 (Certain) ke beech hoti hai.",
    keyPoints: [
      "Conditional Probability: P(A|B) - Event A hone ke chances jab B pehle hi ho chuka ho.",
      "Mathematical Expectation: Long-run average value (Mean of probability).",
      "Mutually Exclusive: Wo events jo ek saath nahi ho sakte (e.g., Head aur Tail same toss mein).",
      "Bayes' Theorem: Updated probability nikalne ke liye application."
    ],
    realLifeExample: "Jaise aaj barish hogi ya nahi, ya phir ek card nikalne pe King aane ke chances.",
    examTip: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) formula hamesha kaam aata hai.",
    diagramHint: "Venn diagram showing overlapping circles and colored intersection (P(A∩B)).",
    diagramUrl: "true"
  },
  {
    topic: "Minimum Cost Spanning Trees",
    explanation: "MST ek graph ka wo hissa hai jo saare nodes ko connect karta hai sabse kam total 'Weight' (rasta) kharch karke.",
    keyPoints: [
      "Algorithms: Prim's Algorithm aur Kruskal's Algorithm.",
      "No Cycles: Tree hai isliye koi bhi loop nahi hona chahiye.",
      "Greedy Approach: Har step pe sabse sasta edge select karna.",
      "Application: Network cables lagana ya road maps design karna minimum cost mein."
    ],
    realLifeExample: "Jaise ek colony mein bijli ki taar (wires) aise lagana ki har ghar tak bijli pahunche aur taar (wire) ki lambai sabse kam ho.",
    examTip: "Prim's (Vertex based) aur Kruskal's (Edge based) ke beech ka main difference yaad rakhein.",
    diagramHint: "A graph with some edges highlighted and a total cost sum labeled at the bottom.",
    diagramUrl: "true"
  },
  {
    topic: "Sorting Algorithms (Merge, Quick, Bubble)",
    explanation: "Sorting ka matlab hai data ko ek order (A-Z ya 1-100) mein arrange karna. Har algorithm ki apni speed aur memory requirement hoti hai.",
    keyPoints: [
      "Bubble Sort: Padosi ko swap karna (Slowest - O(n^2)).",
      "Merge Sort: Data ko aadha-aadha todna aur phir merge karna (Fast - O(n log n)).",
      "Quick Sort: Pivot select karke partition karna (Avg fast - O(n log n)).",
      "Complexity: O(n log n) complex algorithms bade data ke liye best hote hain."
    ],
    realLifeExample: "Merge Sort: Jaise 10 dheriyan (piles) ko arrange karna pehle do-do ko combine karke phir char-char ko.",
    examTip: "Merge Sort ka 'Divide and Conquer' diagram exam mein full marks dilata hai.",
    diagramHint: "Tree diagram showing array splitting into single elements and then merging back sorted.",
    diagramUrl: "true"
  },
  {
    topic: "Interpolation Search",
    explanation: "Interpolation search binary search ka hi ek smart version hai jo values ke 'Distribution' ka andaza lagakar target dhoondta hai.",
    keyPoints: [
      "Smart Guessing: Agar hume dhoondna hai '90' aur array 1-100 hai, toh ye end ke paas check karega na ki bich mein.",
      "Constraint: Data sorted aur uniformly distributed hona chahiye.",
      "Fastest: Best case mein O(log log n) speed deta hai.",
      "Formula: Pos = Low + [(target-arr[low])*(high-low) / (arr[high]-arr[low])]."
    ],
    realLifeExample: "Jaise dictionary mein 'Z' dhoondte waqt hum peeche ke pages se start karte hain, na ki ekdum center se.",
    examTip: "Iska formula complex hai but ye binary search se fast hai, ye point highlight karein.",
    diagramHint: "An array with an arrow jumping directly towards the target value rather than the midpoint.",
    diagramUrl: "true"
  },
  {
    topic: "Monte Carlo method",
    explanation: "Monte Carlo method randomness aur 'Repeated Sampling' use karta hai complex problems solve karne ke liye jinka exact answer nikalna mushkil ho.",
    keyPoints: [
      "Simulation: Computer se hazaaron bar random trials chalana.",
      "Probability Based: Expected outcome nikalne ke liye randomness ka fayda uthana.",
      "Usage: Risk analysis, stock price prediction, aur physics simulations mein.",
      "Precision: Jitne zyada trials, utna accurate result."
    ],
    realLifeExample: "Jaise ye guess karna ki barish hogi ya nahi based on 10,000 simulations of wind and cloud patterns.",
    examTip: "Monte Carlo ka naam Monaco ke casino se aaya hai (Gambling logic), ye interesting fact intro mein likh sakte hain.",
    diagramHint: "A square with random dots inside and a circle inscribed (Common Pi-calculation example).",
    diagramUrl: "true"
  },
  {
    topic: "Relationship Algebra",
    explanation: "Relational Algebra ek procedural query language hai jo batati hai ki data 'Kaise' (How) nikalna hai operations use karke.",
    keyPoints: [
      "Operations: Selection (σ), Projection (π), Union (∪), Set Difference (-), Cartesian Product (X).",
      "Selection: Rows select karna based on condition.",
      "Projection: Specific columns select karna.",
      "Join: Do tables ko aapas mein combine karna common column ke base pe."
    ],
    realLifeExample: "Jaise filter lagana—pehle 'City' filter kiya (Selection) phir sirf 'Name' dikhaya (Projection).",
    examTip: "Symbols (σ, π, ∪, ⋈) ka sahi use karein, examiners symbols dekhte hi marks dete hain.",
    diagramHint: "Table transformation diagram: Input Table -> [Operator Symbol] -> Output Table.",
    diagramUrl: "true"
  },
  {
    topic: "Relation Calculus",
    explanation: "Relational Calculus ek non-procedural language hai jo batati hai ki 'Kya' (What) data chahiye, bina ye bataye ki kaise nikalna hai.",
    keyPoints: [
      "Types: Tuple Relational Calculus (TRC) aur Domain Relational Calculus (DRC).",
      "Logic: Yeh mathematical logic aur predicates pe base hota hai.",
      "Declarative: Isme hum sirf condition batate hain (e.g., {t | Student(t) AND t.Age > 20}).",
      "Power: Iski expressive power Relational Algebra ke barabar hi hoti hai."
    ],
    realLifeExample: "Jaise Google search—aap sirf likhte ho 'Best Pizza', aap ye nahi batate ki database mein kahan dhoondna hai.",
    examTip: "Tuple constant aur variables ke beech ka difference clarify karein.",
    diagramHint: "Mathematical logic notation examples box.",
    diagramUrl: "true"
  },
  {
    topic: "Triggers and Active Databases",
    explanation: "Triggers wo 'Automatic Actions' hain jo database mein kisi event (Insert, Update, Delete) ke hone pe apne aap chalti hain.",
    keyPoints: [
      "ECA Model: Event (Kya hua), Condition (Kab chalna hai), Action (Kya karna hai).",
      "Automation: Audit logs maintain karne aur integrity check karne ke liye best hai.",
      "Types: Before Triggers aur After Triggers.",
      "Security: Unauthorized changes ko block karne ke liye bhi use hote hain."
    ],
    realLifeExample: "Jaise 'Out of Stock' alert—jab product ki quantity 0 ho jaye (Event), toh system automatically 'Restock' email bhej deta hai (Action).",
    examTip: "Trigger syntax ka ek chota pseudo-code example zaroor likhein.",
    diagramHint: "Logic flow: Update Event -> Trigger Check -> Automatic Action execution.",
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    explanation: "RAID multiple hard disks ko combine karke speed aur data safety badhane ki ek technique hai.",
    keyPoints: [
      "RAID 0 (Striping): High speed, par koi safety nahi.",
      "RAID 1 (Mirroring): Data ki copy doosri disk pe same to same (Safe).",
      "RAID 5 (Parity): Speed aur safety ka perfect balance.",
      "Redundancy: Agar ek disk fail bhi ho jaye, toh computer chalta rehta hai."
    ],
    realLifeExample: "Jaise important certificates ki ek copy ghar pe aur ek locker mein rakhna (RAID 1).",
    examTip: "RAID 0, 1 aur 5 ke beech comparison table zaroor banayein.",
    diagramHint: "Visual of multiple disks with data blocks and parity bits.",
    diagramUrl: "true"
  },
  {
    topic: "Transaction management and Structure of a DBMS",
    explanation: "Transaction management ensure karta hai ki database hamesha consistent rahe, chahe multiple users ek saath kaam karein ya system crash ho jaye.",
    keyPoints: [
      "ACID Properties: Atomicity, Consistency, Isolation, Durability.",
      "Atomicity: 'All or Nothing'—ya toh pura transaction hoga ya kuch bhi nahi.",
      "Durability: Ek baar save ho gaya toh power jane pe bhi nahi hona chahiye.",
      "Isolation: Do users ke kaam ek dusre ko disturb nahi karne chahiye."
    ],
    realLifeExample: "Bank Transfer—agar mere account se paise kat gaye par aapke mein nahi pahunche, toh transaction pura cancel (Rollback) ho jayega.",
    examTip: "ACID properties ka acronym aur har point ki definition must hai.",
    diagramHint: "ACID acronym box with 4 pillars icons.",
    diagramUrl: "true"
  },
  {
    topic: "KBDBMS",
    explanation: "KBDBMS (Knowledge-Base DBMS) data ke saath-saath 'Rules' aur 'Logic' bhi store karta hai taaki system intelligent decisions le sake.",
    keyPoints: [
      "Inference: Sirf data store nahi karta, balki naya knowledge derive karta hai (Deductive).",
      "Expert Systems: AI apps mein heavily use hota hai.",
      "Logic Based: Prolog jaisi languages se inspired storage logic.",
      "Difference: Normal DBMS facts store karta hai, KBDBMS facts + rules store karta hai."
    ],
    realLifeExample: "Medical Diagnosis System—Jahan symptoms (Data) ke sath bimari ke rules (Knowledge) match karke ilaaj bataya jata hai.",
    examTip: "Knowledge vs Data ka difference intro mein zaroor likhein.",
    diagramHint: "Database box connected to an 'Inference Engine' block.",
    diagramUrl: "true"
  },
  {
    topic: "Weak Entities",
    explanation: "Weak Entity wo entity hai jiske paas apni khud ki Primary Key nahi hoti aur wo doosri (Owner) entity pe depend karti hai.",
    keyPoints: [
      "Symbol: Double Rectangle se dikhaya jata hai.",
      "Discriminator: Inke paas ek partial key hoti hai (Dashed underline).",
      "Relationship: Owner se 'Identifying Relationship' (Double Diamond) ke through judte hain.",
      "Existence: Agar Owner delete ho jaye, toh weak entity bhi delete ho jati hai."
    ],
    realLifeExample: "Jaise 'Employee' aur unke 'Dependents' (Family members). Agar employee company chod dega, toh unka family data bhi hat jayega.",
    examTip: "Double Rectangle aur Double Diamond symbols banana mat bhulna.",
    diagramHint: "A strong entity connected to a double-bordered weak entity.",
    diagramUrl: "true"
  },
  {
    topic: "Distributed Database",
    explanation: "Distributed Database mein data ek computer pe nahi, balki alag-alag locations (Sites) par networked system mein save hota hai.",
    keyPoints: [
      "Availability: Agar ek office band hai, toh data dusre office ke server se mil jayega.",
      "Fragmentation: Table ko todkar alag sites pe rakhna (Horizontal/Vertical).",
      "Replication: Same data ki copies multiple sites pe rakhna speed ke liye.",
      "Transparency: User ko pta bhi nahi chalta ki data 5 alag shehron mein hai."
    ],
    realLifeExample: "Facebook—Aapka data India, Singapore aur USA ke servers pe hai, par aapko wo ek hi screen pe dikhta hai.",
    examTip: "Homogeneous aur Heterogeneous systems ke types mention karein.",
    diagramHint: "Interconnected server icons across a map cloud.",
    diagramUrl: "true"
  },
];


export function getDiagramForTopic(topicTitle: string): string | null {
  const note = getNoteForTopic(topicTitle);
  return note?.diagramUrl || null;
}

export function getNoteForTopic(topicTitle: string): Note | null {
  const clean = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const titleClean = clean(topicTitle);

  // 1. Try exact or case-insensitive match
  let note = hinglishNotes.find(n => n.topic === topicTitle || clean(n.topic) === titleClean);
  
  // 2. Try partial match
  if (!note) {
    note = hinglishNotes.find(n => {
      const noteClean = clean(n.topic);
      return noteClean.includes(titleClean) || titleClean.includes(noteClean);
    });
  }

  // 3. Try word overlap (Fuzzy-ish)
  if (!note) {
    const titleWords = titleClean.split(/\s+/).filter(w => w.length > 2);
    note = hinglishNotes.find(n => {
      const noteWords = clean(n.topic).split(/\s+/);
      const overlap = titleWords.filter(w => noteWords.includes(w));
      return overlap.length >= Math.min(titleWords.length, 2); // At least 2 words match or all words if few
    });
  }

  // Fallback for missing notes - provide helpful feedback instead of null
  if (!note) {
    return {
      topic: topicTitle,
      explanation: "Hinglish notes for this specific topic are currently being synthesized. Our academic team is working on simplifying this content for you.",
      keyPoints: [
        "Content update in progress",
        "Refer to standard textbooks for now",
        "Check back in 24-48 hours"
      ],
      realLifeExample: "Logic update in progress—stay tuned!",
      examTip: "Try searching this topic on YouTube using our quick-link button while we update your curated notes."
    };
  }
  
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
