
# Programmatic SQL
In our lecture today, we explored the concept of logical model (diagram) for representing tables (relations) and their relationships using primary and foreign keys. We are using PostgreSQL as a Relational Database Management System (RDBMS). 
We looked at how to connect using the built-in psql client and explored databases and specifically the tables that conform the music databases.

<img src="https://www.w3resource.com/w3r_images/sql-works-with-rdbms.gif" height="60%" width="60%" />

Databases are part of the Persistence Layer in Web Applications and in most cases the datasource for Models in the MVC paradigm.

<img src="https://helloacm.com/wp-content/uploads/2017/01/model-view-controller-mvc-explained.jpg" height="60%" width="60%" />

# SQL Injection 
We mentioned SQL Injection as a way of service attack that we find in the web world. The problem with SQL injection is, that a user input is used as part of the SQL statement. By using prepared statements we can force user input to be handled as the content of a parameter (and not as a part of the SQL command). Additionally, it is recommended to sanitize (clear of possible SQL statements) any user input that is used to query databases.

<img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/forums/uploadfile/suthish_nair/07082016051954AM/Injection.PNG" />

# Creating a Data Handler for Music Database
In this exercise we programmatically connected through the 'pg' module/client driver and ran the SQL queries that we had run against the database directly. We incrementally turned isolated code into functions that achieved the following:

1. Constructed SQL from within JavaScript and ran it against a PostgreSQL database.
2. Worked with the async nature of the execution of queries by implementing callbacks. We mentioned what the implications are in terms of when to close the connection.
3. Used database connection parameters that would be used when connecting to the database from an external database. Remember that different access levels can be designated to accounts by RDBMS.
4. Implemented simple queries that provide apps with data services.
5. Used modules to isolate the persistence layer, so data access layer functions are separated from logic code
6. Described the concept of Prepared statement and how they help improve speed and security.
7. Explained the concept of the hack called 'SQL Injection' and its dangers. 

Code from this session can found (here)[https://github.com/ramsestrejo/W4D2-Mar26]

Ramses Trejo