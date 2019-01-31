import 'whatwg-fetch';

class HttpService {
    //var getProducts = function() {}
    getProducts = () => {
        fetch('http://localhost:3004/product')
		.then(response => {
            console.log(response.json());
        })
        
    }
}

export default HttpService;