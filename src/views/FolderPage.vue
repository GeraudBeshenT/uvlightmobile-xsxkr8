<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="comfortaa">UVLight Mobile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid class="ion-text-center vertical-align">
        <form @submit.prevent="log()">
          <ion-item>
            <ion-label color="light" position="floating" class="comfortaa">Nom d'utilisateur</ion-label>
            <ion-input v-model="nomclient" color="light" type="text" placeholder="Nom d'utilisateur" class="comfortaa"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label color="light" position="floating" class="comfortaa">Mot de passe</ion-label>
            <ion-input v-model="mdp" color="light" type="password" placeholder="Mot de passe" class="comfortaa">
            </ion-input>
          </ion-item>

          <ion-button type="submit" color="light" shape="round" fill="outline" class="comfortaa">Connexion</ion-button>
        </form>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import {
  toastController,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonItem,
    IonLabel,
    IonInput,
  },
  
  data() {
    return { nomclient: null, mdp: null };
  },
  methods: {
    log() {
      axios
        .get('http://localhost/uvlightapi2/login.php?nomclient='
        +this.nomclient+
        '&mdp='
        +this.mdp
        )
        .then((response) => {
          if (response.status == 200) {
            window.location.href = "/uvlight/commandes/12";
          }
        })
        .catch(() => {
          this.openToast();
        });
    },
    async openToast() {
      const toast = await toastController.create({
        message: "Identifiants de connexion Incorrectes, veuillez réessayer.",
        duration: 5000,
      });
      return toast.present();
    },
  },
});
</script>

<style>
ion-content {
  --ion-background-color: (#000);
}
ion-item {
  --ion-background-color: transparent !important;
}
.padding {
  padding: 5%;
}
</style>