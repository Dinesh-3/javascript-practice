function printFirstName({ firstName = 'Boo', lastName = 'Far' }) {
  console.log(`${firstName} ${lastName}`);
}

printFirstName({ firstName: null, lastName: undefined }); // null Far
