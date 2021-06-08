import React from 'react';
import ReactDOM from 'react-dom';

// Call Random User Generator API
const restEndpoint = 'https://randomuser.me/api/';

// Wait for response & output Let's try to output the API response in React!
const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);

  // React.createElement( type, [properties], [...children]);
  return React.createElement('h1', null, JSON.stringify(jsonResponse));
};

ReactDOM.render(
  callRestApi(),
  document.querySelector('#root')
);