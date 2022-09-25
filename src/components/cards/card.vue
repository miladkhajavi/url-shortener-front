<script>
export default {
  setup() {
    const store = useStore();

    const url = ref();

    const submit = (newUrl) => {
      url.value = newUrl;
      store.dispatch("setPlot", { url: newUrl });
    };

    return { url, submit };
  },
  // data() {
  //   return {
  //     message: ''
  //   }
  // },
  // methods: {
  //   submit(){
  //    let data = {
  //       userName:this.userName,
  //       password:this.password
  //     }
  //     this.$store.dispatch("cutUrl",data)
  //   }
  // },
  // mounted() {
    
  // }
}
</script>

<template>

</template>
