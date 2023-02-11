let response;
let pageSize = 5;
let currentPage = 0;

function displayData() {
    let startIndex = currentPage * pageSize;
    let endIndex = startIndex + pageSize;
    let pageData = response.slice(startIndex, endIndex);

    let tableBody = $('#tableBody');
    tableBody.empty();
    for (let item of pageData) {
        tableBody.append(
            `<tr>
                <td>${item.codigo}</td>
                <td>${item.descricao}</td>
                <td>${item.data_inicio}</td>
                <td>${item.data_fim}</td>
                <td>${item.tipo_ato}</td>
                <td>${item.numero_ato}</td>
                <td>${item.ano_ato}</td>
            </tr>`
        );
    }
}

$.getJSON("https://brasilapi.com.br/api/ncm/v1", function (data) {
    response = data;

    displayData();

    $("#nextButton").click(function () {
        if (currentPage < Math.floor(response.length / pageSize)) {
            currentPage++;
            displayData();
        }
    });

    $("#prevButton").click(function () {
        if (currentPage > 0) {
            currentPage--;
            displayData();
        }
    });
});


