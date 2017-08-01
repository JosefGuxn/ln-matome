<template>
  <v-container fluid>   
    <v-layout row justify-center>
      <v-flex xs12 md9>
        <v-card class="grey lighten-4 elevation-3">     
          <v-layout row wrap>
            <v-flex xs12 sm3>
              <v-card-media class="ma-2 elevation-1" :src="seriesInfo.imagelink" height="300px" contain>
              </v-card-media>
            </v-flex>
            <v-flex xs12 sm9>
              <v-layout class="text-xs-center text-sm-left" column>
                <v-flex class="hidden-xs-only">
                  <v-chip v-if="seriesInfo.status=='Completed'" class="primary white--text">
                    Completed
                  </v-chip>
                  <v-chip v-else-if="seriesInfo.status=='Stalled'" class="secondary white--text">
                    Stalled
                  </v-chip>
                  <v-chip v-else-if="seriesInfo.status=='Dropped'" class="red white--text">
                    Dropped
                  </v-chip>
                  <v-chip v-else class="green white--text">Ongoing</v-chip>
                  <v-chip outline class="green ml-0 grey--text text--darken-4"
                    v-tooltip:right="{ html: 'Last Update' }"
                  >
                    <v-icon class="green--text text--darken-4" left medium>date_range</v-icon>
                    {{lastUpdateDate}}
                  </v-chip>
                </v-flex>
                <v-flex>
                  <div class="display-1 ma-2 primary--text">
                    {{seriesInfo.title}}
                  </div>
                </v-flex>
                <v-flex class="hidden-xs-only">
                  <div class="subheading ml-3 pr-4" style="text-align: justify;text-justify: auto;">             
                    {{seriesInfo.description}}
                  </div>  
                </v-flex>
                <v-flex class="hidden-sm-and-up mb-2">
                  <v-layout justify-center>
                    <v-flex xs11>
                      <v-expansion-panel class="elevation-0">
                        <v-expansion-panel-content>
                          <div class="title" slot="header">Description</div>
                          <div class="subheading ml-3 pt-2 pr-4" style="text-align: justify;text-justify: auto;">             
                            {{seriesInfo.description}}
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>            
          </v-layout>        
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3" row justify-center>
      <v-flex xs12 md9>
        <v-card>
          <v-layout row wrap>           
            <v-flex class="hidden-xs-only" xs3>
              <v-layout class="text-sm-left ma-3" row wrap>
                <v-flex xs12>
                  <div class="title">
                    Author(s)
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.author}}
                  </div>
                </v-flex>
                <v-flex class="mt-4" xs12>
                  <div class="title">
                    Artist(s)
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.artist}}
                  </div>
                </v-flex> 
                <v-flex class="mt-4" xs12>
                  <div class="title">
                    Language
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.language}}
                  </div>                 
                </v-flex>  
                <v-flex class="mt-4" xs12>
                  <div class="title">
                    Year
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.year}}
                  </div>                 
                </v-flex>     
                <v-flex class="mt-4" xs12>
                  <div class="title">
                    Associated Names
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.associatedNames}}
                  </div>                 
                </v-flex>     
                <v-flex class="mt-4" xs12>
                  <div class="title">
                    Rating
                  </div>
                  <div class="subheading mt-2 ml-3">
                    {{seriesInfo.year}}
                  </div>                 
                </v-flex>                             
              </v-layout>
            </v-flex>
            <v-flex class="hidden-sm-and-up mt-2" xs12>     
              <v-layout justify-center>
                <v-flex xs11>     
                  <v-expansion-panel class="grey lighten-4 elevation-0">
                    <v-expansion-panel-content>
                      <div class="title" slot="header">Details</div>
                      <v-layout class="text-xs-center pt-3" row wrap>
                        <v-flex xs12>
                          <div class="title">
                            Author(s)
                          </div>
                          <div class="subheading mt-2">
                            {{seriesInfo.author}}
                          </div>
                        </v-flex>
                        <v-flex class="mt-3" xs12>
                          <div class="title">
                            Artist(s)
                          </div>
                          <div class="subheading mt-2 ml-3">
                            {{seriesInfo.artist}}
                          </div>
                        </v-flex> 
                        <v-flex class="mt-3" xs12>
                          <div class="title">
                            Language
                          </div>
                          <div class="subheading mt-2">
                            {{seriesInfo.language}}
                          </div>                 
                        </v-flex>  
                        <v-flex class="mt-3" xs12>
                          <div class="title">
                            Year
                          </div>
                          <div class="subheading mt-2">
                            {{seriesInfo.year}}
                          </div>                 
                        </v-flex>     
                        <v-flex class="mt-3" xs12>
                          <div class="title">
                            Associated Names
                          </div>
                          <div class="subheading mt-2">
                            {{seriesInfo.associatedNames}}
                          </div>                 
                        </v-flex>     
                        <v-flex class="mt-3" xs12>
                          <div class="title">
                            Rating
                          </div>
                          <div class="subheading mt-2">
                            {{seriesInfo.year}}
                          </div>                 
                        </v-flex>                             
                      </v-layout>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>                 
            </v-flex>
            <v-flex>              
              <v-layout row wrap>
                <v-flex class="mb-3 pl-3 pr-3" xs12>
                  <v-btn flat block outline
                  :to="seriesId+'/addrelease'">
                    <v-icon left medium>
                      add
                    </v-icon>
                    Add Chapter
                  </v-btn>
                </v-flex>
                <v-flex xs12 v-for="i in 5" :key="i" :class="{'grey lighten-4':i % 2 === 1, 'mr-2 ml-2':true}">
                  <router-link to="/reader/tmp" replace>
                    <div>Chapter {{i}} Đôi khi đến cả một hiệp sĩ gan dạ cũng có lúc dễ thương vô cùng</div>
                  </router-link>                  
                </v-flex>
              </v-layout>
            </v-flex>       
          </v-layout>        
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import _ from 'underscore'
  import moment from 'moment'

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Release',
            align: 'left',
            sortable: false,
            value: 'release'
          }
        ],
        seriesId: this.$route.params.seriesId
      }
    },
    computed: {
      seriesInfo () {
        return this.$store.getters.getSeriesInfo(this.seriesId)
      },
      lastUpdateDate () {
        var d = new Date(0)
        d.setUTCSeconds(0, this.seriesInfo.lastupdate)
        return moment(d).format('DD/MM/YYYY H:mm:ss')
      }
    },
    created () {
      // this.$store.dispatch('loadChapters')
    }
  }
</script>
