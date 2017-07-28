<template>
  <v-container>   
    <v-card>     
      <v-card-title primary-title>
        <div>
          <h3 class="display-1 mb-0">{{seriesId}}</h3>
        </div>              
      </v-card-title>   
      <v-data-table :headers="headers" :items="seriesArr" 
        hide-actions >
        <template slot="items" scope="props">
          <td><router-link :to="(props.item.link)">{{props.item.title}}</router-link> </td>
          <td>{{props.item.release}} </td>
          <td>{{props.item.status}} </td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Title',
            align: 'left',
            sortable: false,
            value: 'title'
          },
          {
            text: 'Release',
            align: 'left',
            sortable: false,
            value: 'release'
          },
          {
            text: 'Status',
            align: 'left',
            sortable: false,
            value: 'status'
          }
        ],
        seriesId: this.$route.params.id
      }
    },
    computed: {
      seriesIdc: 'tmp'
    },
    methods: {
      clickSerie (serieName) {
        console.log(serieName)
      }
    },
    created () {
      this.$store.dispatch('getAllSeries')
    }
  }
</script>
