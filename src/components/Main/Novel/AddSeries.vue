<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="title mb-0">Add Series</h3>
            </div>              
          </v-card-title>
          <v-card-text>          
            <v-divider/> 
            <h2 class="subheading mb-0">All series will be verified before it gets added to the website. Please do a simple search to see if the novel already exists in our database before you submit your submission. 
            </h2>
            <v-divider></v-divider>
            <v-container fluid>
              <v-layout row>
                <v-text-field v-model="id" label="Id" readonly></v-text-field>               
              </v-layout>
              <v-layout row>
                <v-text-field v-model="imagelink" label="Image link"></v-text-field>               
              </v-layout>
              <v-layout row>
                <v-text-field v-model="title" label="Series Name" :rules="[rules.required]">

                </v-text-field>
              </v-layout>
              <v-layout row>
                <v-text-field v-model="author" label="Author" :rules="[rules.required]">

                </v-text-field>
              </v-layout>
              <v-layout row>
                <v-text-field v-model="artist" label="Artist"></v-text-field>
              </v-layout>
              <v-layout row>
                <v-text-field v-model="description" label="Description" :rules="[rules.required]" multi-line>

                </v-text-field>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-text-field v-model="year" label="Year"></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-select :items="languagesList" v-model="language" label="Language"></v-select>
                </v-flex>
                <v-flex xs4>
                  <v-select :items="statusList" v-model="status" label="Status"></v-select>
                </v-flex>
              </v-layout>           
              <v-layout row>
                <v-text-field v-model="genre" label="Genre"></v-text-field>
              </v-layout>
              <v-layout row>               
                <v-btn primary large block @click.native.stop="Submit" :disabled="title==='' || author==='' || description===''">
                  Submit
                </v-btn>
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
        artist: '',
        description: '',
        year: '',
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
        return this.rand + '-' + this.title.toLowerCase().replace(/ /g, '-')
      }
    },
    methods: {
      Submit () {
        this.imagelink = this.imagelink === '' ? '' : this.imagelink
        var newSeries = {
          id: this.id,
          imagelink: this.imagelink,
          title: this.title,
          author: this.author,
          artist: this.artist,
          description: this.description,
          year: this.year,
          language: this.language,
          status: this.status,
          release: 0,
          lastupdate: {}
        }
        this.$store.dispatch('addSeries', newSeries)
        this.dialog = true
      }
    }
  }
</script>
