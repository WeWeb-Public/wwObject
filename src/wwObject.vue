<template>
    <div v-wwo>
        I AM WWOBJECT !
    </div>
</template>


<script>
export default {
    name: "ww-text",
    props: {
        wwObjectCtrl: Object,
    },
    data() {
        return {
            wwObject: this.wwObjectCtrl.get(),
        };
    },
    computed: {
    },
    methods: {},
    mounted: function () {
        this.$emit('ww-loaded', this);
    }
};
</script>
