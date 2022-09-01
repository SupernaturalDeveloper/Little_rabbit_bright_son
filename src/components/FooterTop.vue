<template >
    <div class="footer-top">
        <footer>
            <ul>
                <li>
                    <p class="title">客房服務</p>
                </li>
                <li>
                    <p class="title">客房服務</p>
                </li>
                <li>
                    <p class="title">客房服務</p>
                </li>
                <li>
                    <p class="title">客房服務</p>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.footer-top {
    width: 100%;
    height: 290px;

    footer {
        width: 1240px;
        margin: 0 auto;
        height: 100%;

        ul {
            display: flex;
            padding: 60px 0 40px 25px;
            position: relative;
            width: 100%;
            li {
                width: 25%;
                height: 190px;
                text-align: center;
                padding: 0 72px;
                border-right: 1px solid #f2f2f2;
                color: #999;
                text-align: center;

                p {
                    line-height: 1;
                    font-size: 18px;
                }
            }
            :last-child{
                border-right: transparent;
            }
        }

    }
}
</style>