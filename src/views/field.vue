<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <yz-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></yz-field>
      <yz-field label="密码" placeholder="请输入密码" type="password"></yz-field>
      <yz-field label="数字" placeholder="请输入数字" type="number"></yz-field>
      <yz-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></yz-field>
    </div>

    <!-- <div class="page-part">
      <yz-field label="邮箱" placeholder="成功状态" state="success"></yz-field>
      <yz-field label="邮箱" placeholder="失败状态" state="error"></yz-field>
      <yz-field label="邮箱" placeholder="警告状态" state="warning"></yz-field>
    </div> -->

    <div class="page-part">
      <yz-field label="验证码" placeholder="输入验证码">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </yz-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-field'
  };
</script>
