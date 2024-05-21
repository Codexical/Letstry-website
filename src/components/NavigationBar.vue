<template>
    <v-app-bar>
        <v-toolbar-title>Hi!</v-toolbar-title>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    常態課程
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" @click="course(item.url)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: '課程介紹', url: 'courseIntro' },
            { title: 'CBK', url: 'CBK' },
            { title: 'BOOST', url: 'BOOST' },
            { title: 'SPM', url: 'SPM' },
            { title: 'EV3', url: 'EV3' },
            { title: 'VEX', url: 'VEX' },
        ],
    }),
    methods: {
        course(url) {
            console.log(url);
        },
    }
}
</script>