
export interface Topic {
  title: string;
  subtopics?: string[];
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  color: string;
  units: Unit[];
}

export const syllabusData: Subject[] = [
  {
    id: "rdbms",
    code: "BCA-401",
    title: "Relational Data Base Management System",
    color: "#f7c948", // Gold
    units: [
      {
        id: "rdbms-u1",
        title: "Introduction to Database Systems",
        topics: [
          { title: "Overview and History of DBMS" },
          { title: "File System vs DBMS" },
          { title: "Advantage of DBMS" },
          { title: "Describing and Storing Data in a DBMS" },
          { title: "Queries in DBMS" },
          { title: "Transaction management and Structure of a DBMS" },
          { title: "Components of DBMS" },
          {
            title: "The 3 level architecture of DBMS",
            subtopics: ["Hierarchical", "Network", "Relational Model"]
          },
          { title: "Distributed Database" },
          { title: "KBDBMS" },
          { title: "OODBMS (Basic Concepts)" }
        ]
      },
      {
        id: "rdbms-u2",
        title: "Entity Relationship Model",
        topics: [
          { title: "Overview of Data Design Entities" },
          { title: "Attributes and Entity Sets" },
          { title: "Relationship and Relationship Sets" },
          {
            title: "Features of the ER Model",
            subtopics: ["Key Constraints", "Participation Constraints", "Weak Entities", "Class Hierarchies", "Aggregation"]
          },
          {
            title: "Conceptual Data Base Design with ER Model",
            subtopics: ["Entity vs Attribute", "Entity vs Relationship", "Binary vs Ternary Relationship", "Aggregation vs Ternary Relationship"]
          },
          { title: "Conceptual Design for a Large Enterprise" }
        ]
      },
      {
        id: "rdbms-u3",
        title: "Relationship Algebra and Calculus",
        topics: [
          {
            title: "Relationship Algebra",
            subtopics: ["Selection and Projection", "Set Operations", "Renaming", "Joint", "Division"]
          },
          { title: "Relation Calculus" },
          { title: "Expressive Power of Algebra and Calculus" }
        ]
      },
      {
        id: "rdbms-u4",
        title: "SQL Queries Programming and Triggers",
        topics: [
          { title: "The Forms of a Basic SQL Query" },
          { title: "Union, Intersection and Exception" },
          { title: "Nested Queries" },
          { title: "Correlated Nested Queries" },
          { title: "Set-Comparison Operations" },
          { title: "Aggregate Operators" },
          { title: "Null Values and Embedded SQL" },
          { title: "Dynamic SQL" },
          { title: "ODBC and JDBC" },
          { title: "Triggers and Active Databases" }
        ]
      },
      {
        id: "rdbms-u5",
        title: "Schema Refinement and Normal Forms",
        topics: [
          { title: "Introductions to Schema Refinement" },
          { title: "Functional Dependencies" },
          { title: "Boyce-Codd Normal Forms" },
          { title: "Third Normal Form" },
          { title: "Normalization Decomposition into BCNF Decomposition into 3-NF" }
        ]
      }
    ]
  },
  {
    id: "digital",
    code: "BCA-402",
    title: "Digital Electronics, Computer System Architecture, and Organisation",
    color: "#4fc3f7", // Blue
    units: [
      {
        id: "de-u1",
        title: "Introduction to Digital Circuits",
        topics: [
          { title: "The Basic Computer" },
          { title: "The Von-Neumann Architecture" },
          { title: "Instruction Execution: An Example" },
          { title: "Instruction Cycle Interrupts" },
          { title: "Interrupts and Instruction Cycle" },
          {
            title: "Computers: Then and Now",
            subtopics: ["The Beginning", "First Generation", "Second Generation", "Third Generation", "Later Generations"]
          }
        ]
      },
      {
        id: "de-u2",
        title: "The Data Representation",
        topics: [
          { title: "Data Representation" },
          { title: "Number Systems" },
          { title: "Decimal Representation in Computers" },
          { title: "Alphanumeric Representation" },
          { title: "Data Representation for Computation" },
          { title: "Error Detection and Correction Codes" }
        ]
      },
      {
        id: "de-u3",
        title: "Principles of Logic Circuits I",
        topics: [
          { title: "Logic Gates" },
          { title: "Logic Circuits" },
          { title: "Combinational Circuits" },
          { title: "Canonical and Standard Forms" },
          { title: "Minimization of Gates" },
          { title: "Design of Combinational Circuits" },
          {
            title: "Examples of Logic Combinational Circuits",
            subtopics: ["Adders", "Decoders", "Multiplexer", "Encoder", "Programmable Logic Array", "Read Only Memory ROM"]
          }
        ]
      },
      {
        id: "de-u4",
        title: "Principles of Logic Circuits II",
        topics: [
          { title: "Sequential Circuits: The Definition" },
          {
            title: "Flip Flops",
            subtopics: ["Basic Flip-Flops", "Excitation Tables", "Master Slave Flip Flops", "Edge Triggered Flip-flops"]
          },
          { title: "Sequential Circuit Design" },
          { title: "Examples of Sequential Circuits" },
          { title: "Registers" },
          {
            title: "Counters",
            subtopics: ["Asynchronous Counters", "Synchronous Counters"]
          },
          { title: "RAM" },
          { title: "Design of a Sample Counter" }
        ]
      },
      {
        id: "de-u5",
        title: "Basic Computer Organisation: The Memory System",
        topics: [
          {
            title: "The Memory Hierarchy",
            subtopics: ["RAM", "ROM", "DRAM", "Flash Memory", "Secondary Memory", "Hard Disk Drives", "Optical Memories", "CCDs", "Bubble Memories"]
          },
          { title: "RAID and its Levels" },
          {
            title: "High Speed Memories",
            subtopics: ["Cache Memory", "Cache Organisation", "Memory Interleaving", "Associative Memory"]
          }
        ]
      },
      {
        id: "de-u6",
        title: "The Input/Output System",
        topics: [
          { title: "Input / Output Devices or External or Peripheral Devices" },
          { title: "The Input Output Interface" },
          { title: "The Device Controllers and its Structure" },
          { title: "Device Drivers" },
          {
            title: "Input Output Techniques",
            subtopics: ["Programmed Input / Output", "Interrupt-Driven Input / Output", "Interrupt-Processing", "DMA (Direct Memory Access)", "Input Output Processors", "External Communication Interfaces"]
          }
        ]
      },
      {
        id: "de-u7",
        title: "The Central Processing Unit",
        topics: [
          {
            title: "Instruction Set Architecture",
            subtopics: ["Characteristics", "Design Considerations", "Operand Data Types", "Types of Instructions", "Number of Addresses", "Addressing Schemes"]
          },
          {
            title: "Addressing Modes",
            subtopics: ["Immediate", "Direct", "Indirect", "Register", "Register Indirect", "Indexed", "Base Register", "Relative", "Stack"]
          },
          { title: "Instruction Set and Format Design Issues" }
        ]
      },
      {
        id: "de-u8",
        title: "Registers, Micro-Operations and Instruction Execution",
        topics: [
          { title: "Basic CPU Structure" },
          {
            title: "Register Organization",
            subtopics: ["Programmer Visible", "Status and Control", "General Registers"]
          },
          {
            title: "Micro-operation Concepts",
            subtopics: ["Register Transfer", "Arithmetic", "Logic", "Shift"]
          },
          { title: "Instruction Execution and Microoperations" },
          { title: "Instruction Pipelining" }
        ]
      },
      {
        id: "de-u9",
        title: "ALU Organisation",
        topics: [
          { title: "ALU Organisation" },
          { title: "A Simple ALU Organization" },
          { title: "A Sample ALU Design" },
          { title: "Arithmetic Processors" }
        ]
      },
      {
        id: "de-u10",
        title: "The Control Unit",
        topics: [
          { title: "The Control Unit" },
          { title: "The Hardwired Control" },
          { title: "Wilkes Control" },
          {
            title: "The MicroProgrammed Control",
            subtopics: ["Micro-Instructions", "Control Memory Organisation", "Micro-Instruction Formats", "Execution of Micro-Program"]
          }
        ]
      }
    ]
  },
  {
    id: "ds",
    code: "BCA-403",
    title: "File & Data Structure",
    color: "#81c784", // Green
    units: [
      {
        id: "ds-u1",
        title: "Introduction and Algorithm Analysis",
        topics: [
          { title: "Introduction to Data Structure and Application of Data Structure" },
          {
            title: "Algorithms and Analysis of Algorithms",
            subtopics: ["Definition", "Structure and Properties", "Development", "Data Structures and Algorithms", "Classification", "Efficiency", "Apriory Analysis", "Asymptotic Notations", "Time Complexity (O Notation)", "Polynomial Vs Exponential", "Case Complexities", "Recursive Programs"]
          },
          { title: "Open source software development process" }
        ]
      },
      {
        id: "ds-u2",
        title: "Linked List, Linked Stacks and Linked Queues",
        topics: [
          { title: "Singly Linked Lists" },
          { title: "Circularly Linked Lists" },
          { title: "Doubly Linked Lists" },
          { title: "Multiply Linked Lists" },
          { title: "Applications of Linked Lists" },
          { title: "Introduction to Linked Stack and Linked Queues" },
          { title: "Operations on Linked Stacks and Linked Queues" },
          { title: "Dynamic Memory Management and Linked Stack" },
          { title: "Implementations of Linked Representations" },
          { title: "Applications of Linked Stacks and Linked Queues" }
        ]
      },
      {
        id: "ds-u3",
        title: "Arrays, Stacks and Queues",
        topics: [
          { title: "Array Operations" },
          { title: "Number of Elements in an Array" },
          { title: "Representation of Arrays in Memory" },
          { title: "Applications of Array" },
          { title: "Stack-Introduction" },
          { title: "Stack Operations" },
          { title: "Applications of Stack" },
          { title: "Queues-Introduction" },
          { title: "Operations on Queues" },
          { title: "Circular Queues" },
          { title: "Other Types of Queues" },
          { title: "Applications of Queues" },
          { title: "Polynomials & Sparse matrix" }
        ]
      },
      {
        id: "ds-u4",
        title: "Trees",
        topics: [
          { title: "Trees: Definition and Basic Terminologies" },
          { title: "Representation of Trees" },
          { title: "Binary Trees: Basic Terminologies and Types" },
          { title: "Representation of Binary Trees" },
          { title: "Binary Tree Traversals" },
          { title: "Threaded Binary Trees" },
          { title: "Applications" },
          {
            title: "BST & AVL Trees",
            subtopics: ["Definition and Operations", "AVL Trees: Definition and Operations"]
          },
          {
            title: "B Trees",
            subtopics: ["m-way search trees", "B Trees: Definition and Operations"]
          }
        ]
      },
      {
        id: "ds-u5",
        title: "Graphs",
        topics: [
          { title: "Graphs: Introduction" },
          { title: "Definitions and Basic Terminologies" },
          { title: "Representations of Graphs" },
          { title: "Graph Traversals" },
          { title: "Single-Source Shortest-Path Problem" },
          { title: "Minimum Cost Spanning Trees" }
        ]
      },
      {
        id: "ds-u6",
        title: "Sorting and Searching",
        topics: [
          { title: "Understanding Internal and External Sorting" },
          {
            title: "Internal Sorting",
            subtopics: ["Insertion Sort", "Bubble Sort", "shell sort", "Quick Sort", "2-way Merge Sot", "Heap Sort", "Sorting on Several Keys"]
          },
          {
            title: "Searching",
            subtopics: ["Introduction", "Binary Search", "Transpose Sequential Search", "Interpolation Search"]
          }
        ]
      }
    ]
  },
  {
    id: "stats",
    code: "BCA-404",
    title: "Introduction to Statistics",
    color: "#f48fb1", // Pink
    units: [
      {
        id: "stats-u1",
        title: "UNIT-I COMBINATORICS",
        topics: [
          { title: "Permutation and Combination" },
          { title: "Repetition and Constrained Repetition" },
          { title: "Binomial Coefficients" },
          { title: "Binomial Theorem" }
        ]
      },
      {
        id: "stats-u2",
        title: "UNIT-II Distributions & Measures",
        topics: [
          { title: "Frequency distributions" },
          { title: "Histograms and frequency polygons" },
          {
            title: "Measures of central tendency",
            subtopics: ["Mean", "Mode", "Median"]
          },
          { title: "Dispersion" },
          { title: "Mean deviation and standard deviation" },
          { title: "Moments, Skewness, kurtosis" }
        ]
      },
      {
        id: "stats-u3",
        title: "UNIT–III Probability Theory",
        topics: [
          { title: "Elementary probability theory: Definition, conditional probability, Probability distribution, mathematical expectation" },
          {
            title: "Theoretical distribution",
            subtopics: ["Binomial", "poisson", "Normal distribution", "Relation between these distributions"]
          }
        ]
      },
      {
        id: "stats-u4",
        title: "UNIT-IV Correlation and Regression",
        topics: [
          { title: "Linear Correlation" },
          { title: "Measure of Correlation" },
          { title: "Least Square Regression lines" },
          {
            title: "Curve fitting",
            subtopics: ["Method of least square", "least square line", "least squares Parabola"]
          },
          {
            title: "chi-square test",
            subtopics: ["definition of chi-square", "signification test", "contingency test", "coefficient of contingency"]
          }
        ]
      },
      {
        id: "stats-u5",
        title: "UNIT-V Sampling Theory",
        topics: [
          { title: "Basic of sampling theory" },
          { title: "Sample mean and variance" },
          { title: "students t-test" },
          { title: "test of Hypotheses and significance" },
          { title: "degree of freedom" },
          { title: "Z-test" },
          { title: "small and large sampling" },
          { title: "Introduction to Monte Carlo method" }
        ]
      }
    ]
  }
];
