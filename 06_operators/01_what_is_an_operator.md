# What is an Operator?

For example 4 + 5 is equal to 9.

<br>

Here 4 and 5 are **operand**, while **+** is called **operator**

<br>

Javascript support the following types of operators

1. Arithmetic operator
2. Comparison operator
3. Logical operator
4. Conditional (or ternary) operator
5. Assignment operator

### Arithmetic Operator

Assume variable A holds 10 and variable B holds 20, then:


| S. No. | Operator and Description |
| ------ | ------------------------ |
| 1 | + (Addition) Adds two operands. Ex: A + B will give 30 |
| 2 | - (Subtraction) Subtracts the second operand from the first. Ex: A - B will give -10 |
| 3 | * (Multiplication) Multiply both operands. Ex: A * B will give 200 |
| 4 | / (Division) Divide the numerator by the denominator. Ex: B / A will give 2 |
| 5 | A % (Modulus) Outputs the remainder of an integer division. Ex: B % A will give 0 |
| 6 | ++ (Increment) Increases an integer value by one. Ex: A++ will give 11 |
| 7 | -- (Decrement) Decreases an integer value by one. Ex: A-- will give 9 |

### Comparison Operators

Assume variable A holds 10 and variable B holds 20, then:


| S. No. | Operator and Description |
| ------ | ------------------------ |
| 1 | == (Equal) Checks if the value of two operands are equal or not, if yes, then the condition becomes true. Ex: (A == B) is not true. |
| 2 | != (Not Equal) Checks if the value of two operands are equal or not. Ex: (A != B) is true. |
| 3 | > (Greater than) Checks if the value of the left operand is greater than the value of the right operand. Ex: (A > B) is not true. |
| 4 | < (Less than) Checks if the value of the left operand is less than the value of the right operand. Ex: (A < B) is true. |
| 5 | >= (Greater than or Equal to) Checks if the value of the left operand is greater than or equal to the value of the right operand. Ex: (A >= B) is not true. |
| 6 | <= (Less than or Equal to) Checks if the value of the left operand is less than or equal to the value of the right operand. Ex: (A <= B) is true. |

### Logical Operators

Assume variable A holds 10 and variable B holds 20, then:


| S. No. | Operator and Description |
| ------ | ------------------------ |
| 1 | && (Logical AND) If both the operands are non-zero, then the condition becomes true. Ex: (A && B) is true. |
| 2 | || (Logical OR) If any of the two operands are non-zero, then the condition becomes true. Ex: (A || B) is true. |
| 3 | ! (Logical NOT) Reverses the logical state of its operand. If a condition is true, then thenLogical NOT operator will make it false. Ex: ! (A && B) is false. |

### Bitwise Operators

Assume variable A holds 2 and variable B holds 3, then:

| S. No. | Operator and Description |
| ------ | ------------------------ |
| 1 | & (Bitwise AND) It performs a Boolean AND operation on each bit of its integer arguments. Ex: (A & B) is 2. |
| 2 | | (BitWise OR) It performs a Boolean OR operation on each bit of its integer arguments. Ex: (A | B) is 3. |
| 3 | ^ (Bitwise XOR) It performs a Boolean exclusive OR operation on each bit of its integer arguments. Exclusive OR means that either operand one is true or operand two is true, but not both. Ex: (A ^ B) is 1. |
| 4 | ~ (Bitwise Not) It is a unary operator and operates by reversing all the bits in the operand. Ex: (~B) is -4. |
| 5 | << (Left Shift) It moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros. Shifting a value left by one position is equivalent to multiplying it by 2, shifting two positions is equivalent to multiplying by 4, and so on. Ex: (A << 1) is 4. |
| 6 | >> (Right Shift) Binary Right Shift Operator. The left operand’s value is moved right by the number of bits specified by the right operand. Ex: (A >> 1) is 1. |
| 7 | >>> (Right shift with Zero) This operator is just like the >> operator, except that the bits shifted in on the left are always zero. Ex: (A >>> 1) is 1. |



