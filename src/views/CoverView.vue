<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>

  <section>
    <h2>
      Maimbau Baralek Gadang
    </h2>
    <div class="flex items-center justify-center h-screen">
      <div class="items-center max-w-sm flex w-3/4 justify-center my-40 lg:max-w-full lg:flex ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
          <img class="w-full" src="./../assets/images/da882706-4a56-4247-86e3-97fe0daa191c.jpeg"
            alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Refki & Melika</div>
            <p class="text-gray-700 text-base text-center">
              Kepada yang terhormat Bapak/Ibu Saudara/I Kami mengundang : <br><br>
              <span class="nama"></span>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex text-center justify-center">
            <RouterLink to="/undang"
              class="z-20 inline-block text-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Buka Undangan</RouterLink>
          </div>
          <div
            class="z-20 flex justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <img class="w-10" src="./../assets/images/tdfprogramminglogo.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="leaf">
      <div> <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px"
          width="75px" /></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" />
      </div>
      <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px">
      </div>
      <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"></div>

    </div>

    <div class="leaf leaf1">
      <div> <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px"
          width="75px" /></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" />
      </div>
      <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px">
      </div>
      <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"></div>

    </div>

    <div class="leaf leaf2">
      <div> <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px"
          width="75px" /></div>
      <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" />
      </div>
      <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>

      <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px"
          width="75px" /></div>
      <div> <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px">
      </div>
      <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px"></div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

/* for the pen */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(150, 94, 94);
}

section {
  margin: 0;
  overflow: hidden;
  padding: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background: radial-gradient(rgb(235, 233, 233), rgb(170, 106, 106));
}

.leaf {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  left: 0;
}

.leaf div {
  position: absolute;
  display: block;
}

.leaf div:nth-child(1) {
  left: 20%;
  animation: fall 15s linear infinite;
  animation-delay: -2s;

}

.leaf div:nth-child(2) {
  left: 70%;
  animation: fall 15s linear infinite;
  animation-delay: -4s;
}

.leaf div:nth-child(3) {
  left: 10%;
  animation: fall 20s linear infinite;
  animation-delay: -7s;

}

.leaf div:nth-child(4) {
  left: 50%;
  animation: fall 18s linear infinite;
  animation-delay: -5s;
}

.leaf div:nth-child(5) {
  left: 85%;
  animation: fall 14s linear infinite;
  animation-delay: -5s;
}

.leaf div:nth-child(6) {
  left: 15%;
  animation: fall 16s linear infinite;
  animation-delay: -10s;
}

.leaf div:nth-child(7) {
  left: 90%;
  animation: fall 15s linear infinite;
  animation-delay: -4s;
}

@keyframes fall {
  0% {
    opacity: 1;
    top: -10%;
    transform: translateX (20px) rotate(0deg);
  }

  20% {
    opacity: 0.8;
    transform: translateX (-20px) rotate(45deg);
  }

  40% {

    transform: translateX (-20px) rotate(90deg);
  }

  60% {

    transform: translateX (-20px) rotate(135deg);
  }

  80% {

    transform: translateX (-20px) rotate(180deg);
  }

  100% {

    top: 110%;
    transform: translateX (-20px) rotate(225deg);
  }
}

.leaf1 {
  transform: rotateX(180deg);
}

.nama {
  font-family: 'Dancing Script', cursive;
  z-index: 2;
  font-size: 30px;
}

h2 {
  z-index: 2;
  position: absolute;
  top: 5%;
  width: 100%;
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  transform: translate;
  color: rgb(36, 34, 34);
  transform: translateY (-50%);
}
</style>
