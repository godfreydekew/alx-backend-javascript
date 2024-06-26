export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
	if (success) {
	  console.log("Got a response from the API");
          resolve( {
		  status: 200,
		  body: 'Success'
	  });
	} else {
	  reject(new Error());
	}
    });
}
