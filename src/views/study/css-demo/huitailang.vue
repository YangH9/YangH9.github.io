<template>
  <a-layout-content>
    <div id="bigBigWolf">
      <!--脸-->
      <div class="face">
        <div class="left"></div>
        <div class="right"></div>
        <div class="cover1"></div>
        <div class="cover2"></div>
        <div class="cover3"></div>
        <div class="cover4"></div>
        <div class="cover5"></div>
      </div>
      <!--耳朵-->
      <div class="ear">
        <div class="left">
          <div class="inner"></div>
          <div class="cover1"></div>
          <div class="cover2"></div>
          <div class="cover3"></div>
          <div class="cover4"></div>
          <div class="cover5"></div>
        </div>
        <div class="right">
          <div class="inner"></div>
          <div class="cover1"></div>
          <div class="cover2"></div>
          <div class="cover3"></div>
          <div class="cover4"></div>
          <div class="cover5"></div>
        </div>
      </div>
      <!--眼睛-->
      <div class="eye">
        <div class="left">
          <div class="inner">
            <div class="pupil">
              <div class="inner"></div>
              <div class="light1"></div>
              <div class="light2"></div>
              <div class="light3"></div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="inner">
            <div class="pupil">
              <div class="inner"></div>
              <div class="light1"></div>
              <div class="light2"></div>
              <div class="light3"></div>
            </div>
          </div>
        </div>
      </div>
      <!--眉毛-->
      <div class="eyebrow">
        <div class="left">
          <div class="inner"></div>
          <div class="eyebrow1"></div>
          <div class="eyebrow2"></div>
        </div>
        <div class="right">
          <div class="inner"></div>
          <div class="eyebrow1"></div>
        </div>
      </div>
      <!--鼻子-->
      <div class="nose">
        <div class="outer">
          <div class="inner"></div>
          <div class="light"></div>
        </div>
      </div>
      <!--嘴巴-->
      <div class="mouth">
        <div class="inner">
          <div class="tooth1"></div>
          <div class="tooth2"></div>
          <div class="tooth3"></div>
          <div class="tooth4"></div>
          <div class="tooth5"></div>
          <div class="tooth6"></div>
          <div class="tooth7"></div>
          <div class="tooth8"></div>
          <div class="tooth9"></div>
          <div class="tooth10"></div>
          <div class="tooth11"></div>
          <div class="tooth12"></div>
          <div class="tooth13"></div>
          <div class="tooth14"></div>
          <div class="tooth15"></div>
          <div class="tooth16"></div>
          <div class="tooth17"></div>
          <div class="tooth18"></div>
          <div class="tooth19"></div>
          <div class="tooth20"></div>
          <div class="tooth21"></div>
          <div class="tooth22"></div>
          <div class="tooth23"></div>
        </div>
      </div>
      <!--胡子-->
      <div class="beard">
        <div class="beard1"></div>
        <div class="beard2"></div>
        <div class="beard3"></div>
        <div class="beard4"></div>
        <div class="beard5"></div>
        <div class="beard6"></div>
        <div class="beard7"></div>
        <div class="beard8"></div>
        <div class="beard9"></div>
        <div class="beard10"></div>
        <div class="beard11"></div>
        <div class="beard12"></div>
      </div>
      <!--刀疤-->
      <div class="scar">
        <div class="scar1"></div>
        <div class="scar2"></div>
        <div class="scar3"></div>
        <div class="scar4"></div>
        <div class="scar5"></div>
      </div>
      <!--帽子-->
      <div class="hat">
        <div class="inner">
          <div class="patch">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="line5"></div>
            <div class="line6"></div>
            <div class="line7"></div>
            <div class="line8"></div>
            <div class="line9"></div>
            <div class="line10"></div>
          </div>
        </div>
      </div>
    </div>
  </a-layout-content>
</template>

<script setup lang="jsx"></script>

<style scoped lang="scss">
.ant-layout-content {
  background: var(--color-background-mute);
}

#bigBigWolf {
  background: var(--color-background-mute);
  position: relative;
  margin: 0 auto;
  width: 600px;
  height: 600px;

  div {
    position: absolute;
  }
}

#bigBigWolf #url a {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 600px;
  z-index: 100;
}

#bigBigWolf .face {
  left: 127px;
  bottom: 67px;
  width: 380px;
  height: 380px;
  border: 3px solid #181818;
  background: #666b6f;
  z-index: 0;
  border-radius: 230px 180px 300px 220px;
  transform: rotate(60deg);
}

#bigBigWolf .face .left {
  left: 31px;
  top: 317px;
  width: 180px;
  height: 106px;
  border: 3px solid #181818;
  border-top: 0;
  background: #666b6f;
  z-index: 10;
  border-bottom-left-radius: 2800px 1200px;
  transform: rotate(30deg);
}

#bigBigWolf .face .right {
  left: 105px;
  top: -45px;
  width: 160px;
  height: 90px;
  border: 3px solid #181818;
  border-bottom: 0;
  background: #666b6f;
  z-index: 10;
  border-top-left-radius: 2800px 2000px;
  transform: rotate(335deg);
}

#bigBigWolf .face .cover1 {
  left: 160px;
  top: 415px;
  width: 28px;
  height: 40px;
  border: 3px solid #181818;
  border-bottom: 0;
  background: var(--color-background-mute);
  z-index: 20;
  border-top-left-radius: 600px 1200px;
  border-top-right-radius: 400px 700px;
  border-bottom-left-radius: 400px 150px;
  border-bottom-right-radius: 400px 150px;
}

#bigBigWolf .face .cover2 {
  left: 163px;
  top: 433px;
  width: 40px;
  height: 40px;
  background: var(--color-background-mute);
  z-index: 30;
  border-radius: 20px;
}

#bigBigWolf .face .cover3 {
  left: 53px;
  top: 285px;
  width: 74px;
  height: 74px;
  background: #666b6f;
  z-index: 40;
  border-radius: 37px;
}

#bigBigWolf .face .cover4 {
  left: 227px;
  top: -80px;
  width: 25px;
  height: 40px;
  border: 3px solid #181818;
  border-bottom: 0;
  background: var(--color-background-mute);
  z-index: 20;
  border-top-left-radius: 600px 1200px;
  border-top-right-radius: 400px 700px;
  border-bottom-left-radius: 400px 150px;
  border-bottom-right-radius: 400px 150px;
  transform: rotate(170deg);
}

#bigBigWolf .face .cover5 {
  left: 214px;
  top: -90px;
  width: 60px;
  height: 30px;
  background: var(--color-background-mute);
  z-index: 40;
  transform: rotate(28deg);
}

#bigBigWolf .ear {
  z-index: 0;
}

#bigBigWolf .ear .left {
  left: 48px;
  top: 167px;
  width: 180px;
  height: 120px;
  border: 3px solid #181818;
  border-right: 0;
  background: #666b6f;
  z-index: 0;
  border-top-left-radius: 295px 200px;
  transform: rotate(51deg);
}

#bigBigWolf .ear .left .inner {
  left: -3px;
  top: 88px;
  width: 180px;
  height: 30px;
  border: 3px solid #181818;
  border-right: 0;
  background: #96979c;
  z-index: 10;
  border-top-left-radius: 1000px 200px;
}

#bigBigWolf .ear .left .cover1 {
  left: 83px;
  top: 30px;
  width: 132px;
  height: 65px;
  background: #666b6f;
  z-index: 20;
  border-bottom-right-radius: 1200px 200px;
  transform: rotate(90deg);
}

#bigBigWolf .ear .left .cover2 {
  left: 111px;
  top: 91px;
  width: 12px;
  height: 8px;
  border: 3px solid #181818;
  border-right: 0;
  background: #666b6f;
  z-index: 30;
  border-top-left-radius: 30px 20px;
  transform: rotate(345deg);
}

#bigBigWolf .ear .left .cover3 {
  left: 114px;
  top: 104px;
  width: 12px;
  height: 6px;
  border: 3px solid #181818;
  border-right: 0;
  background: #666b6f;
  z-index: 30;
  border-top-left-radius: 30px 20px;
  transform: rotate(325deg);
}

#bigBigWolf .ear .left .cover4 {
  left: 123px;
  top: 113px;
  width: 11px;
  height: 4px;
  border: 3px solid #181818;
  border-right: 0;
  border-top: 0;
  background: #666b6f;
  z-index: 30;
  border-bottom-left-radius: 30px 20px;
  transform: rotate(62deg);
}

#bigBigWolf .ear .right {
  left: 340px;
  top: 78px;
  width: 140px;
  height: 100px;
  border: 3px solid #181818;
  border-left: 0;
  background: #666b6f;
  z-index: 10;
  border-top-right-radius: 245px 190px;
  transform: rotate(275deg);
}

#bigBigWolf .ear .right .inner {
  left: -1px;
  top: 68px;
  width: 140px;
  height: 30px;
  border: 3px solid #181818;
  border-left: 0;
  background: #96979c;
  z-index: 10;
  border-top-right-radius: 1200px 300px;
}

#bigBigWolf .ear .right .cover1 {
  left: -49px;
  top: 25px;
  width: 120px;
  height: 40px;
  border: 3px solid #181818;
  border-bottom: 0;
  background: #666b6f;
  z-index: 20;
  border-top-right-radius: 1200px 300px;
  transform: rotate(101deg);
}

#bigBigWolf .ear .right .cover2 {
  left: -135px;
  top: 117px;
  width: 145px;
  height: 40px;
  border: 3px solid #181818;
  border-bottom: 0;
  background: #666b6f;
  z-index: 30;
  border-top-right-radius: 1100px 300px;
  transform: rotate(133deg);
}

#bigBigWolf .ear .right .cover3 {
  left: -85px;
  top: 15px;
  width: 80px;
  height: 80px;
  background: #666b6f;
  z-index: 40;
}

#bigBigWolf .ear .right .cover4 {
  left: -142px;
  top: 144px;
  width: 40px;
  height: 40px;
  background: #666b6f;
  z-index: 50;
  border-radius: 20px;
}

#bigBigWolf .ear .right .cover5 {
  left: 32px;
  top: 87px;
  width: 30px;
  height: 30px;
  border: 3px solid #181818;
  border-bottom: 0;
  border-left: 0;
  background: var(--color-background-mute);
  z-index: 50;
  border-radius: 30px;
  transform: rotate(313deg);
}

#bigBigWolf .hat {
  left: 137px;
  top: 115px;
  width: 238px;
  height: 100px;
  border: 3px solid #181818;
  background: #e09e86;
  z-index: 40;
  border-top-left-radius: 2000px 1000px;
  border-top-right-radius: 700px 700px;
  border-bottom-left-radius: 300px 200px;
  border-bottom-right-radius: 450px 450px;
  transform: rotate(338deg);
}

#bigBigWolf .hat .inner {
  right: -1px;
  top: 1px;
  width: 238px;
  height: 80px;
  border: 3px solid #181818;
  background: #cf6a36;
  z-index: 0;
  border-top-left-radius: 2400px 1200px;
  border-top-right-radius: 800px 800px;
  border-bottom-left-radius: 400px 200px;
  border-bottom-right-radius: 450px 450px;
  transform: rotate(357deg);
}

#bigBigWolf .hat .patch {
  right: -3px;
  top: -7px;
  width: 110px;
  height: 50px;
  border: 3px solid #181818;
  background: #efc978;
  z-index: 10;
  border-top-left-radius: 500px 300px;
  border-top-right-radius: 300px 200px;
  border-bottom-left-radius: 100px 100px;
  border-bottom-right-radius: 100px 100px;
  transform: rotate(20deg);
}

#bigBigWolf .hat .patch .line1,
#bigBigWolf .hat .patch .line2,
#bigBigWolf .hat .patch .line3,
#bigBigWolf .hat .patch .line4,
#bigBigWolf .hat .patch .line5,
#bigBigWolf .hat .patch .line6,
#bigBigWolf .hat .patch .line7,
#bigBigWolf .hat .patch .line8,
#bigBigWolf .hat .patch .line9,
#bigBigWolf .hat .patch .line10 {
  left: -7px;
  top: 30px;
  width: 18px;
  height: 2px;
  font-size: 0;
  background: #181818;
  z-index: 20px;
  transform: rotate(350deg);
}

#bigBigWolf .hat .patch .line2 {
  left: -13px;
  top: 42px;
  width: 20px;
  transform: rotate(340deg);
}

#bigBigWolf .hat .patch .line3 {
  left: 5px;
  top: 50px;
  width: 17px;
  transform: rotate(300deg);
}

#bigBigWolf .hat .patch .line4 {
  left: 20px;
  top: 53px;
  width: 17px;
  transform: rotate(270deg);
}

#bigBigWolf .hat .patch .line5 {
  left: 35px;
  top: 50px;
  width: 14px;
  transform: rotate(290deg);
}

#bigBigWolf .hat .patch .line6 {
  left: 50px;
  top: 52px;
  width: 19px;
  transform: rotate(275deg);
}

#bigBigWolf .hat .patch .line7 {
  left: 70px;
  top: 50px;
  width: 15px;
  transform: rotate(290deg);
}

#bigBigWolf .hat .patch .line8 {
  left: 85px;
  top: 51px;
  width: 19px;
  transform: rotate(250deg);
}

#bigBigWolf .hat .patch .line9 {
  left: 102px;
  top: 45px;
  width: 13px;
  transform: rotate(230deg);
}

#bigBigWolf .hat .patch .line10 {
  left: 106px;
  top: 34px;
  width: 12px;
  transform: rotate(220deg);
}

#bigBigWolf .eye {
  left: 213px;
  top: 221px;
  width: 287px;
  height: 185px;
  z-index: 20;
}

#bigBigWolf .eye .left,
#bigBigWolf .eye .right {
  width: 121px;
  height: 121px;
  border: 3px solid #181818;
  background: #dbdbdb;
  z-index: 0;
  border-radius: 61px;
}

#bigBigWolf .eye .left {
  left: 0;
  bottom: 0;
}

#bigBigWolf .eye .right {
  right: 0;
  top: 0;
}

#bigBigWolf .eye .inner {
  left: 2px;
  top: 2px;
  width: 114px;
  height: 114px;
  background: #fff;
  z-index: 10;
  border-radius: 57px;
}

#bigBigWolf .eye .pupil {
  left: 8px;
  top: 26px;
  width: 54px;
  height: 54px;
  border: 2px solid #181818;
  z-index: 20;
  border-radius: 27px;
  background: #404972;
  background: linear-gradient(260deg, #181818 25%, #455289 50%, #455289 100%);
  animation: pupil 2s linear infinite;
}

@keyframes pupil {
  0% {
    left: 8px;
    top: 26px;
  }

  25% {
    left: 29px;
    top: 33px;
  }

  50% {
    left: 50px;
    top: 40px;
  }

  75% {
    left: 29px;
    top: 33px;
  }

  100% {
    left: 8px;
    top: 26px;
  }
}

#bigBigWolf .eye .pupil .inner {
  left: 9px;
  top: 9px;
  width: 36px;
  height: 36px;
  background: #1a1a1a;
  z-index: 30;
  border-radius: 18px;
}

#bigBigWolf .eye .light1 {
  left: 21px;
  bottom: 3px;
  width: 16px;
  height: 16px;
  background: #fff;
  z-index: 40;
  border-radius: 15px 7px 10px 10px;
  transform: rotate(320deg);
}

#bigBigWolf .eye .light2 {
  left: 7px;
  bottom: 11px;
  width: 14px;
  height: 6px;
  background: #fff;
  z-index: 40;
  border-top-left-radius: 500px 300px;
  border-top-right-radius: 300px 200px;
  border-bottom-left-radius: 100px 100px;
  border-bottom-right-radius: 100px 100px;
  transform: rotate(285deg);
}

#bigBigWolf .eye .light3 {
  right: 2px;
  top: 4px;
  width: 30px;
  height: 13px;
  background: #fff;
  z-index: 40;
  border-top-left-radius: 40px 40px;
  border-top-right-radius: 100px 50px;
  border-bottom-left-radius: 15px 15px;
  border-bottom-right-radius: 15px 15px;
  transform: rotate(20deg);
}

#bigBigWolf .eyebrow {
  left: 187px;
  top: 173px;
  width: 280px;
  height: 130px;
  z-index: 70;
}

#bigBigWolf .eyebrow .left {
  left: 0;
  top: 48px;
  width: 110px;
  height: 40px;
  background: #181818;
  z-index: 0;
  border-top-left-radius: 400px 200px;
  border-top-right-radius: 400px 200px;
  transform: rotate(330deg);
}

#bigBigWolf .eyebrow .left .inner {
  left: 0;
  top: 20px;
  width: 120px;
  height: 30px;
  background: #666b6f;
  z-index: 0;
  border-top-left-radius: 400px 200px;
  border-top-right-radius: 400px 200px;
}

#bigBigWolf .eyebrow .left .eyebrow1,
#bigBigWolf .eyebrow .left .eyebrow2,
#bigBigWolf .eyebrow .right .eyebrow1 {
  left: -22px;
  top: 36px;
  width: 22px;
  height: 2px;
  font-size: 0;
  background: #181818;
  z-index: 10px;
  transform: rotate(86deg);
}

#bigBigWolf .eyebrow .left .eyebrow2 {
  left: -15px;
  top: 32px;
  width: 20px;
}

#bigBigWolf .eyebrow .right .eyebrow1 {
  left: 93px;
  top: 24px;
  width: 20px;
}

#bigBigWolf .eyebrow .right {
  right: 17px;
  top: -3px;
  width: 100px;
  height: 40px;
  background: #181818;
  z-index: 0;
  border-top-left-radius: 400px 200px;
  border-top-right-radius: 400px 200px;
  transform: rotate(355deg);
}

#bigBigWolf .eyebrow .right .inner {
  right: -7px;
  top: 20px;
  width: 120px;
  height: 30px;
  background: #666b6f;
  z-index: 0;
  border-top-left-radius: 400px 200px;
  border-top-right-radius: 400px 200px;
}

#bigBigWolf .nose {
  right: 158px;
  bottom: 203px;
  width: 74px;
  height: 74px;
  z-index: 30;
  background: #4b4b4b;
  border-radius: 160px 40px 160px 40px;
  transform: rotate(25deg);
}

#bigBigWolf .nose .outer {
  right: 1px;
  top: -2px;
  width: 72px;
  height: 72px;
  z-index: 0;
  background: #181818;
  border-radius: 150px 40px 150px 40px;
  transform: rotate(2deg);
}

#bigBigWolf .nose .inner {
  right: 18px;
  top: 13px;
  width: 24px;
  height: 24px;
  z-index: 10;
  background: #4f4f4f;
  border-radius: 150px 50px 150px 50px;
  transform: rotate(0deg);
}

#bigBigWolf .nose .light {
  right: 16px;
  top: 3px;
  width: 20px;
  height: 20px;
  z-index: 20;
  background: #fff;
  border-radius: 150px 70px 150px 70px;
  transform: rotate(3deg);
}

#bigBigWolf .mouth {
  right: 62px;
  bottom: 108px;
  width: 290px;
  height: 60px;
  border: 3px solid #181818;
  background: #fff;
  z-index: 50;
  border-top-left-radius: 700px 0;
  border-top-right-radius: 700px 0;
  border-bottom-left-radius: 2800px 1200px;
  border-bottom-right-radius: 2800px 1200px;
  transform: rotate(341deg);
}

#bigBigWolf .mouth .inner {
  right: -3px;
  bottom: 41px;
  width: 289px;
  height: 20px;
  border: 3px solid #181818;
  border-top: 0;
  background: #666b6f;
  z-index: 0;
  border-top-left-radius: 700px 0;
  border-top-right-radius: 700px 0;
  border-bottom-left-radius: 7800px 1500px;
  border-bottom-right-radius: 7800px 1500px;
}

#bigBigWolf .tooth1,
#bigBigWolf .tooth2,
#bigBigWolf .tooth3,
#bigBigWolf .tooth4,
#bigBigWolf .tooth5,
#bigBigWolf .tooth6,
#bigBigWolf .tooth7,
#bigBigWolf .tooth8,
#bigBigWolf .tooth9,
#bigBigWolf .tooth10,
#bigBigWolf .tooth11,
#bigBigWolf .tooth12,
#bigBigWolf .tooth13,
#bigBigWolf .tooth14,
#bigBigWolf .tooth15,
#bigBigWolf .tooth16,
#bigBigWolf .tooth17,
#bigBigWolf .tooth18,
#bigBigWolf .tooth19,
#bigBigWolf .tooth20,
#bigBigWolf .tooth121,
#bigBigWolf .tooth122,
#bigBigWolf .tooth123 {
  left: -1px;
  top: 18px;
  width: 20px;
  height: 2px;
  font-size: 0;
  background: #181818;
  z-index: 60px;
  transform: rotate(26deg);
}

#bigBigWolf .tooth2 {
  left: 13px;
  top: 12px;
  width: 22px;
  transform: rotate(125deg);
}

#bigBigWolf .tooth3 {
  left: 18px;
  top: 17px;
  width: 30px;
  transform: rotate(76deg);
}

#bigBigWolf .tooth4 {
  left: 36px;
  top: 26px;
  width: 9px;
  transform: rotate(340deg);
}

#bigBigWolf .tooth5 {
  left: 40px;
  top: 30px;
  width: 12px;
  transform: rotate(70deg);
}

#bigBigWolf .tooth6 {
  left: 46px;
  top: 35px;
  width: 14px;
  transform: rotate(12deg);
}

#bigBigWolf .tooth7 {
  left: 58px;
  top: 37px;
  width: 24px;
  transform: rotate(12deg);
}

#bigBigWolf .tooth8,
#bigBigWolf .tooth10 {
  left: 21px;
  top: 16px;
  width: 20px;
  height: 1px;
  background: #fff;
  transform: rotate(76deg);
}

#bigBigWolf .tooth9,
#bigBigWolf .tooth11,
#bigBigWolf .tooth12 {
  left: 14px;
  top: 15px;
  width: 20px;
  height: 1px;
  background: #fff;
  transform: rotate(122deg);
}

#bigBigWolf .tooth10 {
  left: 21px;
  top: 18px;
  height: 2px;
}

#bigBigWolf .tooth11 {
  left: 14px;
  top: 20px;
  height: 3px;
}

#bigBigWolf .tooth12 {
  left: 13px;
  top: 18px;
  height: 2px;
}

#bigBigWolf .tooth13 {
  left: 270px;
  top: 17px;
  width: 18px;
  transform: rotate(335deg);
}

#bigBigWolf .tooth14 {
  left: 254px;
  top: 11px;
  width: 22px;
  transform: rotate(55deg);
}

#bigBigWolf .tooth15 {
  left: 242px;
  top: 16px;
  width: 29px;
  transform: rotate(100deg);
}

#bigBigWolf .tooth16 {
  left: 243px;
  top: 25px;
  width: 13px;
  transform: rotate(20deg);
}

#bigBigWolf .tooth17 {
  left: 237px;
  top: 29px;
  width: 11px;
  transform: rotate(100deg);
}

#bigBigWolf .tooth18 {
  left: 219px;
  top: 36px;
  width: 24px;
  transform: rotate(165deg);
}

#bigBigWolf .tooth19,
#bigBigWolf .tooth21,
#bigBigWolf .tooth23 {
  left: 255px;
  top: 15px;
  width: 22px;
  height: 1px;
  background: #fff;
  transform: rotate(55deg);
}

#bigBigWolf .tooth20,
#bigBigWolf .tooth22 {
  left: 247px;
  top: 17px;
  width: 22px;
  height: 1px;
  background: #fff;
  transform: rotate(100deg);
}

#bigBigWolf .tooth21 {
  left: 255px;
  top: 16px;
  height: 2px;
}

#bigBigWolf .tooth22 {
  left: 248px;
  top: 19px;
  height: 4px;
}

#bigBigWolf .tooth23 {
  left: 255px;
  top: 19px;
  height: 2px;
}

#bigBigWolf .beard {
  left: 190px;
  bottom: 50px;
  width: 370px;
  height: 200px;
  z-index: 80;
}

#bigBigWolf .beard1,
#bigBigWolf .beard2,
#bigBigWolf .beard3,
#bigBigWolf .beard4,
#bigBigWolf .beard5,
#bigBigWolf .beard6,
#bigBigWolf .beard7,
#bigBigWolf .beard8,
#bigBigWolf .beard9,
#bigBigWolf .beard10,
#bigBigWolf .beard11,
#bigBigWolf .beard12 {
  right: -1px;
  top: 32px;
  width: 40px;
  height: 2px;
  font-size: 0;
  background: #181818;
  z-index: 0;
  transform: rotate(3deg);
}

#bigBigWolf .beard2 {
  right: 23px;
  top: 68px;
  width: 24px;
  transform: rotate(355deg);
}

#bigBigWolf .beard3 {
  right: 34px;
  top: 90px;
  width: 22px;
  transform: rotate(30deg);
}

#bigBigWolf .beard4 {
  right: 54px;
  top: 120px;
  width: 28px;
  transform: rotate(50deg);
}

#bigBigWolf .beard5 {
  right: 89px;
  top: 132px;
  width: 22px;
  transform: rotate(60deg);
}

#bigBigWolf .beard6 {
  right: 115px;
  top: 148px;
  width: 16px;
  transform: rotate(70deg);
}

#bigBigWolf .beard7 {
  right: 145px;
  top: 162px;
  width: 24px;
  transform: rotate(90deg);
}

#bigBigWolf .beard8 {
  right: 175px;
  top: 166px;
  width: 16px;
  transform: rotate(110deg);
}

#bigBigWolf .beard9 {
  right: 210px;
  top: 173px;
  width: 22px;
  transform: rotate(60deg);
}

#bigBigWolf .beard10 {
  right: 245px;
  top: 173px;
  width: 14px;
  transform: rotate(130deg);
}

#bigBigWolf .beard11 {
  right: 275px;
  top: 168px;
  width: 20px;
  transform: rotate(120deg);
}

#bigBigWolf .beard12 {
  right: 300px;
  top: 156px;
  width: 16px;
  transform: rotate(140deg);
}

#bigBigWolf .scar,
#bigBigWolf .scar1,
#bigBigWolf .scar2,
#bigBigWolf .scar3,
#bigBigWolf .scar4,
#bigBigWolf .scar5 {
  left: 142px;
  bottom: 154px;
  width: 120px;
  height: 2px;
  font-size: 0;
  background: #181818;
  z-index: 60px;
  transform: rotate(43deg);
}

#bigBigWolf .scar1 {
  left: -2px;
  top: -5px;
  width: 25px;
  transform: rotate(90deg);
}

#bigBigWolf .scar2 {
  left: 20px;
  top: 2px;
  width: 29px;
  transform: rotate(80deg);
}

#bigBigWolf .scar3 {
  left: 50px;
  top: -2px;
  width: 29px;
  transform: rotate(90deg);
}

#bigBigWolf .scar4 {
  left: 74px;
  top: -4px;
  width: 22px;
  transform: rotate(92deg);
}

#bigBigWolf .scar5 {
  left: 95px;
  top: -2px;
  width: 25px;
  transform: rotate(90deg);
}
</style>
