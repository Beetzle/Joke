const jokesUrl = "/api/jokes";
const linksUrl = 'https://krdo-joke-registry.herokuapp.com/api/services';


async function update(){
    createJoke();
    getWebServices();
}

onload = update();


// Post
function createJoke() {
    let setup = document.getElementById('setup').value;
    let punchline = document.getElementById('punchline').value;
    let data = {setup: setup, punchline: punchline};

    fetch('/api/jokes/', {
        method: "POST",
        body:  JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
        .then(result => {
            if(result.status >= 400){
                throw  new Error(result.status)
            } else{
                return result.json();
            }
        })
        .then(result => {
            console.log(`Result: %o`, result)
        }).catch(err => { console.log('Error' + err)});


    setTimeout(function () {location.reload()}, 2000);
}

// Get
async function getJokes() {
    const [template, jokesJSON] = await Promise.all([fetch('/joke.hbs'), fetch(jokesUrl)]);
    const [templateText, jokes] = await Promise.all([template.text(), jokesJSON.json()]);
    const compiledTemplate = Handlebars.compile(templateText);
    document.body.innerHTML = compiledTemplate({jokes});
}

async function getWebServices() {
    const [template, webserviceJSON] = await Promise.all([fetch('/joke.hbs'), fetch(linksUrl)]);
    const [templateText, webservices] = await Promise.all([template.text(), webserviceJSON.json()]);
    const compileTemplate = Handlebars.compile(templateText);
    document.body.innerHTML = compileTemplate({webservices});
}

