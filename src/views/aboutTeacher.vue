<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <h1 class="display-2 font-weight-bold mb-4">教學師資</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-dialog max-width="1000" transition="fade-transition" v-for="(teacher, index) in teacherList"
                :key="index">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-col v-bind="activatorProps" cols="12" sm="4">
                        <v-card class="d-flex flex-column pa-4 mx-auto" hover max-width="344">
                            <v-img :src="teacher.img" height="200px"></v-img>
                            <h3 class="mx-auto font-weight-bold mb-1">{{ teacher.name }}</h3>
                            <p class="mx-auto text-caption grey--text">{{ teacher.major }}</p>
                        </v-card>
                    </v-col>
                </template>
                <template v-slot:default>
                    <v-card>
                        <div class="d-flex flex-column-reverse flex-sm-row mx-auto">
                            <div>
                                <v-card-title class="text-h5">
                                    {{ teacher.name }}
                                </v-card-title>
                                <v-card-subtitle class="text-h6 grey--text">
                                    {{ teacher.major }}
                                </v-card-subtitle>
                            </div>
                            <v-avatar class="ma-3" rounded="0" size="300">
                                <v-img src=""></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </template>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import teacher from '../assets/teacher.json'
export default {
    data() {
        return {
            teacherList: []
        }
    },
    created() {
        this.loadTeacherList();
    },
    methods: {
        loadTeacherList() {
            var temp = teacher["teacher"];
            for (var i = 0; i < temp.length; i++) {
                this.teacherList.push({
                    name: temp[i].name,
                    major: temp[i].major,
                    experience: temp[i].experience,
                    feature: temp[i].feature,
                    philosophy: temp[i].philosophy,
                    expertise: temp[i].expertise,
                    img: require(`../assets/${temp[i].img}`)
                });
            }
        }
    }
}
</script>