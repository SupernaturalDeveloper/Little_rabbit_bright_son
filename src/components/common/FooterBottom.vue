<template >
    <div class="footer-bottom">
        <footer>
            <ul>
                <li>价格亲民</li>
                <li>物流快捷</li>
                <li>品质新鲜</li>
            </ul>
            <div class="last-bottom">
                <p>
                    <span>关于我们</span>
                    <span>帮助中心</span>
                    <span>售后服务</span>
                    <span>配送与验收</span>
                    <span>商务合作</span>
                    <span>搜索推荐</span>
                    <span>友情链接</span>
                </p>
            </div>
        </footer>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.footer-bottom {
    width: 100%;
    background-color: #333;

    footer {
        width: 1240px;
        margin: 0 auto;

        ul {
            height: 178px;
            line-height: 58px;
            padding: 60px 100px;
            border-bottom: 1px solid #434343;
            display: flex;
            justify-content: space-between;

            li {
                height: 58px;
                line-height: 58px;
                color: #fff;
                font-size: 28px;
            }
        }

        .last-bottom {
            height: 170px;
            padding-top: 40px;
            text-align: center;
            color: #999;
            font-size: 15px;

            p {
                line-height: 1;
                margin-bottom: 20px;

                span {
                    color: #999;
                    line-height: 1;
                    padding: 0 10px;
                    border-right: 1px solid #999;
                }
            }
        }
    }
}
</style>