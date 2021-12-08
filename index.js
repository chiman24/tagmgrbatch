const axios = require('axios');



module.exports = {
    fn: async function () {
        res = await axios.get(`https://us-central1-litterati-tag-manager.cloudfunctions.net/getTag?tag=coke`);
        

        if (res.data.length) {
        //let setCategoryId = res.data[0].categories[0] ? `,"categoryId" = (select id from tag t2 where t2."text" = '${res.data[0].categories[0]}')` : '';
        
            if (res.data[0]) {
                console.log(res.data[0]);
            }
        }
    }()
}
