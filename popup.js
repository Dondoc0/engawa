// Launcherの枠組みを生成する
function generateLauncher() {
    const table = document.createElement("table");
    
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < 5; j++) {
            const td = document.createElement("td");
            const tdText = document.createTextNode(`${i}-${j}`);
            td.appendChild(tdText);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('launcher').appendChild(table);
}

// jsonファイルからfaviconとリンクを取得してtableにいれる
function generateContent() {

}



generateLauncher();