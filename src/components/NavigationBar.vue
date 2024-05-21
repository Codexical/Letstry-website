<template>
    <v-app-bar>
        <v-toolbar-title>Welcome to LetsTry</v-toolbar-title>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    常態課程
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in generalCourse" :key="index" @click="course(item.url, 1)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    暑期課程
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in summerCourse" :key="index" @click="course(item.url, 2)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn color="primary" @click="course('contact')">聯絡我們</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        generalCourse: [
            { title: '課程總覽', url: 'course' },
            { title: 'CBK', url: 'cbk' },
            { title: 'BOOST', url: 'boost' },
            { title: 'SPM', url: 'spm' },
            { title: 'EV3', url: 'ev3' },
            { title: 'VEX', url: 'vex' },
        ],
        summerCourse: [
            { title: '課程總覽', url: 'course' },
            { title: '桌遊動動腦營', url: 'boardGame' },
            { title: 'EV3。機器人創作營', url: 'ev3' },
            { title: 'Minecraft。創世神程式營', url: 'minecraft' },
            { title: 'Boost。動力工程師營', url: 'boost1' },
            { title: 'Boost。簡易工程師營', url: 'boost2' },
            { title: 'Scratch。遊戲創作營', url: 'scratch' },

        ],
    }),
    methods: {
        course(url, type) {
            if (type === 1) {
                console.log("general/" + url);
            } else {
                console.log("summer/" + url);
            }
        },
    }
}
</script>