var mongoose = require('mongoose'),
     Schema = mongoose.Schema; 
     
     var MemberSchema = new Schema({        
        name: String ,
        instrument: String, }); 
     
     
     var typesAlbum = 'CD VINYL K7 MP3'.split(' ');  
     
     var AlbumSchema = new Schema({       
        serial_id: String,       
         
        type: { type: String, enum:typesAlbum },
               title: String,       
               release_date: Date,
               price: Number,       
               cover: String,    }); 
               
    var BandSchema = new Schema({     
        name:     String,     
        city:     String,     
        abstract: String,     
        contact:  String,     
        weblink:  String,     
        facebook: String,     
        
        style:   [String], members:  [MemberSchema], // composition
          
         
        last_news:String,
           albums:   [AlbumSchema],      // composition
           announce: String,     
           cover: String,     
           video: String }); 
           
           
    mongoose.model('Band', BandSchema);