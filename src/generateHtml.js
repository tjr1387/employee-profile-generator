// Helper function which will loop over all object created from inquirer, and create cards for each
function generateEmployeeCards(objArray) {
    let resultStr = '';
    for (obj of objArray) {
        resultStr += `<div class="card m-2 rounded">
        <div class="card-body border border-success">
            <div class="bg-info p-1 rounded">
                <h2 class="card-title">${obj.getName()}</h2>
                <h3 class="card-subtitle mb-2 text-light">${obj.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${obj.getEmail()}" class="card-link">${obj.getEmail()}</a>
                </li>
                <li class="list-group-item">
                    ${generateOptField(obj)}
                </li>
            </ul>
        </div>
    </div>\n`;
    }
    return resultStr;
}

// Helper function which will conditionally generate the last field of the card, depending on the object's class (employee's role)
function generateOptField(obj) {
    if (obj.getRole() === 'Manager') {
        return `Office Number: ${obj.getOffice()}`
    } else if (obj.getRole() === 'Intern') {
        return `School: ${obj.getSchool()}`
    } else {
        return `GitHub: <a class="card-link" href="https://github.com/${obj.getGitHub()}">${obj.getGitHub()}</a>`
    }
}


// Function which will generate the full HTML file
function generateHtml(objArray) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <header>
            <h1 class="text-center bg-success display-3">My Team</h1>
        </header>
        <main class="d-flex flex-wrap justify-content-around p-1">
            ${generateEmployeeCards(objArray)}
        </main>
    </body>
    </html>`
};

module.exports = generateHtml;
