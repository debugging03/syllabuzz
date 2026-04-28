
export interface Note {
  topic: string;
  short: string;
  detailed: string;
  bulletin: string[];
  diagramUrl?: string;
}

export type NoteStyle = 'short' | 'detailed' | 'bulletin';

export const hinglishNotes: Note[] = [
  // BCA-401 RDBMS
  {
    topic: "Overview and History of DBMS",
    short: "DBMS data manage karne ka framework hai jo hierarchical models se shuru hokar modern relational aur NoSQL systems tak evolve hua hai. Yeh basically data integrity aur efficiency ensure karta hai.",
    detailed: "DBMS (Database Management System) ki shuruat 1960s mein IBM ke IMS (Information Management System) se hui thi, jo hierarchical model pe based tha. Iske baad Charles Bachman ne Network model banaya. Sabse bada breakthrough 1970 mein aaya jab E.F. Codd ne 'Relational Model' introduce kiya. Aaj hum jo SQL databases use karte hain (MySQL, Oracle), wo sab isi design principles pe base hain. DBMS ka main goal hai file system ki limitations ko door karna aur large volumes of data ko secure aur efficiently handle karna. Abhi ke time pe hum Cloud databases aur NoSQL (MongoDB) ki taraf move kar rahe hain jo unstructured data ke liye best hain.",
    bulletin: [
      "Origins (1960s): Hierarchical model by IBM (IMS).",
      "Network Model: Introduced by Charles Bachman (IDS).",
      "Relational Revolution (1970): E.F. Codd's paper defining RDBMS rules.",
      "Modern Era: Rise of SQL, Object-Oriented, and NoSQL databases.",
      "Key Evolution: Transition from flat files to complex relational mapping."
    ]
  },
  {
    topic: "File System vs DBMS",
    short: "File system simple storage deta hai par redundancy aur security issues ke sath. DBMS in sabko central control aur schemas ke through solve karta hai.",
    detailed: "Pehle data simple text files mein store hota tha, jise 'File System' kehte hain. Ismein sabse badi problem 'Data Redundancy' (Duplicate data) aur 'Data Inconsistency' thi. Jab wahi data alag-alag files mein hota tha, to ek jagah update karne pe doosri jagah purana reh jata tha. DBMS ise 'Centralized Control' se solve karta hai. DBMS mein physical aur logical data independence milti hai, yani aap background storage change kar sakte hain bina front-end application ko disturb kiye. File system mein mapping hard-coded hoti hai, jabki DBMS mein query processor handle karta hai. Security ke mamle mein bhi DBMS rules set karne ki permission deta hai jo file permissions se kaafi advanced hain.",
    bulletin: [
      "Redundancy: File system has high duplication; DBMS controls it using normalization.",
      "Integrity: DBMS enforces constraints (PK, FK) which files cannot do.",
      "Access: Simultaneous multi-user access is only possible in DBMS.",
      "Recovery: DBMS provides automatic backup/recovery; files are prone to corruption.",
      "Data Independence: DBMS separates structure from storage; File systems are tightly coupled."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Advantage of DBMS",
    short: "DBMS redundancy control, improved data sharing, high security, aur automatic consistency provide karta hai, jo developers aur users dono ke liye useful hai.",
    detailed: "DBMS use karne ke peeche main reasons hain efficiency aur security. Pehla bada advantage hai 'Data Sharing'—multipe users ek hi time pe accurate data access kar sakte hain bina conflicts ke. Doosra hai 'Atomicity'—yani ya to transaction poora hoga ya bilkul nahi, beech mein data corrupt nahi hoga. DBMS 'Data Integrity' maintains karta hai rules ke through (Jaise age invalid nahi ho sakti). Iske alawa, 'Backup and Recovery' mechanisms ensure karte hain ki hardware failure ke baad bhi data loss na ho. Modern enterprises ke liye DBMS 'Data Abstraction' deta hai, jahan users ko sirv relevant info dikhti hai, complex storage details background mein hide ho jati hain.",
    bulletin: [
      "Redundancy Control: Saves storage and prevents inconsistency.",
      "Data Sharing: Multiple applications can use the same database.",
      "Improved Security: Granular permissions for different user roles.",
      "Standardization: Enforces uniform data formats across the system.",
      "Concurrency Control: Prevents data corruption during simultaneous updates."
    ]
  },
  {
    topic: "The 3 level architecture of DBMS",
    short: "Ismein Physical, Conceptual, aur View levels hote hain jo user ko database ki internal complexities se door rakhte hain (Data Abstraction).",
    detailed: "DBMS 'Three-Schema Architecture' (ANSI/SPARC) use karta hai data independence badhane ke liye. 1. Physical Level (Internal Level): Yeh lowest level hai jo batata hai ki data disk pe bits/bytes mein kaise store hai. 2. Conceptual Level (Logical Level): Yeh middle level hai jo batata hai database mein 'kya' data store hai aur unke bich relationships kya hain (Tables/Schemas). 3. View Level (External Level): Yeh highest level hai jahan different users ko unki zaroorat ke hisab se different views dikhte hain. Is architecture ka main benefit 'Logical Data Independence' hai—aap table structure change kar sakte hain bina user views ko disturb kiye, aur 'Physical Data Independence'—disk storage change ho sakti hai bina logic change kiye.",
    bulletin: [
      "Physical Level: Describes how data is literally stored on hardware.",
      "Conceptual Level: Describes database structure (Entities, relationships, constraints).",
      "View Level: Customized views for different users (E.g., Student vs Teacher view).",
      "Goal: To separate user application from physical database.",
      "Data Independence: Changes in lower levels don't affect higher levels."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Overview of Data Design Entities",
    short: "Entities objects hote hain (Student) aur Attributes unki properties (Name, RollNo). Inka collection Entity Set kehlata hai.",
    detailed: "ER model mein 'Entity' koi bhi real-world object ho sakta hai jiska existence hai, jaise ek Employee ya Department. 'Entity Set' ek group hota hai similar physical entities ka. Har entity ke pass properties hoti hain jinhe 'Attributes' kehte hain. Attributes kai types ke hote hain: 1. Simple (Roll No), 2. Composite (Name which has First/Last), 3. Derived (Age which depends on DOB), aur 4. Multi-valued (Phone numbers). Har Entity Set mein ek primary key identify karna zaroori hota hai jo har entity ko uniquely represent kare. ER diagrams mein Entities ko Rectangle aur Attributes ko Ellipse se represent kiya jata hai.",
    bulletin: [
      "Entity: A real-world object with unique existence.",
      "Entity Set: A collection of similar entities (Table equivalent).",
      "Simple vs Composite: Atomic values vs breakable values (e.g., Address).",
      "Stored vs Derived: Primary data vs data computed from other fields.",
      "Key Attribute: Used to uniquely identify an entity in a set."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Components of DBMS",
    short: "DBMS ke main components: Hardware, Software, Data, Users, aur Procedures jo milke system chalate hain.",
    detailed: "DBMS ek framework hai jisme 5 core components hote hain: 1. Hardware (Storage, CPU). 2. Software (DB Engine, Tools). 3. Data (The actual records). 4. Procedures (Rules and methods). 5. Users (DBA, Designers, End-users). In sabka coordination zaroori hai system ki efficiency ke liye.",
    bulletin: [
      "Software: Core engine that handles language processing (SQL).",
      "Data: The most critical component, stored as raw values and metadata.",
      "Hardware: Physical disks and I/O channels for data persistence.",
      "Users: Different levels of access from admin to casual query users.",
      "Procedures: Operational guidelines for backup, recovery, and security."
    ],
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
    short: "Relational model data ko tables (relations) mein organize karta hai jahan rows tuples hain aur columns attributes.",
    detailed: "E.F. Codd ne relational model propose kiya tha jo mathematical relations pe based hai. 1. Tuple: A single row (Record). 2. Attribute: A single column (Field). 3. Domain: Set of permitted values for an attribute. 4. Degree: Number of columns. 5. Cardinality: Number of rows. Isme keys (Primary, Foreign, Candidate) data consistency aur references maintain karti hain across different tables.",
    bulletin: [
      "Relation: A formal term for a table with unique rows.",
      "Domain Integrity: Ensures values match specific data types and ranges.",
      "Primary Key: Unique identifier for every single tuple in a relation.",
      "Foreign Key: Link between two tables representing commonality.",
      "Relational Schema: Logical definition of table structures and data types."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Functional Dependencies",
    short: "FD ek constraint hai jahan ek attribute (X) doosre attribute (Y) ki value uniquely determine karta hai (X -> Y).",
    detailed: "Functional Dependency (FD) normalization ka sabse important concept hai. Agar hum kahein 'X determines Y' (X -> Y), to iska matlab hai ki agar do rows mein X ki same value hai, to unke liye Y ki value bhi same honi chahiye. PD types: 1. Trivial (Dependent set is subset of determinant), 2. Non-trivial, aur 3. Transitive (X->Y aur Y->Z to X->Z). FD's ki help se hum redundancy detect karte hain aur tables ko decompose karte hain higher normal forms (2NF, 3NF, BCNF) mein. Keys (Candidate keys) hamesha poori row ko functionally determine karti hain.",
    bulletin: [
      "Definition: Relationship between attributes where one defines another.",
      "Notation: X -> Y (X is determinant, Y is dependent).",
      "Trivial FD: When Y is a subset of X.",
      "Transitive FD: A relationship where A->B and B->C, implying A->C.",
      "Role: Essential foundation for Database Normalization (1NF to BCNF)."
    ]
  },
  {
    topic: "Third Normal Form",
    short: "3NF table ko redundancy free banata hai by ensuring non-prime attributes transitive dependency na rakhein candidate key pe.",
    detailed: "Ek relation 3NF mein tab hota hai jab: 1. Wo hamesha 2NF mein ho. 2. Koi bhi non-prime attribute (non-key field) kisi doosre non-prime attribute pe depend na kare (No Transitive Dependency). Simple words mein, har field ya to primary key ka part honi chahiye, ya primary key hoke poori key determine kare. 'Nothing but the key' principle follow hota hai. 3NF redundancy ko kafi hadd tak remove kar deta hai aur insertion/update anomalies se bachata hai. Most operational databases usually 3NF tak hi normalize kiye jate hain.",
    bulletin: [
      "Condition 1: Table must be in 2nd Normal Form (2NF).",
      "Condition 2: No Transitive Dependencies allowed (Non-key -> Non-key).",
      "Goal: Reduce data duplication and maintain data integrity.",
      "Exception: BCNF is stricter than 3NF for multi-key dependencies.",
      "Mantra: Every non-key attribute must depend on the key, the whole key, and nothing but the key."
    ]
  },
  {
    topic: "SQL Queries: Union, Intersection and Except",
    short: "Set operations in SQL: Union (A+B), Intersection (common), aur Except (A-B) results ko combine ya filter karne mein help karte hain.",
    detailed: "SQL mein multiple queries ke results ko combine karne ke liye Set Operations use hote hain. 1. UNION: Do queries ka unique combination result deta hai. 2. INTERSECT: Sirf wahi rows dikhata hai jo dono query results mein common hon. 3. EXCEPT/MINUS: Pehli query ke wo results jo doosri mein nahi hain. In queries ke liye zaroori hai ki dono selects mein columns ka count aur data type same ho (Union Compatible). Yeh complex data filtering aur reports generate karne mein bahut useful hote hain.",
    bulletin: [
      "Union: Combines results, removes duplicates (Use UNION ALL to keep them).",
      "Intersect: Returns only records found in both input sets.",
      "Except: Returns records from the first set not present in the second.",
      "Constraint: Columns must match in number and compatible data types.",
      "Usage: Complex analytical reporting and data comparison."
    ]
  },
  {
    topic: "Boyce-Codd Normal Form",
    short: "BCNF 3NF ka upgraded version hai jo even rare redundancy cases solve karta hai (Every determinant must be a candidate key).",
    detailed: "BCNF (3.5 NF) tab zaroori hota hai jab 3NF ke bawajood table mein redundancy reh jati hai, khaas karke jab multiple overlapping candidate keys hon. Rule: Har functional dependency (X -> Y) mein, X hamesha ek 'Super Key' honi chahiye. Iska matlab hai table mein koi bhi attribute kisi non-key attribute pe depend nahi hona chahiye. BCNF kafi strict hota hai aur decomposition ke waqt kabhi kabhi Functional Dependencies lost ho sakti hain, isliye implementation ke waqt dhyan rakhna padta hai.",
    bulletin: [
      "Stricter Rule: Every determinant must be a candidate key.",
      "Evolution: Extension of 3NF to handle overlapping keys.",
      "Property: Eliminates anomalies that 3NF might miss.",
      "Trade-off: May result in loss of some dependency preservation.",
      "Context: Used in highly optimized database designs."
    ]
  },
  {
    topic: "ODBC and JDBC",
    short: "ODBC (C-based) aur JDBC (Java-based) standard APIs hain jo apps ko database se connect karne aur queries run karne mein help karti hain.",
    detailed: "ODBC (Open Database Connectivity) aur JDBC (Java Database Connectivity) middleware drivers hain jo application aur database server ke beech bridge ka kaam karte hain. 1. ODBC: Microsoft ne banaya tha, yeh platform independent hai aur C/C++ apps ke liye standard hai. 2. JDBC: Java ecosystem ke liye hai, yeh Java code ko SQL database se talk karne ki permission deta hai. Yeh APIs 'Standardization' maintain karti hain—yani aap code change kiye bina database backend (MySQL vs Oracle) switch kar sakte hain agar sahi drivers installed hon.",
    bulletin: [
      "Function: APIs that allow applications to interact with database engines.",
      "ODBC: Language-independent API based on C.",
      "JDBC: Specific to Java applications using Driver Manager.",
      "Components: Driver, Driver Manager, Connection Object, Result Set.",
      "Benefit: Decouples application logic from specific database syntax."
    ]
  },

  // BCA-402 Digital Electronics
  {
    topic: "Basic Computer Block Diagram",
    short: "Basic computer hardware aur software ka combination hai jo instructions process karta hai simplified Von-Neumann model pe.",
    detailed: "Von Neumann Architecture modern computers ka foundation hai jisme program aur data dono ek hi memory mein store hote hain. Iske 5 main components hote hain: 1. CPU (ALU + CU), 2. Memory Unit (RAM), 3. Input Unit, 4. Output Unit, aur 5. Bus System. Sabse bada disadvantage 'Von Neumann Bottleneck' hai, kyunki CPU aur memory ke beech ek hi bus hone se data retrieval speed process ko limit karti hai.",
    bulletin: [
      "Von Neumann Bottleneck: Speed limit due to shared bus for data and code.",
      "CPU: Central Brain performing all math (ALU) and sequencing (CU).",
      "Memory Unit: Stores both program instructions and variables together.",
      "I/O Unit: Bridges communication with the external world (Mouse, Monitor).",
      "Bus System: The physical path connecting all internal components."
    ],
    diagramUrl: "true"
  },
  {
    topic: "The Von-Neumann Architecture",
    short: "Modern hardware framework jo 'Stored Program' concept use karta hai (Memory holds both data & code).",
    detailed: "1945 mein John von Neumann ne ye architecture propose kiya tha. Iska core principle ye hai ki instructions (what to do) aur data (on what to work) dono ek hi address space mein rehte hain. Component breakdown: CPU logic execute karta hai, Memory temporary results save karti hai, aur I/O interfaces human-readable I/O manage karte hain. Bottleneck issue tab hota hai jab CPU fast ho par single bus data fetch karne mein der lagae.",
    bulletin: [
      "Stored Program: No distinction between instruction and data memory paths.",
      "Main Components: CPU, Memory Unit, Input, Output, and Bus System.",
      "Architecture Date: Proposed in 1945 by John von Neumann.",
      "Speed Constraint: Bus bandwidth dictates the system throughput.",
      "Flow: Input -> CPU/Memory -> Output."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Instruction Cycle",
    short: "CPU her instruction ko exact sequence mein execute karta hai: Fetch, Decode, Execute, aur Store.",
    detailed: "CPU cycle binary instructions process karne ki method hai. 1. FETCH: PC (Program Counter) address bhejta hai aur memory se instruction lata hai. 2. DECODE: Instruction ka matlab samjha jata hai (Opcode analysis). 3. EXECUTE: ALU hardware actual operation perform karta hai. 4. STORE: Result ko wapas memory ya register mein save kiya jata hai. Ye loop billions of times per second chalta hai digital system mein.",
    bulletin: [
      "Fetch Stage: Retrieves instruction from memory using PC address.",
      "Decode Stage: Control Unit translates binary opcode to signals.",
      "Execute Stage: ALU performs the required logic/math operation.",
      "Store/Write-back: Saves result in Accumulator or RAM cell.",
      "Clock Cycle: Each stage typically maps to hardware pulses."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Cycle",
    short: "Interrupts CPU execution ko break karte hain urgent events handle karne ke liye (Task switches or failures).",
    detailed: "Interrupt steps: 1. Current instruction complete karo. 2. Status/Registers save karo. 3. ISR (Interrupt Service Routine) execute karo. 4. Wapas original program pe laut aao. Types: Hardware (Keyboard), Software (Runtime errors), Maskable (Can be disabled), aur Non-Maskable (NMI - Cannot be ignored, e.g., Power loss).",
    bulletin: [
      "ISR: Specific code for handling particular interrupt sources.",
      "NMI: Critical interrupts like power failure that must be handled immediately.",
      "Maskable: Lower priority signals that software can temporarily ignore.",
      "Hardware vs Software: Triggered by external chips vs program exceptions.",
      "Return: After ISR, state is restored to resume work flawlessly."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Computers: Then and Now",
    short: "Computers history 1st generation (Vacuum Tubes) se lekar modern 5th generation (AI/Parallel Processing) tak evolve hui hai.",
    detailed: "Gen 1: Vacuum tubes (Garam aur bulky). Gen 2: Transistors (Faster aur smaller). Gen 3: Integrated Circuits (MSI/LSI era). Gen 4: Microprocessors (VLSI/Personal computers). Gen 5: AI, Robotics, aur Quantum Computing (Now/Future). Har generation mein processing speed badhi hai aur power consumption drastically kam hui hai.",
    bulletin: [
      "Vacuum Tubes: Early massive computers like ENIAC.",
      "Transistors: Semiconductor era jump (1950s).",
      "ICs: Multiple components on one silicon chip.",
      "Microprocessors: Entire CPU on a single chip; Moore's law effect.",
      "Modern Era: Parallelism, Cloud, and Machine Learning focus."
    ]
  },
  {
    topic: "Number Systems",
    short: "Decimal, Binary, Octal, aur Hexadecimal main systems hain jo base values switch karke digits represent karte hain.",
    detailed: "Digital systems binary (base 2) logic pe kaam karte hain. Hexadecimal coding (Base 16) computer memory addresses ke liye standard hai kyunki shorthand hai (1 Hex = 4 Binary bits). Decimal systems hum humans ke liye primary hain. Conversions: Base Division (Forward) aur Positional Weight (Backward) methods use hote hain.",
    bulletin: [
      "Radix: Base of the system (2, 8, 10, 16).",
      "Conversion: Positional multiplication helps binary to decimal.",
      "Sign-Bit: Leftmost bit (0 for +, 1 for -) in binary words.",
      "Complements: 2's complement is standard for negative math.",
      "Efficiency: Hexadecimal reduces human-eye errors in binary data reading."
    ]
  },
  {
    topic: "Decimal & Alphanumeric Representation",
    short: "Computers BCD aur ASCII/EBCDIC codes use karte hain decimal numbers aur text/symbols ko represent karne ke liye.",
    detailed: "Binary-Coded Decimal (BCD) 4 bits use karta hai har decimal digit (0-9) ke liye. Alphanumeric codes jaise ASCII (7-bit) aur Unicode characters ko store karne ki schema dete hain. Yeh ensures karta hai ki software text files standard colors aur letters mein interpret kar sake correctly across platforms.",
    bulletin: [
      "BCD: 0-9 each mapped to 4 binary bits separately.",
      "ASCII: Standard character encoding for 128 chars.",
      "Unicode: Global standard covering languages worldwide.",
      "Weighted Codes: 8421 code is the formal name for BCD.",
      "Self-Complementary Codes: Codes like XS-3 for easier math operations."
    ]
  },
  {
    topic: "Floating Point Representation",
    short: "Floating Point numbers real values (decimals) ko store karte hain binary mein Mantissa aur Exponent ka use karke.",
    detailed: "Decimals represent karne ke liye Floating Point notation use hota hai. Parts: Sign bit, Exponent (Positioning), aur Mantissa (Significand). IEEE 754 standard (32-bit Single, 64-bit Double) globally used hai graphics aur science computations ke liye jahan bohot bade ya decimal precision wale numbers zaroori hain.",
    bulletin: [
      "Structure: Sign + Exponent + Mantissa.",
      "Normalization: Hidden leading '1' bit used in IEEE standard.",
      "Dynamic Range: Very large and micro-scale numbers handling.",
      "Precision: Multi-part encoding ensures high significant digit count.",
      "Complex Hardware: Needs specialized FPUs in the CPU."
    ]
  },
  {
    topic: "Error Detection and Correction Codes",
    short: "Error codes data transmission mein faults detect (Parity) aur correct (Hamming Code) karne ke liye use hote hain.",
    detailed: "Communication noises se bits flip ho sakti hain. Simple Parity bit extra bit add karta hai errors detect karne ke liye. Hamming Code multiple bits check karke exactly fault location batata hai hardware level pe auto-correct karne ke liye. Networking (CRC) aur Memory (ECC) modules ispe base hote hain security ke liye.",
    bulletin: [
      "Detection: Parity (single bit) can find odd flips.",
      "Correction: Hamming code provides single bit fix (ECC).",
      "Redundancy: Calculated extra bits mixed with raw data.",
      "Formula: 2^p >= n + p + 1 used for bit budgeting.",
      "Modern Storage: SSD/HDD use advanced reed-solomon/BCH codes."
    ]
  },
  {
    topic: "Logic Gates",
    short: "Logic gates digital systems ke atomic building blocks hain (AND, OR, NOT, NAND, NOR, XOR).",
    detailed: "Basic gates (AND, OR, NOT) logical decisions ki foundation hain. Universal Gates (NAND aur NOR) sabse important hain kyunki inki help se kisi bhi logical function ko implement kiya ja sakta hai. XOR gate (Exclusive OR) output 1 deta hai jab inputs alag hon, aur XNOR gate output 1 deta hai jab inputs same hon. Digital engineering mein gates ka selection chip space aur power efficiency pe depend karta hai.",
    bulletin: [
      "Universal Gates: NAND and NOR (Can implement any boolean expression).",
      "XOR Gate: Output is 1 only when inputs are mismatched (A⊕B).",
      "NOT Gate: Inverts the signal (A').",
      "AND/OR: Basic multiplication and addition logic equivalents.",
      "Efficiency: Using only NAND/NOR minimizes transistor types on chips."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Logic Circuits",
    short: "Logic circuits binary data par operational logic lagaakar computation aur control signals create karte hain.",
    detailed: "Electronic digital circuits jo logic function ko hardware mein real karte hain. Yeh circuits basically Boolean logic follow karke complex arithmetic, processing aur routing handle karte hain. Overall inko 2 classes mein divide kiya jata hai: Combinational (State independent) aur Sequential (State dependent with memory).",
    bulletin: [
      "Core Mechanism: Uses simple logic gates to build complex operations.",
      "Voltage Levels: Interprets 5V as True (1) and 0V as False (0).",
      "Two Types: Combinational and Sequential circuits.",
      "Applications: Arithmetic Processing, Bus Steering, Control logic.",
      "Implementation: Built inside ICs on silicon wafers using transistors."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Combinational Circuits",
    short: "In circuits ka output sirf current inputs pe depend karta hai (No memory).",
    detailed: "Combinational circuits mein previous state save karne ka hardware nahi hota. Examples: Adders, MUX, Demux, Encoders, aur Decoders. Inka design gate propagation delay se limited hota hai. Truth tables aur Boolean equations inka functional behavior define karte hain.",
    bulletin: [
      "No Memory: Current output = f(Current Inputs).",
      "Delay: Output changes after a specific propagation delay.",
      "Logic Patterns: Sum of Products (SOP) and Product of Sums (POS).",
      "Optimization: Simplified using K-Maps to reduce gate count.",
      "Building Blocks: Base for logical steering in CPU buses."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Minimization of Gates",
    short: "K-Map ek visual tool hai jo Boolean expressions ko simplify karke hardware cost kam karta hai.",
    detailed: "Gate minimization ke liye K-Map (Karnaugh Map) grouping logic use karta hai: 1. Group of 1 (No change), 2. Group of 2 (Pair - 1 variable eliminate), 3. Group of 4 (Quad - 2 variables eliminate), 4. Group of 8 (Octet - 3 variables eliminate). 'Don't Care (X)' conditions groups bada karne mein help karti hain taaki formula aur chota ho sake. Simplification se circuit delay aur silicon space kam hota hai.",
    bulletin: [
      "Grouping: Pairs (2), Quads (4), and Octets (8) reduce complexity.",
      "Don't Care (X): Can be assumed as 1 or 0 to maximize group size.",
      "Gray Code: K-Map cells move in single-bit change hierarchy.",
      "Logical Goal: Reach the most minimal Sum of Products (SOP) form.",
      "Benefit: Smaller circuit means less heat and faster propagation."
    ]
  },
  {
    topic: "Half Adder and Full Adder",
    short: "Adders binary arithmetic manage karte hain.",
    detailed: "1. Half Adder: 2 bits handle karta hai (Sum=A⊕B, Carry=A·B). 2. Full Adder: 3 bits handle karta hai (A, B, Cin) multi-bit operations enable karne ke liye.",
    bulletin: [
      "Half Adder: Basic 2-bit addition; cannot handle carry-in.",
      "Full Adder: 3-bit processing; Sum = A⊕B⊕Cin.",
      "Ripple Carry: Delay is proportional to number of bits."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Encoder and Decoder",
    short: "Decoders binary bits ko logic signals mein convert karte hain, aur Encoders inverse operation karte hain.",
    detailed: "Decoder (n inputs → 2^n outputs) address bus select karne ke liye use hota hai. Encoder (2^n → n) hardware signals (jaise keyboard) ko binary mein encode karta hai.",
    bulletin: [
      "Decoder: Extracts specific line from binary code.",
      "Encoder: Generates binary code based on active input line.",
      "Application: Sub-system addressing."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Multiplexer and Demultiplexer",
    short: "MUX multiple signals mein se ek select karta hai, DEMUX signal distributor hai.",
    detailed: "MUX (Data Selector) 2^n data inputs aur n select lines use karta hai. Demux single line input ko multiple output paths pe route karta hai.",
    bulletin: [
      "MUX: Routes many inputs to one sink.",
      "DEMUX: Distributes one input to many sinks.",
      "Efficiency: Critical for CPU internal bus sharing."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Programmable Logic Array (PLA)",
    short: "Flexible chips jisme AND aur OR arrays dono programmable hote hain.",
    detailed: "PLA circuits custom hardware design ke liye used hote hain. Ismein predefined programmable AND array aur OR array hota hai. Ye PROM se zyada flexible hai kyunki ye selective logic mapping karta hai unnecessary memory bits waste nahi karta. High efficiency hardware logic optimization ke liye ye best solution hai.",
    bulletin: [
      "Flexibility: Both AND and OR planes are programmable by the user.",
      "Mapping: Implements Sum of Products logic efficiently.",
      "Cost-Effectiveness: Replaces multiple discrete gate ICs with one package.",
      "Comparison: More flexible than PAL (where only AND is programmable).",
      "Usage: Custom controller logic in motherboard peripherals."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Read Only Memory (ROM)",
    short: "ROM permanent storage provide karta hai boot configuration aur logic mapping ke liye.",
    detailed: "ROMs chip level pe permanent logic aur program hold karte hain. Prominent forms: PROM, EPROM, EEPROM, aur Flash Memory. Inka primary kaam computer boot process system firmware (BIOS/UEFI) hold karna hota hai.",
    bulletin: [
      "ROM: Stores firmware non-volatilely.",
      "EEPROM/Flash: Allow modifying data dynamically later.",
      "Usage: Replaces complex Combinational logic as look-up tables."
    ],
    diagramUrl: "true"
  },
  {
    topic: "RAM vs ROM",
    short: "ROM non-volatile permanent storage hai, jabki RAM temporary volatile workspace hai.",
    detailed: "ROM Types: PROM, EPROM, EEPROM, Flash. RAM Types: SRAM (Fast, cache), DRAM (Cheap, memory). Memory system in dono chip types ke balance par chalta hai—RAM processor data block save karta hai while ROM hard logic hold karta hai.",
    bulletin: [
      "ROM: Permanent firmware logic; Non-volatile.",
      "RAM: Temporary workspace; Volatile.",
      "SRAM vs DRAM: SRAM needs no refresh (Fast); DRAM needs refresh (Cheap)."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Sequential Circuits",
    short: "Sequential circuits memory elements (Flip-flops) use karte hain jahan output current input + past history pe depend karta hai.",
    detailed: "Sequential logic mein 'State' concept hota hai. 1. Synchronous: Clock pulse ke saath state change hoti hai (Predictable). 2. Asynchronous: Kisi bhi time bits change ho sakti hain (Design complex but fast). Digital systems timeline manage karne aur information store karne ke liye sequential blocks use karte hain.",
    bulletin: [
      "State-Based: Output = f(Present Inputs, Past States).",
      "Memory: Flip-flops act as the elementary storage units.",
      "Clocking: Synchronizes all bit updates to prevent 'Race Conditions'.",
      "Feedback: Output is fed back to input stages to maintain memory.",
      "LIFO/FIFO: Implemented using sequential logic structures."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Flip-Flops (SR, JK, D, T)",
    short: "Flip-flops 1-bit memory components hain (SR, D, JK, T types).",
    detailed: "1. SR Flip-flop: Basic reset/set but has 'Invalid' state. 2. D Flip-flop: Data storage ke liye best hai. 3. JK Flip-flop: Improved SR; 1,1 pe Toggle (Complement) karta hai. 4. T Flip-flop: Toggle functionality (Counters ke liye). Master-Slave FF logic 'Race around condition' solve karta hai.",
    bulletin: [
      "SR FF: 2 inputs (Set/Reset); Invalid when both are 1.",
      "D FF: Q(next) = D; Simple latch logic.",
      "JK FF: Most versatile; J=K=1 flips the state (Toggle).",
      "T FF: Single input; state flips on every pulse if T=1."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Registers",
    short: "Registers collection of flip-flops hain jo parallel data (bits) store karte hain.",
    detailed: "CPU speed inhi pe depend karti hai. Types: SISO, SIPO, PISO, PIPO (Sabse fast). Shift registers bits ko left/right move karke math operations execute kar sakte hain.",
    bulletin: [
      "Data Storage: Array of flip-flops working in unison.",
      "PIPO: Instantaneous parallel update across all bits.",
      "General Purpose: Visible to programmers like AX, BX in x86 systems."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Counters (Asynchronous and Synchronous)",
    short: "Counters sequential circuits hain jo pulses count karte hain (UP/DOWN/LOOP).",
    detailed: "Types: 1. Asynchronous (Ripple): Simple design par cumulative delay rehta hai. 2. Synchronous: Saari bits ek sath trigger hoti hain common clock se. Counters memory timing aur cycle sequence mein vital role play karte hain.",
    bulletin: [
      "Ripple Counter: Propagation delay increases with number of stages.",
      "Synchronous: Parallel clocking ensures minimal delay.",
      "Mod-N: Counts up to N then resets back to 0."
    ],
    diagramUrl: "true"
  },
  {
    topic: "ALU Organization",
    short: "ALU (Arithmetic Logic Unit) CPU ka wo part hai jo actual math aur logic operations perform karta hai registers aur control signals ki help se.",
    detailed: "ALU logic gates ke complex combinations use karta hai. Fixed-point ALU logic integers handles karta hai, FPU floating point handles karta hai. Accumulator basic result sink hai. Flags (Condition Codes) operation results ke basis pe update hote hain comparison instructions execute karne ke liye decision logic banate hain.",
    bulletin: [
      "Core: XOR for addition, AND/OR for bitwise logic.",
      "Shifters: Barrel shifters for high speed bit movement.",
      "Flags: Carry (C), Zero (Z), Sign (S), overflow (V) update logic.",
      "Optimization: Critical path minimization crucial for GHz speeds.",
      "Interface: High speed feedback to memory via internal bus."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Control Unit",
    short: "Control Unit CPU ka master coordinator hai jo instruction decoding manage karta hai.",
    detailed: "CU ke 2 classes: 1. Hardwired Control (Fast par inflexible). 2. Microprogrammed (Micro-instructions control ROM mein store hoti hain; Flexible par slow).",
    bulletin: [
      "Coordinator: Pulls logic levers sequentially.",
      "Logic Output: Generates timing signals based on clock pulses."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Hardwired Control Unit",
    short: "Logic directly physical states/gates mein embedded hoti hai.",
    detailed: "Inflexible high-performance logic mainly used in RISC CPUs (like ARM). Ye flipops aur gates se hardcoded hoti hai jiske wajah se speed bhot milti hai lekin ise later modify karna impossible hai.",
    bulletin: [
      "RISC CPU: Found primarily in reduced architectures.",
      "Highest Speed: Zero translation delay.",
      "Complexity Limit: Cannot be used for highly complex instructions."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Microprogrammed Control Unit",
    short: "Logic memory (ROM) mein micro-programs ke form mein save hoti hai.",
    detailed: "Complex instruction decoder (Wilkes Control design). Ye RAM jaisa hi hota hai but iske codes sequence generation handle karte hain (CISC - jaise Intel processors) jise asani se update aur modify kiya ja sakta hai firmware k through.",
    bulletin: [
      "CISC CPU: Designed to handle 1000s of different commands.",
      "Micro-instruction Formats: Vertical and Horizontal encodings.",
      "Updatability: Possible via Micro-code updates."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Addressing Modes",
    short: "Addressing modes explain karte hain ki computer operand memory se kaise nikalega.",
    detailed: "Important Modes: 1. Immediate (Data in instruction). 2. Direct (Address in instruction). 3. Indirect (Pointer in memory). 4. Register (Data in register). 5. Indexed (Base + Index register). 6. Relative (PC + Offset). 7. Stack (Implicit stack pointer). Modus selection CPU word size aur memory range trade-offs pe depend karta hai.",
    bulletin: [
      "Immediate: MOV AX, 5 (Fastest, no memory access).",
      "Direct: Accesses Memory[addr] directly (Simple).",
      "Indirect: Memory[Memory[addr]] (Flexible pointers).",
      "Indexed Addressing: Perfect for array traversal and data tables.",
      "Base Register Addressing: Used for code relocation and segments."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Input Output Techniques",
    short: "CPU aur peripherals ke beech communication ke 3 main methods hain: Programmed, Interrupt, aur DMA.",
    detailed: "1. Programmed I/O (Polling): CPU continuously status check karta hai (Busy-Waiting); CPU waste hota hai. 2. Interrupt-Driven I/O: Device ready hone pe CPU ko signal bhejti hai (Efficient). 3. DMA (Direct Memory Access): DMA controller directly I/O aur Memory ke beech data transfer karta hai CPU ko bypass karke (Best for bulk transfers).",
    bulletin: [
      "Programmed I/O: Simple but inefficient for multitasking.",
      "Interrupt Processing: 1. Device signal -> 2. Finish Instr -> 3. Save State -> 4. Run ISR.",
      "DMA Transfer: Handles data between RAM and Device (e.g., Disk) without CPU help.",
      "I/O Processor (IOP): Dedicated processor that offloads all I/O logic.",
      "SATA/PCIe: Modern high-speed serial standards for storage and cards."
    ],
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    short: "RAID multiple hard disks use karke performance aur data safety/reliability badhata hai.",
    detailed: "RAID Levels: RAID 0 (Striping - High speed, no redundancy). RAID 1 (Mirroring - High reliability). RAID 2 (Bit-level striping). RAID 5 (Block-level striping + distributed parity; Most popular). RAID 10 (Combination for speed + safety).",
    bulletin: [
      "RAID 0: Splits data for speed; one failure kills all data.",
      "RAID 1: Efficiency 50%; identifies clones for instant recovery.",
      "RAID 5: Parity distributed across all disks; survives one failure.",
      "RAID 6: Double distributed parity; survives two failures.",
      "RAID 10: High speed + High reliability but expensive."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Instruction Pipelining",
    short: "Parallel processing technique jahan multiple instructions overlap karti hain execution stages mein.",
    detailed: "Classic 5-Stage Pipeline: 1. IF (Instruction Fetch), 2. ID (Instruction Decode), 3. EX (Execute), 4. MEM (Memory Access), 5. WB (Write Back). Hazards: Data Hazard (Dependency), Control Hazard (Branching), aur Structural Hazard (Resource conflict). Ye CPU throughput badhata hai.",
    bulletin: [
      "Ideal Speedup: Equal to the number of stages (N).",
      "Data Hazard Fix: Forwarding or Stalling 'bubbles'.",
      "Control Hazard Fix: Branch prediction and Delayed branching.",
      "Structural Hazard Fix: Hardware resource duplication.",
      "Throughput: One instruction finishes per pulse in ideal conditions."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Memory Hierarchy",
    short: "Performance aur cost optimize karne ke liye fast storage top pe aur cheap storage bottom pe.",
    detailed: "Hierarchy Structure: 1. L1 (~1ns). 2. L2 (~5ns). 3. L3 (~10ns). 4. RAM (~100ns). 5. Secondary Storage (HDD/SSD). 6. Tertiary Storage (Tape). Memory locality (Temporal and Spatial) ensures high hit rates in caches.",
    bulletin: [
      "Pyramid Logic: Closer to CPU = Faster, Smaller, More Expensive.",
      "Registers: CPU internal high-speed storage.",
      "Cache: Bridging the speed gap between CPU and RAM."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Cache Memory Organization",
    short: "Fast buffer jo CPU aur Main Memory ke beech speed synchronization karta hai.",
    detailed: "Mapping techniques: 1. Direct (Fixed line). 2. Fully Associative (Any line). 3. Set Associative (N-way split). Cache CPU aur slow RAM ke beech wait times ko completely chupa deta hai.",
    bulletin: [
      "Hit Ratio: Higher is better; typically >90% performance target.",
      "Replacement: LRU replaces the block not used for the longest time.",
      "Associative Memory: Search by content/value instead of bit address."
    ],
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    short: "Combinational mein output current input pe depend hai (Adder), jabki Sequential mein memory (Flip-flop) inputs aur past state dono use karti hai.",
    detailed: "Architecture basics: Combinational gates processing perform karte hain logic paths simplify kar ke (Adders, MUX). Sequential gates memory aur state persistence control karte hain timing pulses synchronize kar ke registers aur counters design components mein foundation units bankar processing history recall logic maintain karte hain complex decision cycles ke execution phase mein software level requirements matching ke hisab se.",
    bulletin: [
      "State-Driven: Sequential circuits use history; Combinational cannot.",
      "Clock Input: Crucial only for Sequential state transitions.",
      "Prop-Delay: Only factor in Combinational speed; Flip-flop setup/hold in Seq.",
      "Memory: Flip-flops and Latches are exclusive to Sequential design.",
      "Complexity: Modern processors mix both; Comb for ALU, Seq for Pipelines."
    ]
  },
  {
    topic: "Input / Output System",
    short: "CPU aur peripherals ke beech basic architecture aur communication system.",
    detailed: "I/O devices slow hote hain CPU ke compare mein. I/O controllers aur Device Drivers is speed gap ko manage karte hain aur standardized interfaces provide karte hain peripherals connect karne ko.",
    bulletin: [
      "I/O Controllers: specialized chips tracking external hardware.",
      "Device Drivers: OS-level software bridging devices.",
      "Ports: USB, SATA, PCIe are modern implementations."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Driven I/O",
    short: "Device ready hone pe CPU ko signal bhejti hai baki time CPU apna kaam karta hai.",
    detailed: "Polling (Programmed I/O) mein CPU waste hota tha busy waiting mein. Interrupt driven I/O isi inefficiency ko avoid karta aaur CPU ko asynchronously notify karta hai task completion pe.",
    bulletin: [
      "Efficient Pipeline: CPU is never stuck waiting.",
      "ISR Execution: Specific routines triggered by specific devices.",
      "Vectored Interrupts: Provide immediate branch destinations."
    ],
    diagramUrl: "true"
  },
  {
    topic: "DMA (Direct Memory Access)",
    short: "DMA controller directly I/O aur Memory ke beech data transfer karta hai CPU ko bypass karke.",
    detailed: "Large data transfers ke liye (jaise hard drive se RAM tak array copys), CPU ko wait karana wasteful hai. DMA chip CPU ko signal deta hai aur bus hijack karke independently data transfer complete karta hai.",
    bulletin: [
      "Bus Mastering: DMA chip safely takes control of the memory bus.",
      "Cycle Stealing: Data blocks transferred while CPU decodes instructions.",
      "Zero CPU Cost: Perfect for bulk transfers."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Instruction Formats",
    short: "Design patterns jo opcode aur operands ko instruction word mein arrange karte hain.",
    detailed: "Formats: 3-Address (A=B op C), 2-Address (A=A op B), 1-Address (Accumulator implicitly used), aur 0-Address (Stack-based logic). Format ka choice CPU complexity aur word alignment decide karta hai performance ke liye.",
    bulletin: [
      "Opcode: Identifies the specific ALU function (ADD, SUB, MOV).",
      "Operand Field: Points to register or memory address.",
      "Trade-off: More opcode bits = more functions but shorter addresses.",
      "Fixed vs Variable: RISC uses fixed; CISC uses variable formats.",
      "Stack Logic: No addresses needed in 0-address instructions."
    ],
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
    short: "Binary Tree mein har node ke max 2 children hote hain (Left & Right).",
    detailed: "Binary Tree hierarchy structure hai jisme har parent ke maximum 2 sub-nodes ho sakte hain. Types: Full, Complete, aur Balanced trees. Terminology: Root (top), Leaf (end), Edge (path), Height (total levels).",
    bulletin: [
      "Degree: Max degree is 2.",
      "Types: Skewed, Perfect, Full, Balanced.",
      "Traversals: Inorder, Preorder, Postorder."
    ],
    diagramUrl: "true"
  },
  {
    topic: "BST & AVL Trees",
    short: "BST sorting rule follow karta hai, jabki AVL rotations use karke use balance rakhta hai.",
    detailed: "1. BST: Left < Parent < Right constraint. O(log n) efficiency. 2. AVL Tree: Self-balancing BST jisme balance factor {-1, 0, 1} hona chaiye. Rotations (LL, RR, LR, RL) perform kiye jate hain stability ke liye.",
    bulletin: [
      "Search: O(log n) guaranteed in AVL.",
      "Rotations: Critical for keeping height minimal.",
      "Order: Inorder traversal always gives sorted output."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Representations of Graphs",
    short: "Graphs ko Adjacency Matrix ya Adjacency List se represent kiya jata hai efficiency ke basis pe.",
    detailed: "1. Adjacency Matrix: V x V 2D array jahan 1 presence aur 0 absence dikhata hai. 2. Adjacency List: Har node ke liye linked list store ki jati hai current connections save karne ke liye. Optimized for sparse graphs.",
    bulletin: [
      "Matrix: Fast lookup, high space cost.",
      "List: Space efficient, slower connectivity check.",
      "Types: Directed (Arrows), Undirected (Lines)."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Internal Sorting",
    short: "Internal sorting memory (RAM) mein partition logic aur merge techniques use karke fast sorting provide karta hai.",
    detailed: "1. Quick Sort: Pivot based partitioning algorithm (Divide & Conquer). 2. Heap Sort: Max/Min Heap building process to extract elements. 3. Bubble Sort: Adjacent elements swapping iteratively.",
    bulletin: [
      "Quick Sort: Avg O(n log n).",
      "Heap Sort: Guaranteed O(n log n).",
      "In-place: Algorithms that use constant extra space."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Searching",
    short: "Binary search sorted data pe middle pivot use karke fastest search results deta hai.",
    detailed: "Binary Search algorithm data ko half mein divide karta hai (Left/Right) target element dhoondne ke liye. Iska average complexity O(log n) hai, lekin input data sorted hona mandatory hai.",
    bulletin: [
      "Binary Search: Divide and Conquer approach.",
      "Constraint: Data must be sorted.",
      "Interpolation Search: Predictive searching based on value distribution."
    ],
    diagramUrl: "true"
  },
  {
    topic: "B Trees",
    short: "B-Tree persistent storage (Database) ke liye multi-way balanced tree hai.",
    detailed: "B-Tree balanced m-way tree hai jo specifically disks/databases ke liye design hai taaki search depth minimum rahe. Har node multiple keys aur multiple children pointers store kar sakta hai disk blocks ko fill karne ke liye efficiency ke sath.",
    bulletin: [
      "B-Tree: Optimized for block storage.",
      "Height: Stays extremely short even with millions of records.",
      "Usage: Foundation of SQL Indexes."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Graph Traversals",
    short: "BFS queue (level-by-level) aur DFS stack (depth-first) approaches use karte hain sare nodes visit karne ke liye.",
    detailed: "Graph traversal ka matlab hai graph ke har node ko visit karna. 1. BFS (Breadth-First Search): Yeh 'Queue' data structure use karta hai. Yeh root node se shuru hoke saare adjacent levels optimize karta hai. Shortest path find karne ke liye BEST hai. 2. DFS (Depth-First Search): Yeh 'Stack' (ya recursion) use karta hai. Yeh ek path ko poora end tak explore karta hai phir backtrack karta hai. Connected components aur cyclic detection ke liye useful hai. Donon ki complexity O(V + E) hoti hai jahan V vertices hain aur E edges. Representation ke liye Adjacency Matrix ya adjacency list use ki jati hai based on graph density.",
    bulletin: [
      "BFS Strategy: Layer-by-layer exploration using a Queue.",
      "DFS Strategy: Pursue specific path to depth using a Stack/Recursion.",
      "BFS Benefit: Guaranteed shortest path in unweighted graphs.",
      "DFS Benefit: Memory efficient for deep trees and useful for cycles.",
      "Representation: Adjacency List (memory efficient) or Matrix (faster lookups)."
    ],
    diagramUrl: "true"
  },
  {
    topic: "AVL Trees: Definition and Operations",
    short: "AVL tree ek self-balancing BST hai jahan height difference (Balance Factor) hamesha -1, 0, ya 1 rehta hai.",
    detailed: "AVL Tree (Adelson-Velsky and Landis) ek advanced BST hai jo hamesha balanced rehta hai. Iska main rule hai 'Balance Factor' = |Height of Left Subtree - Height of Right Subtree| ≤ 1. Agar insertion ya deletion se balance bigadta hai, to hum 'Rotations' (LL, RR, LR, RL) use karke use wapas balance karte hain. Benefit: Iska search time hamesha O(log n) rehta hai, chahe data kitna bhi random ya sequential ho. Skewed trees ki problem yahan nahi aati, isliye indexing databases mein AVL ya B-Trees prefer kiye jate hain.",
    bulletin: [
      "Constraint: Balance Factor must stay within {-1, 0, 1}.",
      "Searching: Guaranteed O(log n) performance.",
      "Maintenance: Uses single/double rotations to maintain height balance.",
      "Rotations: Left (L), Right (R), Left-Right (LR), and Right-Left (RL).",
      "Trade-off: Insertion/Deletion take slightly longer than a simple BST due to rebalancing."
    ],
    diagramUrl: "true"
  },

  // BCA-404 Statistics
  {
    topic: "Histograms and frequency polygons",
    short: "Histogram bars use karta hai quantitative frequency dikhane ke liye, jabki Polygon lines se trends represent karta hai.",
    detailed: "1. Histogram: Data intervals (Classes) ko bars ke form mein represent karta hai jahan bar ki height frequency dikhati hai. 2. Frequency Polygon: Mid-points of histogram bars ko connect karke banaya jata hai. Yeh continuous data distribution ki shape samajhne mein help karte hain visually, especially comparison tasks mein.",
    bulletin: [
      "Bars: Width represents the class interval; Height represents frequency.",
      "Polygon: Formed by joining the mid-points of class intervals.",
      "Overlap: Useful for comparing two different frequency distributions.",
      "Area: Relationship exists between the total area of histogram and raw data sum.",
      "Symmetry: Helps identify if the distribution is skewed or normal."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Theoretical distribution",
    short: "Binomial discrete trials (Success/Failure) handle karta hai, jabki Poisson fixed interval mein rate of events handle karta hai.",
    detailed: "1. Binomial: Trials fix hote hain (n), occurrences (p) probability ke sath. Formula P(X) = nCx p^x q^(n-x). 2. Poisson: Jab events rare hon aur intervals fix hon. Ismein sirf ek parameter lambda (mean) hota hai. Donon discrete probability distributions hain jo counts and frequency prediction mein use hote hain.",
    bulletin: [
      "Binomial: Two outcomes only (Pass/Fail); Finite number of trials.",
      "Poisson: Events per time/space unit (Calls per hour).",
      "Curve Shape: Positively skewed but approaches normal as N increases.",
      "Constraint: Trials must be independent in both distributions.",
      "Calculus: Used in queuing theory and risk assessment modeling."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Least Square Regression lines",
    short: "Regression line (Line of best fit) do variables ke beech trend dikhati hai aur future values predict karne mein help karti hai.",
    detailed: "Linear Regression model mathematical equation 'Y = a + bX' use karta hai. Iska goal 'Residuals' (Errors) ko minimize karna hota hai. Graph pe yeh points ke beech se guzarti hui wo line hai jo overall trend ko best capture karti hai. Iska slope (b) batata hai ki X badhne pe Y kitna badlega (rate of change).",
    bulletin: [
      "Best Fit: Uses the 'Least Squares Method' to minimize total error.",
      "Equation: Y = a + bX (a is intercept, b is regression coefficient).",
      "Prediction: Extrapolating known data points to estimate unknowns.",
      "Residuals: The vertical distance between actual points and the line.",
      "R-Squared: Statistical measure of how close the data is to the line."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Normal distribution",
    short: "Normal distribution (Bell Curve) symmetric hota hai jahan Mean, Median, aur Mode center point pe overlap karte hain.",
    detailed: "Normal Distribution (Gaussian Distribution) statistics ka sabse common theoretical distribution hai. Iska shape 'Bell' jaisa hota hai aur yeh completely Mean (μ) aur Standard Deviation (σ) pe depend karta hai. Property: 1. Curve symmetric hai mean ke around. 2. Total area under curve 1 hota hai. 3. 68-95-99.7 rule (Empirical Rule) distribution ki range batata hai. Z-score (Standardizing) technique se hum kisi bhi normal distribution ko Standard Normal (mean=0, SD=1) mein convert kar sakte hain calculations ke liye. Natural phenomena jaise height, IQ, aur measurement errors aksar isi pattern ko follow karte hain.",
    bulletin: [
      "Shape: Symmetric 'Bell-curve' centered around the mean.",
      "Overlap: Mean = Median = Mode at the highest peak.",
      "68-95-99.7 Rule: 68% of data falls within 1 SD, 95% in 2 SD, 99.7% in 3 SD.",
      "Asymptotic: The curve touches the horizontal axis only at infinity.",
      "Normalization: Standardized using Z-score (X - μ) / σ."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Linear Correlation",
    short: "Correlation coefficient (r) batata hai ki do variables (X, Y) kitne strongly related hain (-1 se +1 range).",
    detailed: "Correlation Measure do quantitative variables ke beech linear relationship ki strength check karta hai. Karl Pearson's coefficient (r) main tool hai. Range: +1 (Perfect positive relation - dono sath badhte hain), -1 (Perfect negative relation - ek badhta hai to doosra ghat ta hai), 0 (No linear correlation). 'Scatter Diagram' se iska visual representation asani se samajh aata hai. Note: Correlation doesn't imply Causation (Yani agar r=1 hai to zaroori nahi ki X ki vajah se hi Y badh raha hai). Regression analysis correlation ke results use karke future values predict karne mein madad karta hai.",
    bulletin: [
      "Coefficient (r): Ranges from -1.0 to +1.0.",
      "Positive (+): Variables move in the same direction.",
      "Negative (-): Variables move in inverse directions.",
      "Zero (0): No linear relationship exists between variables.",
      "Visual Tool: Scatter plots are used to diagnose relation density."
    ],
    diagramUrl: "true"
  },
  {
    topic: "Mean, Mode, Median",
    short: "Yeh central tendency measures hain. Mean average hai, Median middle point hai, aur Mode most frequent value.",
    detailed: "Statistics mein data ka behavior samajhne ke liye 'Central Tendency' ka use hota hai. 1. Mean (Arithmetic Average): Sabhi numbers ka sum divided by total count. Yeh sensitive hai outliers (bahut badi ya choti value) se. 2. Median: Data ko ascending order mein arrange karne ke baad the middle-most value. Yeh better represent karta hai unequal distributions ko (jaise salary data). 3. Mode: Wo value jo data set mein sabse zyada baar repeat ho rahi hai. Ek data set uni-modal, bi-modal ya multi-modal ho sakta hai. In teeno ka relationship empirical formula se define hota hai: Mode = 3*Median - 2*Mean. Accurate analysis ke liye teeno ko ek sath dekhna padta hai.",
    bulletin: [
      "Mean: Calculated as Σx / n; very sensitive to extreme values.",
      "Median: Found at (n+1)/2 position; resistant to outliers.",
      "Mode: The peak frequency in the data distribution.",
      "Symmetry: For normal distribution, Mean = Median = Mode.",
      "Applications: Stock market analysis, demographics, and surveys."
    ]
  }
];

export function getDiagramForTopic(topicTitle: string): string | null {
  const note = hinglishNotes.find(n => n.topic === topicTitle);
  return note?.diagramUrl || null;
}

export function getNoteForTopic(topicTitle: string, style: NoteStyle = 'detailed'): string | string[] {
  const note = hinglishNotes.find(n => n.topic === topicTitle);
  if (!note) return style === 'bulletin' ? [
    "Digital notes for this specific topic are currently being verified by professors.",
    "Click 'Source' to explore official university resources for this topic.",
    "Revision points are added weekly based on semester priorities.",
    "Search result fallback is available in the 'Source' tab."
  ] : "Is topic ke liye high-quality revision notes digital library mein process ho rahe hain. Tab tak aap 'Source' button use karke official references aur search results check kar sakte hain. (Notes updating soon...)";
  
  if (style === 'short') return note.short;
  if (style === 'bulletin') return note.bulletin;
  return note.detailed;
}
