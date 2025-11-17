<h2>Question and Answer</h2>
<br />
<br />


<strong> 
<i> 1. What are some differences between interfaces and types in TypeScript?</i>
</strong> 
   <br />
   Ans:- 
   Interface is mainly used for defining object shapes. A type can represent unions, primitives, tuples, and more - not just objects. An interface supports declaration merging, but a type does not. An interface uses extends for inheritance, a type uses intersection (&). Generally speaking, types are more flexible while interfaces are more structured toward oop.
 <br />
<strong> 
<i>2. What is the use of the keyof keyword in TypeScript? Provide an example.
</i>
</strong> 
   <br />
   Ans:- 
   *keyof creates a union type of all keys from an object type. 
   *It helps with type-safe property access. 
   *It is commonly used with generics for reusable and safe utility functions.

 <br />
<strong> 
<i>3. Explain the difference between any, unknown, and never types in TypeScript.</i>
</strong> 
   <br />
    Ans:- 
    <h4> any</h2> 
    *Anything goes. 
    *Type checking is not performed. 
    *The monst safe option. 
    <h4>unknown</h2> 
    *Anything goes, but you need to perform type checking before you can use the value. 
    *Safer alternative to any. 
    <h4>never</h2>  
    *A value that will never occur - for example an endless loop or an always thrown error. 
    *Used for functions that never return 

 <br />
<strong> 
<i>4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.</i>
</strong> 
    <br />
    Ans:-  
    Enums are used to define a set of named constant values. This enhances readability and maintainability. They can either be numeric or string-based.

    Example :-
    enum Role {
    Admin = "ADMIN,
    User = "USER",
    Guest = "GUEST"
    }
 <br />
<strong> 
<i>5. Provide an example of using union and intersection types in TypeScript.
</i>
</strong> 
    <br />
    Ans:-  
    Union Type (|) allows a value to be one of several types. Intersection Type (&) combines multiple types into one.