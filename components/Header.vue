<template>
    <header>
        <nav>
            <ul>
                <li class="btn-logo">
                    <a href="#" @click.prevent="indexStore.goToPage(0)">
                        <!-- <img src="@images/common/ico-logo.png" alt="로고" /> -->
                    </a>
                </li>
                <li data-menuanchor="pre-register" class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 0 }" @click.prevent="[indexStore.goToPage(0)]">화면1</a>
                </li>
                <li data-menuanchor="event" class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 1 }" @click.prevent="[indexStore.goToPage(1)]">화면2</a>
                </li>
                <li data-menuanchor="event-sns" class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 2 }" @click.prevent="[indexStore.goToPage(2)]">화면3</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { useIndexStore } from "../store/useIndexStore";
import { useModalStore } from "../store/useModalStore";
export default {
    setup() {
        return {
            indexStore: useIndexStore(),
            modalStore: useModalStore()
        };
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss">
header {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 11.5rem;
    @include tablet {
        padding: 0;
        height: 8rem;
    }
    .btn-snb {
        display: none;
        width: 3%;
        img {
            width: 100%;
        }
        @include tablet {
            display: block;
            pointer-events: all;
            width: 5rem;
            border-right: solid 0.1rem #373a54;
            padding: 0 1rem;
            height: 100%;
        }
    }
    nav {
        width: 100%;
        padding: 0 2rem;
        @include tablet {
            height: 100%;
            padding: 0 1.5rem;
        }
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include tablet {
                height: 100%;
            }
            li {
                pointer-events: all;
                text-align: center;
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
                @include tablet {
                    margin-right: 0.5rem;
                }
                a,
                button {
                    img {
                        width: 100%;
                    }
                }
                &.btn-logo {
                    width: 20rem;
                    height: 6.4rem;
                    @include tablet {
                        width: 15rem;
                        height: auto;
                    }
                }
                &.btn-head {
                    width: 5.8rem;
                    height: 5.8rem;
                    &:hover {
                        background-color: #c5271c80;
                    }
                    @include tablet {
                        width: 5rem;
                        height: 5rem;
                    }
                    > a,
                    > button {
                        display: block;
                        padding: 1.5rem;
                        box-sizing: border-box;
                        border: solid 1px #2d2d2d;
                        width: 100%;
                        height: 100%;
                        @include tablet {
                            padding: 1rem;
                        }
                    }
                    img {
                        @include switch-device;
                    }
                }
                &.btn-head-first {
                    margin-left: auto;
                }
                &.btn-share {
                    position: relative;
                    > a {
                        &.__active {
                            background-color: #c3271c;
                            border-color: #424242;
                        }
                    }
                }
            }
        }
    }
}
</style>
