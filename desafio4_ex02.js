
var buttonElement = document.querySelector('#api button');
var inputElement = document.querySelector('#api input');
var listElement = document.querySelector('#api ul');
var liMsgLoading = document.createTextNode('Carregando...');
var repos = [];


function getRepos(){
    var user = inputElement.value;
    msgPrint(liMsgLoading);
axios.get('https://api.github.com/users/'+user+'/repos')
.then(function(response){
    console.log(response);
    repos = response.data;
    console.log('\n\n');
    console.log(repos);
    printRepos(repos);
})
.catch(function(error){
    console.warn(error);
    errorPrint(error);
});


}

function msgPrint(msg){
    listElement.innerHTML = '';

    var liMsg = document.createElement('li');
    var liTextMsg = msg;

    liMsg.appendChild(liTextMsg);
    listElement.appendChild(liMsg);
}

function errorPrint(msg){
    listElement.innerHTML = '';

    var liMsg = document.createElement('li');
    var liTextMsg = msg;

    liMsg.innerHTML = liMsg.innerHTML + liTextMsg;
    listElement.appendChild(liMsg);
}

function printRepos(array){
    listElement.innerHTML = '';
    for (repo of array){
        var li = document.createElement('li');
        var liText = document.createTextNode(repo.name);

        li.appendChild(liText);
        listElement.appendChild(li);
    }
}