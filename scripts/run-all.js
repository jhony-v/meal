const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function getPackageJsonFromProjectFolder(projectFolder) {
    const location = path.join(path.dirname(__dirname),projectFolder,'package.json');
    return new Promise((resolve,reject) => {
        fs.readFile(location, "utf-8" ,function( error , data ) {
           if(error) reject(new Error(error.message));
           resolve({
               data : JSON.parse(data),
               location
           });
       })
    })
}

const folders = [
    'service-graphql',
    'application',
    'service-proxy',
];

const projects = [];

folders.forEach(currentFolder => {
    projects.push(getPackageJsonFromProjectFolder(currentFolder));
});

(async function(){
    const requestProjects = await Promise.all(projects);
    executeCommands(requestProjects);
}())

function executeCommands(requestProjects) {
    const printListProjects = [...requestProjects].map(e => {
        return `echo Project: ${e.data.name} ................... ${e.location}`;
    }).join(' && '); 

    exec(printListProjects,(error,stdout) => {
        if(error) return;
        console.log(stdout);
        folders.forEach((folder,index) => {
            const keys = Object.keys(requestProjects[index].data.scripts);
            let npmDev = keys.includes('dev') ? 'dev' : 'start';
            exec(`cd ../${folder} && npm run ${npmDev}`,() => null);
        })
    });
}
