<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="comfortaa">
          Détail de la commande n°{{ commande.iddocumentclient }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Commande du {{ commande.datedocclient }}
            </ion-card-title>
          <ion-card-subtitle>
            Etat de la commande: {{ commande.libetat }}
            </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Statut: {{ commande.statutclient }}
          <br>Message: {{ commande.commentaireclient }}
          <br><br><br>
          <form @submit.prevent="envoyer()">
            <ion-item><ion-textarea v-model="message" color="light" type="text" placeholder="Message">
            </ion-textarea>
            </ion-item>
            <ion-button expand="block" type="submit" color="light" shape="round" fill="outline">
              Envoyer
            </ion-button>
          </form>
          <ion-button expand="block" :href="'/uvlight/conversation/'+conversation.iddocumentclient" type="submit" color="light" shape="round" fill="outline">
          Détails
          </ion-button>
          <ion-button expand="block" v-on:click="retour" color="light" shape="round" fill="outline">
          Retour
          </ion-button>
          <ion-button expand="block" v-on:click="suppr" color="light" shape="round" fill="outline">
          Supprimer
          </ion-button>
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
  name: "FolderPage3",
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
      conversation:{
        iddocumentclient: null,
      },
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
    this.getConversations();
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
        .catch(() => {
          this.openToast("Une erreur s'est produite!");
        });
    },
    getConversations() {
      axios
        .get(
          "http://localhost/uvlightapi2/conversation.php?id=" + this.$route.params.id
        )
        .then((response) => {
          if (response.status == 200) {
            this.conversation = response.data[0];
          }
        })
        .catch(() => {
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
        .catch(() => {
          this.openToast("Une erreur s'est produite!");
        });
    },
    suppr() {
      axios
        .get(
          "http://localhost/uvlightapi2/delete.php?id=" +
            this.commande.iddocumentclient
        )
        .then((response) => {
          if (response.status == 200) {
            this.openToast("commande supprimée!");
            this.$router.go(-1);
          }
        })
        .catch(() => {
          this.openToast("La commande ne peut être supprimée!");
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
