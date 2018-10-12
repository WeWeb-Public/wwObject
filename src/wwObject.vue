<template>
  <div v-wwo>
    I AM WWOBJECT : {{wwObject.content.data.text}}
  </div>
</template>


<script>
export default {
  name: "ww-text",
  props: {
    wwObjectRef: Object,
  },
  data() {
    return {};
  },
  computed: {
    wwObject() {
      //return this.wwObjectRef.wwGet();
      return this.$store.state.wwObjects[this.wwObjectRef.uniqueId];
    },
  },
  methods: {},
  mounted: function () {
    this.$emit('ww-loaded', this);
  }
};
</script>
