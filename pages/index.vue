<template>
    <NuxtLayout name="default">
        <div class="body-container">
            <Snb :class="{ __active: modalStore.layerVisible && modalStore.layerTarget === 'snb' }" />
            <Swiper
                :modules="[SwiperMousewheel, SwiperFreeMode]"
                :direction="'vertical'"
                :mousewheel="true"
                :breakpoints="swiperOption.breakpoints"
                :freeMode="swiperOption.breakpoints"
                @swiper="indexStore.onSwiper"
                @slideChange="indexStore.onSlideChange"
            >
                <SwiperSlide>
                    <section class="banner">
                        <div class="container">
                            <div class="banner-contents">
                                <p class="banner-title">welcome<br />Eomji<br />Portfolio</p>
                                <p class="banner-sub-title">
                                    기쁜일에 <span class="thumb">엄지</span>를 세우듯이<br /><span class="thumb">엄지</span>와 함께라면 좋은일이 분명히 생겨날거에요!
                                </p>
                            </div>
                            <div class="character">
                                <img src="@images/common/profile.png" alt="profile" />
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 경력 & 자격증 -->
                    <section class="career">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>⭐CAREER⭐</h2>
                            </div>
                            <div class="career-container">
                                <div class="career-contents">
                                    <h3 class="contents-title">학력</h3>
                                    <ul>
                                        <li>1996년 10월 출생</li>
                                        <li>수원여자대학교 졸업 (2019.03~2021.02)</li>
                                        <li>2020.06 ~2020.08 광고콘텐츠(포토샵,일러스트기초활용)제작</li>
                                        <li>2020.09 ~ 2021.01 웹 디자인 기능사 (HTML5, CSS3, JQ) 취득 및 실무 양성 (B) 과정 수료</li>
                                        <li>2021.11 ~2021.12 엘리스 웹 개발자의 시작! JavaScript 강의 수강</li>
                                        <li>
                                            - 스파르타 강의 수강 2022.09~ - 앱개발 종합반 50기 (React-native) - zep으로 메타버스 개발 맛보기 - 엑셀보다 쉬운SQL 97기 - 웹개발 종합반
                                            (Python)
                                        </li>
                                        <li>서울사이버대학교 재학중 (2024.03~)</li>
                                    </ul>
                                </div>
                                <div class="career-contents">
                                    <h3 class="contents-title">자격증</h3>
                                    <ul>
                                        <li>
                                            GTQ 1급
                                            <button type="button" class="detail-btn" @click="licenseLayer('1')">자세히보기</button>
                                            <div class="license-layer" v-if="licenseInfo === '1'">
                                                <button class="close-btn" @click="closeLicenseLayer()">
                                                    <img src="@images/common/ico-close.png" alt="" />
                                                </button>
                                                <img src="@images/main/license_04.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            자동차 운전면허증 2종보통
                                            <button type="button" class="detail-btn" @click="licenseLayer('2')">자세히보기</button>
                                            <div class="license-layer" v-if="licenseInfo === '2'">
                                                <button class="close-btn" @click="closeLicenseLayer()">
                                                    <img src="@images/common/ico-close.png" alt="" />
                                                </button>
                                                <img src="@images/main/license_05.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            실기교사자격증
                                            <button type="button" class="detail-btn" @click="licenseLayer('3')">자세히보기</button>
                                            <div class="license-layer" v-if="licenseInfo === '3'">
                                                <button class="close-btn" @click="closeLicenseLayer()">
                                                    <img src="@images/common/ico-close.png" alt="" />
                                                </button>
                                                <img src="@images/main/license_01.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>웹디자인 기능사</li>
                                    </ul>
                                </div>
                                <div class="career-contents">
                                    <h3 class="contents-title">경력</h3>
                                    <ul>
                                        <li>웹젠</li>
                                        <li>(주)지학사</li>
                                        <li>(주)위더스 아이앤티</li>
                                        <li>대학교 학회장</li>
                                        <li>
                                            대학교 차석졸업
                                            <button type="button" class="detail-btn" @click="licenseLayer('6')">자세히보기</button>
                                            <div class="license-layer" v-if="licenseInfo === '6'">
                                                <button class="close-btn" @click="closeLicenseLayer()">
                                                    <img src="@images/common/ico-close.png" alt="" />
                                                </button>
                                                <img src="@images/main/license_06.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>졸업앨범 출판</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 사용 언어 -->
                    <section class="language">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>✨ Language ✨</h2>
                            </div>
                            <div class="language-contents">
                                <h3 class="contents-title">Tech Stack</h3>
                                <div>
                                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                                    <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white" />
                                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Jauery-0769AD?style=flat-square&logo=jquery&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white" />
                                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" />
                                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=flat-square&logo=nuxtdotjs&logoColor=white" />
                                </div>
                                <div>
                                    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
                                    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white" />
                                    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white" />
                                    <img src="https://img.shields.io/badge/WebStorm-000000?style=flat-square&logo=webstorm&logoColor=white" />
                                </div>
                            </div>
                            <div class="language-contents">
                                <h3 class="contents-title">Cowork tools</h3>
                                <div>
                                    <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white" />
                                    <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=gitlab&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Figma-F24e1e?style=flat-square&logo=figma&logoColor=white" />
                                    <img src="https://img.shields.io/badge/Redmine-B32024?style=flat-square&logo=redmine&logoColor=white" />
                                </div>
                            </div>
                            <div class="language-contents">
                                <h3 class="contents-title">Studying</h3>
                                <div>
                                    <img src="https://img.shields.io/badge/python-3776AB?style=flat-square&logo=python&logoColor=white" />
                                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 경력 작업물  -->
                    <section class="company-list">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>작업물</h2>
                            </div>
                            <div class="company-container">
                                <div class="company-contents">
                                    <h3 class="contents-title">웹젠</h3>
                                    <div class="company-image">
                                        <a href="#" @click.prevent="[indexStore.goToPage(4)]">보러가기</a>
                                        <img src="@images/common/webzen_01.png" alt="웹젠" />
                                    </div>
                                </div>
                                <div class="company-contents">
                                    <h3 class="contents-title">지학사</h3>
                                    <div class="company-image">
                                        <a href="#" @click.prevent="[indexStore.goToPage(5)]">보러가기</a>
                                        <img src="@images/common/jihaksa_01.png" alt="지학사" />
                                    </div>
                                </div>
                                <div class="company-contents">
                                    <h3 class="contents-title">위더스아이앤티</h3>
                                    <div class="company-image">
                                        <a href="#" @click.prevent="[indexStore.goToPage(6)]">보러가기</a>
                                        <img src="@images/common/withus_01.png" alt="위더스아이앤티" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 각 회사 작업물  -->
                    <section class="company-info webzen">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>웹젠</h2>
                            </div>
                            <div class="company-contents">
                                <div class="company-text">
                                    <span class="date">2023.03 ~ 재직중</span>
                                    <ul class="info">
                                        <li>런칭 게임 브랜드 페이지 제작</li>
                                        <li>사전 예약, 본인 인증 API 연동 및 기능 구현</li>
                                        <li>Facebook. Twitter 등 SNS OPEN API 연동</li>
                                        <li>전체 프로젝트 구성 (Vue3, Nuxt)</li>
                                        <li>전체 페이지 마크업 및 UI 인터렉션 구현</li>
                                        <li>인게임 webview 개발 및 유지보수</li>
                                        <li>전체 게임 포털 사이트 유지보수 및 이벤트 페이지 개발</li>
                                        <li>이벤트, 사전 예약 구현</li>
                                    </ul>
                                </div>
                                <div class="company-image">
                                    <img src="@images/common/webzen_02.png" alt="웹젠 작업물" />
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 각 회사 작업물  -->
                    <section class="company-info jihaksa">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>지학사</h2>
                            </div>
                            <div class="company-contents">
                                <div class="company-image">
                                    <img src="@images/common/jihaksa_02.png" alt="지학사 작업물" />
                                </div>
                                <div class="company-text">
                                    <span class="date">2022.07 ~ 2023.02</span>
                                    <ul class="info">
                                        <li>검정교과서 사회, 과학 홍보페이지 UI개발</li>
                                        <li>교과서 이벤트 페이지 UI개발</li>
                                        <li>내부 홈페이지 관리</li>
                                        <li>출판 업계의 프로세서 이해도 ↑</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 각 회사 작업물  -->
                    <section class="company-info withus">
                        <div class="container">
                            <div class="title-wrap">
                                <h2>위더스아이앤티</h2>
                            </div>
                            <div class="company-contents">
                                <div class="company-text">
                                    <span class="date">2021.02 ~ 2022.03</span>
                                    <ul class="info">
                                        <li>JAVA 언어 개발 MES 프로젝트 참여</li>
                                        <li>디자인 및 프론트엔드 개발</li>
                                        <li>라벨지 등과 같은 디자인 제작</li>
                                        <li>스마트 공장에 대한 이해도 ↑</li>
                                    </ul>
                                </div>
                                <div class="company-image">
                                    <img src="@images/common/withus_02.png" alt="위더스 작업물" />
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide class="footer-section"><Footer /></SwiperSlide>
            </Swiper>
        </div>
        <Layer v-if="modalStore.layerVisible && modalStore.layerTarget === 'layer'" :layerType="modalStore.layerType" />
        <Top-btn />
    </NuxtLayout>
</template>
<script setup>
import { useModalStore } from "../store/useModalStore";
import { useIndexStore } from "../store/useIndexStore";
import { ref } from "vue";

const modalStore = useModalStore();
const indexStore = useIndexStore();
const swiperOption = {
    breakpoints: {
        1280: {
            freeMode: true,
            slidesPerView: "auto",
            cssMode: "true",
            scrollbar: {
                hide: false,
                draggable: true
            }
        },
        950: {
            slidesPerView: "auto",
            cssMode: "true",
            scrollbar: {
                hide: true,
                draggable: true
            }
        },
        250: {
            slidesPerView: "auto",
            cssMode: "true",
            scrollbar: {
                hide: true,
                draggable: true
            }
        }
    }
};
const licenseInfo = ref("");
const licenseLayer = (layerNum) => {
    licenseInfo.value = layerNum;
};
const closeLicenseLayer = () => {
    licenseInfo.value = 0;
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&family=Permanent+Marker&display=swap");

.body-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .store-test {
        margin: auto;
        background-color: #ffdf15;
        padding: 2rem;
        color: #393939;
        font-size: 2rem;
        border-radius: 3rem;
    }
}
.swiper {
    width: 100%;
    height: auto;
}
.swiper-slide {
    font-size: 18px;
    background-color: #c3c3c3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    > section {
        width: 100%;
        height: 100%;

        // 메인 배너
        &.banner {
            background: url("@images/common/main-banner.jpg") top no-repeat;
            background-size: cover;
            .container {
                flex-direction: row;
                @include tablet {
                    flex-direction: column;
                    align-items: center;
                }
            }
            .character {
                width: 50%;
                max-width: 30rem;
                height: 100%;
                display: flex;
                align-items: flex-end;
                @include tablet {
                    width: 30%;
                    height: auto;
                }
                > img {
                    width: 100%;
                }
            }
            .banner-contents {
                .banner-title {
                    font-family: "Permanent Marker", cursive;
                    margin-bottom: 5rem;
                    font-size: 10rem;
                    @include tablet {
                        font-size: 6rem;
                    }
                }
                .banner-sub-title {
                    font-size: 2.5rem;
                    line-height: 4rem;
                    @include tablet {
                        font-size: 1.5rem;
                    }
                    .thumb {
                        font-weight: bold;
                        color: #ffdfb9;
                    }
                }
            }
        }

        // 경력, 자격증
        &.career {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            background: url("@images/common/main-banner.jpg") center no-repeat;
            background-size: cover;
            .container {
                flex-direction: row;
                flex-wrap: wrap;
                align-content: center;
            }
            .career-container {
                display: flex;
                align-items: flex-start;
                .career-contents {
                    width: 33.33%;
                    > ul {
                        > li {
                            list-style: disc;
                            list-style-position: inside;
                            margin-bottom: 0.7rem;
                            line-height: 2.3rem;
                            position: relative;
                            .detail-btn {
                                color: #535353;
                                font-size: 1rem;
                            }
                            .license-layer {
                                position: absolute;
                                left: 0;
                                top: 0;
                                z-index: 999;
                                max-width: 18rem;
                                max-height: 25rem;
                                .close-btn {
                                    position: absolute;
                                    right: 0;
                                    background-color: #afafaf;
                                }
                                > img {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
        &.language {
            background: url("@images/common/main-banner.jpg") bottom no-repeat;
            background-size: cover;
            .language-contents {
                margin-top: 5rem;
                > div {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
            }
        }

        // 경력 작업물
        &.company-list {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            background: url("@images/common/company-bg.png") center no-repeat;
            background-size: cover;
            .title-wrap {
                border-bottom: none;
            }
            .company-container {
                display: flex;
                align-items: flex-start;
                gap: 2rem;
                .company-contents {
                    flex: 1;
                    .contents-title {
                        border-bottom: none;
                    }
                    .company-image {
                        width: 100%;
                        position: relative;
                        &:hover {
                            > a {
                                height: 100%;
                            }
                        }
                        > a {
                            position: absolute;
                            width: 100%;
                            height: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #000000bf;
                            bottom: 0;
                            transition: 0.5s;
                            overflow: hidden;
                        }
                        > img {
                            display: block;
                            width: 100%;
                        }
                    }
                }
            }
        }
        // 각 회사 작업물
        &.company-info {
            .company-contents {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 2rem;
            }
        }
        &.webzen {
            background: url("@images/common/webzen-bg.png") center no-repeat;
            background-size: cover;
        }
        &.jihaksa {
            background: url("@images/common/jihaksa-bg.png") center no-repeat;
            background-size: cover;
        }
        &.withus {
            // background: url("@images/common/withus_02.png") center no-repeat;
            // background-size: cover;
        }
    }
    div.container {
        max-width: 120rem;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title-wrap {
            margin-bottom: 5rem;
            width: 100%;
            > h2 {
                font-size: 2.5rem;
                font-weight: bold;
                text-align: center;
            }
            > p {
            }
        }
        .contents-title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
            position: relative;
            text-align: center;
            padding-bottom: 1rem;
            border-bottom: solid 0.1rem #fff;
        }
    }
}
.footer-section {
    height: 60rem;
}
</style>
