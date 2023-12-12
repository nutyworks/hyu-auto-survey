(() => { 
    [...[...document.getElementsByClassName('mb-15')[0].children][1].children]
        .filter((_, idx) => idx % 2 == 0)
        .map(tr => tr.children[1 + Math.floor(Math.random() * 3)])
        .forEach(td => td.children[0].checked = true); 

    document.getElementById('btn_save').click();
})();