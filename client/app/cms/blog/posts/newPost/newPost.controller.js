class NewPostController {
  // schema = {
  //   "type": "object",
  //   "title": "Comment",
  //   "properties": {
  //     "firstname": {
  //       "title": "Name",
  //       "type": "string"
  //     },
  //     "lastname": {
  //       "title": "Surname",
  //       "type": "string"
  //     },
  //     "address_line_1": {
  //       "title": "Address",
  //       "type": "string"
  //     },
  //     "address_line_2": {
  //       "type": "string"
  //     },
  //     "city": {
  //       "type": "string"
  //     },
  //     "state": {
  //       "type": "string",
  //       "enum": [
  //         "VIC",
  //         "NSW",
  //         "QLD",
  //         "WA",
  //         "SA",
  //         "TAS",
  //         "ACT",
  //         "NT"
  //       ]
  //     },
  //     "postcode": {
  //       "type": "integer",
  //       "minimum": 1000,
  //       "maximum": 9999
  //     },
  //     "email": {
  //       "title": "Email",
  //       "type": "string",
  //       "pattern": "^\\S+@\\S+$",
  //       "description": "Email will be used for evil."
  //     },
  //     "comment": {
  //       "title": "Comment",
  //       "type": "string",
  //       "maxLength": 2880,
  //       "validationMessage": "Don't be greedy!"
  //     }
  //   },
  //   "required": [
  //     "name",
  //     "email",
  //     "comment"
  //   ]
  // };
  schema = {
    "type": "object",
    "properties": {
      "title": {
        "title": "title",
        "type": "string"
      },
      "content": {
        "title": "content",
        "type": "string",
        "rows": 7,
        "validationMessage": "Don't be greedy!",
      },
      "status": {
        "type": "string",
        "enum": [
          "published",
          "draft",
          "unpublished",
          "pending review",
        ]
      },
      "author": {
        "type": "string",
        "enum": [
          "current user",
          "sub user",
          "another sub user",
        ]
      }

    }
  };
  // form = [{
  //   "type": "help",
  //   "helpvalue": "<div class=\"alert alert-info\">Grid it up with FLEX</div>"
  // }, {
  //   "type": "section",
  //   "grid": {
  //     "layout": "column"
  //   },
  //   "items": [{
  //     "type": "section",
  //     "grid": {
  //       "layout": "row"
  //     },
  //     "items": [{
  //       "key": "firstname",
  //       "grid": {
  //         "flex": 50
  //       }
  //     }, {
  //       "key": "lastname",
  //       "grid": {
  //         "flex": ""
  //       }
  //     }]
  //   }, {
  //     "key": "address_line_1",
  //     "grid": {
  //       "flex": 100,
  //       "layout": "row"
  //     }
  //   }, {
  //     "key": "address_line_2",
  //     "grid": {
  //       "flex": 100,
  //       "layout": "row"
  //     }
  //   }, {
  //     "type": "section",
  //     "grid": {
  //       "layout": "row"
  //     },
  //     "items": [{
  //       "key": "city",
  //       "grid": {
  //         "flex": 33,
  //         "layout": "column"
  //       }
  //     }, {
  //       "key": "state",
  //       "type": "select",
  //       "grid": {
  //         "flex": 33,
  //         "layout": "column"
  //       }
  //     }, {
  //       "key": "postcode",
  //       "grid": {
  //         "flex": 33,
  //         "layout": "column"
  //       }
  //     }]
  //   }, {
  //     "type": "section",
  //     "grid": {
  //       "layout": "row"
  //     },
  //     "items": [
  //       "email"
  //     ]
  //   }, {
  //     "key": "comment",
  //     "type": "textarea",
  //     "placeholder": "Make a comment"
  //   }]
  // }, {
  //   "type": "submit",
  //   "style": "btn-info",
  //   "title": "OK"
  // }];
  form = [{
    "type": "section",
    "grid": {
      "layout": "column"
    },
    "items": [{
      "key": "title",
      "grid": {
        "flex": 100,
        "layout": "column"
      }
    }, {
      "key": "content",
      "type": "textarea",
      "grid": {
        "flex": 100,
        "layout": "column"
      },
    }, {
      "key": "status",
      "type": "select",
      "grid": {
        "flex": 100,
        "layout": "column"
      }
    }, {
      "key": "author",
      "type": "select",
      "grid": {
        "flex": 100,
        "layout": "column"
      }
    }, {
      "type": "submit",
      "style": "btn-info",
      "title": "save"
    }]
  }];
  model = {};
  constructor($posts, $scope) {
    'ngInject';
    this.$posts = $posts;


  }
  submitForm(form, data) {
    console.log('form', form);
    console.log('data', data);

    this.$posts.save(this.model, function () {
      alert('domne')
    });
  };
}

export default NewPostController;

