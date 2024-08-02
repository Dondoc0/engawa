const table = document.createElement('table');
for (let i = 0; i < 700; i++) {
    const tr = document.createElement('tr');
    
    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        // td内にテキストを追加
        td.textContent = i + '-' + j;
        // td要素をtr要素の子に追加
        tr.appendChild(td);
    }
}
// 生成したtable要素を追加する
document.getElementById('launcher').appendChild(table);
