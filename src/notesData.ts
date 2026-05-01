
export interface Note {
  topic: string;
  subjectCode?: string; // To handle duplicate topics across subjects
  explanation?: string;      // 🧠 Simple Explanation
  keyPoints?: string[];      // 📌 Key Points
  realLifeExample?: string;  // 💡 Real-Life Example
  diagramHint?: string;     // 🖼️ Diagram Hint
  diagramUrl?: string;      // Keep for search logic
  sqlSyntax?: string;        // 💻 SQL Syntax
  sqlExample?: string;       // 📝 Query Example
  // Legacy fields for backward compatibility during migration
  short?: string;
  detailed?: string;
  bulletin?: string[];
}

export const hinglishNotes: Note[] = [
  // BCA-401 RDBMS
  {
    topic: "Overview and History of DBMS",
    subjectCode: "BCA-401",
    explanation: "DBMS (Database Management System) ek sophisticated software layer hai jo hardware aur data ke beech bridge ka kaam karta hai. Iska main kaam hai data ko efficiently store karna, secure rakhna aur jab zaroorat ho toh fast retrieve karna. Database technology 1960s se start hui thi aur aaj ye primitive File Systems ko replace karke enterprise levels pe use hoti hai.",
    keyPoints: [
      "Historical Evolution: 1960s (Hierarchical - IBM IMS), 1970s (Relational - IBM System R), 1980s (SQL Standard), 1990s (Object-Oriented), 2000s (NoSQL and Cloud).",
      "Core Functionality: Data storage structure define karna (Schema), data manipulation (Queries), aur data security ensure karna.",
      "Redundancy Control: Purane systems mein same data baar-baar save hota tha, DBMS use minimal levels pe le aata hai.",
      "Data Independence: User ko ye chinta nahi karni padti ki computer ke andar data 'bit' format mein kaise save hai."
    ],
    realLifeExample: "Jaise aapki modern digital library (DBMS)—aap sirf book ka naam likhte ho aur system turant uska location aur shelf number bata deta hai, unlike normal stacks jahan aapko sab kuch khud palatna padta hai.",
    diagramUrl: "true"
  },
  {
    topic: "File System vs DBMS",
    subjectCode: "BCA-401",
    explanation: "File System data storage ka basic aur purana tareeka hai jahan data physically separate files mein store hota hai. DBMS ek integrated approach hai jahan sara data ek single gateway ke through access hota hai, jo performance aur security ko drastically improve karta hai.",
    keyPoints: [
      "Data Redundancy: File system mein same student ka data admission aur library file mein duplicate ho sakta hai, DBMS ise single entry se manage karta hai.",
      "Data Consistency: Agar address change hua toh file system mein har file update karni padegi (Jo aksar bhool jate hain), DBMS mein single update se sab sahi ho jata hai.",
      "Concurrency: File system mein do log ek hi file edit karein toh data corrupt ho sakta hai, DBMS isse locks ke through handle karta hai.",
      "Access Control: DBMS mein hum rules laga sakte hain (Admin sees all, student sees only marks), files mein storage level pe ye mushkil hai."
    ],
    realLifeExample: "Jaise ek bada office jahan har manager apni apni Excel sheets maintain kar raha hai (File System) vs ek office jahan ek shared software use hota hai sabke liye (DBMS).",
    diagramUrl: "true"
  },
  {
    topic: "Advantage of DBMS",
    subjectCode: "BCA-401",
    explanation: "DBMS use karne ke advantages purely performance aur management se jude hain. Yeh business logic ko simplified rakhta hai aur data ki safety ko prioritize karta hai.",
    keyPoints: [
      "Data Sharing: Remote locations se multiple users bina kisi collision ke real-time data access kar sakte hain.",
      "Backup & Recovery: Crash hone pe DBMS ke paas automatically data restore karne ke complex mechanism (Logs) hote hain.",
      "Integrity Constraints: 'Marks count never more than 100' jaise rules database level pe enforce kiye jate hain.",
      "Atomic Transactions: DBMS ensure karta hai ki 'All or Nothing' rule follow ho—ya toh transaction total success hoga ya phir system rollback kar dega."
    ],
    realLifeExample: "Ticket Booking—Jab aap seat select karte ho aur payment process hoti hai, DBMS use lock rakhta hai taaki koi dusra wahi seat click na kar sake parallelly.",
    diagramUrl: "true"
  },
  {
    topic: "The 3 level architecture of DBMS",
    explanation: "ANSI/SPARC architecture (3-level) ka purpose 'Data Abstraction' hai. Yeh users ko hidden complex storage details se bachata hai taaki wo sirf relevant data pe focus karein.",
    keyPoints: [
      "Internal/Physical Level: Sabse niche wala level jo physically bits and blocks manage karta hai hardware level pe.",
      "Conceptual/Logical Level: Middle level jo 'What' part define karta hai—tables, columns, aur unke aapas ke relationships.",
      "External/View Level: Sabse upar wala level, jahan user ko tailored views dikhte hain (e.g., student results dashboard).",
      "Independence: Physical level change karne pe (HDD to SSD) logical structure change karne ki zaroorat nahi padti."
    ],
    realLifeExample: "Smartphone usage—Aap buttons aur screen touch karte ho (View), OS app logic handle karta hai (Conceptual), aur silicon chips actually currents switch karti hain (Physical).",
    diagramUrl: "true"
  },
  {
    topic: "Overview of Data Design Entities",
    explanation: "Data design ka base 'ER Model' hai jisme 'Entities' main heroes hote hain. Entity koi bhi real-world object (Physical jaise Person, ya Abstract jaise Transaction) ho sakta hai jiske bare mein system ko information load karni ho.",
    keyPoints: [
      "Entities: Unique items (Rectangle symbol).",
      "Entity Set: Ek jaisi properties wali entities ka group (e.g., Doctors, Students).",
      "Attributes: Entity ki qualities ya metadata (Oval symbol).",
      "Key Attribute: Jo ek entity ko uniquely identify kare (e.g., ID or RollNo)."
    ],
    realLifeExample: "Shopping site pe 'Item', 'Customer', aur 'Order' sabse bade entities hain jo data create karte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Components of DBMS",
    subjectCode: "BCA-401",
    explanation: "DBMS ek composite system hai jo hardware aur human resource ke saath work karta hai. Ye sirf ek internal engine nahi, balki ek full interaction ecosystem hai.",
    keyPoints: [
      "Hardware Component: Physical storage engines, SSDs, RAM aur processing units.",
      "Software Component: Middleware tools aur actual DBMS software (like Oracle engine).",
      "People/Users: Database Admins (DBA), Developers, aur daily app users.",
      "Procedures: Wo manuals aur protocols jo batate hain system ko backup kab aur kaise karna hai.",
      "Data: Sabse core component—actual logical records."
    ],
    realLifeExample: "Aapka Instagram—Servers (Hardware), App logic (Software), Aapke Photos (Data), aur Engineers jo ise chalate hain (People).",
    diagramUrl: "true"
  },
  {
    topic: "Describing and Storing Data in a DBMS",
    subjectCode: "BCA-401",
    explanation: "DBMS mein data ko store karne ke liye hum use 'Data Models' ke through describe karte hain. Yeh process batata hai ki data physical disk pe kaise save hoga aur logical level pe hume kaisa dikhega.",
    keyPoints: [
      "Data Abstraction: Complex hardware details ko hide karke simple view provide karna.",
      "Storage Engine: Component jo decide karta hai ki data blocks mein kaise distribute hoga.",
      "Schema Definition: Tables, types aur constraints set karna taaki data organized rahe.",
      "Record Management: Har entry ko unique identify karke efficiency maintain karna."
    ],
    realLifeExample: "Jaise aap phone mein contact save karte ho—aap sirf 'Name' aur 'Number' dekhte ho (Description), par database use background mein memory blocks mein store karta hai (Storing).",
    diagramUrl: "true"
  },
  {
    topic: "Queries in DBMS",
    subjectCode: "BCA-401",
    explanation: "Queries woh requests hain jo hum database se information nikalne (retrieve) ya badalne (modify) ke liye karte hain. SQL (Structured Query Language) iska sabse popular medium hai.",
    keyPoints: [
      "DML (Data Manipulation): Select, Insert, Update, aur Delete operations.",
      "Query Processor: System jo query ko parse karta hai aur best execution plan dhoondta hai.",
      "Efficiency: Indexing use karke queries ko millions of rows mein fast chalana.",
      "Ad-hoc Queries: User apni marzi se kisi bhi format mein data demand kar sakta hai."
    ],
    sqlSyntax: "SELECT columns FROM table WHERE condition;\nINSERT INTO table (cols) VALUES (vals);\nUPDATE table SET col = val WHERE condition;\nDELETE FROM table WHERE condition;",
    sqlExample: "-- Students ke naam dhoondna jahan marks 80 se zyada hain\nSELECT Name, Marks FROM Students WHERE Marks > 80;\n\n-- Naya student add karna\nINSERT INTO Students (ID, Name, Marks) VALUES (101, 'Rahul', 85);",
    realLifeExample: "Google search query—aap kuch keywords daalte ho aur database aapko relevant result turant nikaal ke de deta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Distributed Database",
    subjectCode: "BCA-401",
    explanation: "Distributed Database ka matlab hai data ek single machine ke bajaye alag-alag physical locations (nodes) pe spread hona, jo network se connect hote hain.",
    keyPoints: [
      "Transparency: User ko aisa lagta hai ki wo single system use kar raha hai, chahe data kahin bhi ho.",
      "Reliability: Agar ek site fail ho jaye, toh doosri site se data mil sakta hai (No single point of failure).",
      "Scalability: Naye nodes add karke system ki capacity asani se badhayi ja sakti hai.",
      "Types: Homogeneous (Same DBMS on all sites) aur Heterogeneous (Different DBMS on different sites)."
    ],
    realLifeExample: "Jaise Facebook—aapka data US ke server pe ho sakta hai aur aapke dost ka Singapore ke server pe, par interface sabko unified dikhta hai.",
    diagramUrl: "true"
  },
  {
    topic: "KBDBMS",
    subjectCode: "BCA-401",
    explanation: "KBDBMS (Knowledge Base DBMS) standard database mein 'Knowledge' aur 'Reasoning' power add karta hai. Ye sirf data store nahi karta, balki rules use karke decisions bhi le sakta hai.",
    keyPoints: [
      "Deductive Power: Isme system pehle se mojud rules se naye facts 'Inference' kar sakta hai.",
      "Expert Systems: Medical ya Legal apps mein jahan expertise ki zaroorat hoti hai wahan iska use hota hai.",
      "Logic Based: Ye usually Prolog ya similar logic programming languages ke principles apply karta hai.",
      "Rich Semantics: Ye data ke aapas ke deep meanings aur dependencies ko samajhta hai."
    ],
    realLifeExample: "Jaise ek AI Doctor app—simultaneously rules check karega ki agar 'Fever' hai aur 'Cold' hai, toh system predict karega 'Flu' ki possibility.",
    diagramUrl: "true"
  },
  {
    topic: "OODBMS (Basic Concepts)",
    subjectCode: "BCA-401",
    explanation: "OODBMS (Object-Oriented DBMS) database ko programming objects (like in Java/C++) ke format mein treat karta hai. Isme data aur logic (methods) saath-saath bundle hote hain.",
    keyPoints: [
      "Object Identity: Har record (Object) ki apni unique identity hoti hai chahe values duplicate hon.",
      "Encapsulation: Data aur operations (functions) ko ek hi unit mein band karna.",
      "Inheritance: Ek object ki properties doosre objects mein transfer karna.",
      "Complex Data: Multimedia, CAD designs, aur XML files store karne ke liye standard tables se behtar hota hai."
    ],
    realLifeExample: "Gaming apps—jahan ek 'Player' object ke paas apni health, score (Data) aur Jump, Run (Functions) attributes hote hain jo database mein as-it-is save hote hain.",
    diagramUrl: "true"
  },
  {
    topic: "Conceptual Design for a Large Enterprise",
    subjectCode: "BCA-401",
    explanation: "Badi organizations (Enterprise) ke liye database design karna complex hota hai kyunki wahan hazaron users aur interconnected departments hote hain. Isme hierarchy aur security ka khas khayal rakha jata hai.",
    keyPoints: [
      "Top-Down Approach: Pehle poore organization ka aerial view lena, phir departments mein split karna.",
      "View Integration: Alak-alga departments (HR, Sales, IT) ke individual ER diagrams ko merge karke ek master schema banana.",
      "Conflicts Resolution: Do departments agar same entity ko alag naam se bula rahe hain toh use normalize karna.",
      "Performance Tuning: Large data volume handle karne ke liye pehle se hi partitions plan karna."
    ],
    realLifeExample: "Jaise ek bada hospital—jisne Doctor, Patient, Billing aur Pharmacy sabka data ek hi central logic se connect kiya ho.",
    diagramUrl: "true"
  },
  {
    topic: "Nested Queries",
    subjectCode: "BCA-401",
    explanation: "Nested Query (Subquery) woh query hoti hai jo ek dusri query ke andar (AKS 'Where' clause mein) likhi jati hai. Yeh 'Query inside Query' logic complex filters ke liye bhot kaam aata hai.",
    keyPoints: [
      "Inner vs Outer: Pehle inner query execute hoti hai, uska result outer query filter ki tarah use karti hai.",
      "Single Value vs List: Subqueries ek single value bhi return kar sakti hain aur values ki poori list bhi.",
      "Readability: Complex joins ki jagah subqueries use karke code ko samajhna asaan ho jata hai.",
      "Operators: Isme IN, NOT IN, <, > jaise operators use hote hain."
    ],
    sqlSyntax: "SELECT col FROM table WHERE col OPERATOR (SELECT col FROM table ...);",
    sqlExample: "-- Un students ko find karna jinke marks classes ke average se zyada hain\nSELECT Name FROM Students \nWHERE Marks > (SELECT AVG(Marks) FROM Students);",
    realLifeExample: "Un students ke naam dikhao jinki fee (Outer Query) unki class ki 'Average Fee' (Inner Query) se zyada hai.",
    diagramUrl: "true"
  },
  {
    topic: "Set-Comparison Operations",
    subjectCode: "BCA-401",
    explanation: "Kayi baar hume ek value ko values ke poore group (Set) ke saath compare karna padta hai. SQL iske liye SOME, ANY aur ALL jaise special tools provide karta hai.",
    keyPoints: [
      "SOME / ANY: Agar koi value set mein se kisi BHI EK value ke barabar hai, toh condition True hai.",
      "ALL: Jab value set ki SABHI values ke saath condition match kare tabhi True hoga.",
      "EXISTS: Check karna ki subquery ne koi record return kiya bhi hai ya nahi.",
      "Efficiency: Large data filtering mein inka logical use processing time bachata hai."
    ],
    sqlSyntax: "WHERE col OPERATOR ANY (subquery);\nWHERE col OPERATOR ALL (subquery);\nWHERE EXISTS (subquery);",
    sqlExample: "-- Un courses ko select karna jinme kam se kam ek student enrolled hai\nSELECT CourseName FROM Courses C\nWHERE EXISTS (SELECT 1 FROM Enrollment E WHERE E.CID = C.CID);",
    realLifeExample: "Check karna ki kya is student ke marks class ke 'SABHI' (ALL) fail hone wale students se zyada hain.",
    diagramUrl: "true"
  },
  {
    topic: "Null Values and Embedded SQL",
    subjectCode: "BCA-401",
    explanation: "NULL ka matlab hai 'Unknown' ya 'Missing' data. Embedded SQL wo technique hai jahan hum database queries ko C++ ya Java jaise high-level code ke andar direct likhte hain.",
    keyPoints: [
      "Null Logic: NULL zero ya space nahi hai, ye batata hai ki value available nahi hai.",
      "IS NULL: SQL queries mein check karne ke liye special operator use hota hai.",
      "Host Language: SQL commands ko host programming language (e.g. C) ke variables ke saath link karna.",
      "Cursors: Embedded SQL mein multiple records handle karne ke liye pointers (Cursors) ka use hota hai."
    ],
    sqlSyntax: "-- Null check syntax\nSELECT * FROM Table WHERE Col IS NULL;\n\n-- Embedded SQL (Example in pseudocode style)\nEXEC SQL SELECT name INTO :h_name FROM Users WHERE ID = :h_id;",
    sqlExample: "-- Un users ko find karna jinhone abhi tak email verify nahi kiya (Null verify_date)\nSELECT Name FROM Users WHERE EmailVerifiedAt IS NULL;",
    realLifeExample: "Form bharte waqt 'Middle Name' khali chhod dena database mein NULL ki tarah save hota hai.",
    diagramUrl: "true"
  },
  {
    topic: "Dynamic SQL",
    subjectCode: "BCA-401",
    explanation: "Dynamic SQL woh queries hain jo runtime (program chalte waqt) generate hoti hain. Yeh fixed nahi hoti, balki user ke input ke according dynamically badal jati hain.",
    keyPoints: [
      "Flexibility: User jaisa filter select karega, query waisi hi create ho jayegi.",
      "PREPARE statement: Query string ko execute karne se pehle compile karna.",
      "Security Risk: Isme 'SQL Injection' ka dar rehta hai isliye bhot dhyan se parameter use karne padte hain.",
      "Usage: Complex dashboards jahan bhot saare filters hote hain."
    ],
    realLifeExample: "Amazon search board—jab aap Price range aur Color select karte ho, system runtime pe query banata hai.",
    diagramUrl: "true"
  },
  {
    topic: "Normalization Decomposition into BCNF Decomposition into 3-NF",
    subjectCode: "BCA-401",
    explanation: "Decomposition ka matlab hai ek badi table ko todkar choti tables mein badalna taaki data redundancy (duplicates) khatam ho sake aur high academic standards maintain ho sakein.",
    keyPoints: [
      "Lossless Join: Tables ko wapas join karne pe original data milna chahiye, koi info ghum nahi honi chahiye.",
      "Dependency Preservation: Todne ke baad bhi saari purani relationships (FDs) barkaraar rehni chahiye.",
      "3-NF Goal: Har non-key field sirf main key pe depend kare (No transitive link).",
      "BCNF Goal: Har functional dependency (A -> B) mein 'A' ek Super Key honi chahiye (No overlap overlap)."
    ],
    realLifeExample: "Ek table jisme Student aur College info dono thi—todkar 'Student' aur 'College' ki alag tables banana (3-NF).",
    diagramUrl: "true"
  },
  {
    topic: "Conceptual Data Base Design with ER Model",
    explanation: "ER Model database design ka blueprint hota hai. Yeh tables aur code likhne se pehle banaya jata hai taaki business requirements ko visual relationships mein convert kiya ja sake.",
    keyPoints: [
      "Visual Structure: Entity (Rectangle), Attribute (Oval), aur Relationship (Diamond) ke through design hota hai.",
      "Logical Bridge: Business rules ko technical database implementation se pehle confirm karne ka process.",
      "Participation: Total Participation (Double Line) aur Partial Participation defines how entities relate to each other.",
      "Mapping Constraints: Define karte hain 1:1, 1:M, ya M:M relationships (e.g., Ek student ek hi ID card rakh sakta hai)."
    ],
    realLifeExample: "Ghar banne se pehle blue-print (ER Diagram) banta hai, taaki baad mein deewar (Table) galat na khadi ho.",
    diagramUrl: "true"
  },
  {
    topic: "Weak Entities",
    explanation: "Weak Entities dependent structural relationships represent karte hain. Inka existence hamesha ek parent ('Strong') entity pe depend karta hai, jiske bina inka data logically invalid ho jata hai database constraints mein.",
    keyPoints: [
      "Existential Dependency: Primary key absence—ye hamesha pair hoke strong entity key use karte hain composite link validation ke liye.",
      "Identification markers: ER diagrams mein inhen Double Rectangle se aur inke relationships ko Double Diamond se dikhaya jata hai mapping architecture mein.",
      "Partial Key (Discriminator): Inke paas discriminator attribute hota hai (Dashed underline) jo same owner ke under entities differentiate karta hai consistency checks ke liye.",
      "Cascade Management: Agar owner record delete ho jaye, toh weak entity records auto-purge (Cascade) ho jate hain data integrity maintenance ke liye."
    ],
    realLifeExample: "Jaise 'Company Policy' aur uske 'Rules'—agar company hi nahi rahegi toh uski policies ka data logically redundant ho jayega, dependency logic ki wajah se.",
    diagramUrl: "true"
  },
  {
    topic: "Generalization and Specialization",
    explanation: "Entity abstraction ke do approaches hain. Generalization multiple specific entities ko combine karke broad class banata hai (Bottom-Up), jabki Specialization ek broad class ko break karke detailed subclasses banata hai (Top-Down).",
    keyPoints: [
      "Generalization: Combining 'Savings' and 'Current' to form 'Account'. Logic: Abstract common factors.",
      "Specialization: Dividing 'Employee' into 'Manager' and 'Engineer'. Logic: Highlight differences.",
      "Inheritance: Subclasses automatically inherit attributes of the superclass.",
      "ISA Relation: Both models often use an 'Is A' relationship representation."
    ],
    realLifeExample: "Smartphone world: iPhone 15 aur S23 ko 'Smartphone' category mein rakhna (Generalization). 'Smartphone' ko 'Budget' aur 'Premium' mein split karna (Specialization).",
    diagramUrl: "true"
  },
  {
    topic: "Aggregation",
    explanation: "Aggregation ek design technique hai jahan hum ek 'Relationship' ko bhi ek 'Entity' ki tarah treat karte hain. Yeh tab zaroori hota hai jab hume kisi pehle se exist kar rahi relationship ke upar naya context (Relationship) layer karna ho.",
    keyPoints: [
      "Logic Level: Relationship binary se ternary ki taraf badne lage toh Aggregation use kiya jata hai abstraction maintain karne ke liye.",
      "Representation: Box surrounding a relationship diagram symbol.",
      "Constraint: Yeh relational logic ko complex hone se bachata hai.",
      "Higher-order Logic: Linking a work assignment to its monitoring status."
    ],
    realLifeExample: "Ek student (Entity) ka course 'Enrol' (Relationship) karna—is pure interaction ko database monitor karega ki fees kitni jama hui (Aggregation).",
    diagramUrl: "true"
  },
  {
    topic: "Relational Model",
    explanation: "Relational Model database design ka wo standard hai jisme data ko structured 'Tables' (Relations) mein organize kiya jata hai. Isse mathematical set operations ko perform karna asaan ho jata hai.",
    keyPoints: [
      "Relational Vocabulary: Row = Tuple, Column = Attribute, Table = Relation.",
      "Domain Integrity: Har column ke liye fix data type aur rules (Constraints) define hote hain.",
      "Degree and Cardinality: Table mein kitne columns hain (Degree) aur kitni rows hain (Cardinality).",
      "Data Access: Primary Keys aur Foreign Keys ke through tables cross-link kiye jate hain."
    ],
    realLifeExample: "Online store jahan Ek 'Orders' table customer ke 'CustomerID' (Foreign Key) ke through 'Customers' table se linked hai.",
    diagramUrl: "true"
  },
  {
    topic: "Functional Dependencies",
    explanation: "Functional Dependency (FD) database normalization ka core building block hai. Yeh batata hai ki kaise ek entity ke attributes ek dusre pe logically depend karte hain (Constraint mapping).",
    keyPoints: [
      "Notation (A -> B): Iska matlab hai attribute B completely dependent hai A par (Determiner).",
      "Transitive Dependency: Agar A se B mile, aur B se C mile, toh logically A se C mil raha hai (Indirection).",
      "Partial Dependency: Primary key multi-part ho (Composite), aur koi data sirf uske ek hisse pe depend kare.",
      "Goal of FD Analysis: Table se redundant attributes aur anomalies ko remove karna."
    ],
    realLifeExample: "Aadhar ID -> Name. Aadhar identity is unique (Determiner), jisse name fix ho jata hai. Par Name -> Aadhar ID logical FD nahi hai kyunki same name ke multiple log ho sakte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Third Normal Form",
    explanation: "3NF database design ko optimize karke transitive dependencies hatata hai. Isse storage efficiency aur data speed increase hoti hai because non-key attributes hamesha direct Primary Key se linked hote hain.",
    keyPoints: [
      "Prerequisite: Table hamesha 2NF (No partial dependency) mein honi chahiye.",
      "Strict Rule: Every non-prime attribute should be non-transitively dependent on Primary Key.",
      "Normalization Mantra: Everything depends only on the Key (Primary Key).",
      "Data Integrity: Change ek hi jagah hoga, duplicates avoid honge."
    ],
    realLifeExample: "Student table mein City depend kar rahi thi Zip-Code pe, aur Zip-Code student pe. 3NF Zip-Code aur City ke liye alag table bana degi taaki location repetition avoid ho.",
    diagramUrl: "true"
  },
  {
    topic: "Union, Intersection and Exception",
    subjectCode: "BCA-401",
    explanation: "SQL Set Operators multiple queries ke results ko mathematical logic se merge karne ke liye use hote hain. Yeh reports generate karne ke liye bhot powerful tool hain.",
    keyPoints: [
      "UNION: Do queries ke results ko combine karta hai aur automatic duplicates remove kar deta hai.",
      "INTERSECT: Sirf wahi records dikhata hai jo dono queries (Tables) mein common hain.",
      "EXCEPT (MINUS): Table A ke woh records jo Table B mein nahi hain (Subtraction).",
      "Constraint: Dono queries ke columns aur data types compatible (same sequence mein) hone chahiye."
    ],
    sqlSyntax: "(SELECT query) UNION (SELECT query);\n(SELECT query) INTERSECT (SELECT query);\n(SELECT query) EXCEPT (SELECT query);",
    sqlExample: "-- Alumni aur Students ke names ki combined list\n(SELECT Name FROM Students) \nUNION \n(SELECT Name FROM Alumni);\n\n-- Woh students jo Course A aur B dono mein hain\n(SELECT SID FROM CourseA) \nINTERSECT \n(SELECT SID FROM CourseB);",
    realLifeExample: "Jaise aapke 'Phone Contacts' aur 'WhatsApp Contacts' ka UNION dekhna—ek integrated list jisme duplicates na hon.",
    diagramUrl: "true"
  },
  {
    topic: "Boyce-Codd Normal Form",
    explanation: "BCNF 3NF ka upgrade (Strict version) hai. Iska objective redundancy ke wo chote loop holes band karna hai jahan redundant information Keys ke overlaps ki wajah se aati hai.",
    keyPoints: [
      "The Hard Rule: Any functional dependency A -> B is only allowed if A is a Super Key of the table.",
      "Overlap Resolution: Primary keys ke columns agar aapas mein dependent hon, toh BCNF unhe alag table mein split kar deta hai.",
      "Integrity Control: Higher protection against anomalies than standard 3NF.",
      "Codd's Logic: Proposed by E.F. Codd to solve scenarios that 3NF couldn't handle."
    ],
    realLifeExample: "Database management in complex coaching centers where multiple teachers teach different subjects—to avoid slot conflicts, BCNF is used to split overlap data.",
    diagramUrl: "true"
  },
  {
    topic: "Introductions to Schema Refinement",
    explanation: "Schema Refinement process hai jisme conceptual design ko physical efficiency ki taraf le jaya jata hai. Iska goal performance tuning aur anomaly elimination hota hai.",
    keyPoints: [
      "Refining Logic: Normalization (1NF to 5NF) process through FD analysis.",
      "Anomaly Hunting: Insertion, Deletion, and Update issues ko identification logic se khatam karna.",
      "Cost Reduction: Memory waste aur search time ko optimization algorithms se protect karna.",
      "Balance: Zyada refinement se overheads badhte hain (Joining tables takes processing time), isliye optimum balance zaroori hai."
    ],
    realLifeExample: "Raw code ko refactor karna taaki complexity kam ho aur performance fast ho—wahi schema refinement relational tables ke liye hai.",
    diagramUrl: "true"
  },
  {
    topic: "Attributes and Entity Sets",
    explanation: "Entity-Relationship model mein Attributes data values capture karte hain aur Entity Sets categorization handle karte hain. Inka combination pura system structure framework build karta hai.",
    keyPoints: [
      "Simple vs Composite: E.g., Age (Simple) vs Address (Name, Street, Pin - Composite).",
      "Single-Valued vs Multi-Valued: E.g., Phone number (Multiple ho sakte hain, represented by double oval).",
      "Derived Attributes: Jo calculation se milte hain (E.g., Age derived from DOB, represented by dashed oval).",
      "Entity Set: Collection of entities sharing the same attribute structure."
    ],
    realLifeExample: "LinkedIn profile—Bio aur Skills multi-valued attributes hain, Name simple, aur Experience total years ek derived attribute ho sakta hai.",
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
    diagramUrl: "true"
  },
  {
    topic: "Introduction to Data Structure",
    subjectCode: "BCA-403",
    explanation: "Data Structure data ko computer memory mein store, organize aur effectively manage karne ka ek mathematical aur logical tareeka hai. Inka use search speed aur processing efficiency badhane ke liye kiya jata hai.",
    keyPoints: [
      "Classification: Linear (Array, Stack, Queue) jahan data ek sequence mein hota hai, aur Non-linear (Tree, Graph).",
      "Memory Allocation: Static (Fixed size) vs Dynamic (Runtime change).",
      "Algorithm Link: Har algorithm kisi na kisi data structure pe base hota hai (e.g. Searching on Array).",
      "Real-world Utility: Database indexing, scheduling, aur path finding mein inka core use hai."
    ],
    realLifeExample: "Jaise aapka wardrobe—kapdo ko unke type (shirts, pants) ke according rakhna (Structure) taaki unhe dhoondna asaan ho.",
    diagramUrl: "true"
  },
  {
    topic: "Open source software development process",
    subjectCode: "BCA-403",
    explanation: "Open source development ka matlab hai aisa software banana jiska code 'Public' ho aur koi bhi use modify ya improve kar sake (e.g. Linux, Android).",
    keyPoints: [
      "Collaboration: Duniya bhar ke developers GitHub jaise platforms pe milkar code likhte hain.",
      "Licensing: GPL ya MIT licenses jo decide karte hain ki code kaise reuse ho sakta hai.",
      "Forking: Kisi project ki copy banakar uspe apna naya version start karna.",
      "Transparency: Har update aur change clear hota hai, jisse bugs jaldi pakde jate hain."
    ],
    realLifeExample: "Jaise Wikipedia—har koi info add kar sakta hai, aur saara history aur process sabke liye open hai.",
    diagramUrl: "true"
  },
  {
    topic: "Multiply Linked Lists",
    subjectCode: "BCA-403",
    explanation: "Multiply Linked Lists mein har node mein multiple pointers hote hain jo alag-alag logical lists ka part ho sakte hain (e.g. Sparse Matrix representation).",
    keyPoints: [
      "Multi-pointer Node: Node mein 2 se zyada pointers hote hain (Horizontal, Vertical, etc.).",
      "Dimensions: High dimensional data ko represent karne ke kaam aata hai.",
      "Search paths: Ek hi data set ko multiple criteria (ID, Name, Date) se traverse karna.",
      "Complexity: Inhe manage karna mushkil hota hai kyunki link sync rakhna bhot important hai."
    ],
    realLifeExample: "Jaise ek complex train map—ek station multiple routes (Lines) se juda hota hai.",
    diagramUrl: "true"
  },
  {
    topic: "Applications of Linked Lists",
    subjectCode: "BCA-403",
    explanation: "Linked Lists ka use tab hota hai jab memory dynamicly handle karni ho ya bhot saare insertions/deletions perform karne hon.",
    keyPoints: [
      "Stack/Queue implementation: Dynamic size stacks banane ke liye pointers best hain.",
      "Polynomial Math: Computer math mein variables ko save karne ke liye.",
      "Graph Adjacency: Graphs ke connections (Neighbors) store karne ke liye list based structures.",
      "Browser Cache: 'Forward' aur 'Back' buttons ki history manage karna."
    ],
    realLifeExample: "Music player playlist—aap gaane add/delete karte ho runtime pe, jo linked list memory use karta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Introduction to Linked Stack and Linked Queues",
    subjectCode: "BCA-403",
    explanation: "Jab hum Stack (LIFO) aur Queue (FIFO) ko Linked List use karke banate hain, toh unhe 'Linked representation' kehte hain. Isse 'Fixed Size' ki problem khatam ho jati hai.",
    keyPoints: [
      "No Max Limit: Memory jab tak hai, aap data add kar sakte ho (No overflow).",
      "Pointers only: Indexing ki jagah Pointers use hote hain (Top, Front, Rear).",
      "Dynamic allocation: Har naya element memory ka naya block (Node) leta hai.",
      "Efficiency: Deletion fast hota hai kyunki shift karne ki zaroorat nahi padti."
    ],
    realLifeExample: "Jaise digital queue system—jitne log aate jayenge queue badhti jayegi bina pehle se size set kiye.",
    diagramUrl: "true"
  },
  {
    topic: "Array Operations",
    subjectCode: "BCA-403",
    explanation: "Arrays pe perform hone wale basic mathematical aur structural changes ko 'Array Operations' kehte hain.",
    keyPoints: [
      "Traversal: Har element ko ek baar check karna sequence mein.",
      "Insertion: Naya element beech mein daalna (Isme baaki elements 'Shift' karne padte hain).",
      "Deletion: Kisi element ko remove karna aur gap fill karna (Shifting overhead).",
      "Multi-dim: 2D arrays mein row/column major formulas se indexing manage karna."
    ],
    realLifeExample: "Excel sheet mein nayi row insert karna—niche ki saari rows ek step niche shift ho jati hain.",
    diagramUrl: "true"
  },
  {
    topic: "Trees: Definition and Basic Terminologies",
    subjectCode: "BCA-403",
    explanation: "Tree ek non-linear hierarchical data structure hai jisme nodes 'Parent-Child' relationship mein jude hote hain.",
    keyPoints: [
      "Root: Sabse upar wala master node.",
      "Leaf: Jiska koi child nahi hota (Last nodes).",
      "Depth: Root se kisi node tak ki doori.",
      "Degree: Ek node ke kitne children hain."
    ],
    realLifeExample: "Aapke computer ka File System—(C Folder -> Users -> Documents -> Resume.pdf).",
    diagramUrl: "true"
  },
  {
    topic: "Binary Tree Traversals",
    subjectCode: "BCA-403",
    explanation: "Traversal ka matlab hai tree ke har node ko ek specific order mein visit karna processing ke liye.",
    keyPoints: [
      "Pre-order: Root -> Left -> Right (Cloning ke kaam aata hai).",
      "In-order: Left -> Root -> Right (BST mein sorted output deta hai).",
      "Post-order: Left -> Right -> Root (Deletion/Clean-up ke liye best).",
      "Level-order: Layer by layer har node visit karna (BFS logic)."
    ],
    realLifeExample: "Jaise directory scan karna—pehle folder ka naam padhna (Root) phir uske andar ki files (Children).",
    diagramUrl: "true"
  },
  {
    topic: "Applications of Stack",
    subjectCode: "BCA-403",
    explanation: "Stack ka 'LIFO' behavior bhot saare logical processing tasks mein use hota hai jahan hume history ya reverse order maintain karna ho.",
    keyPoints: [
      "Expression Conversion: Infix (A+B) ko Postfix (AB+) mein badalna calculators ke liye.",
      "Undo/Redo: Software mein pichle action pe wapas jana.",
      "Recursion: Function calls ka address save karna CPU registers mein.",
      "Syntax Parsing: Compiler mein brackets '{}' matching check karna."
    ],
    realLifeExample: "Jaise browser ka 'Back' button—jo page sabse aakhri mein khula, wahi pehle wapas aayega.",
    diagramUrl: "true"
  },
  {
    topic: "Operations on Queues",
    subjectCode: "BCA-403",
    explanation: "Queues pe perform hone wale basic functions jo FIFO (First-In-First-Out) rule follow karte hain.",
    keyPoints: [
      "Enqueue: Naya element Rear end pe add karna.",
      "Dequeue: Purana element Front end se remove karna.",
      "IsFull/IsEmpty: Queue ki memory limit check karna pointers offset se.",
      "Priority Queue: Elements ko unki urgency (Priority) ke according process karna."
    ],
    realLifeExample: "Jaise printer job—jisne pehle print command di, usika page pehle nikalta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Graphs: Introduction",
    subjectCode: "BCA-403",
    explanation: "Graph ek non-linear data structure hai jo 'Vertices' (Nodes) aur 'Edges' (Links) se bana hota hai, complex networks represent karne ke liye.",
    keyPoints: [
      "Directed: Link (Edge) sirf ek side ja rahi hai (e.g. Follower on Instagram).",
      "Undirected: Link dono side hai (e.g. Friend on Facebook).",
      "Weighted: Link ke saath koi value (Distance/Cost) judi hai.",
      "Cycle: Jab rasta ghumke wapas usi node pe aa jaye."
    ],
    realLifeExample: "Jaise Delhi Metro ka map—Stations nodes hain aur tracks (lines) edges hain.",
    diagramUrl: "true"
  },
  {
    topic: "Single-Source Shortest-Path Problem",
    subjectCode: "BCA-403",
    explanation: "Is problem ka goal hota hai ek fixed point (Source) se baaki saare points tak ka sabse chota rasta (Shortest Path) dhoondna.",
    keyPoints: [
      "Dijkstra Algorithm: Sabse popular tareeka shortest path dhoondne ka.",
      "Greedy logic: Har step pe sabse sasta padosi (Neighbor) select karna.",
      "Edge Relaxation: Rasta dhoondte waqt purane lambe raston ko naye chote raston se update karna.",
      "Constraints: Negative weights wale graphs mein Dijkstra fail ho sakta hai (Wahan Bellman-Ford use hota hai)."
    ],
    realLifeExample: "Google Maps—aapki current location se destination tak ka sabse sasta/fast rasta dikhana.",
    diagramUrl: "true"
  },
  {
    topic: "Understanding Internal and External Sorting",
    subjectCode: "BCA-403",
    explanation: "Sorting ko memory usage ke base pe consolidate kiya jata hai. Dataset kitna bada hai, usse sorting method badal jata hai.",
    keyPoints: [
      "Internal Sorting: Jab saara data RAM mein feed ho jaye (Fast results, e.g. Quick Sort).",
      "External Sorting: Jab data bhot bada ho aur hard disk se chunks mein lana pade (e.g. Multi-way Merge Sort).",
      "Trade-off: Speed vs Data Size management.",
      "Stability: Kya same value wale items ka order sort ke baad bhi wahi rehta hai?"
    ],
    realLifeExample: "Internal: Apne phone ke contacts sort karna. External: Ek badi library ki 10 lakh kitabein alphabetical order mein lagana.",
    diagramUrl: "true"
  },
  {
    topic: "The Basic Computer",
    subjectCode: "BCA-402",
    explanation: "Basic Computer ek hypothetical model hai jo batata hai ki kaise circuits, hardware aur micro-instructions milkar ek simple computational machine banate hain.",
    keyPoints: [
      "Logic Foundation: AND, OR, aur NOT gates se bani hardware units jo 0-1 logic process karti hain.",
      "Control Logic: Machine signals jo har instruction ke flow (fetch to execute) ko guide karte hain.",
      "Minimalism: Ek simple register set (like Accumulator) aur basic ALU functions ki requirement.",
      "Binary Core: Har process ka end result hardware voltages mein badalna."
    ],
    realLifeExample: "Jaise ek pocket calculator—ye ek 'Basic Computer' hai jisme fixed instructions hain logic operations perform karne ke liye.",
    diagramUrl: "true"
  },
  {
    topic: "Data Representation",
    subjectCode: "BCA-402",
    explanation: "Data Representation ka matlab hai ki hum real-world data (numbers, text) ko computer ke andhar binary patterns (0s and 1s) mein kaise translate karte hain.",
    keyPoints: [
      "Binary Coding: Har character ya number ko bits ke fixed groups mein convert karna.",
      "Fixed Point: Integers ko fix memory blocks mein represent karne ka simple logic.",
      "Sign-Magnitude: Negative numbers dikhane ke liye MSB (pichli bit) ko use karna.",
      "Storage Efficiency: Kam se kam bits use karke maximum accurate info store karna."
    ],
    realLifeExample: "Jaise 'A' ko system 65 (decimal) maanta hai aur memory mein binary pattern '01000001' se represent karta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Data Representation for Computation",
    subjectCode: "BCA-402",
    explanation: "Computation ke liye data ko aise format mein rakha jata hai jisse ALU fast mathematical calculation (Addition, Subtraction) kar sake.",
    keyPoints: [
      "2's Complement: Binaries ko subtract karne ka best hardware mechanism (Addition of negative).",
      "Overflow Check: Jab calculation ka result memory se bada ho jaye toh system kaise handle kare.",
      "Floating Point: Bhot bade ya point wale numbers ke liye Mantissa-Exponent logic setup.",
      "Hardware Alignment: Data bits ko ALU ke register size (32/64 bit) ke saath sync karna."
    ],
    realLifeExample: "Jaise calculator mein 1/3 karne pe '0.333...' dikhta hai—ye internally floating point representation use karke calculate hota hai.",
    diagramUrl: "true"
  },
  {
    topic: "Canonical and Standard Forms",
    subjectCode: "BCA-402",
    explanation: "Boolean algebra mein expressions ko systematic tarike se likhne ke tareeke ko Canonical vs Standard forms kehte hain.",
    keyPoints: [
      "SOP (Sum of Products): AND gates ke outputs ko OR gate se connect karna (e.g. AB + CD).",
      "POS (Product of Sums): OR gates ke outputs ko AND gate se connect karna (e.g. (A+B)(C+D)).",
      "Canonical SOP: Har term mein saare variables ka hona (Minterms).",
      "Minimization: In forms ko K-Map mein use karke gates ki count kam ki jati hai."
    ],
    realLifeExample: "Jaise recipe likhna—standard form hai 'Ubaalo aur Milao', par canonical form hai har ek ingredient aur heat level detail mein batana.",
    diagramUrl: "true"
  },
  {
    topic: "Design of Combinational Circuits",
    subjectCode: "BCA-402",
    explanation: "Combinational Circuits design karne ka ek fix 5-step process hota hai jisme inputs ko logic gates ke physical network mein badla jata hai.",
    keyPoints: [
      "Requirement Analysis: Problem ko samajhna aur inputs vs outputs identify karna.",
      "Truth Table: Har possible input ke liye desired output kya hona chahiye uska map banana.",
      "Equation Derivation: SOP/POS logic nikalna truth table se.",
      "Equation Minimization: K-Map use karke logic ko chota karna.",
      "Logic Diagram: Final circuit diagram banana Gates use karke."
    ],
    realLifeExample: "Jaise ek switch board design karna—agar light tab chale jab switch A aur B dono ON hon, toh hum AND gate circuit design karenge.",
    diagramUrl: "true"
  },
  {
    topic: "RAM",
    subjectCode: "BCA-402",
    explanation: "RAM (Random Access Memory) computer ki active memory hai jo runtime data store karti hai. Ye volatile hoti hai (Power switch off = Data loss).",
    keyPoints: [
      "SRAM (Static): Speed fast, expensive, registers/cache mein use hoti hai (No refresh).",
      "DRAM (Dynamic): Slower, cheap, main memory mein use hoti hai (Constant refresh chahiye).",
      "Random Access: Isme kisi bhi address se data turant retrieve kiya ja sakta hai (No sequential wait).",
      "Memory Unit: Chips aur capacitors ka combination jo electronic charge hold karta hai 0/1 logic ke liye."
    ],
    realLifeExample: "Jaise aapka desk—aap kitabein cupboard se nikaal ke table (RAM) pe rakhte ho taaki jaldi padh sako.",
    diagramUrl: "true"
  },
  {
    topic: "Basic CPU Block Diagram",
    subjectCode: "BCA-402",
    explanation: "CPU Block diagram processor ke internal parts (ALU, CU, Registers) ke aapas ke connection aur functional logic ko dikhata hai.",
    keyPoints: [
      "Internal Bus: CPU ke andhar hi andhar data move karne ka rasta.",
      "Register Array: PC, IR, AC, aur MAR jaise special purpose blocks.",
      "Control Signals: Timing pulses jo determine karti hain kab data register se ALU jayega.",
      "Sync logic: Hardware units ko clock cycle ke saath coordinate karna."
    ],
    realLifeExample: "Jaise ek remote-control car ka main chip—wo antenna se signal leta hai aur motors ko voltage signals bhejta hai architecture ke according.",
    diagramUrl: "true"
  },
  {
    topic: "ODBC and JDBC",
    explanation: "ODBC (Open Database Connectivity) aur JDBC (Java Database Connectivity) software layers hain jo database-independent applications banane mein help karte hain. Yeh bridges ki tarah kaam karte hain jo frontend code ko backend storage se connect karte hain.",
    keyPoints: [
      "Common Interface: Programmer ko har database (SQL, Oracle, DB2) ke liye alag query syntax nahi likhna padta, standard API use hota hai.",
      "Drivers: Bridge implement karne ke liye database-specific drivers zaroori hote hain jo instructions translate karte hain.",
      "JDBC: Specific to Java platform, object-oriented design patterns follow karta hai.",
      "ODBC: C/C++ aur Microsoft ecosystem mein heavily use hota hai."
    ],
    realLifeExample: "Jaise ek Universal Travel Adapter—aapka electric item kisi bhi country ka ho, adapter (Driver) use kisi bhi socket (Database) se connect kar deta hai.",
    diagramUrl: "true"
  },

  // BCA-402 Digital Electronics
  {
    topic: "Basic Computer Block Diagram",
    explanation: "Basic Computer Block Diagram hardware components ki logical arrangement ko dikhata hai. Yeh framework define karta hai ki kaise Control Unit, ALU, aur Memory unit milkar user instructions ko machine language mein convert karke execute karte hain.",
    keyPoints: [
      "Central Processing Unit (CPU): Brain of the computer jo ALU (Maths) aur CU (Coordination) se bana hai.",
      "Memory Unit: Primary storage (RAM) jahan active processes load hote hain.",
      "I/O Devices: Interfaces jo human language ko digital signals mein transform karti hain (e.g. Keyboard to Binary).",
      "Bus System: Communication paths jo data aur control signals ko ek block se dusre block tak le jati hain."
    ],
    realLifeExample: "Jaise ek restaurant kitchen—Input (Order), CPU (Chef calculating quantities), Memory (Active ingredient shelf), aur Output (Prepared dish).",
    diagramUrl: "true"
  },
  {
    topic: "The Von-Neumann Architecture",
    explanation: "John Von Neumann ne 1945 mein ek revolutionary model dia jisme instructions aur data dono ko same memory unit mein store kiya jata hai. Is concept ne stored-program computers ki neev rakhi.",
    keyPoints: [
      "Stored Program: Computer ke instructions switch settings se nahi, balki memory se fetch hote hain.",
      "Von-Neumann Bottleneck: Single bus system hone ki wajah se CPU ko data ke liye wait karna padta hai (Fetch-Execute limit).",
      "Hierarchy: Memory -> Control Unit -> ALU -> Accumulator.",
      "Reliability: Sequential processing hone ki wajah se execution flow predictible rehta hai."
    ],
    realLifeExample: "Jaise ek student ki diary—usme notes (Data) bhi hain aur exam ki dates (Instructions) bhi ek hi page sequence mein hain.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Cycle",
    explanation: "Instruction Cycle ek fundamental process hai jisme CPU memory se instruction nikalta hai, use interpret karta hai aur appropriate action leta hai. Yeh cycle hamesha loop mein chalti rehti hai jab tak processor on hai.",
    keyPoints: [
      "Fetch: PC (Program Counter) address se instruction ko Instruction Register (IR) mein copy karna.",
      "Decode: Control Unit instruction ke bits ko analyze karke operation type identify karti hai.",
      "Read Effective Address: Agar memory reference hai, toh actual data location check karna.",
      "Execute: ALU ya Input/Output module ko command dena.",
      "Write-back: Result ko memory ya register mein update karna."
    ],
    realLifeExample: "Jaise ek Pilot—Radar se signal milna (Fetch), plan samajhna (Decode), plane move karna (Execute), aur altitude update karna (Write-back).",
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Cycle",
    explanation: "Interrupt ka objective CPU ki multitasking capability ko manage karna hai. Jab koi urgent task (like mouse click ya hardware error) aata hai, toh CPU apna current status save karke use solve karta hai.",
    keyPoints: [
      "Priority Management: CPU critical tasks (Low battery) ko pehle handle karta hai status code check karke.",
      "Return Address: Interrupt se pehle PC (Program Counter) ko stack mein save kiya jata hai taaki kaam wahin se shuru ho sake.",
      "Vectored vs Non-Vectored: Kuch interrupts fixed memory addresses pe hote hain, kuch pointers ke through.",
      "Efficiency: Bina interrupts ke CPU ko devices se status baar-baar puchna padta (Polling), jo time consuming hota."
    ],
    realLifeExample: "Jaise aap doston ke saath baat kar rahe hain (Main Process), aur mummy ki call aa jaye (Interrupt). Aap doston ko rukne ke liye kehte hain (Status Save), call attend karte hain (ISR), aur phir wapas baat shuru karte hain (Return).",
    diagramUrl: "true"
  },
  {
    topic: "Computers: Then and Now",
    explanation: "Computing technology 1940s se lekar aaj tak transistors integration aur size miniaturization ki wajah se drastically badal chuki hai. Har generation ne speed aur power efficiency ke naye records banaye hain.",
    keyPoints: [
      "Hardware Transition: Vacuum Tubes -> Transistors -> ICs -> Microprocessors -> Parallel Processing AI units.",
      "Portability: Tons of weight se lekar aaj hamari ungliyon tak machines simat gayi hain.",
      "Software Stack: Machine code se high-level logic (Python/AI) tak transition.",
      "Interconnectivity: Standalone machines se aaj globally connected cloud systems ka era hai."
    ],
    realLifeExample: "Pehle ka ENIAC computer ek gym jitna bada tha jo sirf math solve karta tha, aaj ka watch-sized device heart rate monitor se lekar complex apps tak sab handle karta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Number Systems",
    explanation: "Number Systems mathematical structures hain jo symbols use karte hain values represent karne ke liye. Computers digital nature ki wajah se hamesha 'Binary' logic pe work karte hain.",
    keyPoints: [
      "Binary (Base 2): Electronic switches (ON/OFF) ke liye perfect representation.",
      "Octal and Hexadecimal: Programming aur debugging ke liye shorthand representations taaki lambe binary codes (101010...) ko chota kiya ja sake.",
      "Positional Weight: Har digit ki value uski position (Base^Position) pe depend karti hai.",
      "Conversions: Decimal ko Binary ya Hex mein convert karke computer math process kiya jata hai."
    ],
    realLifeExample: "Jaise languages—Insaan Hindi/English bolta hai, computer machine binary bolta hai, aur bich mein translation software (Compilers) hote hain.",
    diagramUrl: "true"
  },
  {
    topic: "Decimal & Alphanumeric Representation",
    explanation: "Computer sirf numbers nahi, balki alphabets aur special symbols ko bhi digital formats mein encode karta hai taaki human-readable instructions handle ki ja sakein.",
    keyPoints: [
      "BCD (Binary Coded Decimal): Har decimal digit (0-9) ko individual bits mein represent karna (Storage efficiency for calculators).",
      "Gray Code: Control systems mein use hota hai jahan unit distance change zaroori hai (Error correction for sensors).",
      "ASCII & Unicode: Standard maps jo 'A' ko decimal 65 (Digital) mein convert karte hain.",
      "EBCDIC: Purane IBM mainframe systems ka encoding standard."
    ],
    realLifeExample: "Jaise Morse Code—dots aur dashes use karke signals bhejna, wahi logic digital memory mein encoding standards se hota hai.",
    diagramUrl: "true"
  },
  {
    topic: "Floating Point Representation",
    explanation: "Fixed-point representation bahut bade ya bahut chote numbers (decimals) handle nahi kar sakta. Floating point system Mantissa aur Exponent concepts use karke scientific precision provide karta hai.",
    keyPoints: [
      "IEEE Standard: IEEE 754 protocol jo worldwide processors follow karte hain consistency ke liye.",
      "Bias Addition: Exponent calculation mein bias isliye add kiya jata hai taaki negative exponents ko unsigned numbers ki tarah treat kiya ja sake.",
      "Precision: Single precision floating units fast calculations ke liye use hote hain, double precision scientific accuracy ke liye.",
      "Normalization: Value ko '1.xxxx' format mein convert karna memory save karne ke liye."
    ],
    realLifeExample: "Jaise Physics mein 0.000000123 ko 1.23 x 10^-7 likhna—isme 1.23 Mantissa hai aur -7 Exponent.",
    diagramUrl: "true"
  },
  {
    topic: "Error Detection and Correction Codes",
    explanation: "Digital communication ke waqt external noise ya hardware interference se bits flip (0 to 1 ya 1 to 0) ho sakte hain. ECC codes reliability ensure karte hain.",
    keyPoints: [
      "Parity Bit: Basic detection setup (Odd/Even counts).",
      "Hamming Code: Linear error-correcting code jo bit position detect karke use fix kar deta hai.",
      "Check Sum: Pure packet ka sum verify karna networking ke waqt.",
      "CRC (Cyclic Redundancy Check): Polynomial logic use karke complex data packets verify karna."
    ],
    realLifeExample: "Jaise bar-code scanner—agar scan karte waqt line thodi mitti jaye, tab bhi system correct codes predict kar leta hai redundancy ki wajah se.",
    diagramUrl: "true"
  },
  {
    topic: "Logic Gates",
    explanation: "Logic Gates digital engineering ke atoms hain. Yeh semiconductor circuits hain jo physical voltages ko binary boolean decisions mein badalte hain.",
    keyPoints: [
      "Truth Table: Har gate ke input-output combinations ka table jo logic define karta hai.",
      "Boolean Algebra: In gates ke output ko equations (A+B, A.B) ke through calculate kiya jata hai.",
      "Propagation Delay: Gate ko response dene mein lagne wala nano-seconds ka waqt.",
      "Gate Combination: Inhe interconnect karke complex units jaise Adders aur Multiplexers banaye jate hain."
    ],
    realLifeExample: "Jaise ek Secure Digital Vault—Vault tabhi khulega jab Manager code dalega AND Security guard apni chabi ghumayega (AND Gate logic).",
    diagramUrl: "true"
  },
  {
    topic: "Logic Circuits",
    explanation: "Logic Gates ko specifically combine karke digital logic circuits bante hain jo mathematical ya storage functions perform karte hain.",
    keyPoints: [
      "Signal Integrity: Circuit design mein voltage drops aur noise interference avoid karna.",
      "Efficiency: Circuit ko minimize karna using Boolean Laws taaki component cost kam ho.",
      "Feedback Loop: Sequential circuits mein output ko memory back bhejna.",
      "Integration: IC (Integrated Circuit) chips mein hazaron logic circuits silicon par map hote hain."
    ],
    realLifeExample: "Jaise ek electronic stopwatch—isme hundreds of logic circuits milkar counting aur display timing handle karte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Combinational Circuits",
    explanation: "Combinational circuits 'Present Input' and 'Instant Output' magic pe work karte hain. Inmein koi memory element nahi hota, isliye inka behaviour predictable aur fast hota hai.",
    keyPoints: [
      "Zero Context: Isse purani history (Past Input) ka koi lena dena nahi hota.",
      "Parallel Execution: Saara data ek saath process hota hai bypass logic se.",
      "Design: Inhe Truth Tables aur K-Maps use karke design kiya jata hai.",
      "Utility: Fast data routing (MUX) aur binary computation (Adders) mein use hote hain."
    ],
    realLifeExample: "Jaise ek simple Calculator—aapne button dabaya turant screen pe result aa gaya, use isse farak nahi padta ki aapne pehle kya count kiya tha.",
    diagramUrl: "true"
  },
  {
    topic: "Minimization of Gates",
    explanation: "Engineering mein complexity reduce karna priority hai. Minimization se PCB size chota hota hai, heat dissipation kam hoti hai aur computer ki speed badhti hai.",
    keyPoints: [
      "Boolean Laws: De Morgan's Law, Commutative aur Distributive laws use karke equations choti karna.",
      "K-Map (Karnaugh Map): Visual tool jo groups (Pairs/Quads) banake variable reduction asaan bana deta hai.",
      "Don't Care Condition (X): Kuch inputs kabhi possible hi nahi hote, unhe logic simplify karne ke liye use karna optimization hai.",
      "Quine-McCluskey: Computer algorithms mein large variable minimization ke liye manual K-Map ki jagah ye method use hota hai."
    ],
    realLifeExample: "Jaise ek lamba raasta (Long Circuit) skip karke short-cut (Minimized Circuit) lena jo destination tak jaldi pahuchaye.",
    diagramUrl: "true"
  },
  {
    topic: "Half Adder and Full Adder",
    explanation: "Binary addition (0+0, 1+1) logic hardware mein implement karne ke liye Adders unit zaroori hain. Full adder multi-column math handle karne ke liye carry input accept karta hai.",
    keyPoints: [
      "Half Adder: Sirf do bits handle karta hai (Sum & Carry output).",
      "Full Adder: In-Carry (Cin) include karke actually multi-bit chain ka part banta hai.",
      "Cascade Logic: Do half adders aur ek OR gate milkar full adder banta hai.",
      "ALU Building Block: ALU ke andar mathematical addition inhi base circuits se shuru hoti hai."
    ],
    realLifeExample: "Jaise school mein addition karte waqt jab 9+5=14 hota hai, toh 4 niche likhte ho aur 1 agle column ke liye 'Carry' bhejte ho, wahi logic adders ka hai.",
    diagramUrl: "true"
  },
  {
    topic: "Encoder and Decoder",
    explanation: "Decoders input code ko specific signal line mein badalte hain (Instruction selection), jabki Encoders many-to-few compression karte hain identifiers generate karne ke liye.",
    keyPoints: [
      "Binary to M-Line: 2-to-4 ya 3-to-8 decoders memory location select karne ke kaam aate hain.",
      "Priority Encoder: Agar do buttons ek saath tab dab jayein toh system high priority wale ko response deta hai.",
      "Display Drivers: Decoder hi digital signals ko 7-segment display formats mein convert karta hai.",
      "Control Logic: CPU inka use hardware modules choose karne mein karta hai signal translation ke baad."
    ],
    realLifeExample: "Decoder: Jaise lift ka button—aapne binary code bheja aur specific floor (Line) light up ho gayi. Encoder: Computer keyboard—aapke har key press ko binary bit format mein convert karna.",
    diagramUrl: "true"
  },
  {
    topic: "Programmable Logic Array (PLA)",
    subjectCode: "BCA-402",
    explanation: "PLA ek programmable logic device hai jisme AND aur OR dono planes programmable hote hain. Ye complex logic logic functions ko kam space mein implement karne ke liye use hota hai.",
    keyPoints: [
      "Customization: Programmer decide kar sakta hai ki kaunse inputs AND honge aur kaunse outputs OR honge.",
      "Efficiency: ROM ke comparison mein ye memory save karta hai kyunki isme sirf zaroorat wale minterms produce kiye ja sakte hain.",
      "Input Buffer: Inputs ko true aur complement dono form mein plane ko bhejna.",
      "Cost: Thoda mehenga hota hai par high performance applications mein best hai."
    ],
    realLifeExample: "Jaise ek customized digital lock—jahan aap decide karte ho ki kaunse digits ka complex combination lock ko trigger karega.",
    diagramUrl: "true"
  },
  {
    topic: "Read Only Memory (ROM)",
    subjectCode: "BCA-402",
    explanation: "ROM ek permanent storage device hai jo power jane ke baad bhi data hold rakhta hai (Non-volatile). Isme manufacturer ya user permanent instructions save karte hain.",
    keyPoints: [
      "Fixed Logic: Isme AND plane fixed hota hai (Decoders) aur sirf OR plane programmable hota hai.",
      "Firmware: Computer ki BIOS setting ya startup instructions ROM mein hi hoti hain.",
      "Reliability: Iska data change karna mushkil hai isliye ye 'Safe' memory mani jati hai.",
      "Types: PROM (Programmable), EPROM (Erasable), EEPROM (Electrically Erasable)."
    ],
    realLifeExample: "Washing machine ke programs—manual mein set hota hai 'Quick Wash' ya 'Heavy Wash' ka pattern jo ROM mein permanent saved hai.",
    diagramUrl: "true"
  },
  {
    topic: "Sequential Circuits",
    subjectCode: "BCA-402",
    explanation: "Sequential circuits mein memory element hota hai. Inka output sirf present input pe nahi, balki 'Past Inputs' (History) pe bhi depend karta hai.",
    keyPoints: [
      "Feedback: Output ka ek hissa wapas input mein bhaga jata hai information store karne ke liye.",
      "Clock Signal: Timing circuits ke coordinate pe hi operations change hote hain.",
      "States: System 'Present State' aur 'Next State' logic pe work karta hai.",
      "Components: Flip-flops aur Latches inke basic storage units hain."
    ],
    realLifeExample: "Aapka digital clock—use 'Memory' chahiye ki पिछला minute kya tha taaki wo naya minute update kar sake.",
    diagramUrl: "true"
  },
  {
    topic: "Singly Linked Lists",
    subjectCode: "BCA-403",
    explanation: "Singly Linked List ek linear collection hai nodes ka jisme har node do hisso mein batta hota hai: Data aur Next pointer (Address). Ye sirf ek direction (Forward) mein chalti hai.",
    keyPoints: [
      "Dynamic Size: Application chalte waqt aap naye members add kar sakte ho.",
      "Memory efficiency: Arrays ki tarah memory me ek saath rehne ki zaroorat nahi, blocks bikhre ho sakte hain (Linked using addresses).",
      "Terminator: Aakhri node ka pointer always 'NULL' hota hai.",
      "Insertion: Sirf pointers change karke naya data add ho jata hai (No shifting of elements)."
    ],
    realLifeExample: "Train ke coach—har coach piche wale se juda hai, aur engine (Head) pehle coach ko janta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Multiplexer and Demultiplexer",
    explanation: "MUX (Data Selector) multiple wires se data lekar ek single wire pe data bhejta hai. DEMUX (Data Distributor) ek wire se data lekar instructions ke according use alag-alag lines pe bhejta hai.",
    keyPoints: [
      "Selection Lines: In numbers (Control bits) pe depend karta hai ki kousna data route hoga.",
      "Parallel to Serial: MUX parallel data streams ko serial formatting mein convert kar sakta hai communication ke liye.",
      "Interconnect Network: High speed networks aur cross-bar switches mein inka major deployment hota hai.",
      "One-to-Many logic: DEMUX single source se multiple destinations (Output devices) ko traffic manage karta hai."
    ],
    realLifeExample: "MUX: Jaise internet connection (Central wire) par alag-alag devices data bhejne ke liye line share karti hain. DEMUX: Postman jo ek bag se chithiyan (Common Input) nikal kar alag-alag gharon (Outputs) mein deliver karta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Programmable Logic Array (PLA)",
    explanation: "PLA ek special custom design architectural concept hai. Isme logic fixed nahi hota, balki design level pe connections customize kiye ja sakte hain multi-functional ICs banane ke liye.",
    keyPoints: [
      "Configurable Matrix: Isme AND plane aur OR plane dono programmable hote hain (Hybrid model).",
      "Application Specific: Iska use specific machines jaise washing machine timers ya custom security controllers mein hota hai.",
      "Efficiency: Kam hardware mein complex boolean functions implement karne ke kaam aata hai.",
      "SOP Logic: Sum of Products logic design ke liye ye best fit hai."
    ],
    realLifeExample: "Jaise ek LEGO kit—pieces wahi hain par aap use car, ghar ya boat kisi bhi logic mein connect karke bana sakte ho.",
    diagramUrl: "true"
  },
  {
    topic: "Read Only Memory (ROM)",
    explanation: "ROM non-volatile storage standard hai. Isme stored data power off hone ke baad bhi safe rehta hai, isliye ise basic firmware instructions (BIOS) save karne ke liye use karte hain.",
    keyPoints: [
      "Startup Logic: Computer on hote hi bootstrap loader kahan se chalna hai ye ROM batata hai.",
      "Types: Constant evolution—EPROM (UV erasable), EEPROM (Flash memory ka precursor - Electrical erasable).",
      "Instruction Integrity: Isme codes galat nahi hote kyunki normal users ise modify nahi kar sakte.",
      "Speed: Hard disks se fast par RAM se slow response speed hoti hai sequential access patterns ki wajah sa."
    ],
    realLifeExample: "Jaise school ki bell system—uska schedule computer ki ROM mein set hai, fuse ur jaye tab bhi school khulne pe wahi fixed time pe bajegi.",
    diagramUrl: "true"
  },
  {
    topic: "RAM vs ROM",
    explanation: "RAM computer ka main volatile workspace hai jahan data processing hoti hai, jabki ROM storage logic provide karta hai persistent instructions ke liye.",
    keyPoints: [
      "Volatility Contrast: RAM clean ho jati hai power cut pe, ROM data retain karta hai architecture protection ki wajah se.",
      "Operations: RAM constant read/write handle karti hai millions of times per second. ROM mainly read-focused hoti hai.",
      "SRAM vs DRAM: RAM ke types (SRAM cache ke liye speed ke liye, DRAM main RAM ke liye density ke liye).",
      "Cost Factor: Per GB cost RAM ki boht zyada hoti hai higher logic gates usage ki wajah se."
    ],
    realLifeExample: "RAM: Jaise aapka workdesk jahan files khulke kaam ho raha hai. ROM: Jaise computer ke rules ki manual jo permanent bookcase mein rakhi hai.",
    diagramUrl: "true"
  },
  {
    topic: "Sequential Circuits",
    explanation: "Sequential circuits mein 'Memory' aur 'Timing' attributes hote hain. Inka response current input ke saath-saath pichle records (Feedback path) pe depend karta hai.",
    keyPoints: [
      "State Management: Circuit apni 'Next State' identify karta hai logic transition ke logic se.",
      "Clock Sync: Computer ki clock pulses in circuits ko coordinate karti hain (Timing intervals).",
      "Flip-Flops: Yeh circuits ki basic memory unit hote hain jo binary state (0/1) hold karte hain.",
      "Necessity: Bina sequential logic ke computer history yaad nahi rakh payega (No password memory, no game save status)."
    ],
    realLifeExample: "Jaise ATM pin—pehla number press karne ke baad system yaad rakhta hai, aur teen aur numbers ke saath match karke verify (State tracking) karta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Flip-Flops (SR, JK, D, T)",
    explanation: "Flip-Flops digital memory ke fundamental cells hain. 1-bit data save karte hain aur edge triggering ya level triggering pe state change karte hain.",
    keyPoints: [
      "SR (Set-Reset): S=1 Set (1), R=1 Reset (0). Error condition: Dono 1-1 hon toh circuit confuse ho jata hai.",
      "JK (Jack-Kilby): SR ka advanced version jo 1-1 condition pe error nahi balki state 'Toggle' (Switch 0 to 1) kar deta hai.",
      "D (Data): Isme single data line hoti hai, jo input hai wahi delay ke baad output ban jata hai (Data buffering).",
      "T (Toggle): Input 1 hone pe state switch karta hai, binary counters banane ke liye best logic hai."
    ],
    realLifeExample: "Jaise single switch touch lamp—ek baar touch karo ON, dusri baar touch karo OFF. Ye current state flip kar raha hai.",
    diagramUrl: "true"
  },
  {
    topic: "Registers",
    explanation: "Registers high-speed storage locations hain jo directly CPU blocks ke saath linked hote hain. CPU data bus se memory (RAM) ka wait nahi karta, registers se turant data fetch kar leta hai.",
    keyPoints: [
      "Array of Flip-Flops: N-bit register (like 32-bit aur 64-bit) utne hi flip-flops ka parallel group hai.",
      "Shift Capability: Data ko bits mein left ya right khiskana bitwise operations aur math division ke liye.",
      "Type Logic: SISO (Slow/Serial), PIPO (Fastest/Parallel Data transfer) configurations.",
      "Instruction Pointer (IP): Wo special register jo next instruction ka address save karta hai performance sync ke liye."
    ],
    realLifeExample: "Jaise aapke haath mein pakdi hui notepad—aap seedha usme likhte ho, unlike bag (RAM) jahan se copy nikalne mein time lagega.",
    diagramUrl: "true"
  },
  {
    topic: "Counters (Asynchronous and Synchronous)",
    explanation: "Counters sequential logic based timing systems hain jo clock pulses ya events ki ginti (0, 1, 2, 3...) karte hain binary format mein.",
    keyPoints: [
      "Ripple Counter (Asynchronous): Ek unit ka output dusre ka clock signal banta hai, cheap but propagation delay (Slow) hota hai.",
      "Synchronous: Common clock saare units ko ek saath order deti hai, extremely fast decision making.",
      "MOD Counter: Count reset logic (e.g. MOD 10 counter sirf 0 to 9 ginte hi reset ho jayega).",
      "Industrial Use: Traffic lights, digital clocks, aur stopwatch circuits mein major core component hai."
    ],
    realLifeExample: "Jaise metro station ka gate—jitni baar log sensor cross karenge (Pulse), counter value badhti jayegi entry track karne ke liye.",
    diagramUrl: "true"
  },
  {
    topic: "ALU Organization",
    explanation: "ALU (Arithmetic Logic Unit) mathematical computation aur logical evaluation ka engine hai. Iske design mein speed aur bit-depth (32-bit/64-bit) performance determine karte hain.",
    keyPoints: [
      "Arithmetic Segment: Adders, Subtractors aur Multipliers logic implementation.",
      "Logic Segment: AND, OR, XOR bitwise manipulations logic gate groups ke through.",
      "Status Register (Flags): Carry, Overflow, Sign, aur Zero flags execution ka success/fail status signal karte hain.",
      "Accumulator Link: ALU output hamesha ek central register (Accumulator) mein reflect hota hai temporary results ke liye."
    ],
    realLifeExample: "Jaise calculator ka processor—aapne numbers aur operator dia, ALU circuits turant gates ke thorough result generate karte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Control Unit",
    explanation: "Control Unit pure system ka master synchronization module hai. Ye machine cycle (Fetch-Decode-Execute) ke timing signals aur hardware enable signals generate karta hai.",
    keyPoints: [
      "Hardware Driver: Signal bhej ke ALU, Memory aur IO ko activate karna timing diagrams ke base pe.",
      "Decoding Logic: Binary address code ko hardware action commands mein convert karna logic gates ke thorough.",
      "Status Monitor: Interrupts aur internal errors ke responses coordinate karna execution flow ke beech mein.",
      "Instruction Register Link: IR mein maujood current command ko analyze karke appropriate gate sequence trigger karna."
    ],
    realLifeExample: "Jaise ek airport control tower—wo planes ko nahi udata, par saare pilots (Hardware) ko timing aur actions (Signals) batata hai taaki system smoothly chale.",
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
    diagramHint: "Memory blocks showing arrows pointing from instruction to data addresses.",
    diagramUrl: "true"
  },
  {
    topic: "Input Output Techniques",
    explanation: "I/O Techniques computer ke interface mechanisms hain jo slow mechanical devices (like hard drive/mouse) aur lightning fast digital CPU ke beech communication establish karte hain. Inka choice system throughput ko define karta hai.",
    keyPoints: [
      "Programmed I/O: CPU baar-baar flags check karta hai (Polling), jisse processor ka valuable time waste hota hai.",
      "Interrupt-Driven: Device khud tab alert karti hai jab signal ready ho, allowing CPU to perform other tasks in between.",
      "Direct Memory Access (DMA): High-speed data transfer jisme CPU ko bypass karke hardware seedha RAM se interact karta hai.",
      "Channel I/O: Dedicated I/O processors use hote hain large mainframe systems mein heavy traffic manage karne ke liye."
    ],
    realLifeExample: "Jaise kitchen management—Programmed: Cook baar-baar gas check karta hai. Interrupt: Gas pe whistle bajti hai. DMA: Ek helper bina cook ko disturb kiye saara raw material shelf pe rakh deta hai.",
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    subjectCode: "BCA-402",
    explanation: "RAID (Redundant Array of Independent Disks) ek virtualization technology hai jo multiple physical disk drives ko ek single logical storage unit mein merge karti hai data reliability aur performance badhane ke liye.",
    keyPoints: [
      "RAID 0 (Striping): Data split hota hai across disks for high speed, par koi backup nahi hota.",
      "RAID 1 (Mirroring): Do disks mein same data (Full safety, par costly).",
      "RAID 5 (Parity): Ek disk kharab hone pe bhi data dusri disks se mathematically recreate ho jata hai parity logic ki wajah se.",
      "RAID 6: Do disks ek saath kharab hone par bhi safety (Dual parity).",
      "RAID 10: Combining Mirroring aur Striping for enterprise grade performance."
    ],
    realLifeExample: "Jaise aapke exam hall mein 3 candidates ke paas paper hai, agar ek ka ghum jaye toh baaki do (Redundancy) se help le sakte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Pipelining",
    explanation: "Pipelining ek hardware optimization technique hai jisme instruction execution ko segments (stages) mein divide karke overlap kiya jata hai. Isse modern 'Super-scalar' processors multiple instructions parallelly execute karte hain.",
    keyPoints: [
      "Throughput Increase: Unit time mein complete hone wali instructions count badh jata hai.",
      "Stages: Standard stages include IF (Fetch), ID (Decode), EX (Execute), MEM (Memory), WB (Write Back).",
      "Hazards: Pipeline stall hone ke reasons—Data dependency (Ek result agle ke liye chahiye), Control dependency (Branching issues), aur Structural hazards (Hardware conflict).",
      "Flushing: Galat predictive branching ki wajah se pipeline ko kabhi kabhi restart karna padta hai speed penalty ke saath."
    ],
    realLifeExample: "Jaise ek laundry process—ek machine mein kapde dhul rahe hain, dusri mein sookh rahe hain, aur teesri pe ironing ho rahi hai. Teeno parallelly alag-alag kapdon ke lot pe kaam kar rahe hain.",
    diagramUrl: "true"
  },
  {
    topic: "Memory Hierarchy",
    explanation: "Computer architecture mein memory units ko 'Pyramid' layout mein arrange kiya jata hai. Iska objective speed, cost per bit, aur capacity ke beech optimum balance maintain karna hai.",
    keyPoints: [
      "Speed-Cost Paradox: Memory jitni CPU ke physical vicinity mein hogi, utni faster hogi par utni hi costly.",
      "Primary Pyramid: CPU Registers (Nano seconds) -> L1/L2 Cache -> RAM -> HDD/SSD -> Cloud Backup.",
      "Caching: Frequent data ko uper ke speed tiers mein rakhna response time improve karne ke liye.",
      "Latent Search: Lower hierarchy (Hard Disk) se data load karne mein lagne wala waqt millions of cycles waste kar sakta hai."
    ],
    realLifeExample: "Registers: Aapki memory (Jahan turant calculation hai). Cache: Aapke haath mein pakdi hui book. RAM: Aapka desk. Hard Disk: Door rakhi cupboard.",
    diagramUrl: "true"
  },
  {
    topic: "Cache Memory Organization",
    explanation: "Cache complexity aur high speed buffers ko use karta hai taaki CPU ko slow main memory systems ke liye wait na karna pade. Yeh 'Principle of Locality' (Temporal & Spatial) pe based hai.",
    keyPoints: [
      "Mapping Functions: Direct Mapping (Fixed slots), Fully Associative (Flexible slots), aur Set Associative (Balanced approach).",
      "Hit vs Miss: Efficiency check—data milna (Hit), RAM tak jana (Miss).",
      "Write Policy: Write-Through (RAM update same time) aur Write-Back (Update on cache displacement).",
      "Replacement Algorithms: LRU (Least Recently Used) and FIFO patterns to decide which data to delete from cache."
    ],
    realLifeExample: "Jaise aapki pocket—Aap apne sabse zyada kaam aane wale keys aur mobile pocket mein rakhte hain (Cache), na ki backpack (RAM) mein.",
    diagramUrl: "true"
  },
  {
    topic: "Combinational vs Sequential Circuits",
    explanation: "Digital logic mein circuits ko unke 'Time Dependence' pe classify karte hain. Combinational logic current decision focus hota hai, jabki sequential logic 'Context' ya 'State' (Using memory elements) maintain karta hai.",
    keyPoints: [
      "Memory Element: Sequential circuits flip-flops use karte hain state store karne ke liye, combinational simply logic paths hain.",
      "Sync logic: Sequential ko pulse (Clock) chahiye updates ke liye, combinational inputs change hote hi output badal deta hai.",
      "Complexity: ALU ke math units combinational hote hain, Control Unit aur Registers sequential.",
      "Feedback: Sequential mein output back-link hota hai as input agle step ke liye."
    ],
    realLifeExample: "Combinational: Piano key—dabane pe sound, hatane pe khamoshi. Sequential: Toggle switch ya password lock—pehle kya hua tha use ye yaad rehta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Input / Output System",
    explanation: "I/O System processor ke liye ek gateway hai jo external variables aur raw data ko processable digital formats mein translate karta hai, handle karke signal speed differences ko.",
    keyPoints: [
      "Buffering: Speed discrepancies solve karne ke liye temporary data buffer usage.",
      "Device Controllers: Special processors jo hardware commands (like Motor rotation logic for Disks) handle karte hain.",
      "Isolated vs Memory Mapped I/O: Memory address range mapping techniques to access external devices.",
      "Interrupt Management: Multiple device requests ko priority logic se handle karna CPU logic se."
    ],
    realLifeExample: "Jaise ek international news organization—field reporters (I/O) alag language mein news bhejte hain, central office (CPU) use analyze karta hai signal conversion ke baad.",
    diagramUrl: "true"
  },
  {
    topic: "Interrupt Driven I/O",
    explanation: "Interrupt based communication computer systems mein efficiency ka base hai. Isse hardware devices parallel processing assist karti hain processor workload reduce karke.",
    keyPoints: [
      "Non-Blocking: CPU process execution jaari rakhta hai jab tak external response nahi aata.",
      "Interrupt Vector Table (IVT): Index of memory addresses jahan specific hardware handles (ISR) save hote hain.",
      "Signal Acknowledge: CPU acknowledge bhejta hai aur background execution resume karta hai priority service ke baad.",
      "Types: External (Hardware signals) vs Internal (Software exceptions like Zero divide)."
    ],
    realLifeExample: "Jaise aap movie dekh rahe ho (CPU Task) aur delivery boy ki door bell bajti hai (Interrupt). Aap movie pause karke package lete ho aur phir wapas movie wahi se shuru karte ho.",
    diagramUrl: "true"
  },
  {
    topic: "DMA (Direct Memory Access)",
    explanation: "DMA high performance communication channel hai. Iska objective processor ko intensive 'Register-by-Register' transfer task se aazad karna hai, allowing high resolution graphics aur fast disk reads.",
    keyPoints: [
      "Control Transfer: CPU brief moment ke liye 'Bus Master' status DMA controller ko assign karta hai.",
      "Cycle Stealing: CPU cycles ke beech mein small bursts mein data move karna performance balance ke liye.",
      "Burst Mode: Block size data transfers bina interruption ke for massive speed.",
      "I/O Processors: High-end systems mein DMA controllers autonomous systems ki tarah work karte hain."
    ],
    realLifeExample: "Jaise buffet line—cook table pe khana laga ke chala gaya (Control Transfer), ab customers seedha wahan se khana (Data) le rahe hain bina cook se baar-baar mange (Direct Memory Access).",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Formats",
    explanation: "Instruction sets ye define karte hain ki computers complex tasks ko kitne simple steps (Opcodes & Operands) mein break karte hain execution ke liye.",
    keyPoints: [
      "Opcode field: Specifies action (ADD, MOV, SUB).",
      "Operand field: Specifies data or memory address.",
      "Address Depth: Zero-address (Stacks), One-address (Accumulator), Multi-address (GPR instructions).",
      "Encoding: Fixed-length vs Variable-length encoding logic hardware footprint save karne ke liye."
    ],
    realLifeExample: "Jaise army commands—'March' (Zero address/Generic), 'Attack Enemy 1' (One address), ya 'Move Tank A from X to Y' (Multi-address detail).",
    diagramUrl: "true"
  },

  // BCA-403 Data Structure
  {
    topic: "Singly Linked Lists",
    explanation: "Linked list dynamic memory management ka foundation hai. Isme data linearly connected hota hai par physical memory mein components ('Nodes') bikhre ho sakte hain, jo fragmentation avoid karta hai.",
    keyPoints: [
      "Node Structure: Contains data payload and 'Next' pointer for link management.",
      "Memory Flexibility: Array ki tarah pre-allocation zaroori nahi, runtime pe memory blocks allocate hote hain.",
      "Traversal: Sequential access flow from 'Head' to 'Null' pointer.",
      "Complexity: Search operation O(n) hota hai isliye sequential indexing ke liye optimal hai."
    ],
    realLifeExample: "Jaise 'Treasure Hunt' game—aapke paas pehli chit (Node) hai jo batati hai agali chit kahan milegi (Pointer), aur aise hi aap final gift (End of list) tak pahuchte ho.",
    diagramUrl: "true"
  },
  {
    topic: "Doubly Linked Lists",
    explanation: "Doubly linked list data structures mein 'Two-way indexing' logic provide karta hai. Iska design navigation-heavy applications (jaise media players) ke liye perfect transition support deta hai.",
    keyPoints: [
      "Bi-directional flow: Har node mein Next pointer ke saath-saath 'Previous' pointer bhi save hota hai.",
      "Efficient Deletion: Bina head se traverse kiye kisi bhi node ko remove kiya ja sakta hai previous reference link update karke.",
      "Overhead: Extra pointer storage memory usage badha deta hai (Memory-Speed trade-off).",
      "Tail Pointer: Aksar tail pointer optimize karte hain end-to-start navigation speed ke liye."
    ],
    realLifeExample: "Jaise playlist player—aap 'Next' bhi kar sakte ho aur 'Previous' bhi, aur har song next/prev track se logically linked hai.",
    diagramUrl: "true"
  },
  {
    topic: "Circularly Linked Lists",
    explanation: "Circular structure logic hamesha active processes ko loop mein rakhne ke kaam aata hai. Isme null termination nahi hota, balki last node first node se sync rehta hai.",
    keyPoints: [
      "Infinite Sequence: Last pointer wapas 'Head' ko target karta hai memory closure ke liye.",
      "Round-Robin Scheduling: OS inka use system processing shares divide karne mein karta hai.",
      "Efficiency: Kisi bhi node se full list access ki ja sakti hai traversal logic se.",
      "Logic Implementation: Singly ya Doubly dono format ko circular banaya ja sakta hai buffer usage ke liye."
    ],
    realLifeExample: "Jaise multiple multiplayer games ka turn system—Player 4 ke baad turn wapas Player 1 pe automatic shift (Circular connection) ho jati hai.",
    diagramUrl: "true"
  },
  {
    topic: "Representation of Arrays in Memory",
    explanation: "Computers memory ko ek single continuous strip maante hain. Arrays isi strip ke contigious segments ko physical layout mein occupy karte hain, allowing constant time (O(1)) indexing.",
    keyPoints: [
      "Contiguous Allocation: Bich mein koi gas ya gap allowed nahi hoti memory block alignment ke liye.",
      "Base Address: Array ka pehla element ka physical storage index jahan se index calculation shuru hota hai.",
      "Multidimensional Layout: Matrix ko save karne ke liye Row-Major (Horizontal focus) ya Column-Major (Vertical focus) indexing formulas.",
      "Access Speed: Pointers math (Base + Index * Size) direct memory jump allow karta hai execution ke waqt."
    ],
    realLifeExample: "Jaise ek hotel ki floor—kamre 101, 102, 103 sequence mein hain. Aap base (101) + room number minus logic se turant destination room pe jump (Random access) kar sakte ho.",
    diagramUrl: "true"
  },
  {
    topic: "Polynomials & Sparse matrix",
    explanation: "Math-heavy engineering tasks mein resource management priority hai. Highly scattered data (Zeros) ko save karna memory corruption hai, isliye indexing patterns optimized kiye jate hain.",
    keyPoints: [
      "Sparse Matrix: Wo grids jisme significant data 5% se bhi kam ho (e.g. Social media connections grid).",
      "Triplet Logic: Optimization technique jahan sirf (Row, Column, Value) format ke non-zero values store hote hain.",
      "Storage Efficiency: Gigabytes of zero-padded systems ko small kilobytes tables mein compress kar dena.",
      "Polynomial Logic: Linked lists ka use variables power terms aur coefficients ko connect karne ke liye operations like math addition."
    ],
    realLifeExample: "Jaise ek classroom attendance sheet—agar 50 mein se sirf 2 log aaye hain, toh puri 50 rows likhne se behtar hai sirf un 2 logon ke roll numbers (Sparse format) note karna.",
    diagramUrl: "true"
  },
  {
    topic: "Transpose Sequential Search",
    explanation: "Transpose Search ek heuristic (Self-Optimizing) technique hai. Yeh system ko 'Active Data' pe dynamically adjust karta hai, providing faster results based on user search patterns.",
    keyPoints: [
      "Search-Swap Logic: Har successful search pe found element ko 1 index piche ('Forward') swap kiya jata hai.",
      "Frequency Bias: Jo data log zyada baar dhoondte hain, wo automatic queue ke start mein accumulate hone lagta hai.",
      "Best Alternative: Worst case O(n) rehta hai, par consistent access patterns pe performance O(1) ke kareeb aa jati hai.",
      "Implementation: Singly linked lists ya dynamic arrays mein is logic ka implementation easy aur effective hai."
    ],
    realLifeExample: "Jaise aapke mobile ki emoji list—sabse zyada use hone wali emojis list mein front (Recent) pe aa jati hain taaki aapko scroll na karna pade.",
    diagramUrl: "true"
  },
  {
    topic: "Stack Operations",
    explanation: "Stack 'Last-In-First-Out' (LIFO) protocol ka digital embodiment hai. Iska usage depth-first decision systems aur memory recursion tracking ke liye mandatory hai.",
    keyPoints: [
      "Push Logic: Naya data top pe load karna, system verification check (Stack Full error) ke saath.",
      "Pop Logic: Top-most layer ko delete karna data retrieval ke liye (Stack Empty check required).",
      "Peek/Top Function: State analyze karna bina data alter kiye indexing reference ke thorough.",
      "System Depth: Application undos, reverse navigation, aur function call nesting management stack bina impossible hai."
    ],
    realLifeExample: "Jaise shaadi ki plates ka dher—sabse upar wali plate (Last In) pehle uthai jayegi (First Out), niche ki plates tak tabhi pahuchenge jab uper ki haatengi.",
    diagramUrl: "true"
  },
  {
    topic: "Queue: Linear and Circular",
    explanation: "Queues 'First-In-First-Out' (FIFO) logic implementation hain jo fairness aur synchronization prioritize karte hain asynchronous processing environments mein.",
    keyPoints: [
      "Linear Queue: One-way flow, jahan 'Rear' se entry aur 'Front' se exit hota hai. Issue—'False Full' state due to memory fragmentation.",
      "Circular Optimization: Logic wrap-around (Modulo arithmetic), jahan pointers limit reach hone pe index 0 pe shift hote hain space reusable banane ke liye.",
      "En-queue/De-queue: Core methods jo insertion/deletion logic pointers manipulation se perform karte hain.",
      "Use case: Bank token systems, network packet queuing, aur printer job scheduling logic."
    ],
    realLifeExample: "Linear: Jaise ek narrow movie line—front se log ja rahe hain par backend se line badhti ja rahi hai. Circular: Jaise revolving door—space constantly recycle ho rahi hai logo (Data) ko process karne ke liye.",
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
    diagramHint: "Circles connected by lines in a branching structure.",
    diagramUrl: "true"
  },
  {
    topic: "BST & AVL Trees",
    explanation: "Binary Search Trees (BST) aur AVL Trees optimized search hierarchies hain. AVL constant self-correction (Rotations) use karta hai worst-case scenarios avoid karne ke liye, indexing speed maintain karte huye.",
    keyPoints: [
      "Search Property: Left child < Node < Right child logic jo search time O(log n) tak restrict karta hai.",
      "Balance Factor: AVL constraint—Height(Left) - Height(Right) range MUST be within [-1, 0, 1].",
      "Rotations: LL, RR, LR, RL transformation cycles jo structural imbalance identify karke use fix karte hain auto-logic se.",
      "Dynamic Stability: Data insert ya delete hone pe AVL instant re-balance karta hai performance drift check karne ke liye."
    ],
    realLifeExample: "Jaise ek library jahan books alphabetical order mein hain (BST logic) aur librarian constantly shelves rearrange karta hai taaki koi shelf boht bhari na ho jaye (AVL Balancing).",
    diagramUrl: "true"
  },
  {
    topic: "Representations of Graphs",
    explanation: "Graphs 'Network' logic represent karte hain. Inke connection storage efficiency design choices (Matrix vs List) hardware availability aur data density pe depend karti hai.",
    keyPoints: [
      "Adjacency Matrix: 2D array approach. Fast search (Target connection exists?) par O(V^2) space overhead for sparse graphs.",
      "Adjacency List: Array of linked lists. Space optimal for interconnected networks, traversal algorithms like DFS/BFS ke liye best selection.",
      "Directed vs Undirected: Connection flow (One way vs Both ways) logic represent karne ke liye arrows ya simple lines usage.",
      "Weighted Graph: Edges ko values (Distance/Cost) assign karna routes optimization problems solve karne ke liye."
    ],
    realLifeExample: "Jaise Facebook—Aap (Node) apne doston (Connections) se linked hain. Friend list represent karne ke liye Adjacency List efficient hai because everyone isn't friends with everyone else.",
    diagramUrl: "true"
  },
  {
    topic: "Graph Traversals",
    explanation: "Graph search algorithms digital navigation ke foundation hain. BFS patterns level priority detey hain jabki DFS exploration depth focus approach hai.",
    keyPoints: [
      "BFS (Breadth First): Queues use karta hai layer-by-layer discovery ke liye. Optimal for finding Shortest Path in unweighted graphs.",
      "DFS (Depth First): Stacks ya Recursion code use karke ek path end tak dhoondta hai. Backtracking problems aur cycle detection ke liye preferred logic.",
      "Connectivity Check: Algorithms ensure karte hain ki har part of network reachable hai status tracking flags ke thorough.",
      "Time Complexity: O(Vertices + Edges) processing requirements indexing visits ke thorough."
    ],
    realLifeExample: "BFS: Pani mein pathar phenkne pe bani lehrein—wo point se centerly bahar ki taraf failti hain. DFS: Ek Bhool-bhulaiya (Maze) mein rasta dhoondna jahan aap ek raste end tak jate ho, phir peeche (Backtrack) aate ho.",
    diagramUrl: "true"
  },
  {
    topic: "B Trees",
    explanation: "B-Trees multi-layer indexing solutions hain jo physical storage blocks ('Nodes') ki efficiency badhate hain. Yeh massive datasets storage handling ka world standard (Databases/File Systems) hai.",
    keyPoints: [
      "High Branching Factor: Ek node mein tons of keys and pointers ho sakte hain, resulting in high 'Width' but very low 'Height'.",
      "Disk I/O Optimization: Kam height matlab storage se data lene ke liye kam reads ('Page access') ki zaroorat.",
      "Self-Balancing: Node splits aur merges ke thorough hamesha fully balanced state maintain karta hai logic levels pe.",
      "Root reachability: Hamesha O(log n) constant performance regardless of how millions of data rows grow in backend."
    ],
    realLifeExample: "Jaise Google search indexing—kaise billions of web pages mein se result 0.01s mein mil jata hai, wahan backend pe B-Trees jaise optimization algorithms data manage kar rahe hote hain.",
    diagramUrl: "true"
  },
  {
    topic: "AVL Trees: Definition and Operations",
    explanation: "AVL Trees strict balancing guarantee dete hain. Inka implementation computational complexity fix karta hai jahan high frequency read operations priority hote hain balanced data tree structures mein.",
    keyPoints: [
      "Definition: BST with a local height constraint logic (Max 1 diff) on sub-trees.",
      "Insertion Logic: Normal BST insert plus immediate trace back for balance check up to the root.",
      "Rotation Mechanics: Single rotations (Linear shift) aur Double rotations (Zig-zag correction) for complex imbalances.",
      "Search Advantage: Skewed state (Straight line) kabhi nahi banta, isliye searching hamesha fastest logarithmic time mein rehti hai."
    ],
    realLifeExample: "Jaise ek Balanced Diet—healthy rehne ke liye aap protein, carb aur fats ka balance rakhte hain, wahi balance AVL tree binary branches ke beech height ka rakhta hai.",
    diagramUrl: "true"
  },
  {
    topic: "Internal Sorting",
    explanation: "Internal sorting algorithms processor-heavy logical operations hain jahan pura dataset computer ki RAM memory mein fits hota hai comparison cycles ke liye.",
    keyPoints: [
      "Quick Sort: Divide & Conquer powerhouse. Pivot selection complexity (Average O(n log n)) aur partitioning logic key features hain.",
      "Heap Sort: Binary Heap structure (Max-Heap) use karke root priority removal through heapsort logic. Space efficient O(1) in-place sort.",
      "Bubble & Insertion Sort: Simple algorithms logic education ke liye best—heavy datasets pe poor O(n^2) performance.",
      "Merge Sort: Stable sorting protocol jo massive data ko small sub-lists mein split karke merge logic se stable ordering provide karta hai."
    ],
    realLifeExample: "Jaise cards khelte waqt unhe haath mein arrange karna (Internal Memory Sort), vs warehouse mein cartons arrange karna (External Sort where we can't see all items at once).",
    diagramUrl: "true"
  },
  {
    topic: "Searching",
    explanation: "Searching: Introduction, Binary Search, Transpose Sequential Search, Interpolation Search. Digital indexing mein efficiency increase karne ke liye hardware pointers aur mathematical formulas hume targets tak lightning fast pahuchate hain.",
    keyPoints: [
      "Wait-Search (Linear/Sequential): Data set ka location dhoondne ka basic process jahan hum index 0 se end tak traverse karte hain. O(n) average case performance.",
      "Interval Search (Binary): Sorted data requirement mandatory hai. Har step search range ko strictly 50% reduce kar deta hai, resulting in faster O(log n) efficiency.",
      "Self-Organizing (Transpose): Jab target data mil jata hai, system use list mein 1 position front ki taraf shift (Transpose) kar deta hai. Over time, frequently accessed data automatic top pe aa jata hai optimization logic se.",
      "Interpolation Logic: Intelligence based Mid-point calculation. Agar address ranges uniformly distributed hain, toh ye technique binary search ke simple mid-points se behtar precise estimation generate karti hai."
    ],
    realLifeExample: "Linear: Phonebook mein bina index ke naam dhoondna. Binary: Dictionary mein word dhoondna segments use karke. Transpose: Recent contacts list jahan top pe wahi log hote hain jinhe aap zyada call karte hain.",
    diagramUrl: "true"
  },
  {
    topic: "Histograms and frequency polygons",
    explanation: "Frequency distributions ko visually represent karne ke liye Histograms aur Polygons analytical standard hain. Yeh large numeric data densities ko simple 2D shapes mein translate karte hain graph interpretation ke liye.",
    keyPoints: [
      "Histogram Architecture: X-axis represent karta hai 'Class Intervals' aur Y-axis 'Frequency'. Adjacent bars width continuous data ranges define karti hai.",
      "Frequency Polygon: Histogram bars ke mid-points ko straight lines se connect karke banne wala trend graph. Multi-data set comparison ke liye best tool.",
      "Skewness Analysis: Graph ka jhukav (Left/Right) batata hai ki distribution symmetric hai ya nahi statistical balance point se.",
      "Visual density: Gap-less bars continuous data sets (like weights/heights) ki population density represent karti hain."
    ],
    realLifeExample: "Jaise cricket match ka 'Worm Graph'—runs per over bars se dikhte hain (Histogram logic) aur batting pattern lines se (Polygon logic).",
    diagramUrl: "true"
  },
  {
    topic: "Theoretical distribution",
    explanation: "Probability theory mein random variables ke behaviour ko model karne ke liye theoretical distributions (Binomial, Poisson) use hote hain. Yeh mathematical frameworks practical datasets predict karne mein help karte hain.",
    keyPoints: [
      "Binomial Distribution: Discrete events jahan sirf 2 outcomes (Success/Failure) possible hon over 'n' constant trials.",
      "Poisson Distribution: Bahut rare events dhoondne ke liye (e.g. Number of meteor hits per year) jahan average rate 'Lambda' known hai par exact time unknown.",
      "Parameter Constraints: Binomial relies on (n, p) while Poisson relies on single mean rate (λ).",
      "Continuity: Inka use inventory management, insurance risks aur arrival patterns modeling mein standard hai."
    ],
    realLifeExample: "Binomial: 10 bar coin toss karne pe 6 heads aane ki probability. Poisson: Ek busy road accident hone ka statistical chance in a specific timeframe.",
    diagramUrl: "true"
  },
  {
    topic: "Least Square Regression lines",
    explanation: "Regression analysis correlation aur cause-effect logic define karta hai. 'Least Squares' method residual errors ko minimize karke ek 'Best Fit Line' calculate karta hai scientific prediction ke liye.",
    keyPoints: [
      "Standard Equation: Y = a + bX. Jahan 'b' batata hai unit change in independent variable (X) ka impact dependent variable (Y) pe.",
      "Error Minimization: Line aise draw hoti hai ki har point ka vertical distance (square sum) minimum ho optimal accuracy ke liye.",
      "Forecasting: Historical patterns base future trends predict karna economics aur science projects mein.",
      "Coefficients: Regression coefficients direction aur strength determine karte hain mathematical relationship ki."
    ],
    realLifeExample: "Jaise temperature vs ice-cream sales—agar 1 degree barhne pe 10 units sales barhti hai, toh wo line regression equation hai.",
    diagramUrl: "true"
  },
  {
    topic: "Normal distribution",
    explanation: "Normal Distribution (Gaussian) nature ka sabse common frequency pattern hai. Ise 'Bell Curve' kehte hain kyunki max population average data points ke around cluster karti hai symmetry follow karte huyo.",
    keyPoints: [
      "Bell Curve Geometry: Peak center mein (Mean = Median = Mode) aur tail segments X-axis tak infinity reach karte hain zero touch kiye bina.",
      "Z-Score Logic: Data point ka distance from mean in terms of Standard Deviations calculation.",
      "Quality Control (6-Sigma): Industry standards maintain karna check karke ki kitna data error limits se bahar ja raha hai.",
      "Empirical Property: Area coverage fixed hai—99.7% data hamesha 3 Standard Deviations ke range mein rehta hai."
    ],
    realLifeExample: "Jaise class ke marks—zyadatar bacche intermediate marks (Average) laate hain, aur toppers ya failures ki ginti hamesha curve ke extreme ends (Tails) pe hoti hai.",
    diagramUrl: "true"
  },
  {
    topic: "Algorithms and Analysis of Algorithms",
    explanation: "Algorithm design efficiency logic pe work karta hai. Analysis ka objective hardware constraints ke bina logic ki scaling property (Big O) determine karna hai for large input sizes.",
    keyPoints: [
      "Asymptotic Growth: Input size (n) barhne pe time/space requirement kaise accelerate hoti hai measuring logic.",
      "Big O Notation (O): Upper bound complexity logic jo worst-case performance guarantee deti hai software performance safety ke liye.",
      "Divide & Conquer: Problem ko small manageable sub-problems mein split karke solving speed (O(log n)) optimize karna.",
      "Space-Time Trade-off: Memory zyada use karke time bachana (Hashing) ya processing badha ke memory save karna patterns selection."
    ],
    realLifeExample: "Jaise Google Maps pe rasta dhoondna—Shortest path algorithm (Dijkstra) billions of intersections check karta hai microseconds mein efficient analysis logic ki wajah se.",
    diagramUrl: "true"
  },
  {
    topic: "Stack-Introduction",
    explanation: "Stack 'Last-In-First-Out' (LIFO) primitive data structure hai. Yeh recursion control aur system state snapshot management ka backbone hai software engineering systems mein.",
    keyPoints: [
      "Pointer Management: 'Top' variable track rakhta hai ki insertion (Push) aur deletion (Pop) operations kahan perform honge.",
      "Overflow Systems: Memory limits reach hone pe stack full error handling priority constraint hai safety ke liye.",
      "Usage Hierarchy: Function call nesting, expression conversion (Infix to Postfix), aur recursive algorithms execution path tracking.",
      "Runtime state: CPU execution stack use karta hai context switching aur process jumps manage karne ke liye."
    ],
    realLifeExample: "Jaise Web Browser ka 'Back' button—jo page aapne sabse aakhri mein dekha wahi sabse pehle wapas dikhega (Last In First Out).",
    diagramUrl: "true"
  },
  {
    topic: "Queues-Introduction",
    explanation: "Queues FIFO (First-In-First-Out) protocol enforce karte hain sequential processing fairness ke liye. Inka design multithreading aur request buffering environments mein resources sync rakhta hai.",
    keyPoints: [
      "Front/Rear Pointers: Enqueue logic Rear ko target karta hai aur Dequeue logic Front pointer offset use karta hai memory sync ke liye.",
      "Scheduling Logic: Operating systems inka use task management, print spooling, aur disk access buffers ke liye karte hain.",
      "Variations: Priority Queues (Processing based on urgency), Circular Queues (Space recycling), aur Deques (Double ended support).",
      "Fairness Logic: Har process ko serial order mein entry timestamp ke according processing serve karna bottleneck avoid karne ke liye."
    ],
    realLifeExample: "Jaise ek Call Center line—jis customer ka call pehle connect hua wahi pehle agent se baat karega, serial wait queue logic ki wajah se.",
    diagramUrl: "true"
  },
  {
    topic: "Permutation and Combination",
    explanation: "P&C counting principles hain jo 'Ordering' aur 'Grouping' logic define karte hain complex selection processes analyze karne ke liye probability modeling mein.",
    keyPoints: [
      "Permutation (nPr): Systematic arrangement jahan order elements ka critical role play karta hai complexity patterns define karne mein.",
      "Combination (nCr): Collection aur Selection focus logic jahan sirf group content matter karta hai regardless of their position sequence.",
      "Calculation Base: Factorial math (!)—nPr selection aur internal arrangement dono counts karta hai, jabki nCr sirf selection logic prioritize karta hai.",
      "Logic Difference: Objects unique hon ya repeating, counting formulas constraints ke according modify kiye jate hain accuracy ke liye."
    ],
    realLifeExample: "Permutation: Mobile PIN codes (1234 aur 4321 alag hain). Combination: Cricket Team select karna (11 players order change karne se team nahi badalti).",
  },
  {
    topic: "Binomial Theorem",
    explanation: "Binomial Theorem algebraic expansions power management provide karta hai. Yeh framework probability distributions aura scientific computing estimations ka standard root mathematical tool hai.",
    keyPoints: [
      "Expansion Scale: (a+b)^n format ko systematic terms mein convert karna using coefficients calculation logic.",
      "Pascal's Geometry: Coefficients ka derivation triangle logic se fast estimation aur large power solving ke kaam aata hai.",
      "General Term Logic: Bina pura expand kiye specfic middle term ya 'r-th' term direct find karne ka mechanism provide karna.",
      "Polynomial Power: Engineering math aur computer graphics algorithms mein curve approximations ke liye theorem background math setup karta hai."
    ],
    realLifeExample: "Jaise investment risks predict karna jahan 'n' factors multiple time frame mein combine hoke results impact karte hain power expansion logic se.",
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
    diagramHint: "Two curves: one sharp (low dispersion) and one flat (high dispersion)."
  },
  {
    topic: "Moments, Skewness, kurtosis",
    explanation: "Distributions ki 'Visual Geometry' define karne ke liye in measures ka use hota hai. Yeh asymmetry (Skewness) aur Peakedness (Kurtosis) through data behavior mapping tools hain.",
    keyPoints: [
      "Skewness: Distribution ka jhukav—Positive Skew (Right tail longer) aur Negative Skew (Left tail longer) data bias logic represent karte hain.",
      "Kurtosis: Curve ki 'Peakedness'. Leptokurtic (Pointy), platykurtic (Flat), mesokurtic (Normal).",
      "Moments about Mean: Statistical foundation jiska 1st moment 0, 2nd variance, 3rd skewness aur 4th kurtosis complexity parameters define karta hai.",
      "Shape Description: Data Normal Distribution se kitna 'Distorted' hai, ye quantitatively analyze karne ka standard methodology logic."
    ],
    realLifeExample: "Jaise salary distribution—zyadatar log middle class hote hain par billionaire class hamesha right side ek long 'Tail' (Positive Skewness) form krti hai population graph mein.",
    diagramUrl: "true"
  },
  {
    topic: "Distributed Database",
    explanation: "Distributed Database network-wide data fragmentation aur redundancy logic control karta hai. Iska objective physical location transparency provide karna hai logical system consistency ke saath.",
    keyPoints: [
      "Transparency layers: Location transparency (User doesn't care where data is) aur Replication transparency (Auto copy sync logic).",
      "Fragmentation Logic: Horizontal (Rows split) vs Vertical (Columns split) data partitioning based on regional usage frequency optimization.",
      "Reliability & Availability: Multi-node setup jahan 1 node failure system-wide downtime cause nahi karta resource pooling ki wajah se.",
      "Concurrency Control: Multiple locations se aane wale updates ko synchronized aur consistent (ACID property) rakhne ka challenge management."
    ],
    realLifeExample: "Jaise ATM networks—aapka account data multiple bank servers pe distributed hai, par aap kisi bhi city ke ATM se balance withdrawal kar sakte ho logically single unit response ki wajah se.",
    diagramUrl: "true"
  },
  {
    topic: "OODBMS (Basic Concepts)",
    explanation: "OODBMS modern software objects aur database storage persistence ke beech ka gap system layer pe khatam karta hai. Yeh complex data structures logic mapping ke liye optimal high-performance system hai.",
    keyPoints: [
      "Object Identity (OID): Memory address pointers ki tarah database unique ID handle karta hai fast navigation optimization ke liye.",
      "Encapsulation: Data state aur behavior (Methods) ko single logic unit mein bind karke access security ensure karna storage level pe.",
      "Complex Relationships: Graph, 3D Models, aur Heavy multimedia nesting handle karna bina costly relational JOIN operations ke optimized speed mein.",
      "Class Hierarchy: Inheritance support jo data modeling layers ko simplify karta hai code reusability logic database schemas tak le jane mein."
    ],
    realLifeExample: "Jaise Video Games—har character ek object hai jisme uski health, speed aur skills (data + functions) ek saath hain.",
    diagramUrl: "true"
  },
  {
    topic: "Instruction Set Architecture",
    explanation: "ISA hardware-software interface standard define karta hai. Yeh set of instructions CPU decoding aur memory access patterns ka logical blueprint hai binary execution ke liye.",
    keyPoints: [
      "Instruction Formats: Opcode (What to do) aur Operands (On which data) ka structural representation binary layers pe.",
      "Addressing Modes: Data memory se fetch karne ke methods code flexibility aur pointer speed enhance karte hain hardware cycles mein.",
      "CISC vs RISC: Complex (One powerful step) vs Reduced (Simple fast steps) logic design philosophies modern processors mein.",
      "Binary Mapping: Human readable code ko machines ke voltages aur gate transitions mein translate karne ka standard protocol."
    ],
    realLifeExample: "Jaise ek global Language—Instruction set wo grammar hai jo software programs ko hardware processor se baat karne ki capability provide karta hai bina hardware ki internal complexity jane.",
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
    diagramHint: "Tree diagram showing array splitting into single elements and then merging back sorted.",
    diagramUrl: "true"
  },
  {
    topic: "Interpolation Search",
    explanation: "Interpolation search Binary Search ka ek improved version hai jo tab use hota hai jab data 'Sorted' aur 'Uniformly Distributed' (ek barabar gap pe) ho.",
    keyPoints: [
      "Improvement: Binary Search hamesha bich (mid) mein dekhta hai, Interpolation wahan dekhta hai jahan value hone ke chances zyada hain (Smart Guessing).",
      "Formula: Pos = Low + [(target - arr[low]) * (high - low) / (arr[high] - arr[low])].",
      "Efficiency: Best case mein O(log log n) tak ja sakta hai, par agar distribution uneven ho toh O(n) bhi ho sakta hai.",
      "Comparison: Yeh Telephone directory ya Dictionary search ke human logic se bahut milta-julta hai."
    ],
    realLifeExample: "Jaise Dictionary mein 'S' dhoondte waqt hum bich se thoda aage start karte hain, na ki ekdum center (M) se.",
    diagramHint: "An array where the search pointer jumps towards the end for a high value, bypassing the center.",
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
    diagramHint: "A square with random dots inside and a circle inscribed (Common Pi-calculation example).",
    diagramUrl: "true"
  },
  {
    topic: "Relationship Algebra",
    subjectCode: "BCA-401",
    explanation: "Relational Algebra ek procedural query language hai jo batati hai ki data 'Kaise' (How) nikalna hai mathematical operations use karke. Yeh SQL ka mathematical foundation hai.",
    keyPoints: [
      "Selection (σ): Rows filter karna (Horizontal partitioning).",
      "Projection (π): Columns select karna (Vertical partitioning).",
      "Union (∪): Do tables ke results ko combine karna.",
      "Set Difference (-): Table A mein ho par B mein na ho.",
      "Cartesian Product (X): Do tables ki har row ka combination."
    ],
    sqlSyntax: "-- Selection: SELECT * FROM Table WHERE condition;\n-- Projection: SELECT col1, col2 FROM Table;\n-- Join: SELECT * FROM T1 JOIN T2 ON condition;",
    sqlExample: "-- Example: Un students ko select karna jo Delhi se hain (Selection)\nSELECT * FROM Students WHERE City = 'Delhi';\n\n-- Example: Students ke sirf Roll No aur Name dikhana (Projection)\nSELECT RollNo, Name FROM Students;",
    realLifeExample: "Jaise filter lagana—pehle 'City' filter kiya (Selection) phir sirf 'Name' dikhaya (Projection).",
    diagramHint: "Table transformation diagram: Input Table -> [Operator Symbol] -> Output Table.",
    diagramUrl: "true"
  },
  {
    topic: "Joins in SQL",
    subjectCode: "BCA-401",
    explanation: "Joins multiple tables ko combine karne ke liye use hote hain jab data bikhra hua ho par unke beech koi common link (Foreign Key) ho.",
    keyPoints: [
      "Inner Join: Sirf wahi records dikhana jo dono tables mein match karte hon.",
      "Left Join: Left table ke saare records aur Right table ke sirf matching records.",
      "Right Join: Right table ke saare records aur Left table ke sirf matching records.",
      "Full Join: Dono tables ke saare records (Matching + Non-matching).",
      "Self Join: Ek hi table ko khud se join karna hierarchy ya comparison ke liye."
    ],
    sqlSyntax: "SELECT * FROM T1 INNER JOIN T2 ON T1.key = T2.key;\nSELECT * FROM T1 LEFT JOIN T2 ON T1.key = T2.key;\nSELECT * FROM T1 RIGHT JOIN T2 ON T1.key = T2.key;",
    sqlExample: "-- Students aur unke Departments ko link karna\nSELECT S.Name, D.DeptName \nFROM Students S \nINNER JOIN Departments D ON S.DeptID = D.ID;",
    realLifeExample: "Jaise 'Orders' table ko 'Customers' se join karna taaki pata chale kis customer ne kya order kiya hai.",
    diagramUrl: "true"
  },
  {
    topic: "Relationship Calculus",
    subjectCode: "BCA-401",
    explanation: "Relational Calculus ek non-procedural query language hai. Isme hum system ko ye nahi batate ki 'Kaise' dhoondna hai, balki ye batate hain ki 'Kya' (What) dhoondna hai.",
    keyPoints: [
      "TRC (Tuple Relational Calculus): Hum 'Tuples' (Rows) filter karte hain variables use karke (e.g. {t | R(t) AND t.marks > 80}).",
      "DRC (Domain Relational Calculus): Hum individual columns (Domains) ke base pe condition lagate hain.",
      "Logic Based: Yeh predicate logic aur quantifiers (Exists ∃, For All ∀) use karta hai.",
      "Non-Procedural: SQL ka 'Declarative' nature isi calculus logic pe base hai."
    ],
    realLifeExample: "Jaise aap kisi se kahein 'Mujhe Delhi ke saare students ki list chahiye' (What)—yeh calculus hai. Unhe dhoondne ke liye excel sheet kholna aur filter lagana procedural step (Algebra) hai.",
    diagramHint: "Mathematical logic notation examples box.",
    diagramUrl: "true"
  },
  {
    topic: "Expressive Power of Algebra and Calculus",
    subjectCode: "BCA-401",
    explanation: "Expressive power ka matlab hai ki ek language kitne different types ki complex queries handle kar sakti hai. Statistics aur logic ke hisab se Algebra aur Calculus dono barabar (Equivalent) hain.",
    keyPoints: [
      "Equivalence: Codd's Theorem batati hai ki koi bhi query jo Relational Algebra mein likhi ja sakti hai, wo Calculus mein bhi likhi ja sakti hai.",
      "Relational Completeness: Agar ek language Algebra ki saari basic power rakhti hai, toh use 'Relationally Complete' kaha jata hai.",
      "Formal Logic: Calculus zyada natural lagta hai human logic ke liye, jabki Algebra mathematical implementation ke liye better hai.",
      "Optimizers: Databases internally Algebra use karte hain optimization ke liye because instructions clear hoti hain."
    ],
    realLifeExample: "Jaise ek hi maths problem ko logic se solve karna vs formula se solve karna—end result same hi aayega.",
    diagramHint: "Ek cycle diagram dikhaiye jiske center mein 'Data Retrieval' ho aur charo taraf Algebra, Calculus aur SQL jude hon.",
    diagramUrl: "true"
  },
  {
    topic: "The Forms of a Basic SQL Query",
    explanation: "SQL query ka basic structure 'SELECT-FROM-WHERE' hota hai. Yeh batata hai ki kya data nikalna hai (Select), kahan se nikalna hai (From), aur kounsi condition pe (Where).",
    keyPoints: [
      "SELECT: Columns ki list jo aap dikhana chahte hain.",
      "FROM: Table ka naam jahan data save hai.",
      "WHERE: Data filter karne ke liye condition (Optional).",
      "Distinct: Duplicate rows hatane ke liye use hota hai."
    ],
    realLifeExample: "SELECT name FROM students WHERE marks > 80; (Sirf un students ke naam dikhao jinke marks 80 se zyada hain).",
    diagramHint: "A block diagram showing: [SELECT Clause] -> [FROM Clause] -> [WHERE Clause].",
    diagramUrl: "true"
  },
  {
    topic: "Nested Queries and Correlated Nested Queries",
    explanation: "Nested query (Subquery) wo query hai jo doosri query ke andar 'WHERE' clause mein hoti hai. Correlated query mein inner query outer query ke data pe depend karti hai.",
    keyPoints: [
      "Subquery: Pehle inner query chalti hai, uska result outer query use karti hai.",
      "Correlated: Inner query outer query ki har row ke liye baar-baar chalti hai.",
      "Operators: IN, EXISTS, ANY, ALL ka use hota hai values compare karne ke liye.",
      "Performance: Correlated queries thodi slow ho sakti hain kyunki wo loop ki tarah chalti hain."
    ],
    realLifeExample: "Nested: Un students ke naam batao jo 'Computer Science' department ke professors se padhte hain.",
    diagramHint: "A box-within-a-box diagram representing Inner and Outer queries.",
    diagramUrl: "true"
  },
  {
    topic: "Aggregate Operators",
    subjectCode: "BCA-401",
    explanation: "Aggregate operators multiple rows ke data ko calculate karke ek 'Single Value' (Summary Result) dete hain. Inka use group information analysis ke liye kiya jata hai.",
    keyPoints: [
      "SUM(): Total value nikalne ke liye (e.g. Total Sale).",
      "AVG(): Average (Mean) nikalne ke liye.",
      "COUNT(): Rows ginne ke liye (e.g. Total Students).",
      "MIN/MAX(): Sabse choti (Minimum) aur sabse badi (Maximum) value dhoondne ke liye.",
      "Group By: In operators ka use hum GROUP BY ke sath category-wise results ke liye karte hain."
    ],
    sqlSyntax: "SELECT COUNT(column) FROM table;\nSELECT SUM(column) FROM table WHERE condition;\nSELECT AVG(column) FROM table GROUP BY category;",
    sqlExample: "-- Har department ki average salary dhoondna\nSELECT Dept, AVG(Salary) FROM Employees GROUP BY Dept;\n\n-- Total 500 se zyada marks lane wale students count karna\nSELECT COUNT(*) FROM Students WHERE Marks > 500;",
    realLifeExample: "Jaise match ke baad 'Total Runs' (SUM) check karna, ya class mein highest marks kisne liye (MAX) dhoondna.",
    diagramHint: "Table of numbers being squeezed into a single result bubble.",
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
    sqlSyntax: "CREATE TRIGGER trigger_name\nAFTER|BEFORE INSERT|UPDATE|DELETE\nON table_name FOR EACH ROW\nEXECUTE procedure_name();",
    sqlExample: "-- Example: Update hone pe timestamp update karna\nCREATE TRIGGER update_log\nAFTER UPDATE ON Employees\nFOR EACH ROW\nBEGIN\n  INSERT INTO AuditLogs(EmpID, ChangeDate) VALUES (NEW.ID, NOW());\nEND;",
    realLifeExample: "Jaise 'Out of Stock' alert—jab product ki quantity 0 ho jaye (Event), toh system automatically 'Restock' email bhej deta hai (Action).",
    diagramHint: "Logic flow: Update Event -> Trigger Check -> Automatic Action execution.",
    diagramUrl: "true"
  },
  {
    topic: "RAID and its Levels",
    subjectCode: "BCA-401",
    explanation: "RAID multiple hard disks ko combine karke speed aur data safety badhane ki ek technique hai.",
    keyPoints: [
      "RAID 0 (Striping): High speed, par koi safety nahi.",
      "RAID 1 (Mirroring): Data ki copy doosri disk pe same to same (Safe).",
      "RAID 5 (Parity): Speed aur safety ka perfect balance.",
      "Redundancy: Agar ek disk fail bhi ho jaye, toh computer chalta rehta hai."
    ],
    realLifeExample: "Jaise important certificates ki ek copy ghar pe aur ek locker mein rakhna (RAID 1).",
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
    diagramHint: "ACID acronym box with 4 pillars icons.",
    diagramUrl: "true"
  },
  {
    topic: "KBDBMS",
    explanation: "Knowledge-Base Database architecture artificial intelligence integration logic design reasoning standards database semantics mapping levels system processing protocols logic checks levels logic.",
    keyPoints: [
      "Knowledge vs Data: Static data values storage vs dynamic rule-based fact derivation logic architecture design standards mapping protocols base logic checks.",
      "Inference Engine: Logic deduction (If-Then rules) base query results compute karna baseline facts lookup bypass through recursive reasoning logic architecture standards.",
      "Declarative Intelligence: Goals provide karna aur system logic logic pathways figure out karke results provide karne ki capability mapping AI standards hierarchy base logic.",
      "Logic Programming: Prolog/LISP programming structures database level integration systems engineering standards mapping levels logic checks levels architecture logic."
    ],
    realLifeExample: "Jaise Medical Expert System—Symptom data (Fever, Cough) store hota hai, aur rule base knowledge (If fever AND cough Then Flu) use karke system diagnosis automatically generate karta hai reasoning logic base logic.",
    diagramUrl: "true"
  },
  {
    topic: "Binomial Coefficients",
    subjectCode: "BCA-404",
    explanation: "Binomial coefficients 'nCr' notation represent karte hain jo batate hain ki 'n' items mein se 'r' items ko kitne tarikon se pick (Choose) kiya ja sakta hai.",
    keyPoints: [
      "Formula: nCr = n! / (r! * (n-r)!).",
      "Symmetry: nCr is always equal to nC(n-r) (e.g. 5C2 = 5C3).",
      "Pascal's Triangle: Coefficients ko layer by layer calculate karne ka graphic method.",
      "Algebra link: (a+b)^n expansion mein har term ke aage yahi coefficients hote hain."
    ],
    realLifeExample: "Jaise 5 players mein se 2 players select karna (5C2) team banane ke liye.",
    diagramUrl: "true"
  },
  {
    topic: "Least Square Regression lines",
    subjectCode: "BCA-404",
    explanation: "Regression lines wo best-fit seedhi lines hoti hain jo data points ke scatter plot mein sabse kam error (Residual sum) ke saath guzarti hain.",
    keyPoints: [
      "Objective: Y = a + bX form mein line banana taaki prediction asaan ho.",
      "Least Square Method: Real value aur predicted value ke distance ka square minimize karna.",
      "Slope (b): Ye batata hai ki X ke badalne se Y kitna badlega.",
      "Intercept (a): Jab X zero hai tab Y ki value kya hai."
    ],
    realLifeExample: "Jaise 'Study Hours' vs 'Test Score'—ek line banana jo predict kare ki 5 ghante padhne pe kitne marks aayenge.",
    diagramUrl: "true"
  },
  {
    topic: "Measures of central tendency",
    subjectCode: "BCA-404",
    explanation: "Central tendency ka matlab hai poore data set ki ek 'Central' ya 'Average' value dhoondna jo poore group ko represent kar sake.",
    keyPoints: [
      "Mean: Sabhi numbers ka sum divided by total count (Simple average).",
      "Median: Data ko sort karne ke baad bilkul beech wali value (Income analysis mein best).",
      "Mode: Wo value jo data mein sabse zyada baar (Frequency) aayi ho.",
      "Relationship: Symmetric distribution mein teeno barabar hote hain."
    ],
    realLifeExample: "Cricket mein 'Batting Average'—batman ke har match ke scores ko milakar ek 'Mean' nikalna.",
    diagramUrl: "true"
  },
  {
    topic: "Linear Correlation",
    subjectCode: "BCA-404",
    explanation: "Linear Correlation batata hai ki do variables (X aur Y) ke beech kitna strong aur kis direction mein relationship hai.",
    keyPoints: [
      "Positive (+1): Ek badhne pe dusra bhi badhta hai (e.g. Temperature vs Ice-cream sales).",
      "Negative (-1): Ek badhne pe dusra kam hota hai (e.g. Altitude vs Temperature).",
      "Zero Context: Jab variables ke beech koi relationship na ho.",
      "Scatter Plot: Graphic tareeka points ki 'Linearity' check karne ka."
    ],
    realLifeExample: "Jaise experience barhne se aksar salary barhti hai—ise 'Positive Correlation' kahenge.",
    diagramUrl: "true"
  },
  {
    topic: "Sampling Theory",
    subjectCode: "BCA-404",
    explanation: "Sampling Theory ka objective hai ek badi population se chota sa group (Sample) chun-na aur uske results se poori population ka andaza (Inference) lagana.",
    keyPoints: [
      "Random Sampling: Har individual ka chance equal hona sample mein aane ka.",
      "Sampling Error: Sample result aur actual population result ke beech ka difference.",
      "Standard Error: Sampling distribution ke deviation ko measure karna accuracy ke liye.",
      "Efficiency: Kam paison aur time mein bade area ka data analyze karna."
    ],
    realLifeExample: "Chawal pak gaye ya nahi, ye check karne ke liye hum poori degchi nahi khaate, sirf 2-3 dane (Sample) check karte hain.",
    diagramUrl: "true"
  },
  {
    topic: "students t-test",
    subjectCode: "BCA-404",
    explanation: "T-test tab use hota hai jab sample size chota ho (N < 30) aur population standard deviation unknown ho, do groups ke mean compare karne ke liye.",
    keyPoints: [
      "Small Sample focus: Jab data points kam hon tab precision maintain karna.",
      "Degrees of Freedom: (n-1) logic pe base tables use karna significance check karne ke liye.",
      "Comparison: Kya do alag classrooms ki average height mein real farak hai ya sirf coincidentally aya hai.",
      "Hypothesis: Null hypothesis check karna probability tables se."
    ],
    realLifeExample: "Dawai ka asar check karna—ek chote group pe research karke mean results compare karna.",
    diagramUrl: "true"
  },
  {
    topic: "Z-test",
    subjectCode: "BCA-404",
    explanation: "Z-test tab use hota hai jab data bhot bada ho (N > 30) aur population ki variance (Standard Deviation) hume pehle se pata ho.",
    keyPoints: [
      "Large Sample: Normal distribution curve follow karne ke liye huge data requirement.",
      "Standard Score: Har measurement ko population mean ke standard distance pe rakhna.",
      "Confidence Level: 95% ya 99% accuracy zones check karna.",
      "Usage: Quality control in large factories where thousands of items are produced."
    ],
    realLifeExample: "Ek factory jahan 10,000 bulbs bane ho, wahan sample check karke 'Large Sample' logic se Z-test lagana.",
    diagramUrl: "true"
  },
  {
    topic: "Frequency distributions",
    subjectCode: "BCA-404",
    explanation: "Frequency distribution data ko classes ya categories mein organize karta hai taaki ye pata chal sake ki kaunsi value kitni baar repeat ho rahi hai.",
    keyPoints: [
      "Class Intervals: Data ko groups mein bantna (e.g. 0-10, 10-20 marks).",
      "Tally Marks: Counting ka traditional visual tareeka.",
      "Cumulative Frequency: Pichli frequencies ko add karte jana totals check karne ke liye.",
      "Visuals: Histograms aur Ogives banane ka primary base."
    ],
    realLifeExample: "Voting count—kis candidate ko kitne votes (Frequency) mile, uska chart banana.",
    diagramUrl: "true"
  },
  {
    topic: "Repetition and Constrained Repetition",
    subjectCode: "BCA-404",
    explanation: "Combinatorics mein calculation badal jati hai agar same items repeat ho rahe hon ya unpe koi restriction (Constraint) lagi ho.",
    keyPoints: [
      "Permutation with repetition: n^r logic (Jab order matter kare aur repeat allow ho).",
      "Constraints: Jaise 'Vowels hamesha saath hon' ya 'Numbers 5 se start ho'.",
      "Indistinguishable objects: Jab 3 'A' letters hon toh unka arrangement factorial se divide hota hai.",
      "Logical filtering: Possible cases mein se invalid cases minus karna."
    ],
    realLifeExample: "Password banana—agar repetition allowed hai toh options zyada hain, agar nahi hai toh options kam hote hain.",
    diagramUrl: "true"
  },
  {
    topic: "test of Hypotheses and significance",
    subjectCode: "BCA-404",
    explanation: "Hypothesis testing ek statistical process hai jisme hum decide karte hain ki kya research ka result real hai ya fir sirf ek coincidence (Chance).",
    keyPoints: [
      "Null Hypothesis (H0): Wo state jahan hum maante hain ki koi change ya effect nahi hua.",
      "Alternative Hypothesis (H1): Wo state jo research prove karna chahti hai.",
      "Level of Significance (α): Error hone ka allowed risk (usually 5%).",
      "P-value: Wo probability jo batati hai ki results kitne significant hain."
    ],
    realLifeExample: "Ek nayi energy drink test karna—H0 hai ki 'Koi energy increase nahi hui', H1 hai ki 'Energy increase hui'.",
    diagramUrl: "true"
  },
  {
    topic: "degree of freedom",
    subjectCode: "BCA-404",
    explanation: "Degree of freedom batata hai ki ek calculation mein kitni values 'Free' hain badalne ke liye bina result ko affect kiye.",
    keyPoints: [
      "Sample Constraint: Agar hume average pata hai, toh aakhri value 'Fixed' ho jati hai.",
      "Formula: Distribution tests mein usually (n-1) ya (row-1)*(col-1) use hota hai.",
      "Importance: Iska use T-test aur Chi-square tables mein accurate results dhoondne ke liye hota.",
      "Logical bound: Ye data ke randomness ko limit karta hai parameters ke basis pe."
    ],
    realLifeExample: "Jaise agar aapko 7 din alag kapde pehne hain aur 6 kapde choose kar liye, toh 7ve din ke liye koi 'Freedom' nahi bachi.",
    diagramUrl: "true"
  },
  {
    topic: "small and large sampling",
    subjectCode: "BCA-404",
    explanation: "Statistics mein calculation methods badal jate hain based on data volume. Обычно 30 items ka count boundary ki tarah use hota hai.",
    keyPoints: [
      "Small Sample (n < 30): T-test best hota hai kyunki standard error zyada hone ka risk hota hai.",
      "Large Sample (n > 30): Z-test aur Normal distribution logic zyada accurate mana jata hai.",
      "Economy: Small samples saste hote hain par research bias ka risk hota hai.",
      "Reliability: Large samples population ko zyada accurately represent karte hain."
    ],
    realLifeExample: "Ek small group interview (Small Sample) vs poore desh ka census (Large Sample).",
    diagramUrl: "true"
  },
  {
    topic: "Flip-Flops (SR, JK, D, T)",
    subjectCode: "BCA-402",
    explanation: "Flip-flops digital electronics ke basic memory elements hain jo 1-bit data (0 ya 1) store kar sakte hain. Inke alag-alag logic configurations stability aur control provide karte hain.",
    keyPoints: [
      "SR (Set-Reset): Basic flip-flop par isme 1,1 state forbidden hoti hai (Invalid).",
      "JK: SR ka improved version jisme 1,1 pe 'Toggle' (Switch) hota hai.",
      "D (Data): Input ko delay ke baad output pe bhejta hai (Buffer memory).",
      "T (Toggle): Input 1 hone pe state badalta hai, 0 hone pe wahi rehta hai."
    ],
    realLifeExample: "Jaise ek switch board—aapne ON kiya toh light tab tak ON rahegi jab tak aap RESET switch nahi dabate.",
    diagramUrl: "true"
  },
  {
    topic: "Circular Queues",
    subjectCode: "BCA-403",
    explanation: "Circular Queue mein standard queue ki 'Memory Waste' problem fix hoti hai. Isme Rear pointer aakhri position ke baad wapas pehli khali position pe aa jata hai.",
    keyPoints: [
      "No Waste: Agar aage se elements delete huye hain, toh back wala space reuse ho sakta hai.",
      "Modulo Operator: Pointers update karne ke liye '(rear + 1) % size' logic use hota hai.",
      "Fixed Size: Memory size fixed rehti hai par usability improved hoti hai.",
      "Traffic Control: Network buffers aur operating system scheduling mein best hai."
    ],
    realLifeExample: "Jaise ek musical round table—jiski seat khali hogi wahan naya person (data) baith sakta hai circle mein.",
    diagramUrl: "true"
  },
  {
    topic: "Permutation and Combination",
    subjectCode: "BCA-404",
    explanation: "Permutation ka matlab hai arrangements (jahan Order matter karta hai) aur Combination ka matlab hai selection (jahan sirf Grouping matter karti hai).",
    keyPoints: [
      "Permutation (nPr): n! / (n-r)!. Order is critical (e.g. Password).",
      "Combination (nCr): n! / (r! * (n-r)!). Order ignore hota hai (e.g. Team selection).",
      "Fundamental Principle: Counting ke liye addition aur multiplication rules use hote hain.",
      "Logical Link: nPr hamesha nCr se bada ya barabar hota hai."
    ],
    realLifeExample: "Password '123' vs '321' (Permutation) - ye alag hain. Salad mein 'Gajar aur Tamatar' vs 'Tamatar aur Gajar' (Combination) - ye same hain.",
    diagramUrl: "true"
  },
  {
    topic: "Introduction to Monte Carlo method",
    subjectCode: "BCA-404",
    explanation: "Monte Carlo method simulations use karta hai probability distribution ke variables predict karne ke liye. Ye randomness ko system behavior model karne ka tool banata hai.",
    keyPoints: [
      "Random Trials: Thousands of random events simulate karna computer algorithm se.",
      "Numerical Solution: Un sawalon ka jawab nikalna jinhe manually solve nahi kiya ja sakta.",
      "Error Margin: Jitne zyada experiments honge, accuracy utni high hogi.",
      "Finance/Gaming: Stock market volatility aur complex casino games analyze karne mein use hota."
    ],
    realLifeExample: "Jaise ye guess karna ki ek stadium mein kitne log umbrellas layenge, unke random individual behavior ko computer mein simulate karke.",
    diagramUrl: "true"
  }
];


export function getDiagramForTopic(topicTitle: string): string | null {
  const note = getNoteForTopic(topicTitle);
  return note?.diagramUrl || null;
}

export function getNoteForTopic(topicTitle: string, subjectCode?: string): Note | null {
  const clean = (s: string) => s.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  const titleClean = clean(topicTitle);

  // 1. Try to find with subject code first if provided
  let note: Note | undefined;
  
  if (subjectCode) {
    note = hinglishNotes.find(n => 
      (n.subjectCode === subjectCode) && 
      (n.topic === topicTitle || clean(n.topic) === titleClean)
    );
  }

  // 2. Exact match (case insensitive) fallback if no subject match or no subject provided
  if (!note) {
    note = hinglishNotes.find(n => n.topic === topicTitle || clean(n.topic) === titleClean);
  }
  
  // 3. Fallback for missing notes - provide helpful feedback instead of guessing wrongly
  if (!note) {
    return {
      topic: topicTitle,
      explanation: "Is specific topic ke liye Hinglish notes abhi system mein generate ho rahe hain. Hamari team clarity aur accuracy provide karne ke liye content update kar rahi hai.",
      keyPoints: [
        "Content synchronization in progress",
        "Refer to academic textbooks for in-depth theory for now",
        "Higher quality simplified notes updating within 24-48 hours"
      ],
      realLifeExample: "Jald hi update hoga—accuracy hamari priority hai!",
    };
  }
  
  // High-performance fallback for non-migrated notes
  if (!note.explanation) {
    return {
      topic: note.topic,
      explanation: note.short || "Is topic ke liye simplified notes library mein register ho rahe hain.",
      keyPoints: note.bulletin || ["Content synchronization in progress..."],
      realLifeExample: "Update underway...",
      diagramUrl: note.diagramUrl
    };
  }

  return note;
}
