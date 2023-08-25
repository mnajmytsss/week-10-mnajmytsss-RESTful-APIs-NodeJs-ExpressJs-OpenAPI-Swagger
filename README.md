# RESTful API with expressjs, nodejs, and swagger

## Introduction

Welcome to the simple transfer app RESTful API website.

## RESTful Principles

The Financial Tracking API adheres to the principles of RESTful design to ensure a standardized and user-friendly experience:

1. **Resources**: The API treats financial entities such as transactions and accounts as resources, each accessible through a unique endpoint.

2. **HTTP Methods**: HTTP methods such as GET, POST, PUT, PATCH, and DELETE are employed to interact with these resources.

3. **Representation**: Data is exchanged in JSON format, allowing for structured and easy-to-parse information.

## Endpoints and Examples

[Copy me on postman](https://mnajmytsss.onrender.com)

### HTTP Methods

**Register New User**

```http
POST | https://mnajmytsss.onrender.com/user
```

**Log In**

```http
POST | https://mnajmytsss.onrender.com/user/:id
```

**Get All Transfer**

```http
POST | https://mnajmytsss.onrender.com/transaction
```

**Patching Transfer Status**

```http
PATCH | https://mnajmytsss.onrender.com/transaction/:id
```

**Delete Transfer by ID**

```http
DELETE | https://mnajmytsss.onrender.com/transaction/:id
```