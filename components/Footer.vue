<template>
    <footer class="footer-container">
        <ul class="foot-list">
            <li><a href="https://privacy.webzen.co.kr/Policy/main/4" target="_blank">이용약관</a></li>
            <li>
                <a href="https://privacy.webzen.co.kr/Policy/main/2" target="_blank"><strong>개인정보처리방침</strong></a>
            </li>
            <li><a href="https://shadow-garden.webzen.co.kr/community-policy" target="_blank">운영정책</a></li>
            <li><a href="https://company.webzen.com/ko" target="_blank">회사소개</a></li>
        </ul>
        <p class="copyright">
            ©Daisuke Aizawa,KADOKAWA/Shadow Garden<br />
            ©Master of Garden Project. Published by WEBZEN
        </p>
    </footer>
</template>

<script>
import { useModalStore } from "../store/useModalStore";

export default {
    setup() {
        return {
            modalStore: useModalStore()
        };
    }
};
</script>

<style lang="scss" scoped>
.footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 9rem;
    padding: 0.5rem 0;
    z-index: 60;
    background-color: #000;
    color: white;
    margin-top: auto;
    @include tablet {
        margin-top: 10rem;
        padding-bottom: 8rem;
    }
    .foot-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-gap: 1rem;
        > li {
            position: relative;
            & + li {
                &:after {
                    content: "";
                    width: 0.1rem;
                    height: 100%;
                    background-color: #848484;
                    position: absolute;
                    top: 0.1rem;
                    left: -0.5rem;
                }
            }
            > a {
                display: block;
                font-size: 1.4rem;
                color: #d7d7d7;
                white-space: nowrap;
                font-family: "Noto Sans KR", sans-serif;
                @include tablet {
                    font-size: 1.2rem;
                    &:after {
                        padding-left: 0.5rem;
                        font-size: 1rem;
                    }
                }
            }
        }
        & + .copyright {
            margin-top: 1rem;
        }
    }
    .copyright {
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #7f7f7f;
        text-align: center;
        font-family: "Noto Sans KR", sans-serif;
        @include tablet {
            font-size: 1rem;
        }
    }
}
</style>
