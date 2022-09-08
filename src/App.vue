<template>
    <HeaderView />
    <TitleView />
    <div class="main">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    <FooterTop />
    <FooterBottom />
</template>
<style lang="scss" scoped>
    .main {
        background: rgb(245, 245, 245);
        padding-bottom: 20px;
        .content {
            width: 1240px;
            margin: 0 auto;
        }
    }
    a{
        color: #999;
    }
</style>
