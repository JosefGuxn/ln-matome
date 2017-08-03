<template>
  <v-app light>
    <v-toolbar class="hidden-xs-only" fixed>     
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >       
        <v-btn light flat v-for="item in items" :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left medium>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-bottom-nav class="teal hidden-sm-and-up" fixed value="true">
      <v-btn dark flat v-for="item in items" :key="item.title"
          router
          :to="item.link"
        >
          <span>{{item.title}}</span>
          <v-icon>{{item.icon}}</v-icon>         
        </v-btn>
    </v-bottom-nav>
    <v-footer class="mt-5" v-show="true">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        mini: true,
        items: [
          { icon: 'import_contacts', title: 'Novels', link: '/novels' },
          { icon: 'search', title: 'Finder', link: '/finder' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'input', title: 'Sign in', link: '/signin' }
        ],
        title: 'Ln-matome'
      }
    },
    created () {
      this.$store.dispatch('loadNovels')
    }
  }
</script>

