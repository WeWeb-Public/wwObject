import wwObject from './wwObject.vue'

const name = "ww-text";
const wwEnableMetrics = false;

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.registerContentType(
            name,
            {
                type: name,
                data: {
                    text: {
                        fr_FR: "Nouveau texte"
                    },
                    tag: "div", //h1, quote, code, ...
                    align: "",
                    font: "",
                    size: "",
                    color: "",
                    classes: [],
                    children: []
                }
            },
            wwEnableMetrics
        );

        window.vm.addComponent(name, wwObject);

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}