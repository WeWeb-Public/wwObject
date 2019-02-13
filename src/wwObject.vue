<template>
    <div>I AM WWOBJECT !</div>
</template>


<script>
export default {
    name: "ww-text",
    props: {
        wwObjectCtrl: Object,
    },
    data() {
        return {
        };
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        }
    },
    methods: {},
    mounted: function () {
        this.$emit('ww-loaded', this);
    }
};
</script>
