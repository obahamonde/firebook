# OAuth2

**Open id connect**
| [**Google**](https://developers.google.com/identity/protocols/OpenIDConnect)

- Open standard for descentralized authentication.


## ID Token

- Format: [**JWT**](https://tools.ietf.org/html/rfc7519)
  - header:
    - type: "JWT"
    - algorithm: "RS256"
  - payload:
    - sub: id of user
    - aud: application recipient of the id token.
    - iss: resource server that issued the id token.
  - signature: HMAC-SHA256 hash of the JWT.
  - Comes from OpenID Connect standard.
  - Not meant for Authorization.

## ACCESS Token
  - Allow access to resources on behalf of the user.
  - Allows access to scopes defined by the identity provider.
  - Format: Any type of token.
  - Comes from OAuth2 standard.
  - Not meant for Authentication.

## Encoding, Hashing and Encryption
```python
## Encoding
# Has no security implications.
# Only ensures interoperability.
# A technique to transforma data from one format to another in order to be understood by different systems. f.e.: UTF8 to JSON.
import hashlib
HASH = hashlib.sha256(b'Hello World').hexdigest()
print(HASH)

## Encryption
# A technique that makes your data unreadable and hard to decode for an unauthorized party.
# Symmetric-key algorithms: these algorithms are used to encrypt and decrypt data using the same key like AES256.
# Asymmetric-key algorithms: these algorithms are used to encrypt and decrypt data using a key that is not shared with the recipient like RSA.
from cryptography.bcrypt import hashpw, checkpw
CRYPTO = hashpw('Hello World'.encode('utf-8'), bcrypt.gensalt())
print(CRYPTO)

## Hashing
# A technique to generate a unique fixed-length string (a hash) strictly depending on the specific input data.
# Must have the 5 following assertions:
# - The resulting hash has a fixed length.
# - The same input always produces the same output.
# - Multiple different inputs should not produce the same output.
# - It must not be possible to obtain the input data from the output data.
# - Any change to the input data implies a different resulting hash.
from cryptography.hazlhash import SHA256
HASH = SHA256.new(b'Hello World').hexdigest()


```

