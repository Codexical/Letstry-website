<template>
    <div class="bg-grey-lighten-3 d-flex justify-center flex-wrap pt-3 pb-3">
        <div class="pa-2 ma-2">
            <v-btn color="indigo-darken-3" @click="facebook()">Facebook: 樂創機器人</v-btn>
        </div>
        <div class="pa-2 ma-2">
            <v-btn color="indigo-darken-3" @click="tel()">連絡電話: (07)7219590</v-btn>
        </div>
    </div>
    <div class="bg-grey-darken-2 text-center">
        <span>Copyright © 2024 Letstry.Robot. All rights reserved.</span>
    </div>
</template>

<script>
export default {
    methods: {
        facebook() {
            window.open('https://www.facebook.com/Letstry.Robot/', '_blank');
        },
        tel() {
            window.open('tel:07-7219590', '_blank');
        }
    }
}
</script>
