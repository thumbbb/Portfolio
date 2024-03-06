<template>
    <header>
        <nav>
            <ul>
                <li class="btn-logo">
                    <a href="#" @click.prevent="indexStore.goToPage(0)">
                        <img src="@images/common/ico-logo.png" alt="로고" />
                    </a>
                </li>
                <li class="btn-head-first btn-head">
                    <button @click.prevent="indexStore.indexAudio()" class="nav-btn">
                        <img src="@images/common/ico-sound.png" v-if="!indexStore.audioData" alt="소리재생" />
                        <img src="@images/common/ico-sound-off.png" v-if="indexStore.audioData" alt="소리멈춤" />
                        <audio id="mainAudio" class="audio-item">
                            <source src="@images/common/audio/main-bgm.mp3" type="audio/mp3" />
                        </audio>
                    </button>
                </li>
                <li class="btn-head pc-element">
                    <a href="https://www.youtube.com/channel/UChDYjUDqiaF4qv8FqmKAXqg" class="nav-btn" target="_blank">
                        <img src="@images/common/ico-youtube.png" alt="유투브" />
                    </a>
                </li>
                <li class="btn-head pc-element">
                    <a href="https://twitter.com/ShadowMoG_KR" class="nav-btn" target="_blank">
                        <img src="@images/common/ico-twitter.png" alt="트위터" />
                    </a>
                </li>
                <li class="btn-head btn-share">
                    <a
                        href="#"
                        @click.prevent="modalStore.layerToggle('share')"
                        class="nav-btn"
                        :class="{ __active: modalStore.layerVisible && modalStore.layerTarget === 'share' }"
                    >
                        <img src="@images/common/ico-share.png" alt="공유"
                    /></a>
                    <Share v-if="modalStore.layerVisible && modalStore.layerTarget === 'share'" :class="{ __active: modalStore.layerVisible }" />
                </li>
                <li class="btn-head pc-element">
                    <a href="https://shadow-garden.webzen.co.kr/" class="nav-btn" target="_blank">
                        <img src="@images/common/ico-home.png" alt="커뮤니티" />
                    </a>
                </li>
                <li class="btn-head mo-element">
                    <a href="#" class="nav-btn" @click.prevent="modalStore.layerToggle('snb')">
                        <img src="@images/common/snb-btn.png" alt="snb 버튼" />
                    </a>
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
        return {
            audioToggle: false
        };
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
