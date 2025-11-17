<h2>Question and Answer</h2>
<br />
<br />
<br />

1. What are some differences between interfaces and types in TypeScript?
   Ans:- 
   Interface is mainly used for defining object shapes. A type can represent unions, primitives, tuples, and more - not just objects. An interface supports declaration merging, but a type does not. An interface uses extends for inheritance, a type uses intersection (&). Generally speaking, types are more flexible while interfaces are more structured toward oop.

2. What is the use of the keyof keyword in TypeScript? Provide an example.
   Ans:- 
   *keyof creates a union type of all keys from an object type. 
   *It helps with type-safe property access. 
   *It is commonly used with generics for reusable and safe utility functions.

3. Explain the difference between any, unknown, and never types in TypeScript.
    Ans:- 
    # any 
    *Anything goes. 
    *Type checking is not performed. 
    *The monst safe option. 
    # unknown 
    *Anything goes, but you need to perform type checking before you can use the value. 
    *Safer alternative to any. 
    # never 
    *A value that will never occur - for example an endless loop or an always thrown error. 
    *Used for functions that never return 

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
    Ans:-  
    Enums are used to define a set of named constant values. This enhances readability and maintainability. They can either be numeric or string-based.

    Example :-
    enum Role {
    Admin = "ADMIN,
    User = "USER",
    Guest = "GUEST"
    }

5. Provide an example of using union and intersection types in TypeScript.
    Ans:-  
    