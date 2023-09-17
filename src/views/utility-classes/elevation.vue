<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="_, n in 25" :key="n" cols="auto">
        <v-hover v-slot="{ isHovering, props }">
          <!-- <v-card v-bind="props" height="100" width="100"
            :class="['d-flex justify-center align-center bg-secondary', `elevation-${isHovering ? 0 : n}`]">
            <div>{{ n }}</div>
          </v-card> -->
          <div v-bind="props" style="height: 100px; width: 100px;"
            :class="['d-flex justify-center align-center bg-secondary', `elevation-${isHovering ? 0 : n}`]">
            <div>{{ n }}</div>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row justify="center">
      <v-col v-for="_, n in 25" :key="n" cols="auto">
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" height="100" width="100" :class="['d-flex justify-center align-center bg-secondary']"
            :elevation="isHovering ? 0 : n">
            <div>{{ n }}</div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
