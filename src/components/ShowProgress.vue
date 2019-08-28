<template>
    <div>
      <d-progress :percentage="10" status="success"></d-progress>
      <d-progress :percentage="40" status="exception"></d-progress>
      <br><br>
      <h3>NSNMN</h3>
      <d-progress :percentage="70" status="success" :textInside="true" :stroke-width="15"></d-progress>
      <d-progress :percentage="50" status="exception" :textInside="true" :stroke-width="15"></d-progress>
      <d-progress :percentage="10" status="" :textInside="true" :stroke-width="15"></d-progress>
      <br>
      <h3>Circle</h3>
      <d-progress :percentage="60" :type="'circle'" :stroke-width="6"></d-progress>
      <d-progress :percentage="50" :type="'circle'" :stroke-width="6" status="success"></d-progress>
      <d-progress :percentage="20" :type="'circle'" :stroke-width="6" status="exception"></d-progress>
    </div>
</template>

<script>
  import DProgress from './Progress'
    export default {
        name: "ShowProgress",
      components:{
        DProgress
      },
    }
</script>

<style>
h3{
  margin-left: 50px;
}
</style>
