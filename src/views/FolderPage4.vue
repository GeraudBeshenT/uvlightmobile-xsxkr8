<template>
  <ion-page>
    <ion-header :translucent="true">
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card v-for="conversation in conversations" :key="conversation.iddocumentclient">
        <ion-card-header>
          <ion-card-title>{{ conversation.typemessage }}<br>{{ conversation.libmessage }}<br>{{ conversation.datemessage }}</ion-card-title>
        </ion-card-header>
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
  toastController,
} from "@ionic/vue";

export default defineComponent({
  name: "FolderPage4",
  components: {
    IonContent,
    IonHeader,
    IonPage,
  },
  data() {
    return {
      conversations: null,
    };
  },
  mounted: function(){
    this.getMessages();
  },
  methods: {
    getMessages() {
      axios
        .get("http://localhost/uvlightapi2/conversation.php?id=" + this.$route.params.id)
        .then((response) => {
          if (response.status == 200) {
            this.conversations = response.data;
          }
        })
        .catch(() => {
          this.openToast();
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
  --background-color: var(--ion-color-danger, #fff);
}
ion-card-title {
  --color: #000;
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
  color: #000000;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>