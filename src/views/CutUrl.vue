<script>
// import CardsCard from '../components/cards/card.vue'
export default {
    name: "cutUrl",
    data() {
        return {
            url: null,
            copied:false
        }
    },
    methods: {
        submitUrl() {
            const data = {
                url: this.url,
            }
            this.copied = false
            this.$store.dispatch("cutUrl", data)
        },
        copy(url){
                navigator.clipboard.writeText(url)
                this.copied = true
            },
    },
    computed: {
        getUrl() {
            return this.$store.getters.getCutUrl;
        }

    }
}
</script>

<template>
    <div class="v-shortener">
     <!-- <CardsCard /> -->
     <V-Card class="v-shortener-card">
    <template #title>
        <label class="v-medium-lable">
          <svg data-v-2895f6bc="" data-v-154c538c="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" class="mr-2"><path data-v-2895f6bc="" d="M10.27,6.64l2.88-2.88A10,10,0,0,1,24.59,1.35a11.54,11.54,0,0,1,6.05,6.06,10,10,0,0,1-2.4,11.44l-2.88,2.89.07-6.15A5.88,5.88,0,0,0,26.71,9.1,7.48,7.48,0,0,0,22.9,5.29a5.86,5.86,0,0,0-6.48,1.28ZM3.76,13.15,6.3,10.6A3.76,3.76,0,0,0,7.38,13l1.31,1.3-1.9,1.9a5.91,5.91,0,0,0-1.5,6.71A7.48,7.48,0,0,0,9.1,26.71a5.91,5.91,0,0,0,6.71-1.5l1.91-1.91L19,24.61a3.53,3.53,0,0,0,1,.7h0a3.92,3.92,0,0,0,1.16.35l.24,0-2.55,2.55A10,10,0,0,1,7.41,30.65a11.54,11.54,0,0,1-6-6.06A10,10,0,0,1,3.76,13.15Z" class="a"></path> <path data-v-2895f6bc="" d="M17,19.21l-3.84,3.9c-2.5,2.54-6.7-1.89-4.27-4.35l3.83-3.9L9.22,11.3a1.07,1.07,0,0,1,0-1.5,1,1,0,0,1,.67-.31l11.35-.12a1,1,0,0,1,1.17,1.21l-.13,11.58a1,1,0,0,1-1.17.91,1.09,1.09,0,0,1-.6-.31Z" class="b"></path></svg>
          Enter the URL to be shortened</label>
    </template>
    <template #content>
        
      <span class="p-input-icon-left v-card-inputtext">
          <i class="pi pi-link" />
          <V-Input-Text type="text" placeholder="enter valid url" class="p-inputtext-lg v-card-inputtext-child"  v-model="url" />
      </span>
     
      <span class="p-input-icon-right v-card-inputtext">
    <V-Input-Text type="text"  class="p-inputtext-lg v-card-inputtext-child" v-model=getUrl disabled/>
    <i class="pi pi-copy" v-bind:class="{'v-copy-icon':!copied, ' v-copy-icon-g':copied }" v-if="getUrl" @click="copy(getUrl)"></i>
    </span>

    </template>
    <template #footer>
      <V-Button label="Enter URL" class="v-card-button-xl" @click="submitUrl" />
    </template>
      </V-Card>
    </div>
 
</template>
