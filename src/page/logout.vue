<template>
    <div class="logout">
        {{user}}
    </div>
</template>
<script>
    export default{
        name: 'logout',
        data(){
            return {
                user:sessionStorage.user,
            }
        },
        created(){
            sessionStorage.user='';
            this.$router.push('/');
        }
    }
</script>
<style scoped lang='scss'>
    
</style>