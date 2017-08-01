/**
* TODO: 
* - add Genre
* - add description tooltip
*/
<template>
  <v-container fluid>   
    <v-layout row justify-center>     
      <v-flex xs12 md6>
        <v-card>
          <v-card-title>
            <div class="headline">Novels Listing</div>
            <v-btn class="hidden-sm-and-down" icon v-tooltip:right="{ html: 'Add series' }"
              to="addseries"
            >
              <v-icon>library_add</v-icon>
            </v-btn>
          </v-card-title> 
          <v-data-table :items="novelsArr" 
            :pagination.sync = "pagination"
            hide-actions >
            <template slot="headers" scope="props" >
              <tr v-show="false"></tr>
            </template>
            <template slot="items" scope="props">             
              <td style="vertical-align: text-top;">
                <v-layout class="mt-3" row wrap>
                  <v-flex class="text-xs-center" xs12 sm2>
                    <router-link :to="('series/'+props.item.id)"><img :src="props.item.imagelink" height="120px" width="80px"></router-link> 
                  </v-flex>
                  <v-flex xs12 sm10>
                    <v-layout column>
                      <v-flex class="text-xs-center text-sm-left">
                        <router-link  
                          class="title mb-2" 
                          :to="('series/'+props.item.id)" 
                          style="text-decoration: none" >
                          {{props.item.title}}
                        </router-link> 
                      </v-flex>
                      <v-flex class="text-xs-center text-sm-left">
                        <p>by <span class="body-1">{{props.item.author}}</span></p>
                      </v-flex>           
                      <v-flex >
                        <v-chip v-if="props.item.status=='Completed'" class="primary white--text">
                            Completed
                          </v-chip>
                        <v-chip v-else-if="props.item.status=='Stalled'" class="secondary white--text">
                          Stalled
                        </v-chip>
                        <v-chip v-else-if="props.item.status=='Dropped'" class="red white--text">
                          Dropped
                        </v-chip>
                        <v-chip v-else class="green white--text">Ongoing</v-chip>
                      </v-flex>
                      <v-flex>
                        <v-divider></v-divider>
                        <p>Latest Release: </p>
                      </v-flex>             
                    </v-layout>
                  </v-flex>
                </v-layout>
              </td>                       
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="Math.ceil(this.novelsArr.length / pagination.rowsPerPage)"></v-pagination>
          </div>      
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        pagination: {}
      }
    },
    computed: mapGetters({
      novels: 'allNovels',
      novelsArr: 'allNovelsArr'
    })
  }
</script>
