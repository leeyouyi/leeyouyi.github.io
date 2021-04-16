<template>
  <div class="content">
      <p>{{$t('welcome.top')}}</p>
      <p>{{$t('welcome.bottom')}}</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style lang="scss" scoped>
.content{
    width:100vw;
    height:calc(100vh - 60px);
    margin-top:60px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
            p{
        font-family: PingFangTC-Medium;
        font-size: 18px;
        color: #03C0EF;
        text-align: center;
        font-weight: 700;
        margin-bottom:10px;
    }
}
</style>

