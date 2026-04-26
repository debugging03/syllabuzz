
export interface Note {
  topic: string;
  short: string;
  detailed: string;
  bulletin: string[];
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
    ]
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
    ]
  },
  {
    topic: "Attributes and Entity Sets",
    short: "Entities objects hote hain (Student) aur Attributes unki properties (Name, RollNo). Inka collection Entity Set kehlata hai.",
    detailed: "ER model mein 'Entity' koi bhi real-world object ho sakta hai jiska existence hai, jaise ek Employee ya Department. 'Entity Set' ek group hota hai similar physical entities ka. Har entity ke pass properties hoti hain jinhe 'Attributes' kehte hain. Attributes kai types ke hote hain: 1. Simple (Roll No), 2. Composite (Name which has First/Last), 3. Derived (Age which depends on DOB), aur 4. Multi-valued (Phone numbers). Har Entity Set mein ek primary key identify karna zaroori hota hai jo har entity ko uniquely represent kare. ER diagrams mein Entities ko Rectangle aur Attributes ko Ellipse se represent kiya jata hai.",
    bulletin: [
      "Entity: A real-world object with unique existence.",
      "Entity Set: A collection of similar entities (Table equivalent).",
      "Simple vs Composite: Atomic values vs breakable values (e.g., Address).",
      "Stored vs Derived: Primary data vs data computed from other fields.",
      "Key Attribute: Used to uniquely identify an entity in a set."
    ]
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

  // BCA-402 Digital Electronics
  {
    topic: "Number Systems",
    short: "Decimal, Binary, Octal, aur Hexadecimal main systems hain jo base values switch karke digits represent karte hain.",
    detailed: "Digital systems binary (base 2) logic pe kaam karte hain, lekin hume conversions sikhna zaroori hai readability ke liye. 1. Binary (0,1), 2. Octal (0-7), 3. Decimal (0-9), aur 4. Hexadecimal (0-9, A-F). Hexadecimal coding computer memory addresses aur color codes mein heavily use hota hai kyunki 1 hex digit 4 binary digits ke barabar hota hai. Conversions ke rules: Decimal to any base (Division method), Any base to Decimal (Positional weight multiplication). Radix point conversion mein integer aur fraction parts ko alag-alag solve kiya jata hai.",
    bulletin: [
      "Binary: Base 2, values 0 and 1. Fundamental for digital logic.",
      "Decimal: Base 10, human readable standard.",
      "Octal: Base 8, uses digits 0-7.",
      "Hexadecimal: Base 16, uses 0-9 and A-F (Saves memory space in notation).",
      "Sign Representation: Binary uses Sign-Magnitude, 1's Complement, and 2's Complement."
    ]
  },
  {
    topic: "Flip Flops",
    short: "Flip-flops 1-bit memory cells hain jo clock pulse pe state switch karte hain. Common types are SR, D, JK, aur T.",
    detailed: "Flip-flop ek sequential circuit hai jo state store kar sakta hai (0 ya 1). SR Flip-flop mein input combinations logic decide karte hain, par '1-1' input trigger invalid state deta hai. Isse bachne ke liye JK Flip-flop banaya gaya, jo '1-1' pe 'Toggle' (Invert) karta hai. Master-Slave JK configuration 'Race-around condition' ko solve karti hai. D Flip-flop (Data) sirf input ko output pe pass karta hai next clock cycle pe, jo primary memory registers mein use hota hai. T Flip-flop (Toggle) counters design karne ke liye best hai kyunki yeh frequency divide kar sakta hai.",
    bulletin: [
      "Definition: Basic building block of sequential logic circuits (1-bit memory).",
      "SR Flip-Flop: Set and Reset functionality with invalid 1-1 state.",
      "JK Flip-Flop: Resolves SR's invalid state by toggling on 1-1.",
      "D Flip-Flop: Transparency/Data latch, follows input on pulse.",
      "Master-Slave: Used to ensure stable output by decoupling input/output periods."
    ]
  },
  {
    topic: "Instruction Cycle",
    short: "Instruction cycle wo series of steps hai jisse CPU memory se instruction fetch karta hai aur ise execute karta hai. Ismein Fetch, Decode, aur Execute main phases hain.",
    detailed: "Instruction Cycle (Fetch-Decode-Execute cycle) central process hai jiske bina computer task perform nahi kar sakta. Step 1: FETCH - Program Counter (PC) agle instruction ka address memory mein bhejta hai. Memory se instruction fetch hoke Instruction Register (IR) mein aata hai. Step 2: DECODE - Control Unit (CU) instruction ko interprets karti hai aur required hardware signals generate karti hai. Step 3: EXECUTE - ALU calculation perform karti hai ya registers ke bich data transfer hota hai. Step 4: STORE - Result wapas memory ya registers mein save kiya jata hai. Yeh cycle billions of times per second chalti hai, jise hum clock speed (GHz) kehte hain. Aaj kal ke modern processors 'Pipelining' use karte hain jahan multiple instruction cycles overlap hoti hain performance boost karne ke liye.",
    bulletin: [
      "Fetch Stage: Retrieves instruction from memory using the PC address.",
      "Decode Stage: Translates the binary opcode into manageable control signals.",
      "Execute Stage: The actual computation or data movement happens in ALU/Registers.",
      "Write-back Stage: Final results are updated in the memory hierarchy.",
      "Pipelining: Modern technique to handle multiple cycles simultaneously."
    ]
  },
  {
    topic: "Cache Memory",
    short: "Cache ek ultra-fast volatile memory hai jo CPU aur RAM ke beech buffer banti hai speed enhance karne ke liye.",
    detailed: "Cache Memory ek speed booster hai jo CPU ne hamesha use hone wala data store karti hai. RAM slow hota hai, isliye CPU pehle Cache (L1, L2, L3 levels) mein search karta hai. Level 1 cache CPU ke andar hoti hai (fastest), L2 thodi badi aur slower, aur L3 shared hoti hai across cores. Mapping techniques: 1. Direct Mapping, 2. Associative Mapping, aur 3. Set-Associative Mapping. Cache efficiency 'Hit Ratio' se measure hoti hai. Principle of Locality (Temporal aur Spatial) ensures karta hai ki useful data cache mein rahe. Cache memory expensive hoti hai isliye quantity limited rehti hai.",
    bulletin: [
      "Purpose: Match memory speed with high-speed CPU performance.",
      "Locality of Reference: Temporal (same location) and Spatial (nearby locations).",
      "Hierarchy: L1 (Internal), L2 (Fast External), L3 (Shared).",
      "Replacement Policies: LRU (Least Recently Used), FIFO, etc.",
      "Complexity: Complex mapping is required to manage small space efficiently."
    ]
  },

  // BCA-403 Data Structure
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
    ]
  },
  {
    topic: "BST: Definition and Operations",
    short: "BST ek binary tree hai jahan left < parent aur right > parent rule follow hota hai complexity reduce karne ke liye.",
    detailed: "Binary Search Tree (BST) searching ke liye optimized tree hai. Property: Har node x ke liye, uske left subtree ke sare nodes ki value x se kam hogi, aur right subtree ki value x se zyada hogi. Operations: 1. Search (O(log n) average case), 2. Insert (Sahi position find karke leave attach karna), 3. Delete (Nodes adjust karna based on children count). BST ka in-order traversal hamesha elements ko sorted order (ascending) mein print karta hai. Worst case (Skewed tree) mein complexity O(n) ho jati hai, jise solve karne ke liye AVL ya B-Red trees (Balanced trees) use hote hain.",
    bulletin: [
      "BST Property: Left-Child < Parent < Right-Child.",
      "Sorted Traversal: In-order traversal naturally results in a sorted list.",
      "Efficiency: Searching is O(log n) in balanced configurations.",
      "Worst Case: Can degrade to O(n) if the tree becomes a 'Skewed' list.",
      "Balancing: Leads to advanced concepts like AVL and B-Trees."
    ]
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
    ]
  },

  // BCA-404 Statistics
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
    ]
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
    ]
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
  },
  // BCA-401 RDBMS (Continued)
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
  // BCA-402 Digital Electronics (Continued)
  {
    topic: "Combinational vs Sequential Circuits",
    short: "Combinational mein output current input pe depend hai (Adder), jabki Sequential mein memory (Flip-flop) inputs aur past state dono use karti hai.",
    detailed: "Digital circuits 2 types ke hote hain. 1. Combinational Circuits: Inka output sirf present inputs pe depend karta hai (Jaise Adders, Multiplexers). Ismein koi memory nahi hoti. 2. Sequential Circuits: Inka output present inputs PLUS past states (memory) dono pe depend karta hai. Ismein 'Flip-flops' aur 'Clock pulses' use hote hain memory maintain karne ke liye. Counters aur Registers sequential circuits ke best examples hain. Complex processors in dono circuits ka combination hote hain jahan combinational logic processing karta hai aur sequential timing aur storage handle karta hai.",
    bulletin: [
      "Combinational: Output = Function(Present Input). Fast, no memory.",
      "Sequential: Output = Function(Input + Past State). Uses memory.",
      "Clocking: Sequential requires a clock signal for synchronizing states.",
      "Examples (Comb): Half/Full Adder, Decoders, Encoders, MUX.",
      "Examples (Seq): Flip-flops, Counters, Shift Registers."
    ]
  },
  // BCA-403 Data Structure (Continued)
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
    ]
  }
];

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
