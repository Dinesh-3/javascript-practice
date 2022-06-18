const obj = {
    firstName: "Dinesh",
    lastName: "Iyyandurai",
    address: {
        country: "India",
        state: "TamilNadu",
        district: "Salem",
        pinCode: "636406"
    },
    communications: [
        {
            type: "EMAIL",
            value: "dineshi3@gmail.com"
        },
        {
            type: "PHONE",
            value: "8674568667"
        }
    ],
    college: {
        BE: {
            name: "Sri Shakthi Institute of Engineering and Technology",
            year: 2021
        }
    }
};

function flattenObject(oldObject) {
    const newObject = {};

    flattenHelper(oldObject, newObject, "");

    return newObject;

    function flattenHelper(currentObject, newObject, previousKeyName) {
        for (let key in currentObject) {
            let value = currentObject[key];

            if (value.constructor !== Object) {
                if (previousKeyName == null || previousKeyName == "") {
                    newObject[key] = value;
                } else {
                    if (key == null || key == "") {
                        newObject[previousKeyName] = value;
                    } else {
                        newObject[previousKeyName + "." + key] = value;
                    }
                }
            } else {
                if (previousKeyName == null || previousKeyName == "") {
                    flattenHelper(value, newObject, key);
                } else {
                    flattenHelper(value, newObject, previousKeyName + "." + key);
                }
            }
        }
    }
}

const result = flattenObject(obj);

console.log(result);
