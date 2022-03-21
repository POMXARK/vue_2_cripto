<template>

<trading-vue :data="dc"></trading-vue>

</template>
<script>

import { DataCube } from 'trading-vue-js'
import TradingVue from 'trading-vue-js'
import axios from 'axios';
export default {
    name: 'app',
    components: { TradingVue },
    data() {
       this.clear_info()
        return {
          arr: [],
          js_srt: null,
          dc: new DataCube(this.js_srt),
            ohlcv: [
                [ 1551128400000, 33,  37.1, 14,  14,  196 ],
                [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
                [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
                [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
                [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
            ],
            
            
        }
    },
       methods: 
    {
      test(){
        this._test = 
        { "chart": { "data": [ [ 1501632000000, 226, 229.49, 215, 216 ], [ 1501718400000, 216, 230, 215, 223.74 ], [ 1501804800000, 223.74, 230.3, 220, 220.1 ], [ 1501891200000, 220.1, 259.5, 219.21, 254 ], [ 1501977600000, 254, 273.16, 250.2, 265 ], [ 1502064000000, 265, 274.91, 256.59, 272 ], [ 1502150400000, 272, 299.99, 266, 296 ], [ 1502236800000, 296, 316.22, 276.21, 295.1 ], [ 1502323200000, 295.1, 310, 288, 296.1 ], [ 1502409600000, 296.1, 310, 295, 310 ], [ 1502496000000, 310, 320.16, 303, 309.55 ], [ 1502582400000, 309.55, 309.55, 286.07, 295 ], [ 1502668800000, 295, 309, 293.71, 300 ], [ 1502755200000, 300, 300.99, 270.17, 287.01 ], [ 1502841600000, 287.01, 304, 278.01, 301.5 ], [ 1502928000000, 301.5, 311.85, 295, 298.01 ], [ 1503014400000, 295.6, 307.5, 281.7, 290.01 ], [ 1503100800000, 290.01, 299, 274.1, 292.31 ], [ 1503187200000, 292.31, 299.2, 287, 299.2 ] ] } }
        return this._test
      },

      clear_info() 
      {
        this.arr = []
         this.test = axios.get('http://127.0.0.1:8000/api/ethereum/?date_start=2017-08-02&date_end=2017-08-20')
          
         .then(response => { this.info = 
         [response.data.data]
         this.info = this.info[0]
         this.info.forEach( elememt => this.arr.push([parseInt(elememt['Timestamp'])*1000,elememt['Open'],elememt['High'],elememt['Low'],elememt['Close']]))
        return this.js_srt = {chart : {data: this.arr}}
        })
        
      },
    },
}

</script>