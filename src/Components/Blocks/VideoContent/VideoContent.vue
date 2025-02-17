<template src="./VideoContent.html"></template>

<script>
export default{
    name: 'VideoContent',
    props: {
        videoData: Object,
    },
    methods: {
        popUpHandler(){
            // console.log('clicked on video');
            this.$root.$emit('show-popup');
        }
    }
}
</script>

<style src="./VideoContent.scss" lang="scss" scoped></style>