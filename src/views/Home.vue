<template>
  <div class="container-fluid m-0 p-0">
    <!--Хедер-->
    <div id="header" class="header-height container-fluid p-0">
        <div class="navbar-mrvk-logo">
          <a href="#" class="navbar-mrvk-logo__link">
            <div class="navbar-mrvk-logo__svg">
              <img src="../assets/images/logo.svg" alt="logo">
            </div>
            <div class="navbar-mrvk-logo__title">
              <span>Муравейник</span>
            </div>
          </a>
        </div>

        <div class="navbar-mrvk-menu">
          <ul class="navbar-mrvk-menu__ul">
            <li class="navbar-item">
              <a href="#usage">Как это работает</a>
            </li>
            <li class="navbar-item">
              <a href="#possibilities">Возможности</a>
            </li>
            <li class="navbar-item">
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>

        <div class="navbar-mrvk-group-btn">
          <a href="tel:+79506405272" class="number">+7 950 640-52-72</a>
          <a href="https://lk.mrvk.pro/">
            <button class="login">Войти</button>
          </a>
          <div>
            <button class="register" @click="handleShowModal">
              <span>Регистрация</span>
              <img src="../assets/images/link-arrow.svg" alt="linkArrow">
            </button>
          </div>
        </div>
        <div class="burger" @click="handleShowBurger">
          <img src="../assets/images/burger.svg" alt="burger">
        </div>
    </div>
    <!--Главный Блок-->
    <div id="home-page">
      <div class="mrvk-main-wrapper container p-0">
        <div class="left">
          <div class="title">
            <span>Муравейник</span>
          </div>
          <div class="subtitle">

            <span>Сервис</span>
            <span>электронных</span>
            <div class="subtitle_block">
              <span class="bottom-subtitle">чек-листов</span>
              <label class="subtitle__switcher">
                <input type="checkbox" class="switcher__input" disabled>
                <span class="switcher__slider"></span>
              </label>
            </div>
          </div>
          <div class="mrvk-main-wrapper-list">
            <ul>
              <li><span>Контролируйте качество работы</span>торговой сети</li>
              <li><span>Анализируйте работу</span>торговых точек</li>
              <li><span>Повышайте эффективность</span>работы сотрудников</li>
              <li><span>Выявляйте слабые места</span>в бизнес-процессах</li>
              <li><span>Снижайте нагрузку</span>на управленческий персонал</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <img class="cover__image" src="../assets/images/main-phone.png" alt="img">
        </div>
      </div>

      <div class="mrvk-retail-block container p-0">
        <div class="mrvk-retail-block__title">
          Для кого подойдет<span>Муравейник</span>
        </div>
        <div class="mrvk-retail-block__subtitle">
          Любые розничные сетевые точки в сфере торговли и услуг
        </div>
      </div>
      <div class="mrvk-retail-slider container p-0">
        <swiper
          :slides-per-view="3"
          :space-between="16"
          :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
          }"
          :navigation="{ nextEl: '.retail-button-right', prevEl: '.retail-button-left' }"
          :modules="modules"
          class="swiper-retail"
        >
          <swiper-slide v-for="(retailer, key) in retailers" :key="key" class="mrvk-retail-card">
            <img class="retail-img" :src="`${getImgUrl(retailer.srcImg)}`" alt="retailerImg" />
            <div class="retailer-title">
              {{ retailer.title }}
            </div>
            <div class="retailer-subtitle">
              {{ retailer.subtitle }}
            </div>
            <button class="retail-button" @click="handleShowModal">
              <span> Попробовать бесплатно</span>
              <img src="../assets/images/link-arrow.svg" alt="linkArrow">
            </button>
          </swiper-slide>
          <div class="retail-button-group">
            <button type="button" class="retail-button-left" @click="swiperPrevSlide">
              <img src="../assets/images/left-arrow.svg " alt="leftArrow">
            </button>
            <button type="button" class="retail-button-right" @click="swiperNextSlide">
              <img src="../assets/images/right-arrow.svg " alt="rightArrow">
            </button>
          </div>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
    <!--Как это работает-->
    <div id="usage" class="container-fluid p-0">
      <div class="right-usage-block">
        <img class="background-phone" src="../assets/images/background-phone.png" alt="backgroundPhone">
        <div class="usage-title">
          <span>Как</span>
          <div class="first-line">работает</div>
          <div class="second-line">Муравейник</div>
        </div>
      </div>
      <div class="main-usage-block">
        <div class="usage-content">
          <swiper
            :slidesPerView="1"
            :direction="'vertical'"
            :pagination="{
              el: '.paginator',
              clickable: true,
            }"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="swiper-usage"
          >
            <div class="paginator"></div>
            <div class="left-side-text">
              <div class="slide">Шаг 1</div>
              <div class="slide">Шаг 2</div>
              <div class="slide">Шаг 3</div>
              <div class="slide">Шаг 4</div>
            </div>
            <swiper-slide class="mrvk-usage-card" v-for="(usage, key) in usages" :key="key">
              <div class="slide-desc1">
                <p>{{ usage.slide.desc1 }}</p>
                <span>{{ usage.id }}</span>
              </div>
              <img class="usage-img" :src="`${getImgUrl(usage.slide.srcImg)}`" alt="usageImg">
              <div class="slide-desc2">
                {{ usage.slide.desc2 }}
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="usage-function-block">
          <div class="title">
            Все функции для контроля работы торговой сети собраны в одном универсальном приложении
          </div>
          <div class="usage-function-block-template">
            <div class="percent-block">
              <div>
                <span>+</span>50%
                <p>
                  Контроль работы сотрудников
                </p>
              </div>
              <div>
                <span>+</span>40%
                <p>
                  Повышение лояльности клиентов
                </p>
              </div>
              <div>
                <span>+</span>30%
                <p>
                  Увеличение скорости обработки данных
                </p>
              </div>
            </div>
            <div class="midle-column">
              <img src="../assets/images/usage-phone.png" alt="usagePhone">
            </div>
            <div class="percent-block right-column">
              <div>
                <span>-</span>95%
                <p>
                  Время на постановку задач
                </p>
              </div>
              <div>
                <span>-</span>70%
                <p>
                  Уменьшение количества нарушений
                </p>
              </div>
              <div>
                <span>-</span>50%
                <p>
                  Время на анализ и контроль
                </p>
              </div>
            </div>
          </div>
          <div class="orange-block">
            <img class="bg-logo" src="../assets/images/background-logo.png" alt="bgLogo">
            <div class="title">
              Бесплатная версия
              <span>с полным функционалом</span>
            </div>
            <button class="try-now" id="show-modal" @click="handleShowModal">
              <span>Попробовать прямо сейчас</span>
              <img src="../assets/images/right-arrow-black.svg" alt="rightArrow">
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Возможности-->
    <div id="possibilities" class="container-fluid p-0" @click.self="activeIndex=''">
      <div class="left-possibilities-block">
        <div class="possibilities-title">
          <span>Возможности</span>
          <div class="first-line">Муравейника</div>
        </div>
      </div>
      <div class="main-possibilities-block">
        <div class="possibilities-content">
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/01.svg" alt="copy">
            </div>
            <p>
              <span>Проверки качества работы</span> торговых и сервисных точек по чек-листам
            </p>
          </div>
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/02.svg" alt="copy">
            </div>
            <p>
              <span>Создание задач</span> для устранения нарушений по итогам проверки
            </p>
          </div>
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/03.svg" alt="copy">
            </div>
            <p>
              <span>Мониторинг цен</span> на товары и услуги конкурентов
            </p>
          </div>
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/04.svg" alt="copy">
            </div>
            <p>
              <span>Аналитическая панель</span> для контроля результатов работы сети
            </p>
          </div>
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/05.svg" alt="copy">
            </div>
            <p>
              <span>Гибкая настройка</span> чек-листов и анкетирования под любые задачи
            </p>
          </div>
          <div class="possibilities-section">
            <div class="possibilities-section__img">
              <img src="../assets/images/possibilities/possibilities-section/06.svg" alt="copy">
            </div>
            <p>
              <span>Контроль посещения точек</span> аудиторами через GPS
            </p>
          </div>
        </div>
      </div>
      <div class="triangle-block">
        <p>
          Всё для контроля работы компании<span>в одном сервисе</span>
        </p>
        <div class="triangle"></div>
      </div>
      <div class="central-circle-container">
        <div class="central-gray-circle">
          <div class="central-background">
            <img src="../assets/images/laptop-and-phone.png" alt="laptop-and-phone">
          </div>
          <div :class="['circle-icon', item.name]" v-for="(item, index) in circleItems" :key="item.id">
            <BaseTooltip
              :props-class="['custom-tooltip', item.name + '-tooltip', {'active': activeIndex === index}]"
              :title="item.title"
              :desc1="item.desc1"
              :desc2="item.desc2"
              :active="{'active': activeIndex === index }"
              :get-img-url="getImgUrl"
              @close="handleClose"
              @click="setActive(index)"
            >
              <img :class="`${item.name}-img`" :src="`${getImgUrl(item.imgSrc)}`" :alt="`${item.name}`">
            </BaseTooltip>
          </div>
          <div class="circle-description">
            <p class="paper">Полный уход от бумажных отчетов</p>
            <p class="arrows">Все данные <br> в одном месте</p>
            <p class="time">Экономия времени</p>
            <p class="settings">Контроль качества</p>
            <p class="exclamation">Работа <br>с нарушениями</p>
            <p class="check">Достоверность данных</p>
            <p class="diagram">Простая <br>и понятная аналитика</p>
          </div>
        </div>
      </div>
      <div class="right-difficulties-block">
        <div class="difficulties-title">С какими сложностями сталкивались<br>наши клиенты<span>до подключения Муравейника</span>
        </div>
      </div>
      <div class="difficulties-block">
        <div class="difficulties-header">
          <div v-for="role in roles" :key="role">
            <span @click="handleSelectRole" :class="{'active': selectedRole === role}">{{ role }}</span>
          </div>
        </div>
        <pre />
        <div class="difficulties-body">
          <ul>
            <li v-for="item in difficultItems" :key="item">
              <img class="item-img" src="../assets/images/possibilities/difficulties-list.svg" alt="li">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="personal-web-account">
        <div class="title">
          Все функции для контроля работы торговой сети собраны в одном универсальном приложении
        </div>

        <swiper
          :slides-per-view="2"
          :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
          }"
          :slidesOffsetBefore="5"
          :navigation="{ nextEl: '.account-button-right', prevEl: '.account-button-left' }"
          :modules="modules"
          class="swiper-account"
        >
          <swiper-slide v-for="(acc, key) in accountSliderSrcs" :key="key" class="mrvk-account-card">
            <img class="account-img" :src="`${getImgUrl(acc.imgSrc)}`" alt="retailerImg" />
          </swiper-slide>
        </swiper>

        <div class="account-buttons">
          <div class="account-button-group">
            <button type="button" class="account-button-left" @click="swiperPrevSlide">
              <img src="../assets/images/left-arrow.svg " alt="leftArrow">
            </button>
            <button type="button" class="account-button-right" @click="swiperNextSlide">
              <img src="../assets/images/right-arrow.svg " alt="rightArrow">
            </button>
          </div>
        </div>
      </div>

      <div class="left-easy-start-block">
        <div class="easy-start-title">
          <span>Легкий старт</span>
          <div class="first-line">и удобная работа</div>
        </div>
      </div>
      <div class="main-easy-start-block">
        <div class="easy-start-content">
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/01.svg" alt="copy">
            </div>
            <p>
              <span>Простота внедрения</span> Наши специалисты самостоятельно настроят<br>все необходимые процессы для
              запуска.
            </p>
          </div>
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/02.svg" alt="copy">
            </div>
            <p>
              <span>Экономия на оборудовании</span> Для работы потребуются<br>только мобильные телефоны сотрудников.
            </p>
          </div>
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/03.svg" alt="copy">
            </div>
            <p>
              <span>Гарантия результата</span> Мы предлагаем бесплатный тестовый период, до тех пор,<br>пока вы не
              убедитесь, что это работает.
            </p>
          </div>
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/04.svg" alt="copy">
            </div>
            <p>
              <span>Облачное хранение данных</span> Гарантированная сохранность полученных данных. Доступность 24/7.<br>Отсутствие
              необходимости использования сервера компании.
            </p>
          </div>
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/05.svg" alt="copy">
            </div>
            <p>
              <span>Полная поддержка</span> Наш продукт не нужно настраивать и поддерживать силами ваших
              специалистов.<br>Мы берем все заботы на себя.
            </p>
          </div>
          <div class="easy-start-section">
            <div class="easy-start-section__img">
              <img src="../assets/images/possibilities/easy-start-section/06.svg" alt="copy">
            </div>
            <p>
              <span>Любые интеграции и доработки</span> Готовы реализовать интеграцию данных с любыми вашими
              системами.<br>Возможна доработка продукта под любые задачи.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Вопросы-->
    <div id="questions" class="container">
      <div class="question-block">
        <p class="title">Остались вопросы?</p>
        <p class="subtitle">Просто позвоните нам!</p>
        <p class="number">+7 800 555 66 77</p>
        <p class="supports">Поддержка в соцсетях:</p>
        <div class="icon-group">
          <a href="https://telegram.org/">
            <img src="../assets/images/telegram.svg" alt="telegram">
          </a>
          <a href="https://www.whatsapp.com/">
            <img src="../assets/images/whatsapp.svg" alt="whatsApp">
          </a>
        </div>

        <button @click="handleShowModal">Подключиться сейчас</button>
      </div>
      <img class="question-bg" src="../assets/images/questions-background.png" alt="questionBg">
    </div>
    <div id="cost-calculation-block" class="container-fluid p-0">
      <img class="bg-logo" src="../assets/images/cost-calculate-bg.png" alt="bgLogo">
      <div class="left-block">
        <div class="title">
          Расчет стоимости Муравейника
        </div>
        <div class="subtitle">
          Заполните форму и мы рассчитаем стоимость для вашей компании
        </div>
      </div>
      <form class="right-block" @submit="checkForm2" method="post">
        <div class="input-block" >
          <input :class="[smartErrors.includes('smart-name') ? 'field-error' : '1']" type="text" placeholder="Как вас зовут?" v-model="smartName">
          <input :class="[smartErrors.includes('smart-number') ? 'field-error' : '2']" type="text" placeholder="+7 (___) ___-__-__" v-model="smartNumber">
          <p>Количество точек</p>
          <div class="count-point">
            <button type="button" @click="handleCountPlace('minus')">-</button>
            <input type="text" :value="countPlace" disabled>
            <button type="button" @click="handleCountPlace('plus')">+</button>
          </div>
        </div>
        <button class="calculate" type="submit">Узнать стоимость</button>
        <p class="calculate-description">Нажимая на кнопку, вы соглашаетесь<br>на <a href="#">обработку персональных
          данных</a></p>
      </form>
    </div>
    <!--Контакты-->
    <div id="contacts" class="container-fluid">
      <div class="content container-fluid p-0">
        <div class="title">
          Контакты
        </div>
        <div class="ant-hill">
          <h4 class="ant-hill-title">
            Муравейник
          </h4>
          <p>
            Программа управления<br>и контроля торговой сети
          </p>
          <p>
            г. Екатеринбург<br>ул. Сулимова д. 50, оф. 0.28
          </p>
        </div>
        <div class="sales">
          <h4 class="sales-title">
            Отдел продаж
          </h4>
          <p>+7 800 555 66 77</p>
          <p><a href="mailto:hello@mrvk.pro">hello@mrvk.pro</a></p>
          <p>В рабочие дни:<br>09:00-18:00</p>
        </div>
        <div class="supports">
          <h4 class="supports-title">
            Поддержка
          </h4>
          <p>support@mrvk.pro</p>
          <p>Ежедневно:<br>09:00-18:00</p>
          <div class="icon-group">
            <a href="https://telegram.org/">
              <img src="../assets/images/telegram.svg" alt="telegram">
            </a>
            <a href="https://www.whatsapp.com/">
              <img src="../assets/images/whatsapp.svg" alt="whatsApp">
            </a>
          </div>
        </div>
        <a href="#" class="arrow-up" :style="`--arrow-up: url(${getImgUrl('images/arrow-up.svg')}); --arrow-up-hover: url(${getImgUrl('images/arrow-up-hover.svg')})`"></a>
      </div>
      <div id="footer" class="container-fluid p-0">
        <pre />
        <div class="copy">
          <span>© 2024 «Муравейник»</span>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="handleCloseModal">
      <template #header>
        <h3>Получить муравейник бесплатно!</h3>
        <pre />
      </template>
      <template #body>
        <form method="post" @submit="checkForm">
          <span>
            Заполните форму, и мы свяжемся<br>с Вами в ближайшее время.
          </span>
          <div :class="['name', errors.includes('name') ? 'error-field' : '']">
            <input type="text" placeholder="Ваше имя" v-model="name">
            <p class="error" v-if="errors.includes('name')">
              Введите ваше имя
            </p>
          </div>
          <div :class="['email', errors.includes('email') ? 'error-field' : '']">
            <input class="email" type="text" placeholder="E-mail" v-model="email">
            <p class="error" v-if="errors.includes('email')">
              Укажите корректный E-mail
            </p>
          </div>
          <div :class="['number', errors.includes('number') ? 'error-field' : '']">
            <select :style="`--dropdown-arrow: url(${getImgUrl('images/dropdown-arrow.svg')})`">
              <option>+7</option>
              <option>+89</option>
            </select>
            <input type="text" placeholder="(___) ___-__-__" v-model="number" maxlength="15" @input="event => number = formatPhone(event.target.value)">
            <p class="error" v-if="errors.includes('number')">
              Укажите корректный номер телефона
            </p>
          </div>

          <button type="submit">Отправить заявку</button>
          <p class="send-description">
            Отправляя заполненную форму, вы принимаете условия Политики обработки персональных данных
          </p>
        </form>
      </template>
    </modal>

    <modal :show="showModal2" @close="handleCloseModal2">
      <template #header>
        <h3 style="font-size: 40px;">Заявка получена!</h3>
        <pre />
      </template>
      <template #body>
        <span>Ваше сообщение успешно отправлено.<br>Мы свяжемся с вами в самое ближайшее время.</span>
      </template>
    </modal>
  </Teleport>

  <Teleport to="body">
    <burger :show="showBurger" @close="handleCloseBurger">
      <template #header>
        <a href="#" class="logo-block" @click="handleCloseBurger">
          <img src="../assets/images/burger-logo.svg" alt="logo">
          <span>Муравейник</span>
        </a>
      </template>
      <template #body>
        <ul class="menu">
          <li class="menu-item" @click="handleCloseBurger">
            <a href="#usage">Как это работает</a>
          </li>
          <li class="menu-item" @click="handleCloseBurger">
            <a href="#possibilities">Возможности</a>
          </li>
          <li class="menu-item" @click="handleCloseBurger">
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
        <div class="button-group">
          <a href="https://lk.mrvk.pro">
            <button class="login">Войти</button>
          </a>
          <button class="register" @click="() => {handleCloseBurger(); handleShowModal()}">Регистрация</button>
          <button class="try-free" @click="() => {handleCloseBurger(); handleShowModal()}">Попробовать бесплатно</button>
        </div>
      </template>
    </burger>
  </Teleport>

</template>


<script>
import { defineComponent, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import BaseTooltip from '@/components/BaseTooltip.vue'
import modal from '@/components/Modal.vue'
import burger from '@/components/BurgerMenu.vue'

const showModal = ref(false);
const showModal2 = ref(false);
const showBurger = ref(false);

const retailers = [
  {
    title: 'Супермаркеты',
    subtitle: 'и продуктовые магазины',
    srcImg: 'images/retail-slider/supermarket.png'
  },
  {
    title: 'Кафе',
    subtitle: 'рестораны и фастфуд',
    srcImg: 'images/retail-slider/cafe.png'
  },
  {
    title: 'Кулинарии',
    subtitle: 'пекарни и кондитерские',
    srcImg: 'images/retail-slider/cookery.png'
  },
  {
    title: 'Аптеки',
    subtitle: 'фармцевтические компании',
    srcImg: 'images/retail-slider/pharmacy.png'
  }
]

const usages = [
  {
    id: '01',
    title: 'Шаг 1',
    description: 'Создание чек-листов под ваши задачи',
    slide: {
      desc1: 'Создавайте чек-листы для проверки любых процессов в вашей компании',
      srcImg: 'images/usage-slider/01.png',
      desc2: 'Удобный и гибкий конструктор чек-листов подойдет под любые задачи'
    }
  },
  {
    id: '02',
    title: 'Шаг 2',
    description: 'Выполнение проверок торговой сети по чек-листам',
    slide: {
      desc1: 'Назначайте проверки ваших точек по одному или нескольким чек-листам',
      srcImg: 'images/usage-slider/02.png',
      desc2: 'Каждый отчет о проверке подтверждается фотографиями и контролируется по GPS'
    }
  },
  {
    id: '03',
    title: 'Шаг 3',
    description: 'Исправление нарушений и создание задач сотрудникам',
    slide: {
      desc1: 'Автоматически назначайте задачи для исправления нарушений',
      srcImg: 'images/usage-slider/03.png',
      desc2: 'Вовлекайте сотрудников на местах в решение проблем'
    }
  },
  {
    id: '04',
    title: 'Шаг 4',
    description: 'Анализ качества работы по всей сети',
    slide: {
      desc1: 'Находите лучшие и худшие подразделения в структуре компании',
      srcImg: 'images/usage-slider/04.png',
      desc2: 'Создавайте новые ключевые показатели для повышения эффективности'
    }
  }
]

const circleItems = [
  {
    id: 1,
    name: 'paper',
    title: 'Ничего не пропадет и не потеряется.1',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/01.svg'
  },
  {
    id: 2,
    name: 'arrows',
    title: 'Ничего не пропадет и не потеряется.2',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/02.svg'
  },
  {
    id: 3,
    name: 'time',
    title: 'Ничего не пропадет и не потеряется.3',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/03.svg'
  },
  {
    id: 4,
    name: 'settings',
    title: 'Ничего не пропадет и не потеряется.4',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/04.svg'
  },
  {
    id: 5,
    name: 'exclamation',
    title: 'Ничего не пропадет и не потеряется.5',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/05.svg'
  },
  {
    id: 6,
    name: 'check',
    title: 'Ничего не пропадет и не потеряется.6',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/06.svg'
  },
  {
    id: 7,
    name: 'diagram',
    title: 'Ничего не пропадет и не потеряется.7',
    desc1: 'Данные за весь период работы доступны в любой момент.',
    desc2: 'Видна вся ситуация в динамике.',
    imgSrc: 'images/possibilities/possibilities-circle/07.svg'
  }
]
const roles = ['Менеджеры', 'Аудиторы', 'Управляющие', 'Руководители']

const difficultItems = [
  'Большое количество обрабатываемой информации и куча времени на планирование проверок',
  'Контроль процессов в ручном режиме, по телефону или whatsapp',
  'Сбор бумажной отчетности, внесение данных в excel и получение фотографий из мессенджеров',
  'Потеря и несвоевременное получение отчетов',
  'Недобросовестное проведение проверок аудиторами и махинации с данными'
]

const accountSliderSrcs = [
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/analytic.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/phone-1.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/fire-safety.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/phone-2.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/violation.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/phone-2.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/visit.png'
  },
  {
    imgSrc: 'images/possibilities/personal-web-account-slider/phone-2.png'
  }
]

window.addEventListener('scroll', () => {
  const y = window.pageYOffset
  const switcherInput = document.querySelector('.switcher__input')
  if (switcherInput) {
    switcherInput.checked = y >= 200
  }
});

export default defineComponent({
  name: 'HomeView',
  components: {
    modal,
    burger,
    BaseTooltip,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeIndex: '',
      selectedRole: 'Менеджеры',
      countPlace: 1,
      errors: [],
      smartErrors: [],
      name: '',
      email: '',
      number: '',
      smartName: '',
      smartNumber: '',
      burgerWatch: false,
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
    handleClose(data) {
      this.activeIndex = data
    },
    handleSelectRole(data) {
      this.selectedRole = data.target.innerText
    },
    handleCountPlace(operator) {
      if (operator === 'minus' && this.countPlace > 1) {
        this.countPlace -= 1
      }
      if (operator === 'plus' && this.countPlace >= 1) {
        this.countPlace += 1
      }
    },
    checkForm(e) {
      e.preventDefault()
      this.errors = [];
      if (this.name === '') this.errors.push('name');
      if (this.email === '') this.errors.push('email');
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.email.trim().toLowerCase().match(regexEmail)) this.errors.push('email');
      if (this.number === '') this.errors.push('number');
      if (this.errors.length === 0) {
        // fetch
        console.log({
          name: this.name,
          email: this.email,
          number: this.number
        });
        this.handleCloseModal();
        this.handleShowModal2();
        this.name = '';
        this.email = '';
        this.number = '';
      }
    },
    checkForm2(e) {
      e.preventDefault()
      this.smartErrors = [];
      if (this.smartName === '') this.smartErrors.push('smart-name');
      if (this.smartNumber === '') this.smartErrors.push('smart-number');
      if (this.smartErrors.length === 0) {
        // fetch
        this.handleShowModal2();
        this.smartName = '';
        this.smartNumber = '';
        this.countPlace = 1;
      }
    },
    formatPhone(data) {
      let phone = data.replaceAll(/\D/g, '');
      let digits = phone.replace(/^8/, '7').replace(/[^\d]+/, '');

      if (digits.length <= 3) {
        return digits.replace(/^(\d+)$/, '($1');
      }
      if (digits.length <= 6) {
        return digits.replace(/^(\d\d\d)(\d+)$/, '($1) $2');
      }
      if (digits.length > 6 && digits.length <= 8) {
        return digits.replace(/^(\d\d\d)(\d\d\d)(\d+)$/, '($1) $2‒$3');
      }
      if (digits.length > 8) {
        return digits.replace(/^(\d\d\d)(\d\d\d)(\d\d)(\d+)$/, '($1) $2‒$3‒$4');
      }
    },
    handleShowModal() {
      this.showModal = true;
      document.querySelector('body').style.overflow = 'hidden'
    },
    handleShowModal2() {
      this.showModal2 = true;
      document.querySelector('body').style.overflow = 'hidden'

    },
    handleCloseModal() {
      this.showModal = false;
      document.querySelector('body').style.overflow = ''
    },
    handleCloseModal2() {
      this.showModal2 = false;
      document.querySelector('body').style.overflow = ''

    },
    handleShowBurger() {
      this.showBurger = true;
      document.querySelector('body').style.overflow = 'hidden'
    },
    handleCloseBurger() {
      this.showBurger = false;
      document.querySelector('body').style.overflow = ''
    },
    getImgUrl(img) {
      return new URL(`/src/assets/${img}`, import.meta.url);
    }
  },
  mounted() {
    const elements = document.querySelectorAll('.swiper-pagination-bullet')
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = `<div class="title">${usages[i].title}</div><div class="description">${usages[i].description}</div>`
    }
  },
  setup() {
    return {
      retailers,
      usages,
      circleItems,
      roles,
      difficultItems,
      accountSliderSrcs,
      showModal,
      showModal2,
      showBurger,
      modules: [Autoplay, Pagination, Navigation]
    }
  },
})
</script>
