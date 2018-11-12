<template>
<div class="screen screen-splash">
  <img src='/assets/logo.png' class="img-responsive center-block logo">
</div>
</template>
<script>
export default {
    name: "Splash",
    mounted: function(){
        var self = this;
        setTimeout(function(){
            self.$root.messageBusService.messageBus.broadcast('Splash Complete');
            self.$router.push("home");
        }, 3000);
    }
}
</script>
<style>
.screen-splash {
  background-color: #000;
}
.logo {
  max-width: 50%;
}
</style>
