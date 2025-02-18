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
            this.$root.$emit('get-id', event.target.id);
        }
    }
}
</script>

<style src="./VideoContent.scss" lang="scss" scoped></style>