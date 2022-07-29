export function alertFunc(alertPopUp) {
    let alertDialog = document.getElementById("alertDialog");
    alertDialog.getElementsByTagName('p')[0].innerText = alertPopUp;
    alertDialog.showModal();
}

export function confirmFunc(confirmPopUp) {
    let confirmDialog = document.getElementById("confirmDialog");
    confirmDialog.getElementsByTagName('p')[0].innerText = confirmPopUp;
    confirmDialog.showModal();
}


export function promptFunc(promptPopUp) {
    let promptDialog = document.getElementById("promptDialog");
    promptDialog.getElementsByTagName('p')[0].innerText = promptPopUp;
    promptDialog.showModal();
}

