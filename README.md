# javascript-datastruct-algorithms

English &nbsp; | &nbsp; [Chinese](./README.zh-CN.md)

```txt
Programming = Data Structures + Algorithms

```

## Data Structures

Basic Concepts:
- Data: A collection of symbols that describe objective things, which can be input, recognized, operated on, and processed by computers.
- Data Element: The basic unit that makes up data and has a certain meaning, composed of several **data items**.
- Data Object: A collection of data elements with the same properties.

> Data Structure: The way data is stored and organized in a computer, where there exists one or more specific relationships among the data.

- Logical Structure: The relationships among data elements in a data object.

  - Set Structure: Data elements have no other relationships besides belonging to the same set.
  - Linear Structure: One-to-one.
  - Tree Structure: One-to-many hierarchical relationships.
  - Graph Structure: Many-to-many.

- Physical Structure: The storage form of the logical structure of data in a computer (regarding memory).
  - Sequential Storage: Data elements are stored in contiguous memory units, where the logical and physical relationships of the data are consistent.
  - Linked Storage: Data elements are stored in arbitrary memory units, which can be contiguous or non-contiguous.

Data Type: A collection of values with the same properties and a set of operations defined on this collection.

> Abstract Data Type (ADT): Refers to a **mathematical model** and a set of **operations** defined on that model.

### Linear List

```txt
ADT List
DATA
  {e1, e2, ..., en}
OPERATION


ENDADT

```

#### [Array](./datastruct/list/array/README.md)

#### [Linked List](./datastruct/list/linkedlist/README.md)

#### [Stack](./datastruct/list/stack/README.md)

#### [Queue](./datastruct/list/queue/README.md)

### Hash Table

#### [Set]()

#### [Dict]()

### Tree

```txt
ADT Tree
DATA
  
OPERATION


ENDADT

```

### Heap

### Graph

```txt
ADT Graph
DATA
 
OPERATION


ENDADT

```

## Algorithms

Algorithm: A description of the steps to solve a specific problem, represented in a computer as a finite sequence of instructions, where each instruction represents one or more operations.

Basic Characteristics of Algorithms:
- Input
- Output
- Finiteness
- Definiteness
- Feasibility

Requirements for Algorithm Design: Correctness, readability, robustness, high time efficiency, and low storage requirements.

> An algorithm program should produce results that meet specifications for illegal input data.

Methods for Measuring Algorithm Efficiency:

- Post-Statistical: Unscientific and inaccurate.
- Pre-Analysis Estimation: The running time of a program depends on the **quality of the algorithm** and the **input size of the problem**.

Time Complexity of Algorithms: When analyzing an algorithm, the total number of executions T(n) is a function of the problem size n, and we analyze how T(n) changes with n to determine the order of T(n).

Deriving Big O Notation:

1. Replace all additive constants in the running time with the constant 1.
2. In the modified running time function, keep only the highest-order term.
3. If the highest-order term exists and is not 1, remove the constants multiplied with this term.

Common Time Complexities:

|  Order  | Informal Term  |
| ----- |  -----    |
| O(1)  | Constant Order    |
| O(n)  | Linear Order    |
| O(n^2)  | Quadratic Order    |
| O(logn)  | Logarithmic Order    |
| O(nlogn)  | nlogn Order    |
| O(n^3)  | Cubic Order    |
| O(2^n)  | Exponential Order    |

Order of Time Complexity:

```txt
O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)

```

> Average Time Complexity vs. Worst Time Complexity

### KMP

### Divide and Conquer

### Backtracking

### Depth-First Search

### Greedy

### Recursion

### Sorting

### Searching

### Dynamic Programming
