import wwObject from './wwObject.vue'

const name = "ww-text";
const wwEnableMetrics = false;

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            content: {
                type: name,
                data: {}
            },
            enableMetrics: wwEnableMetrics,
            /* wwManager:start */
            cmsOptions: {
            }
            /* wwManager:end */
        });

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