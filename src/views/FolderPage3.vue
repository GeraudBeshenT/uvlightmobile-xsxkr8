<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="comfortaa"
          >Détail de la commande{{ commande.iddocumentclient }}</ion-title
        >
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title
            >Commande du {{ commande.datedocclient }}</ion-card-title
          >
          <ion-card-subtitle
            >Etat de la commande: {{ commande.libetat }}</ion-card-subtitle
          >
        </ion-card-header>
        <ion-card-content>
          Statut: {{ commande.statutclient }} <br />Message:
          {{ commande.commentaireclient }}
          <br />
          <form @submit.prevent="envoyer()">
            <ion-item>
              <ion-label color="light" class="comfortaa">Message</ion-label>
              <ion-textarea
                v-model="message"
                color="light"
                type="text"
                placeholder="Message"
              ></ion-textarea>
            </ion-item>
            <ion-button type="submit" color="light" shape="round" fill="outline"
              >Envoyer</ion-button
            >
          </form>
          <ion-button
            v-on:click="retour"
            color="light"
            shape="round"
            fill="outline"
            >Retour</ion-button
          >
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  toastController,
} from "@ionic/vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTextarea,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      commande: {
        iddocumentclient: null,
        datedocclient: null,
        commentaireclient: null,
        statutclient: null,
        libetat: null,
      },
      nomclient: null,
      message: null,
    };
  },
  mounted: function () {
    this.getDetail();
  },
  methods: {
    getDetail() {
      axios
        .get(
          "http://localhost/uvlightapi2/detail.php?id=" + this.$route.params.id
        )
        .then((response) => {
          if (response.status == 200) {
            this.commande = response.data[0];
          }
        })
        .catch((error) => {
          this.openToast("Une erreur s'est produite!");
        });
    },
    envoyer() {
      axios
        .get(
          "http://localhost/uvlightapi2/message.php?message=" +
            this.message +
            "&id=" +
            this.commande.iddocumentclient
        )
        .then((response) => {
          if (response.status == 200) {
            this.openToast("Message envoyé!");
            this.message = null;
          }
        })
        .catch((error) => {
          this.openToast("Une erreur s'est produite!");
        });
    },
    async openToast(text: string) {
      const toast = await toastController.create({
        message: text,
        duration: 5000,
      });
      return toast.present();
    },
    retour(){
      this.$router.go(-1);
    }
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
