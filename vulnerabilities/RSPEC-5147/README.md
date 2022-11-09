# Simple vulnerable app using MongoDB

Inspired from https://nullsweep.com/a-nosql-injection-primer-with-mongo/

```
 docker-compose build
 docker-compose up
```

App is vulnerable to injection because it uses `$where` operator which will evaluate user provided JavaScript on every document in MongoDB.
Following GET query will return all users because it will attach `|| 'a' == 'a` to the `username` parameter which makes condition always true.

```
http://localhost:4000/S5147/noncompliant?username=admin%27%20||%20%27a%27%20==%20%27a
```

Following GET request returns no users because we don't use `$where` query

```
http://localhost:4000/S5147/compliant?username=admin%27%20||%20%27a%27%20==%20%27a
```

# Notes

Running just mongo

```
 docker run -d -p 27017:27017/tcp mongo:latest
```
