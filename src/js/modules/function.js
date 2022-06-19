export function isWebp() {
    //Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        //Добавление классa _webp and _no-webp for HTML
        testWebP(function (support) {
            let className = support === true ? 'webp': 'no-webp';
            document.documentElement.classList.add(className);
        });
}