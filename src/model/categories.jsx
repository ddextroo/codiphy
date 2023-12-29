import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

const Categories = {
  JavaScript: {
    icon: <RiJavascriptFill size={25} opacity={0.7} color="red" />,
    topics: [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Operators and Expressions",
      "Control Flow (if statements, switch statements, loops)",
      "Functions and Scopes",
      "Arrays and Objects",
      "DOM Manipulation",
      "Events and Event Handling",
      "Asynchronous JavaScript (Callbacks, Promises)",
      "AJAX and Fetch API",
      "ES6 Features (Arrow Functions, Template Literals, Destructuring, etc.)",
      "Closures and Callbacks",
      "Error Handling",
    ],
  },
  CPlusPlus: {
    icon: <SiCplusplus size={25} opacity={0.7} color="red" />,
    topics: [
      "Introduction to C++",
      "Variables and Data Types",
      "Operators and Expressions",
      "Control Structures (if statements, switch statements, loops)",
      "Functions and Procedures",
      "Pointers and References",
      "Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism)",
      "Standard Template Library (STL)",
      "Memory Management (Dynamic Memory Allocation, Deallocation)",
      "File Handling",
      "Exception Handling",
      "Templates and Generic Programming",
      "Standard Template Library (STL) Containers and Algorithms",
    ],
  },
  Java: {
    icon: <LiaJava size={25} opacity={0.7} color="red" />,
    topics: [
      "Introduction to Java",
      "Variables and Data Types",
      "Control Flow (if statements, switch statements, loops)",
      "Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism)",
      "Exception Handling",
      "Collections Framework (Lists, Sets, Maps)",
      "Multithreading",
      "File I/O and Serialization",
      "JDBC (Java Database Connectivity)",
      "GUI Programming (Swing or JavaFX)",
      "Networking in Java",
      "Annotations and Reflection",
      "Lambda Expressions",
    ],
  },
  Python: {
    icon: <FaPython size={25} opacity={0.7} color="red" />,
    topics: [
      "Introduction to Python",
      "Variables and Data Types",
      "Control Flow (if statements, loops)",
      "Functions and Modules",
      "Data Structures (Lists, Tuples, Dictionaries, Sets)",
      "File Handling",
      "Exception Handling",
      "Object-Oriented Programming in Python",
      "Regular Expressions",
      "Decorators and Generators",
      "Working with APIs",
      "Web Scraping",
      "Testing in Python (e.g., unittest)",
    ],
  },
  "CSharp": {
    icon: <SiCsharp size={25} opacity={0.7} color="red" />,
    topics: [
      "Introduction to C#",
      "Variables and Data Types",
      "Control Structures (if statements, switch statements, loops)",
      "Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism)",
      "Exception Handling",
      "LINQ (Language-Integrated Query)",
      "Asynchronous Programming (async/await)",
      "Windows Forms or WPF for GUI (Graphical User Interface)",
      "ASP.NET for Web Development",
      "Entity Framework (Database Access)",
      "Serialization and Deserialization",
      "Delegates and Events",
      "Dependency Injection",
    ],
  },
};

export default Categories;
