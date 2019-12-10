<template>
  <div class='template'>
    <p v-for="line in displayLines" :key="line">
      hasher@hasher.tech:$ {{ line }}
    </p>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        displayLines: [],
        greetingIndex: 0,
        greetings: [
          'welcome',
          'node',
          'vue',
          'webpacks',
          'babel',
          'there will be more',
          'cls',
        ],
        timer: ''
      }
    },
    created: function () {
      this.updateMessage();
      this.timer = window.setInterval(this.updateMessage, 2000);
    },
    methods: {
      updateMessage: function () {
        this.displayLines.push(this.greetings[this.greetingIndex]);
        this.greetingIndex++;
        if (this.greetingIndex > this.greetings.length) {
          this.greetingIndex = 0;
          this.displayLines = [];
        }
      }
    },
    beforeDestroy() {
      window.clearInterval(this.timer);
    }
  }
</script>

<style scoped>
  .template {
    text-align: left;
    margin-left: 5%;
    margin-top: 5%;
    border-color: white;
  }
  p {
    display: block;
  }
</style>