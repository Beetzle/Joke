const config = {
   // her laver du linket til mlap
    mongoDB: 'mongodb+srv://Matt:opolopo0808@cluster0-pnc4z.mongodb.net/test?retryWrites=true',
    PORT: process.env.PORT || 8080
    //register : {name: "angiv et navn" , adresse: "Her indsætter du adrssen til din heruko", secret: " indsæt kode"}
};

module.exports = config;