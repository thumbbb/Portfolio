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
                <SwiperSlide> Event </SwiperSlide>
                <SwiperSlide> Etc. </SwiperSlide>
                <SwiperSlide> QnA </SwiperSlide>
                <SwiperSlide class="footer-section"><Footer /></SwiperSlide>
            </Swiper>
        </div>
        <Layer v-if="modalStore.layerVisible && modalStore.layerTarget === 'layer'" :layerType="modalStore.layerType" />
        <Top-btn />
    </NuxtLayout>
</template>

<script>
import { useModalStore } from "../store/useModalStore";
import { useIndexStore } from "../store/useIndexStore";
export default {
    setup() {
        return {
            modalStore: useModalStore(),
            indexStore: useIndexStore(),
            swiperOption: {
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
            }
        };
    },
    data() {
        return {
            shareUrl: true,
            shareFacebook: true,
            shareTwitter: true
        };
    }
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
}
.footer-section {
    height: 60rem;
}
</style>
