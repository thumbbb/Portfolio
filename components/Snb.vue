<template>
    <nav id="snb" class="snb">
        <ul>
            <li class="btn-close" @click="modalStore.layerToggle(null)">
                <img src="@images/common/ico-close.png" alt="snb close" />
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 0 }" @click.prevent="[indexStore.goToPage(0), mobileSnbClose()]">HOME</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 1 }" @click.prevent="[indexStore.goToPage(1), mobileSnbClose()]">introduce</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 2 }" @click.prevent="[indexStore.goToPage(2), mobileSnbClose()]">Career</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 3 }" @click.prevent="[indexStore.goToPage(3), mobileSnbClose()]">Language</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 4 }" @click.prevent="[indexStore.goToPage(4), mobileSnbClose()]">작업물</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 5 }" @click.prevent="[indexStore.goToPage(5), mobileSnbClose()]">Webzen</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 6 }" @click.prevent="[indexStore.goToPage(6), mobileSnbClose()]">Jihaksa</a>
            </li>
            <li class="snb-menu">
                <a href="#" :class="{ __active: indexStore.currentPageIndex === 7 }" @click.prevent="[indexStore.goToPage(7), mobileSnbClose()]">Withus</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useIndexStore } from "../store/useIndexStore";
import { useModalStore } from "../store/useModalStore";

const indexStore = useIndexStore();
const modalStore = useModalStore();

const mobileSnbClose = () => {
    document.getElementById("snb").classList.remove("__active");
    document.querySelector(".snb-bg").classList.remove("__active");
    document.getElementById("snb").scrollTo(0, 0);
    setTimeout(() => this.modalStore.layerToggle(null), 700);
};
</script>

<style lang="scss">
.snb {
    display: none;
    @include tablet {
        position: fixed;
        z-index: 1000;
        right: 0;
        top: 0;
        left: unset;
        bottom: unset;
        max-width: 50rem;
        width: 60%;
        height: 100vh;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        background-color: #000000d0;
        padding: 0;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &.__active {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @include mobile {
        width: 90%;
    }
    ul {
        @include tablet {
            display: flex;
            align-items: center;
            height: 100%;
            margin-left: auto;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 10rem;
            margin-left: 0;
            width: 100%;
            position: relative;
        }
        li {
            @include tablet {
                pointer-events: all;
                text-align: center;
                &:last-child {
                    margin-right: 0;
                }
                a,
                button {
                    img {
                        width: 100%;
                    }
                }
            }
            &.btn-close {
                @include tablet {
                    display: block;
                    width: 3rem;
                    position: absolute;
                    right: 2rem;
                    top: 2.5rem;
                    > img {
                        display: block;
                        width: 100%;
                    }
                }
                @include mobile {
                    width: 2rem;
                }
            }
            &.snb-menu {
                @include tablet {
                    width: 100%;
                }
                > a {
                    @include tablet {
                        display: block;
                        line-height: 9rem;
                        font-size: 1.7rem;
                        color: #fff;
                        &.__active {
                            color: #ffdf15;
                        }
                    }
                    @include mobile {
                        line-height: 5rem;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
}
</style>
