<script lang="ts">
import {useRouter} from 'vue-router';
</script>
<script setup lang="ts">
const router = useRouter();
</script>

<template>
   <!-- <div>
    <div id="home" class="flex flex-column align-items-center justify-conent-around">
        <div class="card flex flex-column align-items-center justify-conent-around">
            <div class="card-img"><img src="/src//assets//img//chart-646.svg"> </div>
            <div class="card-label">Investment Calculator</div>
        </div>
        <div class="card flex flex-column align-items-center justify-conent-around" @click="router.push('mortgage')">
            <div class="card-img"><img src="/src//assets//img//home-2490.svg"> </div>
            <div class="card-label">Mortgage Calculator</div>
        </div>
        <div class="card flex flex-column align-items-center justify-conent-around">
            <div class="card-img"><img src="/src//assets//img//circular-black-pie-chart-and-dollar-sign-15700.svg"> </div>
            <div class="card-label">Salary Calculator</div>
        </div>
    </div>
   </div> -->
   <v-container id="home">
      <div class="hero">
        <div class="overlay-primary"></div>
        <img src="@/assets/img/circular-black-pie-chart-and-dollar-sign-15700.gif" id="hero-background-img" />
      </div>
      <div class="main pt-3">
          <v-row class="py-3">
            <v-col cols="12">
              <v-card
                color="#385F73"
                theme="light"
                elevation="22"
                density="compact"
              >
                <v-card-actions style="justify-content:center;">
                  <v-btn variant="text" @click="router.push('invest')">
                    <v-icon class="pr-3" icon="mdi-chart-areaspline"></v-icon> Investment
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
        <v-row dense class="py-3">
            <v-col cols="12">
              <v-card
                color="#385F73"
                theme="dark"
                border=true
                elevation="22"
                density="compact"
              >
                <v-card-actions style="justify-content:center;">
                  <v-btn variant="text" @click="router.push('mortgage')">
                    <v-icon class="pr-3" icon="mdi-home"></v-icon> Mortgage
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
        <v-row dense class="py-3">
            <v-col cols="12">
              <v-card
                color="#385F73"
                theme="dark"
                border=true
                elevation="22"
                density="compact"
              >
                <v-card-actions style="justify-content:center;">
                  <v-btn variant="text" @click="router.push('salary')">
                    <v-icon class="pr-3" icon="mdi-cash-multiple"></v-icon> Salary
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
      </div>
    </v-container>
</template>

<style lang="css">
.hero{
  width:100%;
  margin:0 auto;
  height: 30%;
}
.main{
  padding-right: 5%;
  padding-left: 5%;
}
.overlay-primary{
  z-index: 2;
  background-color: #385F73;
  width: 100%;
  height: 100%;
  opacity: .8;
}
#hero-background-img{
  object-fit:cover;
  width:100%;
  max-height:100%;
  position:absolute;
  top:0;
  opacity: .4;
}
</style>