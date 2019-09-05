const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAOcSQKn32KNLcMTvrC90PXlILepURXHWk",
    authDomain: "ate-test.firebaseapp.com",
    projectId: "ate-test"
});

var db = firebase.firestore();

var formConfig = {
    "confetti": [{
        "key": "type",
        "options": [{
            "name": "Birthday",
            "value": "birthday"
        }, {
            "name": "Wedding",
            "value": "wedding"
        }, {
            "name": "Stag Party",
            "value": "stagparty"
        }],
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "body",
        "placeholder": "Compose message...",
        "title": "Your Personal Message to Suppliers",
        "type": "textarea",
        "validation": {
            "maxLength": 250,
            "required": true,
            "validationMessage": "Personal message is required!"
        }
    }, {
        "key": "name",
        "placeholder": "Your name...",
        "title": "Name",
        "type": "input",
        "validation": {
            "required": true
        }
    }, {
        "key": "email",
        "placeholder": "Your email...",
        "title": "Email",
        "type": "input",
        "validation": {
            "pattern": "^\\S+@\\S+$",
            "required": true
        }
    }, {
        "key": "date",
        "placeholder": "Date of your event",
        "type": "date",
        "validation": {
            "minDate": "2018-01-21",
            "required": true
        }
    }, {
        "title": "Get Quotes",
        "type": "button"
    }],
    "hottub": [{
        "key": "hottubtype",
        "options": [{
            "name": "Inflatable",
            "value": "inflatable"
        }, {
            "name": "Solid",
            "value": "solid"
        }],
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "type",
        "options": [{
            "name": "Birthday",
            "value": "birthday"
        }, {
            "name": "Wedding",
            "value": "wedding"
        }, {
            "name": "Stag Party",
            "value": "stagparty"
        }],
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "body",
        "placeholder": "Compose message...",
        "title": "Your Personal Message to Suppliers",
        "type": "textarea",
        "validation": {
            "maxLength": 250,
            "required": true,
            "validationMessage": "Personal message is required!"
        }
    }, {
        "key": "name",
        "placeholder": "Your name...",
        "title": "Name",
        "type": "input",
        "validation": {
            "required": true
        }
    }, {
        "key": "email",
        "placeholder": "Your email...",
        "title": "Email",
        "type": "input",
        "validation": {
            "pattern": "^\\S+@\\S+$",
            "required": true
        }
    }, {
        "key": "date",
        "placeholder": "Date of your event",
        "type": "date",
        "validation": {
            "minDate": "2018-01-21",
            "required": true
        }
    }, {
        "title": "Get Quotes",
        "type": "submit"
    }],
    "magician": [{
        "key": "magictype",
        "options": [{
            "name": "Mix and mingle magic",
            "value": "mixmingle"
        }, {
            "name": "Magic show",
            "value": "magicshow"
        }, {
            "name": "Table magic",
            "value": "tablemagic"
        }],
        "title": "How would you like the magic performed?",
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "magicstyle",
        "options": [{
            "name": "Illusionist",
            "value": "illusionist"
        }, {
            "name": "Escapologist",
            "value": "escapologist"
        }, {
            "name": "Close Up",
            "value": "closeup"
        }],
        "title": "What types of magic would you like performed?",
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "eventType",
        "options": [{
            "name": "Birthday",
            "value": "birthday"
        }, {
            "name": "Wedding",
            "value": "wedding"
        }, {
            "name": "Stag Party",
            "value": "stagparty"
        }],
        "title": "Event type",
        "type": "radios",
        "validation": {
            "required": true
        }
    }, {
        "key": "body",
        "placeholder": "Compose message...",
        "title": "Your Personal Message to Suppliers",
        "type": "textarea",
        "validation": {
            "maxLength": 250,
            "required": true,
            "validationMessage": "Personal message is required!"
        }
    }, {
        "key": "name",
        "placeholder": "Your name...",
        "title": "Name",
        "type": "input",
        "validation": {
            "required": true
        }
    }, {
        "key": "email",
        "placeholder": "Your email...",
        "title": "Email",
        "type": "input",
        "validation": {
            "pattern": "^\\S+@\\S+$",
            "required": true
        }
    }, {
        "key": "date",
        "placeholder": "Date of your event",
        "type": "date",
        "validation": {
            "minDate": "2018-01-21",
            "required": true
        }
    }, {
        "title": "Get Quotes",
        "type": "submit"
    }]
}

Object.keys(formConfig).forEach(configKey => {

        db.collection('formConfigTest').doc(configKey).set({
            fields: formConfig[configKey]
        }, {merge: true}).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

})