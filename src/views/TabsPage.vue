<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <!-- <ion-tab-button tab="commandes" :href="'/uvlight/commandes/'+id"> -->
        <ion-tab-button tab="commandes" :href="'/uvlight/commandes'">
          <ion-icon :icon="cart" />
          <ion-label>Commandes</ion-label>
        </ion-tab-button>
          
        <!-- <ion-tab-button tab="messages" :href="'/uvlight/messages/'+id"> -->
        <ion-tab-button tab="messages" :href="'/uvlight/login'">
          <ion-icon :icon="bag" />
          <ion-label>Déconnection</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="messages" :href="'/uvlight/bts/'+id">
        <ion-tab-button tab="bts" :href="'/uvlight/bts'">
          <ion-icon :icon="bag" />
          <ion-label>BTS</ion-label>
        </ion-tab-button> -->
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cart, bag, person } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      cart, 
      bag, 
      person,
    }
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
});
</script>
