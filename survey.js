(() => {
    try {
        [...document.getElementById('gdDtl11').children[0].children]
            .filter((_, idx) => idx >= 15 && (idx - 15) % 9 == 0)
            .map(tr => tr.children[2])
            .map(td => td.children[Math.floor(Math.random() * 3 + 2) * 3])
            .forEach(radio => radio.checked = true);
    } catch {
    }

    document.getElementById('btn_Save').click();
})();