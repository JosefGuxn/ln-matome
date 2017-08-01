<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex xs12 md6>
        <v-card>
          <v-card-title class="primary" primary-title>
            <div class="white--text display-1 mb-1">
              Add Series
            </div>              
          </v-card-title>
          <v-card-text class="title mt-2">                    
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field v-model="id" label="Id" readonly></v-text-field>
                </v-flex> 
                <v-flex xs12>
                  <v-text-field v-model="imagelink" label="Image link"></v-text-field>
                </v-flex>  
                <v-flex xs12>
                  <v-text-field v-model="title" label="Series Name" 
                  :rules="[rules.required]"></v-text-field>
                </v-flex>  
                <v-flex xs12>
                  <v-text-field v-model="author" label="Author" :rules="[rules.required]" rows="3" hint="One entry per line" multi-line persistent-hint>
                  </v-text-field>
                </v-flex>  
                <v-flex xs12>
                  <v-text-field v-model="artist" label="Artist"
                  rows="3" hint="One entry per line" multi-line persistent-hint></v-text-field>
                </v-flex>  
                <v-flex xs12>
                  <v-text-field v-model="description" label="Description" :rules="[rules.required]" multi-line rows="6">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="associatedNames" label="Associated Names" rows="3" hint="One entry per line" multi-line persistent-hint></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-layout row>
                    <v-flex xs4>
                      <v-text-field v-model="year" label="Year"></v-text-field>
                        </v-flex>
                    <v-flex xs4>
                      <v-select :items="languagesList" v-model="language" label="Language" :rules="[rules.required]"></v-select>
                    </v-flex>
                    <v-flex xs4>
                      <v-select :items="statusList" v-model="status" label="Status" :rules="[rules.required]"></v-select>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="genre" label="Genre"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-btn primary large block @click.native.stop="Submit" 
                  v-show="title!=='' && author!=='' && description!=='' && language!=='' && status!==''">
                  Submit
                  </v-btn>
                </v-flex>             
              </v-layout>             
            </v-container>
          </v-card-text>         
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog width="600" v-model="dialog" persistent>                
        <v-card>
          <v-card-title class="headline">New series has been successfully added.</v-card-title>         
          <v-card-actions>                  
            <v-btn success block to="/novels">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>  
</template>

<script>
  import _ from 'underscore'

  export default {
    data () {
      return {
        imagelink: '',
        title: '',
        author: '',
        artist: null,
        description: '',
        associatedNames: null,
        year: null,
        language: '',
        languagesList: [
          'Japanese',
          'Chinese',
          'Korean'
        ],
        status: '',
        statusList: [
          'Ongoing',
          'Completed',
          'Dropped',
          'Stalled'
        ],
        genre: '',
        dialog: false,
        rules: {
          required: (value) => !!value || 'Required.'
        }
      }
    },
    computed: {
      rand () {
        return _.random(100, 999).toString()
      },
      id () {
        return this.rand + '-' + this.title.toLowerCase().replace(/[^0-9a-z]/gi, ' ').split(' ').join('-')
      }
    },
    methods: {
      Submit () {
        this.imagelink = this.imagelink === '' ? 'http://www.novelupdates.com/img/noimagefound.jpg' : this.imagelink
        var newSeries = {
          id: this.id,
          imagelink: this.imagelink,
          title: this.title,
          author: this.author,
          artist: this.artist || 'N/A',
          associatedNames: this.associatedNames || 'N/A',
          description: this.description,
          year: this.year || 'N/A',
          language: this.language,
          status: this.status,
          release: [],
          lastupdate: {},
          rating: []
        }
        this.$store.dispatch('addSeries', newSeries)
        this.dialog = true
      }
    }
  }
</script>
