<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="comfortaa">Commande du <!-- {{commande.datecommande}} --></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Commande n°<!-- {{ commande.idcom }}  --></ion-card-title>
          <ion-card-subtitle></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>Nombre d'articles: 5<!-- {{ commande.nbarticle }} -->
        <br>Prix: 125€<!-- {{ commande.prix }} -->
          <br>
          <ion-item>
            <ion-label color="light" position="floating" class="comfortaa">Message</ion-label>
            <ion-input v-model="nomclient" color="light" type="text" placeholder="Message" class="comfortaa"></ion-input>
          </ion-item>
          <ion-button href="uvlight/commandes/1" type="submit" color="light" shape="round" fill="outline">Retour aux commandes</ion-button>
          <ion-button type="submit" color="light" shape="round" fill="outline">Envoyer votre message</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  }});
</script>
