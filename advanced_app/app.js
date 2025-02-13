let company = ["wilson", "budokai"];
let industry = ["medical", "tech"];
let service = ["pills", "phones"];
let exten = [".com", ".net"];

function domainGenerator() {
    let domainList = document.getElementById("domainList");
    let generatorButton = document.getElementById("generatorButton");
    let clearDomains = document.getElementById("clearDomains");
    generatorButton.addEventListener("click", (_) => {
        if (domainList.innerHTML.length >= 1) {
            domainList.innerHTML = "";
        }
        for (const comName of company) {
            for (const indName of industry) {
                for (const serName of service) {
                    for (const extName of exten) {
                        domainList.innerHTML += `<div class="item">${comName}${indName}${serName}${extName}</div>`;
                    }
                }
            }
        }
    });
    clearDomains.addEventListener("click", (_) => {
        if (domainList.innerHTML.length === 0) {
            domainList.innerHTML = "PRIMERO DEBES GENERAR LOS DOMINIOS";
        } else if (domainList.innerHTML === "PRIMERO DEBES GENERAR LOS DOMINIOS") {
            domainList.innerHTML = domainList.innerHTML;
        } else domainList.innerHTML = "";
    });
}

domainGenerator();