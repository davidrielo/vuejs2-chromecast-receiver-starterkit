<template>
    <div class="screen screen-page1">
    <div class="screen-title">Page 1 - Messages</div>

    <p>Message from Sender:</p>
    <p class="text">{{message}}</p>
    <br>
    <p>Enter text in input box on Sender then click Page1 button to see text on Receiver</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: "Page1",
    data: function(){
        return {
            message: this.$route.params && this.$route.params.message
        }
    },
    watch: {
        "$route": function(newRoute, oldRoute){
            this.message = newRoute.params && newRoute.params.message;
        }
    }
}
</script>

<style>
  .screen-page1 {
    background-color: green;
  }
  .screen-page1 .text{
      font-size:30px;
  }
</style>
