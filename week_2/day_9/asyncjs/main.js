console.log('hello');


//on the API (backend)
function fetchPosts(err){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err){
                console.log('success');
                console.log({
                    name: 'Joe',
                    surname: 'Untrecht'
                });
                resolve();
            }else{
                reject("err: something wrong");
            }
        }, 3000);
    })
}

//from the front
async function callApi(){
    try{
        url = '';
        await fetch(url, {
            method: 'GET'
        });
    }catch(err){
        console.log(err);
    }
}

callApi();
