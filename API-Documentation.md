# Flickr Picture Search

## API Documentation

**1. Pictures**

**GET /picture-public**

Retrieve a list of  public picturess in the collection.

**Request**

```
GET /picture-public HTTP/1.1
Host: https://monashflickr-api.onrender.com
```

**Response**

```
HTTP/1.1 200 OK
Content-Type: application/json

{"status":"Success","code":200,"data":{"searchTitle":"sun","items":
[
  {
    "id": 52711848535,
    "url": "https://farm66.staticflickr.com/65535/52711848535_a8547ed8e9.jpg",
    "title": "A description of Pricture A.",
  },
  {
    "id": 52711512369,
    "url": "https://farm66.staticflickr.com/65535/52711848535_a8547ed8e9.jpg",
    "title": "A description of Pricture B.",
  }
]}}
```

**GET /picture-private/{tag}**

Retrieve a list of private picturess match the tag provided.

**Request**

```
GET /picture-private/{tag} HTTP/1.1
Host: https://monashflickr-api.onrender.com
```

**Response**

```
HTTP/1.1 200 OK
Content-Type: application/json

{"status":"Success","code":200,"data":{"searchTitle":"sun","items":
[
  {
    "id": 52711848535,
    "url": "https://farm66.staticflickr.com/65535/52711848535_a8547ed8e9.jpg",
    "title": "A description of Pricture A.",
  },
  {
    "id": 52711512369,
    "url": "https://farm66.staticflickr.com/65535/52711848535_a8547ed8e9.jpg",
    "title": "A description of Pricture B.",
  }
]}}
```



**2.Authentication**

**GET /auth/refresh**

Retrieve a new refresh token.

**Request**

```
GET /auth/refresh HTTP/1.1
Host: https://monashflickr-api.onrender.com
Authorization: Bearer <refresh_token>
```

**Response**

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "<new_access_token>",
  "expires_in": 3600
}
```

**POST /auth**

Login to the system and retrieve a refresh token in a cookie and an access token.

**Request**

```
POST /api/auth/login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "username": "johndoe",
  "password": "password123"
}
```

**Response**

```
HTTP/1.1 200 OK
Set-Cookie: refresh_token=<refresh_token>; HttpOnly
Content-Type: application/json

{
  "access_token": "<access_token>",
  "expires_in": 3600
}
```

