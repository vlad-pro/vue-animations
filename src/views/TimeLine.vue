<template>
  <div id="container">
    <div id="square"></div>
    <div id="circle"></div>
    <div id="triangle"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    tl.to('#square', { x: 700, duration: 2, ease: 'expot.out' })
    tl.to('#circle', { x: 700, duration: 2, ease: 'expot.out' }, '<')
    tl.to('#triangle', { x: 700, duration: 2, ease: 'expot.out' }, '<')
  }
}
</script>

<style scoped>
#square {
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #42b983;
  margin-top: 1em;
}
#circle {
  height: 6.5em;
  width: 6.5em;
  border-radius: 50%;
  background-color: #2c3e50;
  margin-top: 1em;
}
#triangle {
  width: 0;
  height: 0;
  border-left: 4em solid transparent;
  border-right: 4em solid transparent;
  border-bottom: 6em solid #16c0b0;
  margin-top: 1em;
}
</style>
