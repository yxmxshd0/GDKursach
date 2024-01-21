let params = {};

function getParams(formParam = null) {
    const form = formParam ? formParam : document.getElementById("params_form");
    const inlet = parseInt(form.querySelector("[name='model_inlet']").value);
    const outlet = parseInt(form.querySelector("[name='model_outlet']").value);
    const parFromRightBlock = parseInt(form.querySelector("[name='model_parFromRightBlock']").value);

    const notify = new Notify();

    if (isNaN(inlet) || isNaN(outlet) || isNaN(parFromRightBlock)) {
        notify.type = "error";
        notify.notyTitle = "Введите корректные размеры";
        notify.show();
        return;
    }

    params["inlet"] = inlet;
    params["parFromRightBlock"] = parFromRightBlock;
    params["outlet"] = outlet;
}

async function calculate(event) {
    event.preventDefault();
    getParams();
    const response = await fetch("http://localhost:3000", {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = await response.text();

    console.log(data);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("params_form").addEventListener('submit', calculate);
})