<template>
    <main class="relative-block">
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <p>3 желтоқсан 2022, 14:00</p>
                    <p>Бокейхана, 1 көшесі</p>
                    <p>Назарбаев орталығының концерттік залы</p>
                </div>
            </div>
        </header>
        <section class="main">
            <div class="container">
                <div class="main__inner">
                    <div class="main__wrap">
                        <div>
                            <p>Özımız otyryp кäsıp jasaiyq</p>
                            <p>Алғаш қазақ тіліңдегі ауқымды IT жоба!</p>
                        </div>
                        <button class="button" @click="showModal">Қатысу</button>
                    </div>
                    <div class="main__img">
                        <img src="../assets/img/main-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section class="about">
            <div class="container">
                <div class="about__inner">
                    <div>
                        <img src="../assets/img/star.svg" alt=""/>
                        <p>10+ өзекті мәселені көтеретін спикерлер</p>
                    </div>
                    <div>
                        <img src="../assets/img/star.svg" alt=""/>
                        <p>1500+ қатысушылар</p>
                    </div>
                    <div>
                        <img src="../assets/img/star.svg" alt=""/>
                        <p>6 ойды қозғайтын тематикалық бағдарлама</p>
                    </div>
                    <div>
                        <img src="../assets/img/star.svg" alt=""/>
                        <p>Көңіл көтеретін бағдарлама және сыйлықтар науқаны</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="why">
            <div class="container">
                <div class="why__inner">
                    <div class="title">StartupHana өзектілігі неде?</div>
                    <div class="why__wrap">
                        <div class="why__item">
                            Қазаұстан аумағында өскелең ұрпақтың арасында қазақ тілді
                            IT-кәсіпкерлер қауымын ұйымдастыру
                        </div>
                        <div class="why__img">
                            <img src="../assets/img/stickers.svg" alt=""/>
                        </div>
                        <div class="why__items">
                            <div class="why__item">
                                IT-кәсіпкерлік мәдениетін жаңа деңгейге шығару
                            </div>
                            <div class="why__item">
                                Жас кәсіпкерлерге жан-жақты көмек көрсету: жобаның басталуынан
                                өркендеуіне дейін
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="speakers">
            <div class="container">
                <div class="speakers__inner">
                    <div class="title">Спикерлер</div>
                    <div class="speakers__items">
                        <div class="speakers__item">
                            <img src="../assets/img/sp-1.png" alt=""/>
                            <div>
                                <p>Robert Fox</p>
                                <span> Purus nunc donec tortor aliquam nunc, non nec </span>
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-2.png" alt=""/>
                            <div>
                                <p>Wade Warren</p>
                                <span>Enim nulla quam venenatis neque sit elit amet</span>
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-3.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-4.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-5.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-6.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-7.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-1.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-2.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                        <div class="speakers__item">
                            <img src="../assets/img/sp-3.png" alt=""/>
                            <div>
                                <p>Jenny Wilson</p>
                                <span
                                >Vel cras aenean pretium tortor posuere molestie et</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="plan">
            <div class="container">
                <div class="plan__inner">
                    <div class="title">Бағдарламасы</div>
                    <div class="plan__items">
                        <div class="plan__item">
                            <div>12:00 - 14:00</div>
                            <div>Тіркелу</div>
                        </div>
                        <div class="plan__item">
                            <div>14:30</div>
                            <div>Басталуы</div>
                        </div>
                        <div class="plan__item">
                            <div>14:30</div>
                            <div><span>Oilan</span> бағдарламасы</div>
                        </div>
                        <div class="plan__item">
                            <div>15:00</div>
                            <div><span>Basta</span> бағдарламасы</div>
                        </div>
                        <div class="plan__item">
                            <div>15:30</div>
                            <div><span>Jasa</span> бағдарламасы</div>
                        </div>
                        <div class="plan__item">
                            <div>16:00</div>
                            <div><span>Toqtama</span> бағдарламасы</div>
                        </div>
                        <div class="plan__item">
                            <div>17:00</div>
                            <div>Аяқталуы</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="prize">
            <div class="container">
                <div class="prize__inner">
                    <div class="title">Сауықтыру кеші</div>
                    <div class="prize__items">
                        <div class="prize__item">
                            <img src="../assets/img/pr-1.svg" alt=""/>
                            <p>Ой мен рухты дамытатын контент</p>
                        </div>
                        <div class="prize__item">
                            <img src="../assets/img/pr-2.svg" alt=""/>
                            <p>Қазақ тілді IT әуесқойлар қауымдастығы</p>
                        </div>
                        <div class="prize__item">
                            <img src="../assets/img/pr-3.svg" alt=""/>
                            <p>Байқаулар мен сыйлықтар ұтысы!</p>
                        </div>
                        <div class="prize__item">
                            <img src="../assets/img/pr-4.svg" alt=""/>
                            <p>Astana Hub оқу бағдарламалары бойынша кеңестер</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contacts">
            <div class="container">
                <div class="contacts__inner">
                    <div class="contacts__info">
                        <p>
                            Конференция Астана қаласы «Назарбаев орталығының концерттік
                            залы» кешенінде өтеді
                        </p>
                        <div>
                            <div>
                                <img src="../assets/img/icon-1.svg" alt=""/>
                                <span> 3 желтоқсан 2022, 14:00 </span>
                            </div>
                            <div>
                                <img src="../assets/img/icon-2.svg" alt=""/>
                                <span>Бокейхана, 1 көшесі </span>
                            </div>
                        </div>
                    </div>
                    <div class="contacts__maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.304792289789!2d71.43098551571032!3d51.102836448022984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245844159552149%3A0xd2d83be83443e20!2z0YPQuy4g0JDQu9C40YXQsNC90LAg0LHQvtC60LXQudGF0LDQvdCwIDEsINCQ0YHRgtCw0L3QsCAwMjAwMDA!5e0!3m2!1sru!2skz!4v1667624266101!5m2!1sru!2skz"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
        <section class="request">
            <div class="container">
                <div class="request__inner">
                    <p>Билеттер саны шектеулі, өз мүмкіндігінді жіберіп алма!</p>
                    <div class="request__time">
                        <div>
                            <p>{{ daysLeft }}</p>
                            <p>күндер</p>
                        </div>
                        <div>
                            <p>{{ hoursLeft }}</p>
                            <p>сағат</p>
                        </div>
                        <div>
                            <p>{{ minutesLeft }}</p>
                            <p>минут</p>
                        </div>
                    </div>
                    <button class="button" @click="showModal">Қатысу</button>
                </div>
            </div>
        </section>
        <modal-component ref="modal"/>
    </main>
</template>

<script>
import ModalComponent from "./ModalComponent";
import dayjs from "dayjs";
export default {
    name: "Main",
    components: {ModalComponent},
    data(){
        return {
            deadline:'2022-12-03 14:00:00'
        }
    },
    mounted() {
        console.log('main mounted')
        console.log(dayjs(this.deadline))
    },
    methods:{
        dayjs,
        showModal(){
            this.$refs.modal.showModal()
        }
    },
    computed:{
        daysLeft(){
            return Math.abs(dayjs().diff(this.deadline,'days'))
        },
        hoursLeft(){
            return Math.abs(dayjs().diff(this.deadline,'hours')/24)
        },
        minutesLeft(){

            return Math.abs(dayjs().diff(this.deadline,'minute')/60/24)
        }
    }
};
</script>

<style scoped>

</style>
