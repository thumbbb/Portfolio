<template>
    <button type="button" class="top-btn" @click="indexStore.goToPage(0)">
        <span class="top-btn-txt">TOP</span>
        <span class="top-btn-arrow"></span>
    </button>
</template>

<script>
import { useIndexStore } from "../store/useIndexStore";
export default {
    setup() {
        return {
            indexStore: useIndexStore()
        };
    }
};
</script>

<style lang="scss">
.top-btn {
    position: fixed;
    right: 3%;
    bottom: 20%;
    z-index: 999;
    touch-action: none;
    padding: 0 3rem;
    height: 4rem;
    @include tablet {
        right: 5%;
        bottom: 28%;
        @include mobile {
            bottom: 5%;
            width: 5rem;
            height: 5rem;
            padding: 0;
        }
    }
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgb(205 205 205 / 63%);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 20;
        border-radius: 50%;
    }
    &-txt {
        display: inline-block;
        font-size: 1.5rem;
        color: #fff;
        position: relative;
        z-index: 25;
        margin: auto;
        line-height: 4rem;
        text-align: center;
        @include mobile {
            display: none;
        }
    }
    &-arrow {
        display: inline-block;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        &:after {
            content: "↑";
            display: inline-block;
            width: 1rem;
            margin: 0 0 0.3rem 0.5rem;
            vertical-align: middle;
        }
        @include mobile {
            font-size: 2rem;
            &:after {
                margin: 0;
                display: block;
                width: 100%;
            }
        }
    }
}
</style>
