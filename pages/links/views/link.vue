<template>
    <a :href="source" class="link">
        <div class="link-circle">
            <img :src="img" alt="" srcset="">
        </div>
        <p class="link-label">{{ label }}</p>
    </a>
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            default: '/'
        },
        img: {
            type: String,
            default: '/images/links/e-commerce.png'
        },
        label: {
            type: String,
            default: 'Label'
        },
        
    }
}
</script>

<style lang="scss" scoped>
.link {
    cursor: pointer;
    width: 124px;
    height: 143px;
    &-circle {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background: #FFFFFF;
        border: 1px solid #86D0C1;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
    }
    &-label {
        color: #52AF9C;
        text-align: center;
        font-size: 12px;
        margin-top: 6px;
    }
}
.link:hover {
    opacity: .8;
}
</style>