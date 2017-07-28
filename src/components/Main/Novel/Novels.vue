<template>
  <v-container>   
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="display-1 mb-0">Novels Listing</h3>
        </div>       
        <v-btn icon v-tooltip:right="{ html: 'Add series' }"
          to="addseries"
        >
            <v-icon>library_add</v-icon>
        </v-btn>
      </v-card-title>   
      <v-data-table :headers="headers" :items="novelsArr" 
        hide-actions >
        <template slot="headers" scope="props">
          <tr>
            <th v-for="header in props.headers" :key="header.text" class="headline mb-0">
              {{header.text}}
            </th>
          </tr>
        </template>
        <template slot="items" scope="props">
          <td class="text-xs-left subheading mb-0">
            <router-link :to="('series/'+props.item.id)">{{props.item.title}}</router-link> 
          </td>
          <td class="text-xs-center subheading mb-0">{{props.item.release}} </td>
          <td class="text-xs-center subheading mb-0">{{props.item.status}} </td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

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
        ]
      }
    },
    computed: mapGetters({
      novels: 'allNovels',
      novelsArr: 'allNovelsArr'
    }),
    created () {
      this.$store.dispatch('loadNovels')
    }
  }
</script>
