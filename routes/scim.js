var express = require('express');
var router = express.Router();


router.get('/Users', (req, res) => {
  res.json({
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 0,
    "startIndex": 1,
    "itemsPerPage": 0,
    "Resources": []
  })
});
router.get('/Groups', (req, res) => {
  res.json({
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "totalResults": 0,
    "startIndex": 1,
    "itemsPerPage": 0,
    "Resources": []
  })
});

router.post('/Users', (req, res) => {
  res.json(req.body);
  res.status(200);
});

router.get('/Users/:userId', function(req, res, next) {
  res.json({
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
    "id": "23a35c27-23d3-4c03-b4c5-6443c09e7173",
    "userName": "test.user@okta.local",
    "name": {
      "givenName": "Test",
      "middleName": "",
      "familyName": "User"
    },
    "active": true,
    "emails": [{
      "primary": true,
      "value": "test.user@okta.local",
      "type": "work",
      "display": "test.user@okta.local"
    }],
    "groups": [],
    "meta": {
      "resourceType": "User"
    }
  });
});

module.exports = router;
