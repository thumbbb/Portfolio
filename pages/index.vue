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
                    <button class="store-test" @click="modalStore.layerFlow('layer', 'test')">열려라 참깨라면!</button>
                </SwiperSlide>
                <SwiperSlide> INDEX </SwiperSlide>
                <SwiperSlide>
                    <!-- 경력 & 자격증 -->
                    <section class="career">
                        <div class="title-wrap">
                            <h2>⭐CAREER⭐</h2>
                        </div>
                        <div class="career-contents">
                            <h3 class="career-title">학력</h3>
                            <ul>
                                <li>1996년 10월 출생</li>
                                <li>수원여자대학교 졸업 (2019.03~2021.02)</li>
                                <li>2020.09 ~ 2021.01 웹 디자인 기능사 (HTML5, CSS3, JQ) 취득 및 실무 양성 (B) 과정 수료</li>
                                <li>서울사이버대학교 재학중 (2024.03~)</li>
                            </ul>
                        </div>
                        <div class="career-contents">
                            <h3 class="career-title">자격증</h3>
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
                                <li>
                                    인재양성지도자
                                    <button type="button" class="detail-btn" @click="licenseLayer('4')">자세히보기</button>
                                    <div class="license-layer" v-if="licenseInfo === '4'">
                                        <button class="close-btn" @click="closeLicenseLayer()">
                                            <img src="@images/common/ico-close.png" alt="" />
                                        </button>
                                        <img src="@images/main/license_02.jpg" alt="" />
                                    </div>
                                </li>
                                <li>
                                    리더십코칭지도사
                                    <button type="button" class="detail-btn" @click="licenseLayer('5')">자세히보기</button>
                                    <div class="license-layer" v-if="licenseInfo === '5'">
                                        <button class="close-btn" @click="closeLicenseLayer()">
                                            <img src="@images/common/ico-close.png" alt="" />
                                        </button>
                                        <img src="@images/main/license_03.jpg" alt="" />
                                    </div>
                                </li>
                                <li>웹디자인 기능사</li>
                            </ul>
                        </div>
                        <div class="career-contents">
                            <h3 class="career-title">경력</h3>
                            <ul>
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
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 사용 언어 -->
                    <h3 align="center">✨ Tech Stack ✨</h3>
                    <div align="center">
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
                    <div align="center">
                        <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
                        <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
                        <img src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white" />
                        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
                        <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white" />
                        <img src="https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white" />
                        <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white" />
                        <img src="https://img.shields.io/badge/WebStorm-000000?style=flat-square&logo=webstorm&logoColor=white" />
                    </div>
                    <h3 align="center">✨ Cowork tools ✨</h3>
                    <div align="center">
                        <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white" />
                        <img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=gitlab&logoColor=white" />
                        <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white" />
                        <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" />
                        <img src="https://img.shields.io/badge/Figma-F24e1e?style=flat-square&logo=figma&logoColor=white" />
                        <img src="https://img.shields.io/badge/Redmine-B32024?style=flat-square&logo=redmine&logoColor=white" />
                    </div>
                    <h3 align="center">✨ Studying ✨</h3>
                    <div align="center">
                        <img src="https://img.shields.io/badge/python-3776AB?style=flat-square&logo=python&logoColor=white" />
                        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <!-- 작업물  -->
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
        max-width: 120rem;
        width: 100%;
    }
}
.footer-section {
    height: 60rem;
}

// 경력
.career {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
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
    &-contents {
        width: 33.33%;
        .career-title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
            position: relative;
            text-align: center;
            padding-bottom: 1rem;
            border-bottom: solid 0.1rem #fff;
        }
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
</style>
