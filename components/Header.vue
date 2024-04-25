<template>
    <header :class="{ __active: indexStore.currentPageIndex !== 0 }">
        <nav>
            <button type="button" class="btn-snb" @click.prevent="modalStore.layerToggle('snb')">
                <img src="@images/common/snb-btn.png" alt="snb menu" />
            </button>
            <ul>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 0 }" @click.prevent="[indexStore.goToPage(0)]">HOME</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 1 }" @click.prevent="[indexStore.goToPage(1)]">introduce</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 2 }" @click.prevent="[indexStore.goToPage(2)]">Career</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 3 }" @click.prevent="[indexStore.goToPage(3)]">Language</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 4 }" @click.prevent="[indexStore.goToPage(4)]">작업물</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 5 }" @click.prevent="[indexStore.goToPage(5)]">Webzen</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 6 }" @click.prevent="[indexStore.goToPage(6)]">Jihaksa</a>
                </li>
                <li class="snb-menu">
                    <a href="#" :class="{ __active: indexStore.currentPageIndex === 7 }" @click.prevent="[indexStore.goToPage(7)]">Withus</a>
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

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9em;
    background: #0000003d;
    border: none;
    transition: 0.5s;
    &.__active {
        background-color: #222;
        height: 7em;

        .snb-menu {
            > a {
                line-height: 7rem;
            }
        }
    }
    @include tablet {
        padding: 0;
        height: 8rem;
    }
    nav {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        .btn-snb {
            display: none;
            @include tablet {
                display: block;
                width: 5rem;
                margin-left: auto;
                height: 100%;
                img {
                    width: 100%;
                }
            }
            @include mobile {
                width: 3rem;
                margin-right: 0;
            }
        }
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 80%;
            margin-left: auto;
            @include tablet {
                display: none;
            }
            li {
                pointer-events: all;
                text-align: center;
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
                a,
                button {
                    img {
                        width: 100%;
                    }
                }
                &.snb-menu {
                    width: calc(100% / 5);
                    > a {
                        display: block;
                        line-height: 9rem;
                        font-size: 1.5rem;
                        color: #fff;
                        &.__active {
                            color: #ffdf15;
                        }
                    }
                }
            }
        }
    }
}
</style>
