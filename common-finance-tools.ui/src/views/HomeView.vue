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
      <div class="hero"></div>
      <hr/>
      <div class="main">
          <v-row class="py-3">
            <v-col cols="12">
              <v-card
                color="#385F73"
                theme="light"
                border=true
                elevation="22"
                density="compact"
              >
                <v-card-title class="text-h5">
                    Invest.
                </v-card-title>

                <v-card-text>See what planting a seed today can potentially yeild you in the future.</v-card-text>

                <v-card-actions>
                  <v-btn variant="text">
                    Calculate Now
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
                <v-card-title class="text-h5">
                    Mortgage.
                </v-card-title>

                <v-card-text>Ever wondered how much house you can afford? Try out this mortgage calculator.</v-card-text>

                <v-card-actions>
                  <v-btn variant="text">
                    Calculate Now
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
                <v-card-title class="text-h5">
                    Income.
                </v-card-title>

                <v-card-text>Easily discover what your estimated take-home pay is by utilizing this salary tool.</v-card-text>

                <v-card-actions>
                  <v-btn variant="text">
                    Calculate Now
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
      </div>
    </v-container>
</template>
