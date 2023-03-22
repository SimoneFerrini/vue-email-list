 const { createApp } = Vue

  createApp({
    data() {
      return {
        mailList: [],
      }
    },

    created () {
    for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            this.mailList.push(res.data.response);
        })
        
        
    }
    console.log(this.mailList);
  }

  }).mount('#app')