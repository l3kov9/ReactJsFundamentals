const data = {
    getCars: ()=>{
        return new Promise((resolve, reject)=>{
            resolve([
                {id: 1, make: 'Opel', model: 'Astra'},
                {id: 2, make: 'Opel', model: 'Insignia'},
                {id: 3, make: 'Honda', model: 'Civic'},
                {id: 4, make: 'BMW', model: '530'}
            ])
        })
    }
}


export default data;
