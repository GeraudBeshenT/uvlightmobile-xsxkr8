<template>
  <master-layout pageTitle="Login Form">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Connexion</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Identifiant</ion-label>
          <ion-input v-model="userInfo.nomclient"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="userInfo.mdp"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="login()">Se connecter</ion-button>
      </ion-card-content>
    </ion-card>
  </master-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
  },data() {
    return {
      nomclient: '',
      mdp: '',
    };
  },
  methods: {
    log() {
      axios
        .get("http://localhost/uvlightapi2/login.php?nomclient=" + this.nomclient + "&mdp=" + this.mdp)
        .then((response) => {
          if (response.status == 200) {
            
            console.log(response);
          }
        })
        .catch((error) => {
          // this.openToast();
          console.log(error);
        });
    },
    async openToast() {
      const toast = await toastController.create({
        message: "Identifiants incorrectes, veuillez rÃ©essayer.",
        duration: 5000,
      });
      return toast.present();
    },
  },
});
</script>

<style>
ion-content {
  --ion-background-color: linear-gradient(#f5af19, #f12711);
}
ion-item {
  --ion-background-color: transparent !important;
}
.padding {
  padding: 5%;
}
.logo {
  height: 250px;
  position: relative;
}
.logo ion-icon {
  position: absolute;
  font-size: 9em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>