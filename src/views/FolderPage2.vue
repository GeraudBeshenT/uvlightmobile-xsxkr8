<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-menu-button color="Success"></ion-menu-button>
        </ion-buttons>
        <ion-title>Bonjour <!--{{client.nomclient}}--></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Commande n°124<!-- {{ commande.idcom }}  --></ion-card-title>
          <ion-card-subtitle>Prix: 125€<!-- {{ commande.prix }} --></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <b>Nombres d'articles: </b><!--{{commande.nbarticle}}--><br>
          <b>Message </b><!--{{commande.message}}--><br>
          <ion-button href="/uvlight/message" type="submit" color="light" shape="round" fill="outline">Détails</ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Commande n°135<!-- {{ commande.idcom }}  --></ion-card-title>
          <ion-card-subtitle>Prix: 152€<!-- {{ commande.prix }} --></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <b>Nombres d'articles: </b><!--{{commande.nbarticle}}--><br>
          <ion-button type="submit" color="light" shape="round" fill="outline" href="/uvlight/message">Détails</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  toastController,
} from "@ionic/vue";

export default defineComponent({
  name: "FolderPage2",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      idcom: '1',
      nomcom: 'null',
      prix: 'null',
      idclient: 'null',
      commentaire: 'null',
    };
  },
  methods: {
    log() {
      axios
        .get("http://localhost/uvlightapi2/commande.php?idclient=1")
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

<style scoped>
ion-content {
  --background-color: var(--ion-color-danger, #f1453d);
}
/* .bubble {
  z-index: -1;
  width: 200px;
  height: 200px;
  background: #e9e9e9;
  position: absolute;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  bottom: 0;
} */

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>